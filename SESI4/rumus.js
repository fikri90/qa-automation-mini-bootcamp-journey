export function perhitungan (digit1, digit2, tanda) {
    switch(tanda) {
        case "+":
            return digit1 + digit2;
        case "-":
            return digit1 - digit2;
        case "/":
            if(digit2 === 0) throw new Error("Can not devided with 0!!!");
            return digit1 / digit2;

        case "*":
            return digit1 * digit2;
        default:
            throw new Error("Operator not valid! Please try again...")
    }

}