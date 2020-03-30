let Calculator = {
    result: 0,

    add(num = 0) {
            if ((typeof num === 'number') && !(isNaN(num))) {
                Calculator.result += num;
            }
            return Calculator.add;
    },
    subtract(num = 0) {
        if ((typeof num === 'number') && !(isNaN(num))) {
            Calculator.result -= num;
        }
        return Calculator.subtract;
    },
    divide(num = 1) {
        if ((num !== 0) && (typeof num === 'number') && !(isNaN(num))) {
            Calculator.result /= num;
        }
        return Calculator.divide;
    },
    multiply(num = 1) {
        if ((typeof num === 'number') && !(isNaN(num))) {
            Calculator.result *= num;
        }
        return Calculator.multiply;
    },

    getResult() {
        return Calculator.result;
    },
    reset() {
        Calculator.result = 0;
        return Calculator.result;
    }
};

module.exports = Calculator;