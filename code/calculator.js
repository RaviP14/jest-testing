function calculator(num1, num2) {
    this.add = () => {
        return num1 + num2;
    }
    this.subtract = () => {
        return num1 - num2;
    }
    this.multiply = () => {
        return num1 * num2;
    }
    this.divide = () => {
        return num1 / num2;
    }
};

export default calculator