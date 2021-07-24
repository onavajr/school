// function recurse() {
//     if(){

//     }else{
//         recurse();
//     }
    
// }

// function countDown(number){
//     console.log(number);
//     let nextNum = number-1;
//     if (nextNum > 0){
//         countDown(nextNum);
//     }
// }

// countDown(10);

// function sumNum(num){
//     if(num == 0){
//         return 0;
        
//     }
//     return num % 10 + sumNum(Math.floor(num/10));
    
// }

// sumNum(10);

//from learning platform
function rSigma(num) {
    if(num > 0) {
        return rSigma(num-1) + num;
    }
    return 0
}

console.log(rSigma(5))

function rFact(num) {
    if(num > 1) {
        return rFact(num-1) * num;
    }
    return 1
}

console.log(rFact(6))