let currentOperation = '';
let currentValue = '';

function appendToDisplay(value) {
    currentValue += value;
    document.getElementById('display').value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    currentOperation = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    const [operand1, operator, operand2] = parseInput(currentValue);

    if (!operand1 || !operator || !operand2) {
        document.getElementById('display').value = 'Error';
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            result = parseFloat(operand2) !== 0 ? parseFloat(operand1) / parseFloat(operand2) : 'Error';
            break;
        default:
            result = 'Error';
    }

    currentValue = result.toString();
    document.getElementById('display').value = currentValue;
}

function parseInput(input) {
    const operators = ['+', '-', '*', '/'];
    for (let operator of operators) {
        const parts = input.split(operator);
        if (parts.length === 2) {
            return [parts[0], operator, parts[1]];
        }
    }
    return [null, null, null];
}
