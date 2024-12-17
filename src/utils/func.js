// Takes rgb has a string
export function rgbToHex(rgb) {
    const regex = /rgb\((\d+).\s*(\d+),\s*(\d+)\)/;
    const match = rgb.match(regex);
    const arr = [];

    if (match) {
        arr.push(parseInt(match[1]));
        arr.push(parseInt(match[2]));
        arr.push(parseInt(match[3]));

        //console.log(`red: ${arr[0]}; green: ${arr[1]}; blue: ${arr[2]}`);
    } else {
        throw new Error('Error converting string');
    }
    console.log(arr);

    arr.forEach((n, index, array) => {
        const hex = n.toString(16);
        array[index] =  hex.length == 1 ? '0' + hex : hex;
    })

    console.log(arr);
    
    return `#${arr[0]}${arr[1]}${arr[2]}`
}

export function rgbValues(str) {
    const regex = /rgb\((\d+).\s*(\d+),\s*(\d+)\)/;
    const match = str.match(regex);

    if (match) {
        const red = match[1];
        const green = match[2];
        const blue = match[3];

        return `Red: ${red} Green: ${green} Blue: ${blue}`;
    } else {
        throw new Error('Invalid RGB');
    }
}
