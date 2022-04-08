// Сделать достаточно простую штуку, у нас есть бесконечный цикл, он будет на каждую итерацию добавлять к произовльной переменной 1. 
// И мы выводим её alertом.И у нас на каждую итерацию спрашиваем ввод от пользователя.Если он введет слово break цикл останавливается,
// если continue слово, то тогда мы увеличиваем на единицу как и должны, но alert не должен быть.


    // let starter = Number(prompt('Введіть число.'))

    // while (true) {
    //     if (starter === null || starter === '' || isNaN(starter)) {
    //         alert('Значення не задано або не є числом.')
    //         break;
    //     } 
    
    //     let ask = prompt('Break or Continue');

    //     if (ask === null || ask === '') {
    //         starter += 1;
    //         alert(starter);
    //     }  else if (ask.toLowerCase() === 'break') {
    //         break;
    //     } else if (ask.toLowerCase() === 'continue') {
    //         starter += 1;
    //         continue;
    //     } else {
    //         starter += 1;
    //         alert (starter);
    //     }
    // }


function number(starter) {
    while (true) {
        if (starter === null || starter === '' || isNaN(starter)) {
              alert('Значення не задано або не є числом.')
            break;
        } 
        let ask = prompt('Break or Continue');

        if (ask === null || ask === '') {
            starter += 1;
            alert(starter)
        }  else if (ask.toLowerCase() === 'break') {
            break;
        } else if (ask.toLowerCase() === 'continue') {
            starter += 1;
            continue;
        } else {
            starter += 1;
            alert (starter);
        }
    }
}

number(Number(prompt('Введіть число.')));