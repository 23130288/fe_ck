import { useState } from "react";
import AddPaymentMethod, {type PaymentMethodDraft} from "../AddPaymentMethod.tsx";

export type PaymentMethodItem = {
    id: number;
    brand: string;
    name: string;
    detail: string;
    expires?: string;
    address?: string;
    zipCode?: string;
    citizenId?: string;
    defaultMethod?: boolean;
};
export default function PaymentMethod() {
    const [showAddPaymentMethod, setShowAddPaymentMethod] = useState(false);
    const [methods, setMethods] = useState<PaymentMethodItem[]>([
        {
            id: 1,
            brand: "VISA",
            name: "Thẻ Visa",
            detail: "•••• •••• •••• 4242",
            expires: "12/2028",
            defaultMethod: true
        },
        {
            id: 2,
            brand: "MoMo",
            name: "Ví MoMo",
            detail: "0902 ••• ••42"
        }
    ]);

    const addMethod = (draft: PaymentMethodDraft) => {
        setMethods(current => [
            ...current,
            {
                id: Date.now(),
                ...draft
            }
        ]);
        setShowAddPaymentMethod(false);
    };

    const removeMethod = (id: number) => {
        setMethods(current => current.filter(method => method.id !== id));
    };

    const setDefault = (id: number) => {
        setMethods(current => current.map(method => ({
            ...method,
            defaultMethod: method.id === id
        })));
    };

    return (
        <div className="payment-page">
            <div className="sub_header payment-header">
                <div>
                    <h2>Phương thức thanh toán của bạn</h2>
                </div>
                <button type="button" className="payment-add-button" onClick={() => setShowAddPaymentMethod(true)}>
                    <i className="fa-solid fa-plus"></i>
                    Thêm phương thức
                </button>
            </div>

            {showAddPaymentMethod && (
                <AddPaymentMethod
                    onClose={() => setShowAddPaymentMethod(false)}
                    onAdd={addMethod}
                />
            )}

            <div className="payment-list">
                {methods.length === 0 ? (
                    <p className="payment-empty">Bạn chưa lưu phương thức thanh toán nào.</p>
                ) : methods.map(method => (
                    <article className="payment-item" key={method.id}>
                        <div className={`payment-brand ${method.brand === "MoMo" ? "momo" : ""}`}>
                            {method.brand}
                        </div>
                        <div className="payment-details">
                            <div className="payment-name">
                                <h3>{method.name}</h3>
                                {method.defaultMethod && <span>Mặc định</span>}
                            </div>
                            <p>{method.detail}</p>
                            {method.expires && <small>Hết hạn: {method.expires}</small>}
                            {method.address && <small>Địa chỉ đăng kí thẻ: {method.address}</small>}
                            {method.zipCode && <small>Mã ZIP: {method.zipCode}</small>}
                            {method.citizenId && <small>Số CCCD: {method.citizenId}</small>}
                        </div>
                        <div className="payment-actions">
                            {!method.defaultMethod && (
                                <button type="button" onClick={() => setDefault(method.id)}>Đặt làm mặc định</button>
                            )}
                            <button type="button" className="payment-remove" onClick={() => removeMethod(method.id)}>
                                Xóa
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}