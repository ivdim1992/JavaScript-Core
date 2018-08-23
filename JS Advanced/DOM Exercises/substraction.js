function subtract() {
    let number1 = document.getElementById('firstNumber').value;
    let number2 = document.getElementById('secondNumber').value;

    document.getElementById('result').textContent = Number(number1) - Number(number2)
}