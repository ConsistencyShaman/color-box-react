import { BoxColor } from "./BoxColor";
import { Input } from "./Input";
import { Emoji } from "./Emoji";

export function Content({
    colorName, rgbValue, hexValue, hexColor,
    handleChange, popupList, handleSelectedColor, active,
    rainbowOn, handleRainbow
}) {
    return (
        <>
            <BoxColor
                colorName={colorName}
                rgbValue={rgbValue}
                hexValue={hexValue}
                hexColor={hexColor}
            />
            <Input
                colorName={colorName}
                handleChange={handleChange}
                popupList={popupList}
                handleSelectedColor={handleSelectedColor}
                active={active}
            />

            <Emoji 
                rainbowOn={rainbowOn} 
                handleRainbow={handleRainbow} 
            />
        </>
    )
}