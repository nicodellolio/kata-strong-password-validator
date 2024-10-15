const input = document.getElementById("password");
const lengthVal = document.getElementById("lengthVal");
const lowerVal = document.getElementById("lowerVal")
const numVal = document.getElementById("numVal")

input.addEventListener('input', function lengthCheck(e) {
    if (input.value.length >= 5 && input.value.length <= 12) {
        lengthVal.textContent = "✅ Length between 5 and 12";
    }
    else {
        lengthVal.textContent = "❌ Length between 5 and 12";
    }
});

input.addEventListener('input', function lowerDigit(e) {

    const inputValue = input.value;
    const inputValueArray = inputValue.split("")
    const digit = e.data

    if (isNaN(digit * 1)) {

        if (digit == digit.toLowerCase()) {
            lowerVal.textContent = "✅ At least one lower case"
        }

        //TENTATIVO DI CICLARE ALL'INTERNO DEL VALUE DELL'INPUT PER CAMBIARE IL VALORE DI isLower IN CASO DI ASSENZA DI LETTERE MAIUSCOLE (DOPO UN BACKSPACE)
        // for (let i = 0; i < inputValueArray.length; i++) {
        //     let singleDigit = inputValueArray[i];

        //     let isLower = false
        //     if (singleDigit == singleDigit.toLowerCase()) {
        //         isLower = true
        //     }

        //     console.log(isLower);
        //     return isLower;
        // }
    }

});

input.addEventListener('input', function lowerDigit(e) {

    const inputValue = input.value;
    const inputValueArray = inputValue.split("")
    const digit = e.data
    console.log(typeof digit);

    if (!isNaN(digit * 1)) {
        numVal.textContent = "✅ At least one number"
    }

});

