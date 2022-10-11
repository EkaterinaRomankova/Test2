//удаляет послед элемент arr.pop()

// let arr = [2, 4, 5, 6, 7, 90];
// let c = arr.pop();
// console.log(arr);
// console.log(c);

//unshift добавляет сначала переменные, shift удалят первое значение
// let arr = [2, 4, 5, 6, 7, 90];
// arr.unshift('777');
// console.log(arr);
// let d = arr.unshift('66');
// console.log(arr);
// console.log(d);
// arr.shift();
// console.log(arr);

//объеденить массивы

// let a = ['uuu', '8899', 'jjj'];
// let b = ['huhu', 'huhu', 9090];
// a.push(...b);
// console.log(a)

// let arr = [1, 4, 6, 7, 90];
// arr.push(89, 'ferfre', null);
// console.log(arr);
// arr.pop();
// console.log(arr);

// let arr = [45, 78, 99, 234, 'fvfg', true, null, 'regreg', 90];
// arr.unshift(67, 2);
// console.log(arr);
// arr.shift();
// console.log(arr);
// console.log(arr.shift());

// let arr = [45, 78, 99, 234, 'fvfg', true, null, 'regreg', 90];
// let arr1 = [4, 6, 7, 8];
// let arr3 = arr.concat(arr1);
// console.log(arr3);

// let arr = [45, 78, 99, 234, 'fvfg', true, null, 'regreg', 90];
// arr.reverse();
// console.log(arr);

// let str = 'Hello world!'
// let arr = str.split('');
// console.log(arr);
// let str1 = arr.join(' ');
// console.log(str1);

// let arr = [45, 78, 99, 234, 'fvfg', true, null, 'regreg', 90];
// let arr1 = arr.slice(2);
// console.log(arr1);

// let arr = [45, 78, 99, 234, 'fvfg', true, null, 'regreg', 90];
// arr.splice(1, 1, 100, 100, 100, 100, 100);
// console.log(arr);


//let arr = [45, 78, 99, 234, 'fvfg', true, null, 'regreg', 90, 45];
//let l = arr.indexOf(99)
// console.log(arr.indexOf(true));
// console.log(arr.indexOf(45));
// console.log(arr.lastIndexOf(45));

// let arr = [45, 78, 99, 234, 'fvfg', true, null, 'regreg', 90, 45];
// console.log(arr.includes(90));
// console.log(arr.includes(23));

// let arr = [45, 78, 99, 234, 'fvfg', true, null, 'regreg', 90, 45];
// console.log(arr.find(el => el % 2 != 0));
// console.log(arr.findIndex(el => el % 2 != 0));

// let arr = [45, 78, 99, 234, 'fvfg', true, null, 'regreg', 90, 45];
// console.log(arr.filter(el => el % 2 != 0));
// console.log(arr.filter(el => typeof el == 'number'));

// let arr = [1, 7, 8, 9, -10];
// console.log(arr.every(el => el > 0));
// let arr1 = [1, 7, 8, 9];
// console.log(arr1.every(el => el > 0));

// let arr = [1, 7, 8, 9, -10];
// console.log(arr.some(el => el > 0));

//let arr = [1, 7, 8, 9, -10];
// arr.forEach(el => console.log(-el));
// arr.forEach((el, i) => i % 2 == 0 ? console.log(-el) : console.log(' '));
//arr.forEach(el => console.log(el ** 3));

//let arr = [77, 99, 66, 44, 23, 90, 67, 89, 34, 78, 7, 8, 9, 3, 5];
// console.log(arr.sort());
// let arr1 = ['fgre', 'wqqwe', 'kgergr', 'tyty'];
// console.log(arr1.sort());
// console.log(arr.sort((a, b) => a - b));
// console.log(arr.sort((a, b) => b - a));

//let arr = ['fgre', 'wqqwe', 'kgergr', 'tyty'];
//console.log(arr.map(el => el.length));
// let arr = [77, 99, 66, 44, 23, 90, 67, 89, 34, 78, 7, 8, 9, 3, 5];
// console.log(arr.map(el => el ** 2));
// console.log(arr.map((el, i, arr) => i == 0 || i ==(arr.length - 1) ? `**${el}**` : el))
// let arr = ['5', '55', '43', '34'];
// console.log(arr.map(el => +el));

