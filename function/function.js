'use strict'
// //1)Полная функция принимает аргументы и возвращает значение.
// function doSomeThing(number) {
//
//     return  42 + number
// }
// console.log(doSomeThing(42))
// //
// // //2)Функция принимает аргументы и не возвращает значение.
// function  doSomeThings2(number){
//
//     console.log(number + 42)
// }
// doSomeThings2(42)
//3)Функция не принимает аргументы но возвращает значение.
// function  doSomeThings3(){
//     const number = 42
//     return number + 42
// }
// console.log(doSomeThings3())
// // // 4) Функция не принимает аргументы не возвращает значение.
// function  doSomeThings4(){
//     const number = 42
//     console.log(number + 42)
// }
// doSomeThings4()
//=================================================================================
// Функция
//function declaration
// function testFunction(){
//     const x = 5
//     const y = 10
//     console.log(x + y)
// }
// function hello(){
//     console.log('Hello')
//     testFunction()
// }
//
// function testFunction2(){
//     function t3(){
//         console.log('t3 function')
//     }
//     t3()
//     console.log('test function 2')
// }
// testFunction2()
// hello()
// //t3() ошибка /error
//
// function unixTime(){
//     let time = Math.floor(new Date().getTime())
//     console.log(time)
// }
// unixTime()
// unixTime()
//
//
// function randomInt(){
//     const min = 0
//     const max = 200
//     let rand = Math.floor(min + Math.random() *(max + 1 - min))
//     console.log(rand)
// }
// randomInt()
// randomInt()
//
//
// // console.log(randomInt)
// let min = 300
// let max = 350
// function rand(){
//     let rand = Math.floor(min + Math.random() *(max + 1 - min))
//     console.log(rand)
// }
// rand()
// min = 5
// max = 15
// rand()

// function count(){
//     let c = 9
//     c++
//     console.log(c)
// }
// count()
//=================================================================================
// function f1(a, b, c){
//
// }
//
// function sum(){
//     const x = 5
//     const y = 6
//     console.log(x + y)
// }
//
// sum()
//
// let x = 55
// let y = 66
// function sum2(){
//     console.log(x + y)
// }
// sum2();
//
// x = 100
// y = 200
//
// sum2()
//
// //Аргументы
// //Формальные аргументы
// function sum3(x1 = 100, y1 = 100){
//     console.log(x1 + y1)
//     console.log(arguments)
// }
//
// sum3(44, 11)
// sum3 (100, 200)
// let z = 77
// sum3(z, 10)
// sum3(z, z * 2)
// sum3(2,3, 4, 5)
// sum3(6)
// sum3()
//=========================================================================
// function showSumAll(...args){
//     console.log(args)
//     let sum =  args.reduce((accum, item) => accum + item)
//     console.log(sum)
// }
// showSumAll(4, 5, 6, 20, 25)
//
//
// //Функция как аргумент
//
// function showAll(num, draw){
//     draw(num)
//
// }
// showAll(46, showSumAll)
//=========================================================================
// Return и возвращаемые значение
let sum = 0
function f1(x, y){
   let sum = x + y
    console.log(x + y)
    return sum
}
f1(4, 5)
f1(4, 45)
console.log(sum)

function f2(){
    console.log(2)
    return 5 //return оператор
}
f2()
console.log(5 + f2())
console.log(11 + 3 + 5 +f1(4, 5))

//Возврашает случайное целое число в каком-то диапозоне
// function randInt(min, max){
//     let rand = min + Math.random() * (max + 1 - min)
//     return Math.floor(rand)
// }
//
// let r = randInt(222, 333)
// console.log(r)
// console.log(randInt(222, 333)+ 100)
//=======================================================
// function sayHello(firstname, lastname) {
//     return `Hello ${firstname} ${lastname}`
//     console.log(firstname, lastname)
//     console.log('Hello World')
// }
//
// let res =  sayHello('Avtandil', 'Tursunbekov')
// let res2 =  sayHello('Avtandil', 'Tursunbekov') + '!'
// console.log(res2)
//=======================================================
// function showMessage(from, text) { //аргументы from и text
//     alert(from + ': ' + text)
// }
// showMessage('Аня', 'Привет!') // Аня: Привет!
// showMessage('Аня', 'Как дела?') // Аня: Как дела?
//=======================================================
// const objectA = {
//         a: 10,
//         b: true
// }
// const copyOfA = objectA
// copyOfA.a = 20
// copyOfA.b = false
// copyOfA.c = 'Chynara'
//
// console.log(copyOfA)


// function a() {
//     console.log('Hello')
// }
// a()
//
// a = 10
//
// a()

// const a = () => {
//     console.log('Hello')
// }
// a()
//
// a = 10
//
// a()
// Добавление новый чвойств через точечную запись
// const myCity = {
//     city: 'Bishkek'
// }
// myCity.popular = true
//
// console.log(myCity)
//
// myCity.country = 'Kyrgyzstan'
//
// console.log(myCity)

