function evaluate(num1, operator, num2){
    if (operator === '/') {
        return num1 / num2;
    }

    if (operator === '*') {
        return num1 * num2;
    }

    if (operator === '+') {
        return num1 + num2;
    }

    if (operator === '-') {
        return num1 - num2;
    }
}