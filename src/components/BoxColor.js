import { rgbToHex } from "../utils/func";

export function BoxColor({ colorName, rgbValue, hexValue }) {
    return (
        <>
            <div className="colorBox" style={{ backgroundColor: colorName }} >
                {!hexValue && <p style={{ color:'black' }} >Color Box!</p>}
                {hexValue && <p>{hexValue}</p>}
            </div>
            <div>
                {!rgbValue && <p>RGB</p>}
                <p>{rgbValue}</p>
            </div>
        </>
    )
}