//Оператор удаление delete свойств в объекте, используется точечная запись
// const myCity = {
//     city: 'Bishkek',
//     popular: true,
//     country: 'Kyrgyzstan'
// }
// delete myCity.country
//
// console.log(myCity)

//Доступ к значение свойства с использованием скобок []
// const myCity = {
//     City: 'Bishkek'
// }
// myCity['Popular'] = true
// console.log(myCity)
//
// const countryPropertyName = 'Country'
//
// myCity[countryPropertyName] = 'Kyrgyzstan'
//
// console.log(myCity)

//Вложенные свойства
// const myCity = {
//     city: 'Bishkek',
//     info: { //Вложенный объект
//         isPopular: true,
//         country: 'Kyrgyzstan'
//     }
// }
// console.log(myCity.info.isPopular) // точечная запись
//
// delete myCity.info['isPopular'] // Скобочная запись
// console.log(myCity)

//Использования переменных при формировании объектов, сокращеный формат записи

// const name = 'Avtandil'
// const postsQty = 24
//
// const userProfile = {
//     name,
//     postsQty,
//     hasSignedAgreement: false
// }
// console.log(userProfile)

// Методы - свойства объекта, которые содержат функции, cityGreeting это метод объекта myCity
// const myCity = {
//     city: 'Bishkek', //city свойста его знаение не явлется функций
//     cityGreeting: function (){
//         console.log('Greetings!!')
//     }
// }
// myCity.cityGreeting()

// Мутация объекта на который ссылается переменная person
// const person = {
//     name: 'Avtan',
//     age: 24
// }
// person.age = 25
// person.isAdult = true
//
// console.log(person.age)
// console.log(person.isAdult)

//Мутирование копий ,
// const person = {
//     name: 'Avtan',
//     age: 24
// }
// const person2 = person // копирование ссылки person
//
// person2.age = 26 //Мутация объекта на который ссылается person2
// person2.isAdult = true
//
// console.log(person.age) //Мутация также отразилась на оргинальную переменную person
// console.log(person.isAdult)

//Как избежать мутаций вариант номер 1
// const person = {
//     name: 'Avtan',
//     age: 24
// }
// const person2 = Object.assign({}, person)
//
// person2.age = 25
//
// console.log(person.age)
// console.log(person2.age)

//Как избежать мутаций вариант номер 2
// const person = {
//     name: 'Avtan',
//     age: 24
// }
// const person2 = {... person} //... 3 точки Оператор разделение объекта на свойства
//
// person2.name = 'Chynara'
//
// console.log(person.name)
// console.log(person2.name)

//Как избежать мутаций вариант номер 3
// const person = {
//     name: 'Avtan',
//     age: 24
// }
// const person2 = JSON.parse(JSON.stringify(person)) //stringify - конвертация в строке / parse - конвертация в объект
//
// person2.name = 'Chynara'
//
// console.log(person.name)
// console.log(person2.name)

//Функции
//Не оптимальный блок кода
// let a = 5
// let b = 3
// let c
//
// c = a + b
//
// console.log(c) //8
//
// a = 8
// b = 12
//
// c = a + b
// console.log(c)//20
//Функции оптимизация
// let a = 5
// let b = 3
//  function sum(a, b) {
//      const c = a + b
//      console.log(c)
//  }
//
//  sum(a, b)
//
// a = 8
// b = 12
//
// sum(a, b)

// function myFn(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// myFn(10, 3)
//
// console.log(myFn(10, 3))
//

// function myFn() {}
// myFn()
// console.log(myFn())

//Создание копии объекта
// const personOne = {
//     name: 'Bob',
//     age: 21
// }
// function increasePersonAge(person) {
//     const updatePeroson = Object.assign({}, person)
//     updatePeroson.age += 1
//     return updatePeroson
// }
// function increasePersonName(person2) {
//    const updatePerson2 = Object.assign({}, person2)
//     updatePerson2.name = 'Body'
//     return updatePerson2
// }
//
// const updatePersonOne2 = increasePersonName(personOne)
// console.log(personOne.name)
// console.log(updatePersonOne2.name)
//
//
//
// const updatePersonOne = increasePersonAge(personOne)
// console.log(personOne.age)
// console.log(updatePersonOne.age)

//Колбэк функции
// function printMyName() {
//     console.log('Avtandil')
// }
// console.log('Start')
// setTimeout(printMyName, 1000)  //setTimeout встроенная функция - это колбэк функция

//Цепочка областей видимости
// const a = 5
//
// function myFn() {
//     function innerFn(){
//         console.log(a)
//     }
//     innerFn()
// }
//
// myFn()

//Жизненый цикл переменных
// let a
// let b
// function myFn(){
//     let b
//     a = true
//     b = 10
//     console.log(b)
//
// }
// myFn()
//
//
// console.log(a)
// console.log(b)

//Строгий режим 'use strict'
//  let a
//
// function myFn() {
//     a = true
//     console.log(a)
// }
//
// myFn()
// console.log(a)

