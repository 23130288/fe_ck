import { useEffect, useState } from "react";
import "../css/components/AddPaymentMethod.css";

export type PaymentMethodDraft = {
    brand: "VISA" | "MoMo";
    name: string;
    detail: string;
    expires?: string;
    address?: string;
    zipCode?: string;
    citizenId?: string;
};

type AddPaymentMethodProps = {
    onClose: () => void;
    onAdd: (method: PaymentMethodDraft) => void;
};

export default function AddPaymentMethod({ onClose, onAdd }: AddPaymentMethodProps) {
    const [type, setType] = useState<"VISA" | "MoMo">("VISA");
    const [cardNumber, setCardNumber] = useState("");
    const [citizenId, setCitizenId] = useState("");
    const [holderName, setHolderName] = useState("");
    const [expires, setExpires] = useState("");
    const [securityCode, setSecurityCode] = useState("");
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    const submit = (event: React.FormEvent) => {
        event.preventDefault();
        setError("");
        const digits = cardNumber.replace(/\D/g, "");
        const expiryMatch = expires.match(/^(\d{2})\/(\d{4})$/);
        const expiryMonth = expiryMatch ? Number(expiryMatch[1]) : 0;

        if (type === "VISA" && (
            digits.length < 13
            || !holderName.trim()
            || !expiryMatch
            || expiryMonth < 1
            || expiryMonth > 12
            || !/^\d{3}$/.test(securityCode)
            || !address.trim()
            || !zipCode.trim()
        )) {
            setError("Vui lòng nhập đầy đủ số thẻ, tên chủ thẻ, ngày hết hạn, mã CVV, địa chỉ đăng kí thẻ và mã ZIP.");
            return;
        }

        if (type === "MoMo" && (digits.length < 9 || !/^(?:\d{9}|\d{12})$/.test(citizenId))) {
            setError("Vui lòng nhập số điện thoại ví MoMo và số CCCD hợp lệ.");
            return;
        }

        if (type === "MoMo") {
            onAdd({
                brand: "MoMo",
                name: "Ví MoMo",
                detail: digits ? `${digits.slice(0, 4)} ••• ••${digits.slice(-2)}` : "Ví MoMo",
                citizenId
            });
            return;
        }

        onAdd({
            brand: "VISA",
            name: holderName.trim() || "Thẻ Visa",
            detail: digits ? `•••• •••• •••• ${digits.slice(-4).padStart(4, "0")}` : "•••• •••• •••• ••••",
            expires: expires || "Chưa cập nhật",
            address: address.trim(),
            zipCode: zipCode.trim()
        });
    };

    return (
        <div
            className="payment-popup-backdrop"
            onMouseDown={event => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <section
                className="payment-popup"
                role="dialog"
                aria-modal="true"
                aria-labelledby="add-payment-title"
            >
                <button
                    type="button"
                    className="payment-popup-close"
                    onClick={onClose}
                    aria-label="Đóng"
                >
                    &times;
                </button>
                <h2 id="add-payment-title">Thêm phương thức thanh toán</h2>

                <form className="payment-popup-form" onSubmit={submit}>
                    {error && <p className="payment-popup-error" role="alert">{error}</p>}
                    <label htmlFor="payment-brand">Loại phương thức</label>
                    <select
                        id="payment-brand"
                        value={type}
                        onChange={event => setType(event.target.value as "VISA" | "MoMo")}
                    >
                        <option value="VISA">Thẻ tín dụng hoặc thẻ ghi nợ</option>
                        <option value="MoMo">Ví MoMo</option>
                    </select>

                    {type === "VISA" ? (
                        <>
                            <label htmlFor="payment-card-number">Số thẻ</label>
                            <input
                                id="payment-card-number"
                                value={cardNumber}
                                onChange={event => setCardNumber(event.target.value)}
                                placeholder="4848 1234 5678 9000"
                                inputMode="numeric"
                                required
                            />
                            <label htmlFor="payment-holder">Tên chủ thẻ</label>
                            <input
                                id="payment-holder"
                                value={holderName}
                                onChange={event => setHolderName(event.target.value)}
                                placeholder="NGUYEN VAN A"
                                required
                            /> 
                            <label htmlFor="payment-expiry">Ngày hết hạn</label>
                            <input
                                id="payment-expiry"
                                value={expires}
                                onChange={event => setExpires(event.target.value)}
                                placeholder="MM/YYYY"
                                pattern="(0[1-9]|1[0-2])/[0-9]{4}"
                                required
                            />
                            <label htmlFor="payment-security-code">Mã bảo mật (CVV)</label>
                            <input
                                id="payment-security-code"
                                value={securityCode}
                                onChange={event => setSecurityCode(event.target.value.replace(/\D/g, "").slice(0, 3))}
                                placeholder="123"
                                inputMode="numeric"
                                pattern="[0-9]{3}"
                                maxLength={3}
                                required
                            />
                            <label htmlFor="payment-address">Địa chỉ đăng kí thẻ</label>
                            <input
                                id="payment-address"
                                value={address}
                                onChange={event => setAddress(event.target.value)}
                                placeholder="Số nhà, đường, phường/xã"
                                required
                            />
                            <label htmlFor="payment-zip-code">Mã ZIP / mã bưu chính</label>
                            <input
                                id="payment-zip-code"
                                value={zipCode}
                                onChange={event => setZipCode(event.target.value)}
                                placeholder="700000"
                                inputMode="numeric"
                                required
                            />
                        </>
                    ) : (
                        <>
                            <label htmlFor="payment-phone">Số điện thoại ví MoMo</label>
                            <input
                                id="payment-phone"
                                value={cardNumber}
                                onChange={event => setCardNumber(event.target.value)}
                                placeholder="0902 123 456"
                                inputMode="tel"
                                required
                            />
                            <label htmlFor="payment-citizen-id">Số CCCD</label>
                            <input
                                id="payment-citizen-id"
                                value={citizenId}
                                onChange={event => setCitizenId(event.target.value.replace(/\D/g, "").slice(0, 12))}
                                placeholder="012345678901"
                                inputMode="numeric"
                                pattern="[0-9]{9}|[0-9]{12}"
                                minLength={9}
                                maxLength={12}
                                required
                            />
                        </>
                    )}

                    <div className="payment-popup-actions">
                        <button type="button" className="payment-popup-cancel" onClick={onClose}>Hủy</button>
                        <button type="submit" className="payment-popup-save">Lưu phương thức</button>
                    </div>
                </form>
            </section>
        </div>
    );
}