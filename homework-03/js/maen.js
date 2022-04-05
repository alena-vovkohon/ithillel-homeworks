let numberOne;
let operatorMath;
let numberTwo;
let summa;


numberOne = prompt('Введіть перше число.');
if (numberOne === null || numberOne === '' || isNaN(Number(numberOne))) {
    alert('Значення не задано або не є числом.')
} else { 
    operatorMath = prompt('Введіть математичний оператор "+", "-", "*", "/".');
    if (operatorMath === '+' || operatorMath === '-' || operatorMath === '*' || operatorMath === '/') {
        numberTwo = prompt('Введіть друге число.');
        if (numberTwo === null || numberTwo === '' || isNaN(Number(numberTwo))) {
            alert('Значення не задано або не є числом.')
        } else {
            if (operatorMath === "+" ) {
               summa = Number(numberOne) + Number(numberTwo);
                alert(`Ваше значення ${summa}.`)
            } else if (operatorMath === "-"){
                summa = Number(numberOne) - Number(numberTwo);
                alert(`Ваше значення ${summa}.`)
            } else if (operatorMath === "*"){
                summa = Number(numberOne) * Number(numberTwo);
                alert(`Ваше значення ${summa}.`)
            } else if (operatorMath === "/"){
                summa = Number(numberOne) / Number(numberTwo);
                alert(`Ваше значення ${summa}.`)
            }  
        }
    } else {
        alert('Такої операції не існує')
    }
}

