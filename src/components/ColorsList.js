export function ColorsList({ popupList, handleSelectedColor }) {
    return (
        <ul className="colorList">
            {popupList.map((color) => (
                <li
                    key={color.id}
                    onClick={() => handleSelectedColor(color)}
                >{color.name}</li>
            ))}
        </ul>
    )
}