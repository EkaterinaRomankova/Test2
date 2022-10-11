// создать свой шифр 
// let str = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';
// let str1 = '';
// for(i = 0; i < str.length; i+=3){
//    console.log(str[i]);
//    str1 += str[i];
//     }
//     console.log(str1);
// for(i = 0; i < str.length; i++){
//     if(str[i] != 'b' && str[i + 1] != 'r'){
//         str1 += str[i]
//     }else{
//         i++
//     }  
// }
// console.log(str1)

//console.log(str.replace(/br/g, ''))

//есть ли вообще массив(пришел ли он)
// function code(arr){
//     return arr == null ? -1 : arr.length;
// }
// let arr = [];
// console.log(code(arr));




// let numbers = [1, 2, 3, 4]
// function squareSum(numbers){
//     let sum = 0;
//     for(let i = 1; i < numbers.lenght; i++){
//       sum += numbers[1] ** 2
//     }
//   return sum
//   }

// let arr = [];
// for(i = 0; i <= 20; i++){
//     if(i % 5 != 0){
//         arr.push[i];
//     }
// }
// console.log(arr);

// let arr = [];
// for(i = 0; i <= 20; i++){
//     if(i % 5 != 0){
//         arr.push(i);
//     }
// }
// console.log(arr);


// Задача с интервью*
// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
// let arr = ['(', ')', '(', ')', '('];
// let sum1 = 0;
// let sum2 = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == '(' && arr[++i] == ")"){
//         sum1++
//         console.log(sum1 +' все скобки закрыты')
//     }else{
//         console.log(sum1 + 1 + ' скобки не закрыты')
//     }
// }


// let arr = ['(', ')', '(', ')', '(', ')'];
// let sum1 = 0;
// let sum2 = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == '('){
//         sum1++
//     }else{
//         sum2++
//     }
// }
// if(sum1 === sum2){
//     console.log('все скобки закрыты')
// }
// else{
//     console.log('скобки не закрыты')
// }


// let coffe = 'mocco, latte, cappuchino';
// let size = 'small, medium, big';
// let price = 5; 
// let rec = '1. Put water. 2. '

//вывести четные числа

// for(i = 2; i <= 10; i+= 2){
//     console.log(i)
// }
    

// let d = [];
// for(i = 2; i <= 10; i++){
//     if(i % 2 == 0){
//         d.push(i)
//     }
// }
// console.log(d)

// let f = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// let b = [];
// for(let i = 1; i <= f.length; i++){
//     if(f[i] % 2 == 0){
//         b.push(i)
//     }
// }
// console.log(b)


// next:
// for(let i = 2; i <= 20; i++){
//     for(j = 2; j < i; j++){
//         if(i % j == 0) continue next;
//     }console.log(i)
// }


 //найти простое число(делится на 1 и на самого себя)
// for(i = 2; i <= 19; i++){
//     let num = true;
//     for(let k = 2; k < i; k++){
//         if(i % k == 0){
//             num = false;
//         }
//     }
// if(num == true){
//     console.log(i);
// }
// }

// тернарный оператор
// let num = 3;
// console.log(num == 3 ? 'Yes' : 'No')

// сложить первый элемент массива с первым элементом второго и тд
// let s = [1, 2, 4, 6, 9];
// let m = [3, -9, 5, 18, 57];
// let d = [];
// for(let i = 0; i < s.length; i++){
// d.push(s[i] + m[i])
// }
// console.log(d)

// for(let i = 0; i < s.length; i++){
//     d += s[i] + m[i]
// }
// console.log(d)

// let s = [1, 2, 4, 6, 9, 87, 99 , 44];
// let m = [3, -9, 5, 18, 57];
// let sum = 0;
// for(i = 0; i < s.length + m.length; i++){
//     if(i < s.length){
//         sum += s[i]
//     }else{
//         sum += m[i - s.length];
//     }
// }
// console.log(sum)
// for(let i = 0; i < s.length; i++){
//     sum += s[i];
// }
// for(i = 0; i < m.length; i++){
//     sum += m[i];
// }
// console.log(sum);

















