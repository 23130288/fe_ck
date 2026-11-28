import "../css/components/InputRange.css"

interface InputRange {
    label?: string;
    start: number;
    end: number;
    valueUnit: string;
    step?: number;
    isPrice?: boolean;
    value: number;
    onChange: (value: number) => void;
}

export default function InputRange({label, start, end, valueUnit, step, isPrice, value, onChange}: InputRange) {
    let valStep;
    if (step == null)
        valStep = (end - start) / 10;
    else
        valStep = (end - start) / step;
    let displayValue
    if (value != 0)
        displayValue = isPrice ? `${value.toLocaleString("vi-VN")}` : value.toString();
    else
        displayValue = start;
    return (
        <div className="input-range">
            {label && (<span>{label}</span>)}
            <span>{displayValue} {valueUnit}</span>
            <input type="range" min={start} max={end} step={valStep} value={value}
                   onChange={(e) => onChange(Number(e.target.value))}/>
        </div>
    );
}