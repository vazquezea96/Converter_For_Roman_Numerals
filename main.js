class NumeralConverter {
    constructor(number) {
        this.number = number;
        this.result = "";
    }

    processNumeral(symbol, symbolValue) {
        while(this.number >= symbolValue) {
            this.result += symbol;
            this.number -= symbolValue;
        }
    }
}

function convertToRoman(num) {
    let converter = new NumeralConverter(num);
    converter.processNumeral("M", 1000);
    converter.processNumeral("CM", 900);
    converter.processNumeral("D", 500);
    converter.processNumeral("CD", 400);
    converter.processNumeral("C", 100);
    converter.processNumeral("XC", 90);
    converter.processNumeral("L", 50);
    converter.processNumeral("XL", 40);
    converter.processNumeral("X", 10);
    converter.processNumeral("IX", 9);
    converter.processNumeral("V", 5);
    converter.processNumeral("IV", 4);
    converter.processNumeral("I", 1);
    return converter.result;
}

console.log(convertToRoman(1776))




// function convertToRoman(num) {
//     let result = "";
//     while (num >= 1000) {
//         result += "M";
//         num -= 1000;
//     }
//     while (num >= 900) {
//         result += "CM";
//         num -= 900;
//     }
//     while (num >= 500) {
//         result += "D";
//         num -= 500;
//     }
//     while (num >= 400) {
//         result += "CD";
//         num -= 400;
//     }
//     while (num >= 100) {
//         result += "C";
//         num -= 100;
//     }
//     while (num >= 90) {
//         result += "XC";
//         num -= 90;
//     }
//     while (num >= 50) {
//         result += "L";
//         num -= 50;
//     }
//     while (num >= 40) {
//         result += "XL";
//         num -= 40;
//     }
//     while (num >= 10) {
//         result += "X";
//         num -= 10;
//     }
//     while(num >= 9) {
//         result += "IX";
//         num -= 9;
//     }
//     while (num >= 5) {
//         result += "V";
//         num -= 5;
//     }
//     while (num >= 4) {
//         result += "IV";
//         num -= 4;
//     }
//     while (num > 0) {
//         result += "I";
//         num -= 1;
//     }
//     return result;
// }