//reduce((accumulator, el, index, array) => )
// let arr = [7, 8, 9, 3, 5];
// console.log(arr.reduce((sum, el) => sum + el));


















//codewars
// function calculate(str) {
//     let b = str.replace(/(plus)/g, '+').replace(/(minus)/g, '-');
     
//      let s = b.split('')
//      let d = +s[0];
//      for(let i = 0; i < s.length; i++){ 
//         if(s[i] == '+'){
//            d += +s[i + 1]
//            console.log(d);
//         }else if(s[i] == '-'){
//         d -= +s[i + 1]
//         console.log(d);
//         }
//      }
//     console.log(s)
    
//     }
//     calculate('12plus54plus3minus4');

// let arr = [3, 8, 5];
// console.log(arr.reduce((acc, item) => acc * item));
// console.log(arr.reduce((acc, el, i, arr) => acc + el / arr.length));

// let arr = Array.from('njrngjn'); //только со стрингом
// console.log(arr);

// let arr = Array.from(Array(20).keys());
// console.log(arr);

//создать массив от s до f
// let s = 5;
// let f = 25;
// console.log(Array.from(Array(f - s + 1).fill(s)).map((el, i) => el + i))

// let arr = Array.of(10, 60, 50);
// console.log(arr);
// console.log(Array.isArray(arr));

// console.log(2 === '2');
// console.log(4.0 === 4);
// console.log('1' + 2 == 3);
// console.log("a" === 'a');
// console.log(1 == '1');

// let a = -123;
// let b = 120;
// let c = a + '';
// console.log(c)
// console.log(typeof(c))
// console.log(c.split('').reverse().join(''));

// function res(str){
//     let a = str.padStart(9, 'wood');
//     let b = str.padStart(13, 'wood');
//     let c = str.padStart(3, 'wood');
//     return c;  
// }
// console.log(res('table'))

// const str = 'Hello, my deear freind. You are the best'; 
// //console.log(str.indexOf('e', 70));// -1
// let count = 0;
// let position = str.indexOf('e'); //1
// //console.log(position); //1
// while (position !== -1) {
//   count++;
//   position = str.indexOf('e', position + 1);
// }
// console.log(count);









// function points(games) {
//     let c1 = 0; 
//       for(let i = 0; i < games.length; i++){
//         if(games[i][0] > games[i][2]){
//            c1 += 3
//         }else if(games[i][0] == games[i][2]){
//           c1++
//         }
//       }
//       return c1
//     }
//     points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])






// function squareSum(numbers){
//     let b = numbers.map(el => el ** 2);
//     console.log(b)
//     console.log(b.reduce((sum, el) => sum + el))
//   }
//   squareSum([0, 3, 4, 5])


// function isolateIt(arr){
//     let arr1 = [];
//      arr1.push(arr.map((el, i) => (el[i][0] + el[i][1] + '|')))
//      console.log(arr1)
//    }
//    isolateIt(["abcd","efgh"])

// function mirrorImage(arr){
//     let arr1 = [];
//     for(let i = 0; i < arr.length - 1; i++){
//       if(arr[i].toString().split('').reverse().join('') == arr[i + 1].toString()){
//         console.log(arr[i], arr[i + 1]);
//       }
//     }
//    console.log([-1, -1]);
//   }
//   mirrorImage([454,86,57,75,16,88])

// let b = [1, 2, 5, 6, 7];
// let c = [3, 5, 6, 7, 8];
// console.log(b.concat(...c))

// function min(arr, toReturn) {
//     let c = arr.sort((a, b) => a - b);
//     console.log(c)
//     console.log(toReturn == 'value'? c[0] : c.indexof(c[0]))
//   }
//   min([7, 9, 45, 1, 2, 3, 4, 5], 'value')

// function consecutive(arr) {
//     let c = arr.sort((a, b) => a - b)
//     console.log(c)
//   let arr1 = [];
//     for(let i = c[0]; i <= c[c.length - 1]; i++){
//       arr1.push(i)
//     }
//     console.log(arr1.length - arr.length);
//   }
//   consecutive([4,8,6])

//console.log('Hello world')