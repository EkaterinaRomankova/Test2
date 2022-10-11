//найти факториал

// function factorial(n){
//     let sum = 1;
//      for(let i = 1; i <= n; i++){
//        sum *= i
//        console.log(sum)
//      }
//      return sum;
//    }
//    factorial(5)


// function dote(str){
//     console.log(str.replace(/[.]/g, '-'));
//     }
//     dote('one.two.tree')

// function dote(str){
//     console.log(str.replace(/e/g, '-'));
//     }
//     dote('one.two.tree')

    // function dote(str){
    //     console.log(str.replace(/[+]/g, '-'));
    //     }
    //     dote('44, 66+, 43, 66+');

    // calculate("1plus2plus3minus4")
    // function calculate(str) {
    //     let b = str.replace(/(plus)/g, '+').replace(/(minus)/g, '-');
    //       console.log(b)
    //     }

    // *
    // **
    // ***
    // ****
    // *****
    // ******

    // for(i = 0; i <= 5; i++){
    //     let str = '';
    //     for(let j = 0; j <= i; j++){
    //         str += '*'
           
    //     }
    //     console.log(str)
    // }

//     *
//     ***
//    *****
//   *******
//  *********
// ***********
// *************
// ***************
// *****************
// *******************

//     let h = 10;
//      for(i = 0; i < h; i++){
//         let str = '';
        
//         for(let j = 0; j <= h - i; j++){
//             str += ' ';
           
//         }
//     for(let st = 0; st < i; st++){
//         str += '*';
//     }
//     str += '*'
//     for(rst = 0; rst < i; rst++){
//         str += '*';
//     }
//     console.log(str)
   // }

//    calculate("1plus2plus3minus4")
//    function calculate(str) {
//     let b = str.replace(/(plus)/g, '+').replace(/(minus)/g, '-');
// let d = 0;
//      let s = b.split('')
//      console.log(s);
//      for(let i = 1; i < s.length; i++){
//        if(s[i] == '+'){
//          d += +s[i - 1]
//          console.log(d)
//        }else if(s[i] == '-'){
//         d -= d - +s[i + 1]
//         console.log(d)
//        }
//      }
//      //console.log(d)
//     }


// 1
// 12
// 123
// 1234
// 12345

// for(let i = 1; i <= 5; i++){
//   let str = '';
//   for(let j = 1; j <= i; j++){
//     str += j
//   }
//   console.log(str)
// }

//           1
//          121
//         12321
//        1234321
//       123454321
//      12345654321
//     1234567654321
//    123456787654321
//   12345678987654321
//  1234567890987654321
//   12345678987654321
//    123456787654321
//     1234567654321
//      12345654321
//       123454321
//        1234321
//         12321
//          121
//           1

// let s = 10;
// for(let i = 1; i <= s; i++){
//   let str = '';
//   str += ' '.repeat(s - i)
//   for(let j = 1; j <= i; j++){
//     str += j
//   }
//   for(let k = i - 1; k >= 1; k--){
//     str += k
//   }
//   console.log(str)
//}
// for(let i = s - 1; i >= 1; i--){
//   let str = '';
//   str += ' '.repeat(s - i)
//   for(let j = 1; j <= i; j++){
//     str += j
//   }
//   for(let k = i - 1; k >= 1; k--){
//     str += k
//   }
//   console.log(str)
// }

//     1
//    121
//   12321
//  1234321
// 123454321

// let s = 5;
// for(let i = 1; i <= s; i++){
//   let str = '';
//   str += ' '.repeat(s - i)
//   for(let j = 1; j <= i; j++){
//     str += j
//   }
//   for(let k = i - 1; k >= 1; k--){
//     str += k
//   }
//   console.log(str)
// }


//     11
//    1212
//   123123
//  12341234
// 1234512345

// let s = 5;
// for(let i = 1; i <= s; i++){
//   let str = '';
//   str += ' '.repeat(s - i)
//   for(let j = 1; j <= i; j++){
//     str += j
//   }
//   for(let k = 1; k <= i; k++){
//     str += k
//   }
//   console.log(str)
// }

//     11
//    1221
//   123321
//  12344321
// 1234554321

// let s = 5;
// for(let i = 1; i <= s; i++){
//   let str = '';
//   str += ' '.repeat(s - i)
//   for(let j = 1; j <= i; j++){
//     str += j
//   }
//   for(let k = i; k >= 1; k--){
//     str += k
//   }
//   console.log(str)
// }



//      1
//     12
//    123
//   1234
//  12345    
   
// let s = 5;
// for(let i = 1; i <= s; i++){
//   let str = '';
//   str += ' '.repeat(s - i)
//   for(let j = 1; j <= i; j++){
//     str += j
//   }
//   console.log(str)
// }

//     *
//    ***
//   *****
//  *******
// *********

//  let r = 5; 
//  let str = '';
//  for(let i = 0; i <= r; i++){
//   for(let j = i; j <= r - 1; j++){
//     str += " ";
//   }
//   for(let k = 0; k < 2 * i + 1; k++){
//     str += '*';
//   }
//   str += '\n'
//  }
//  console.log(str)

// 1
// 2 6
// 3 7 10
// 4 8 11 13
// 5 9 12 14 15

// let r = 5;
// let str = '';
// for(let i = 1; i <= r; i++){
//   let num = i;
//   for(let j = 1; j <= i; j++){
//   str += num + " ";
//   num += r - j;
// }
// str += '\n';
// }
// console.log(str);

// let arr = [1, 6, 7, 8, 10, 'jhj'];
// console.log(arr[arr.length-1]);
// console.log(arr.at(-1));

// 12345
//  1234
//   123
//    12
//     1

// let n = '';
// let space = ' ';
// let x =  5;
// for(let i = 1; i <= x; i++){
//     n += space.repeat(i - 1)
//     for(let j = 1; j <= x + 1 - i; j++){
//         n += j
//     }
//     n += '\n'
// }
// console.log(n);


// 54321
// 4321
// 321
// 21
// 1

// let n = '';
// let space = ' ';
// let x =  5;
// for(let i = 1; i <= x; i++){
//     for(let j = x + 1 - i; j >= 1; j--){
//         n += j
//     }
//     n += '\n'
// }
// console.log(n);













































