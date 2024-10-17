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
    rightLength = false


    if (input.value.length >= 6 && input.value.length <= 24) {
        rightLength = true
    }
    else {
        rightLength = false
    }

    if (rightLength) {
        lengthVal.textContent = "✅ Length between 6 and 24";
        lengthVal.classList.add("text-success")
    }
    else {
        lengthVal.textContent = "❌ Length between 6 and 24";
        lengthVal.classList.remove("text-success")
    }

});

input.addEventListener('input', () => {

    const inputValue = input.value;
    foundLowerCase = false;


    for (let i = 0; i < inputValue.length; i++) {
        const singleDigit = inputValue[i];

        //usiamo un regex anzichè un isNan e toLowerCase() per un affidabilità maggiore
        if (/[a-z]/.test(singleDigit)) {
            foundLowerCase = true;
            break;
        }
        else {
            foundLowerCase = false;
        }
    }

    if (foundLowerCase) {
        lowerVal.textContent = "✅ Min. 1 lower case";
        lowerVal.classList.add("text-success")
    }
    else {
        lowerVal.textContent = "❌ Min. 1 lower case";
        lowerVal.classList.remove("text-success")
    }

});

input.addEventListener('input', () => {
    const inputValue = input.value;
    isNumber = false

    for (let i = 0; i < inputValue.length; i++) {
        const singleDigit = inputValue[i];

        if (/[0-9]/.test(singleDigit)) {
            isNumber = true;
            break;
        }
    }

    if (isNumber) {
        numVal.textContent = "✅ Min. 1 number";
        numVal.classList.add("text-success")
    }
    else {
        numVal.textContent = "❌ Min. 1 number";
        numVal.classList.remove("text-success")
    }


});

input.addEventListener('input', () => {
    const inputValue = input.value;
    foundSpecialChar = false;

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
        specCharVal.classList.add("text-success")
    } else {
        specCharVal.textContent = "❌ Min. 1 special character (!, @, #, $, %, *, +, <, >)";
        specCharVal.classList.remove("text-success")
    }

});

input.addEventListener('input', () => {

    //  LOGIC
    const validatingConditions = [
        rightLength,
        foundLowerCase,
        isNumber,
        foundSpecialChar
    ];

    let trueValidatingConditions = [];

    for (let i = 0; i < validatingConditions.length; i++) {
        const validatingCondition = validatingConditions[i];

        if (validatingCondition) {  // Se la condizione è true
            trueValidatingConditions.push(true);
        }
    }

    // console.log(trueValidatingConditions);

    //DOM MANIPULATION
    const barDanger = document.getElementById("barDanger");
    const barWarning = document.getElementById("barWarning");
    const barOk = document.getElementById("barOk");
    const barSuccess = document.getElementById("barSuccess");

    switch (trueValidatingConditions.length) {
        case 1:
            barDanger.removeAttribute('hidden');
            barWarning.setAttribute('hidden', '')
            barOk.setAttribute('hidden', '')
            barSuccess.setAttribute('hidden', '')
            break;
        case 2:
            barDanger.setAttribute('hidden', '')
            barWarning.removeAttribute('hidden')
            barOk.setAttribute('hidden', '')
            barSuccess.setAttribute('hidden', '')
            break;
        case 3:
            barDanger.setAttribute('hidden', '')
            barWarning.setAttribute('hidden', '')
            barOk.removeAttribute('hidden')
            barSuccess.setAttribute('hidden', '')
            break;
        case 4:
            barDanger.setAttribute('hidden', '')
            barWarning.setAttribute('hidden', '')
            barOk.setAttribute('hidden', '')
            barSuccess.removeAttribute('hidden')
            break;
        default:
            barDanger.setAttribute('hidden', '')
            barWarning.setAttribute('hidden', '')
            barOk.setAttribute('hidden', '')
            barSuccess.setAttribute('hidden', '' )
            break;  
        };
});
