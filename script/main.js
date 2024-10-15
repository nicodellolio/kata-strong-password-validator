const input = document.getElementById("password");
const lengthVal = document.getElementById("lengthVal");
const lowerVal = document.getElementById("lowerVal")
const numVal = document.getElementById("numVal")
const specCharVal = document.getElementById("specCharVal")

input.addEventListener('input', function lengthCheck(e) {
    if (input.value.length >= 6 && input.value.length <= 24) {
        lengthVal.textContent = "✅ Length between 6 and 24";
    }
    else {
        lengthVal.textContent = "❌ Length between 6 and 24";
    }
});

input.addEventListener('input', function lowerDigitCheck(e) {

    const inputValue = input.value;
    let foundLowerCase = false

    for (let i = 0; i < inputValue.length; i++) {
        const singleDigit = inputValue[i];

        if (isNaN(singleDigit * 1) && singleDigit == singleDigit.toLowerCase()) {

            foundLowerCase = true;
            break;
            
        }
    }
    
    if (foundLowerCase) {
        lowerVal.textContent = "✅ Min. 1 lower case"
    }
    else{
        lowerVal.textContent = "❌ Min. 1 lower case"
    }


});

input.addEventListener('input', function numberCheck(e) {
    const inputValue = input.value;
    let isNumber = false

    for (let i = 0; i < inputValue.length; i++) {
        const singleDigit = inputValue[i];

        if (!isNaN(singleDigit * 1)) {
            isNumber = true
            break
        }
    }

    if (isNumber) {
        numVal.textContent = "✅ Min. 1 number"
    }
    else {
        numVal.textContent = "❌ Min. 1 number"
    }

});

input.addEventListener('input', function specCharCheck() {
    const inputValue = input.value;
    const specCharArray = ["!", "@", "#", "$", "%", "*", "+", "<", ">"];
    let foundSpecialChar = false;

    for (let i = 0; i < inputValue.length; i++) {
        const singleDigit = inputValue[i];

        if (specCharArray.includes(singleDigit)) {
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

