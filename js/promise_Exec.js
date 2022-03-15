// 연습문제 #1
// 콜백함수를 프로미스로 고쳐
// let wait = (inputStr, callback) => {
//     setTimeout(() => {
//         console.log(inputStr);
//         callback();
//     }, 1000);
// };
// wait('B', () => {
//     return;
// });

// 답

// let wait = (inputStr) => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             console.log(inputStr);
//             resolve();
//         }, 1000);
//     });
// };

// wait('B')
// .then(() => {
//     return;
// });

// 답(강사님)

// let promise =  new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log('B');
//         resolve();
//     }, 1000);
// });

// promise.then(() => {
//     return;
// });

// 연습문제 #2
// 콜백함수를 프로미스로 고쳐

// let wait = (inputStr, callback) => {
//     setTimeout(() => {
//         console.log(inputStr);
//         callback();
//     }, 1000);
// };
// wait('B', () => {
//     wait('C', () => {
//         return;
//     });
// });

// 답

// let wait = (inputStr) => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             console.log(inputStr);
//             resolve();
//         }, 1000);
//     });
// };

// wait('B')
// .then(() => wait('C'));

// 답안(강사님)

// let promise =  new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log('B');
//         resolve();
//     }, 1000);
// });

// promise.then(() => {
//     console.log('C');
// });

// 연습문제 #3
// 1초후에 실행되는 프로미스가 있음
// then을 실행을 해서 아래처럼 출력하셈
// 출력 : '안녕하세요 주건재 님!'
// 함수 표현식으로 promise를 정의

// let promise = new Promise((resolve, reject) => {
//     // 1초후에 실행
//     setTimeout(() => {
//         let name = prompt('이름 입력하셈');
//         resolve(name);
//     }, 1000)
// });

// 답

// let promise = new Promise((resolve, reject) => {

//     let name = prompt('이름 입력하셈');
//     // 1초후에 실행
//     setTimeout(() => {
//         resolve(name);
//     }, 1000)
// });

// promise
// .then((n) => console.log('안녕하세요 ' + n + '님!!'));

// 연습문제 #4
// 아래 promise 정의가 있음
// 아래를 보고 promise함수를 호출해서 출력하셈

// let promise = new Promise((resolve, reject) => {
//     let n = Number(prompt('10 미만의 숫자를 입력하셈'));
//     // 1초후에 실행되는 부분
//     setTimeout(() => {
//         if(n < 10){
//             resolve(n);
//         } else {
//             reject(`오류 : ${n}는 10이상 숫자입니다.`);
//         };
//     }, 1000);
// });

// 답

// let promise = new Promise((resolve, reject) => {
//     let n = Number(prompt('10 미만의 숫자를 입력하셈'));
//     // 1초후에 실행되는 부분
//     setTimeout(() => {
//         if(n < 10){
//             resolve(n);
//         } else {
//             reject(`오류 : ${n}은/는 10이상 숫자입니다.`);
//         };
//     }, 1000);
// });

// // promise
// // .then(() => {
// //     console.log('10미만의 숫자를 입력하셨습니다.');
// // },(x) => {
// //     console.log(x);
// // });

// // ','없이 쓰는 법
// // then은 성공 했을때 실행, catch는 실패 했을때 실행

// promise
// .then(() => {
//     console.log('10미만의 숫자를 입력하셨습니다.');
// })
// .catch((err) => {
//     console.log(err);
// });

// 연습문제 #5

// 비동기로 동작하는 함수 정의
// function buyAsync(mymoney) {
//     return new Promise((resolve, reject) => {

//         let payment = Number(prompt('지불하고자 하는 금액을 입력하셈'));
//         // 비동기로 동작하는 함수 실행
//         // 1초후에 실행
//         setTimeout(() => {
//             // 잔액 계산
//             let balance = mymoney - payment;
            
//             if(balance > 0){
//                 console.log(`${payment}원을 지불했음`);
//                 resolve(balance);
//             } else {
//                 reject(`살려는건 ${payment}원인데 님 잔액은 ${mymoney}원 임. 님 ㅋ 구매 못 험ㅋ`)
//             }
//         }, 1000);
//     });
// }

// // 함수 호출
// buyAsync(500)
// .then((coin) => {
//     console.log(`잔액은 ${coin}원 남음`);
// })
// .catch((err) => {
//     console.log(err);
// });

// 연습문제 #6
// 한 문자를 입력받아서 1초후에 출력하는 비동기 프로그램을 작성하셈
// 입력 : a
// 출력 : a

// 답

// let promise =  new Promise((resolve, reject) => {
//     let n = prompt('문자를 입력하셈');

//     setTimeout(() => {
//         resolve(n);
//     }, 1000);
// });

// 답(강사님)

// let wait2 = inputStr => {
//     return new Promise((resolve, reject) => {
//         let char1 = prompt('문자를 입력하셈');

//         setTimeout(() => {
//             resolve(char1);
//         }, 1000);
//     });
// };

// wait2().then((char1) => {
//     console.log(char1)
// })

// promise
// .then((x) => {
//     console.log(x);
// });

// 연습문제 #6
// 한 문자를 입력받아서 1초후에 출력하는 비동기 프로그램을 작성하셈
// 입력 : a b
// 출력 : b
//        a

// 답

// let promise = new Promise((resolve, reject) => {
//     let n = prompt('문자를 입력하셈').split(' ');

//     setTimeout(() => {
//         console.log(n[1]);
//         console.log(n[0]);
//         resolve();
//     }, 1000)
// });

// promise
// .then(() => {
//     console.log();
// });

// 답(강시님)

// let wait2 = inputStr => {
//     return new Promise((resolve, reject) => {
//         let arr = prompt('문자를 입력하셈').split(' ');

//         setTimeout(() => {
//             resolve(arr);
//         }, 1000);
//     });
// };

// wait2().then((arr) => {
//     console.log(arr[1]);
//     console.log(arr[0]);
// })