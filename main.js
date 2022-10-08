function convertToRoman(num) {
    let result = "";

    while (num > 0) {
        result += "I";
        num -= 1;
    }
    return result;
}

console.log(convertToRoman(3))