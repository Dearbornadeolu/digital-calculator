//let result;
const firstNum = parseFloat(prompt("Enter a number"))
const operator = prompt("Enter operator (+,-,*, /,)")
const secondNum =parseFloat(prompt("Enter second Number"))
switch (operator) {
    case '+':
      result = firstNum + secondNum
      alert(`${firstNum} +${secondNum} = ${result}`);
        break;
    case '-':
      result = firstNum - secondNum
       alert(`${firstNum} -${second} = ${result}`);
         break;
    case '*':
        result = firstNum * secondNum
        alert(`${firstNum} *${secondNum} = ${result}`);
             break;
    case '/':
        result = firstNum / secondNum
        alert(`${firstNum} /${secondNum} = ${result}`);
            break;
    default:
    alert("Invaliid operator")
        break;
}