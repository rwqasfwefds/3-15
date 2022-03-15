// let wait = (inputStr, callback) => {
//     // 비동기 프로그래밍 부분
//     // 콜백을 이용한 부분
//     setTimeout(() => {
//         console.log(inputStr);
//         callback();
//     }, 1000);
// };

// // wait 함수 호출
// // 1초후에 실행되는 콜백함수들
// // 콜백 지옥으로 프로그래밍 됨
// wait('A', () => {
//     wait('B', () => {
//         wait('C', () => {
//             return;
//         });
//     });
// });


// promise 바꾸기
// 함수 표현식으로 wait2라는 함수를 정의
// resolve, reject 최소 둘 중 하나는 무조건 호출 해야 됨
let wait2 = inputStr => {
    return new Promise((resolve, reject) => {
        // 비동기 부분 정의
        // 1초 지연 실행
        setTimeout(() => {
            console.log(inputStr);
            // 성공표시 : resolve();
            resolve();
        }, 1000)
    });
}

// promise로 만든 wait2() 함수를 호출
wait2('A')
.then(() => wait2('B'))
.then(() => wait2('C'));