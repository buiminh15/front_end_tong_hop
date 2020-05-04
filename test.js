function calculate(num1, operation, num2) {
    //TODO: make a basic calculator. 
    switch (operation) {
        case '+':
            return  (num1 + num2)
        case '-':
            return res (num1 - num2)
        case '/':
            if (num2 == 0) {
                return  'null'
            }
            return  (num1 / num2)
        case '*':
            return  (num1 * num2)

        default:
            return  'null'
    }

}
console.log(calculate(3.2,"+", 8))