// function squareDigits(num){
//     console.log(typeof num)
//    let d = num + '';
//   console.log(typeof d)
//   let f = d.split('').map(el => el ** 2).join('')
//   console.log(f)
//   }
//   squareDigits(3212)

// function findShort(s){
//     let d = s.split(' ');
//     let count = d[0];
//     //console.log(count)
//     for(let i = 0; i < d.length; i++){
//         if(d[i].length < count.length){
//             count = d[i]
            
//         }
//     }
//     console.log(count.length)
//   }

//   findShort("bitcoin take over the world maybe who knows perhaps")

// function findShort(s){
//     let d = s.split(' ').map(el => el.length);
  
//    console.log(Math.min(...d))
//   }

//    findShort("bitcoin take over the world maybe who knows perhaps")

//console.log(Math.min(2, 3, 4))

//найти слова с буквой "с"

// let arr = ['mama', 'papa', 'money', 'hfc', 'gjcyd'];
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         if(arr[i][j] == 'c'){
//             console.log(arr[i])
//         }
//     }
// }

//найти числа в эррэе

// let arr = ['mama', 'papa', 'money', 'hfc', 'gjcyd', 7, 9, 'ghhj', 77];
// function findNumber(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(typeof(arr[i]) == 'number'){
//             console.log(arr[i]);
//     }
// }
// }
// findNumber(arr);

// найти самый длинный элемент

// let arr = ['jrhueh', 'vengitn', 'rjeniouenhuehnr', 'ejjjree', 'fr', 'gegeg', 'fff', 'fwrhui3whrui3hurh3'];

// function findLongest(arr){
//     let long = arr[0].length
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].length > arr[0].length){
//             long = arr[i].length
//         }
//     }
//     return long
// }
// console.log(findLongest(arr))

//функция приветствия

// function privet(name){   
//    return 'Hi, ' + name + ' have a nice day';
// }
// console.log(privet('Kate'));

//калькулятор

// function calcul(a, b, operator){
//     if(operator == '+'){
//         return a + b;
//     }else if(operator == '-'){
//         return a - b;
//     }else if(operator == '*'){
//         return a * b;
//     }else if(operator == '/'){
//         if(b == 0) return 'not delete'
//         return a / b
//     }
// }
// console.log(calcul(90, 7, '-'))

//простое ли число или нет

// function isPrime(num){
//     for(let i = 2; i < num; i++){
//         if(num % i == 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(6));

// function DNAtoRNA(dna) {
//     return dna.replace(/T/g, 'U')
//     }
//     console.log(DNAtoRNA("TTTT"))


// function moveCar(roadDamages) {
//     let arr = [];
//     let arr1 = [];
//     let count = 0;
//     for(let i = 0; i < roadDamages.length; i++){
//         if(roadDamages[i] == false){
//             arr.push(`The car goes to step ${i + 1}`)
//            // console.log(arr)
//         }
//         if(roadDamages[i] == true){
//             arr.push("The car is damaged");
//             arr1.push(roadDamages[i]);
//             if(arr1[1] == true){
//                 arr.push("The car is broken" );
//                 break;
//             } 
//           }      
//     }
//    console.log(arr)
// }
// moveCar([false, false, false, false, true, false, true, false, false, false]);

// function moveCar(roadDamages) {
//         let arr = [];
//         let trues = 0;
//         for(let i = 0; i < roadDamages.length; i++){
//             if(roadDamages[i] == false){
//                 arr.push(`The car goes to step ${i + 1}`)
//             }else if(roadDamages[i] == true && trues == 1){
//                 arr.push("The car is broken");
//                 break;
//               }else{
//                 arr.push("The car is damaged")
//                 trues++
//               }                    
//         }
//        console.log(arr)
//     }
//     moveCar([false, false, false, false, true, false, true, false, false, false]);

// function moveCar(roadDamages) {
//     let arr = [];
//     let count = 0;
//     for(let i = 0; i < roadDamages.length; i++){
//         if(roadDamages[i] == false){
//             arr.push(`The car goes to step ${i + 1}`)
//         }
//         if(roadDamages[i] == true){
//             count++
//         }
//         if(roadDamages[i] == true && count == 2){
//             arr.push("The car is broken" );
//              break;
//         }else if (roadDamages[i] == true){
//             arr.push("The car is damaged");
//         }
//     }
//    console.log(arr)
// }
// moveCar([false, false, false, false, true, false, true, false, false, false]);

// function moveCar(roadDamages) {
//     let arr = [];
//     let count = 0;
//     for(let i = 0; i < roadDamages.length; i++){
//         if(roadDamages[i] == false){
//             arr.push(`The car goes to step ${i + 1}`)
//         }
//         if(roadDamages[i] == true){
//             count++
//         }
//         if(roadDamages[i] == true && count == 2){
//             arr.push("The car is broken" );
//              break;
//         }else if (roadDamages[i] == true){
//             arr.push("The car is damaged");
//         }
//     }
//    console.log(arr)
// }

//     moveCar([false, false, false, false, true, false, true, false, false, false]);