//Операторы их три 1)Арифмитические 2)Сравнение 3) Логические 4)Присваивание
//Текстовые операторы 1) typeof 2)instanceof 3)new 4) delete

//Оператор три точки ...
// const button = {
//     width: 200,
//     text: 'Bye'
// }
//
// const redButton = {
//     ...button,
//     color: 'red'
// }
// console.table(redButton)

//Объедиение объектов с помощью ... три точки
// const buttenInfo = {
//     text: 'Bye'
// }
// const buttonStyle = {
//     color: 'yellow',
//     width: 200,
//     height: 300
// }
// const button = {
//     ...buttenInfo,
//     ...buttonStyle
// }
//
// console.table(button)

//Конкатенация строк  оператор + это опеаротор конкантенация строк
// const hello = 'Hello'
// const world = 'World'
//
// const greeting = hello + ' ' + world
//
// console.log(greeting)

//Шаблонные строки
// const name = 'Меня зовут Автандил и'
// const city = 'Я живу в городе Бишкек!'
//
// const greeting = `${name} ${city}`
//
// console.log(greeting)

//Функциональные выражения

//Объявленная функция  есть имя
// function myFn(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// console.log(myFn(13, 44))

//Функциональное вырожение нет имени , аннонимные

// function(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c // возврат резульатат функции
// }

//Присваивание функционального выражение переменной
// const myFunction = function(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// console.log(myFunction(5, 3));

// Функциональное вырожение в вызове другой функции  использую аннонимную функцию
// setTimeout(function (){
//     console.log('Отложенное сообщение!')
// }, 1000)

// Стрелочные функции  - это выражение , и они аннонимные
// const myFunction = (a, b) => {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// console.log(myFunction(5, 3));

// Значение параметров  функции по умолчанию
// function multByFactor(value, multiplier = 1)  {
//     return value * multiplier
// }
//
// console.log(multByFactor(10, 2));
// console.log(multByFactor(5));

// Значения параметров функции по умолчанию
// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt,
// })
//
// const firstPost = {
//     id: 1,
//     author: 'Avtan'
// }
// console.table(newPost(firstPost));

 //Оброботка ошибок в jS
// const fnWithError = () => {
//     throw new Error('Some error')
// }
// fnWithError()
// console.log('Continue...');

//TRY/CATCH
// const fnWithError = () => {
//     throw new Error('Some error')
// }
// fnWithError()
// console.log('Continue...');

//Пример
// const fnWithError = (number) => {
//     if (typeof number !== 'number'){
//         throw new Error(`number is not number, current type ${typeof number}`)
//     }
//     if (number < 0) {
//         throw new Error(`number less then zero, value is ${number}`)
//     }
//     return number * 2
// }
// try {
//     const calcNum = fnWithError(42)
//     console.log(calcNum)
// } catch (error){
//     if (error.message === 'number less then zero'){
//         console.log(error.message)
//
//     } else {
//         throw error
//     }
// }
// console.log('Continue...');

//Иснтрукции обычно заканчивается с точкой с запятой
// let a; //интрукция
//
// const b = 5; // инструкция
//
// if (a < b) { // if инструкция
//     console.log('a is larger');
// }
//
// for (let i = 0; i++; i < 5){ //for цикл тоже иструкция
//     console.log(i);
// }
//Точку запятой можно опускать в js
//Выражение может быть инструкцией

//Массивы
// const sequence = [{a:42}, [42, [2, 4]], '42', (n) => {return n + 56}, 5, 8, 13, 42]
// // console.log(sequence[sequence.length - 1])
// // for (let i = 0; i < sequence.length; i+= 1) { //i++ можно написать и так
// //     console.log(i,':', sequence[i]);
// // }
// // console.log(sequence[0].a)
// console.log(sequence[1][1][0])
// console.log(sequence[3](5))

// const json = '{\n' +
//     '  "chain": "origin",\n' +
//     '  "bar": {\n' +
//     '    "football": -1645896547.2259247,\n' +
//     '    "farther": true,\n' +
//     '    "invented": [\n' +
//     '      "minerals",\n' +
//     '      1340118161.083167,\n' +
//     '      -966975922,\n' +
//     '      true,\n' +
//     '      1655742312.4916818,\n' +
//     '      false\n' +
//     '    ],\n' +
//     '    "active": -823645629.3794076,\n' +
//     '    "shoot": -1563091902,\n' +
//     '    "silent": false\n' +
//     '  },\n' +
//     '  "wood": 543426588.792731,\n' +
//     '  "heading": -199140767.8299508,\n' +
//     '  "pool": false,\n' +
//     '  "fireplace": "city"\n' +
//     '}'
// function printData(jsonobj){
//     try {
//         const obj = JSON.parse(jsonobj)
//         console.log(obj.bar.football)
//         console.log(obj.bar.farther)
//         console.log(obj.bar.invented[1])
//         console.log(obj.bar.active)
//         console.log(obj.chain)
//         console.log(obj.someObj.isTrue)
//     } catch (e){
//         console.log(e.message)
//     }
// }
// printData(json)






