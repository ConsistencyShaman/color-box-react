export function BoxColor({ colorName, rgbValue, hexValue, hexColor }) {
    return (
        <>
            <div className="colorBoxBorder">
                <div className="colorBox" style={{ backgroundColor: colorName }} >
                    {!hexValue && <p style={{ color: 'black' }} >Color Box!</p>}
                    {hexValue && <p style={{ color: hexColor }} >{hexValue}</p>}
                </div>
            </div>
            <div>
                {!rgbValue && <p>RGB</p>}
                <p>{rgbValue}</p>
            </div>
        </>
    )
}