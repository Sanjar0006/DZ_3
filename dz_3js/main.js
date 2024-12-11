function findMin(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}




let minNUmber = findMin(10, 50);

console.log(minNUmber);

function getStringLenght(str) {
    return str.length;
}

let strLenght = getStringLenght("Geeks");

console.log(strLenght);




function calculator(num1, num2, operator){
    switch (operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if(num2 === 0){
                return "";
            } else {
                return num1 / num2;
            }
        default:
            return ""
    }
}

let result = calculator(5,2, "*");

console.log(result)

