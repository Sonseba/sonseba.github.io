const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const upperCaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    numbers: getRandomNumber,
    symbols: getRandomSymbol
}

clipboardEl.addEventListener("click", () => {
    const password = resultEl.innerText
    if(password) {
        navigator.clipboard.writeText(password).then();
        alert("Copied to clipboard");
    }
})

generateEl.addEventListener("click", () => {
    const length = Number(lengthEl.value);
    const hasLower = lowercaseEl.checked
    const hasUpper = upperCaseEl.checked
    const hasSymbols = symbolsEl.checked
    const hasNumbers = numbersEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumbers,hasSymbols,length)

})

function generatePassword(lower, upper, numbers, symbols, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + numbers + symbols
    const typesArr = [{lower}, {upper}, {numbers}, {symbols}].filter(item => Object.values(item)[0])

    if(typesCount > 0) {
        for(let i = 0; i < length; i++) {
            const type = typesArr[Math.floor(Math.random() * typesCount)]
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        }
    }
    return generatedPassword
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}