import { BoxColor } from "./BoxColor";
import { Input } from "./Input";
import { Emoji } from "./Emoji";

export function Content({
    colorName, rgbValue, hexValue,
    handleChange, popupList, handleSelectedColor, active
}) {
    return (
        <>
            <BoxColor
                colorName={colorName}
                rgbValue={rgbValue}
                hexValue={hexValue}
            />
            <Input
                colorName={colorName}
                handleChange={handleChange}
                popupList={popupList}
                handleSelectedColor={handleSelectedColor}
                active={active}
            />

            <Emoji />
        </>
    )
}