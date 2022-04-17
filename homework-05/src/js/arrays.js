/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 Это используется для удобного быстрого перебора массива, она ничего не возвращает, просто обрабатывает коллбеком каждый элемент массива,
  фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
console.log('forEach')
const array = [1, 2, 3];

const callbackForEach = function (item, index, array) {
  console.log(item, index);

}

function forEach(array, callback) {
  for (let i = 0; i < array.length; i += 1){
    callback(array[i], i, array)
  }

}
forEach(array, callbackForEach)


/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ НОВЫЙ массив, который получается в результате вычисления callback для каждого элемента.
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/

console.log('MAP')

const callbackMap = function (item, index, array) {
  return item * 4
}

function map(array, callback) {
  let arrNew = []
  for (let i = 0; i < array.length; i += 1) {
    arrNew.push(callback(array[i], i, array))
  }
  return arrNew

}
console.log(map(array, callbackMap))

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ НОВЫЙ массив, который включает в себя элементы только те, для которых callback вернул true.
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/

console.log('filter')

const callbackFilter = function (item, index, array) {
  if (item>1) {
    return true
  }
  return false
}

function filter(array, callback) {
  let arrNew = []
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array) === true) {
      arrNew.push(array[i])
    }
  }
  return arrNew
}

console.log(filter(array, callbackFilter))

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива, 3 аргумент изначальный вариант
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 Это используется для удобного быстрого перебора массива. Функция должна результат.
 Функция возвращает результат вычислений. В callback передаем 4 аргумента.
 Первый это предыдущий элемент(для первой итерации как раз используется initialValue), второй это текущий элемент перебора, 3 индекс и 4 сам массив.
 Смотрите на пример в example.js
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
console.log('reduce')
console.log(array)
const callbackReduce = function (initialValue, item, index, array) {

  return initialValue + item
}

function reduce(array, callback, initialValue) {
  let sum =initialValue
  for (let i = 0; i < array.length; i += 1) {
    sum = callback(sum, array[i], i, array)
  }
  return sum
}
console.log(reduce(array, callbackReduce, 0))

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ true или false. Если хотя бы для одного элемента callback вернет true, то вся функция возвращает true/
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/

console.log('some')

console.log(array)
const callbackSome = function (item, index, array) {
  if (item > 2) {
    return true
  }
  return false
}

function some(array, callback) {

  for (let i = 0; i < array.length; i += 1) {
    // console.log( callback(array[i], i, array))
    if (callback(array[i], i, array) === true) {
      return true
    }
  }

  return false
}
console.log(some(array, callbackSome))


/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ true или false. Если хотя бы для одного элемента callback вернет false, то вся функция возвращает false/
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/

console.log('every')

let callbackEvery = function (item, index, array) {
  if (item > 2) {
    return true
  }
  return false
}

function every(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    // console.log( callback(array[i], i, array))
    if (callback(array[i], i, array) === false) {
      return false
    }
  }

  return true
}
console.log(every(array, callbackEvery))

// Эту часть не удаляем, она важна для проверки результата
module.exports = {
  forEach,
  map,
  filter,
  reduce,
  some,
  every,
};
