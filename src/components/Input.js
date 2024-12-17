import { ColorsList } from "./ColorsList"

export function Input({ colorName, handleChange, 
    popupList, handleSelectedColor, active // ColorsList props
 }) {
    return (
        <form className='colorForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="colorName"></label>
            <input
                id='colorName'
                type='text'
                role='searchbox'
                placeholder="Write your color"
                value={colorName}
                onChange={(e) => handleChange(e)}
            />

            {active && popupList.length > 0 && (
                <ColorsList
                    popupList={popupList}
                    handleSelectedColor={handleSelectedColor}
                />
            )}

        </form>
    )
}