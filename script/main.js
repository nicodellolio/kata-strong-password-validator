const input = document.getElementById("password");
const lengthVal = document.getElementById("lengthVal");
const lowerVal = document.getElementById("lowerVal")
const numVal = document.getElementById("numVal")
const specCharVal = document.getElementById("specCharVal")

let rightLength = false
let foundLowerCase = false;
let isNumber = false;
let foundSpecialChar = false;

input.addEventListener('input', function lengthCheck(e) {

    if (input.value.length >= 6 && input.value.length <= 24) {
        rightLength = true
    }
    else {
        rightLength = false
    }

    if (rightLength) {
        lengthVal.textContent = "✅ Length between 6 and 24";
    }
    else {
        lengthVal.textContent = "❌ Length between 6 and 24";
    }

});

input.addEventListener('input', () => {

    const inputValue = input.value;

    for (let i = 0; i < inputValue.length; i++) {
        const singleDigit = inputValue[i];

        //usiamo un regex anzichè un isNan e toLowerCase() per un affidabilità maggiore
        if (/[a-z]/.test(singleDigit)) {
            foundLowerCase = true;
            break;

        }
    }

    if (foundLowerCase) {
        lowerVal.textContent = "✅ Min. 1 lower case";
    }
    else {
        lowerVal.textContent = "❌ Min. 1 lower case";
    }

});

input.addEventListener('input', () => {
    const inputValue = input.value;

    for (let i = 0; i < inputValue.length; i++) {
        const singleDigit = inputValue[i];

        if (/[0-9]/.test(singleDigit)) {
            isNumber = true;
            break;
        }
    }

    if (isNumber) {
        numVal.textContent = "✅ Min. 1 number";
    }
    else {
        numVal.textContent = "❌ Min. 1 number";
    }

});

input.addEventListener('input', () => {
    const inputValue = input.value;
    // const specCharArray = ["!", "@", "#", "$", "%", "*", "+", "<", ">"];

    for (let i = 0; i < inputValue.length; i++) {
        const singleDigit = inputValue[i];

        if (/[!@#$%*+<>]/.test(singleDigit)) {
            foundSpecialChar = true;
            break
        }
    }

    if (foundSpecialChar) {
        specCharVal.textContent = "✅ Min. 1 special character";
    } else {
        specCharVal.textContent = "❌ Min. 1 special character (!, @, #, $, %, *, +, <, >)";
    }

});

input.addEventListener('input', () => {
    const validatingConditions = [
        rightLength,
        foundLowerCase,
        isNumber,
        foundSpecialChar
    ];

    let trueValidatingConditions = []

    trueValidatingConditions.length = 0


    for (let i = 0; i < validatingConditions.length; i++) {
        const validatingCondition = validatingConditions[i];

        if (validatingCondition == true) {
            trueValidatingConditions.length++
        }
    }
    console.log(trueValidatingConditions.length);
});

