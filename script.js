// alert('hello');
var num = [1,2,3,4];
var value = 5;
var index = 0;

// function pushNumber(num, value) {
// 	for(let i = num.length; i > 0; i--)
// 		num[i] = num[i-1]
// 	num[0] = value;
// }

// pushNumber(num, value);
// console.log(num);


// function popNum(num){
// 	const val = num[0];
// 	for(let i = 0; i < num.lenght; i++)
// 		num[i] = num[i + 1];
// 		num.lenght = num.lenght -1;
// 	return val;
// }

// popNum(num);
// console.log(num);

// function insertNum(num, index, value){
// 	for(let i = num.length; i > index; i++){
// 		num[i] = num[i-1];
// 	num[index] = value;
// 	}
// }

// insertNum(num, 0, value);

// function removeAt(num, idx) {
// 	toRemove = num[idx];
// 	for(let i = idx; i < num.length-1; i++) {
//         num[i] = num[i+1];
//     }
//     num.length = num.length-1;
//     return toRemove;
// }

// removeAt(num, index);

// function swapPairs(num) {
// 	for(let i = 0; i < num.length - 1; i = i + 2) {
// 		let temp = num[i];
// 		num[i] = num[i + 1];
// 		num[i + 1] = temp;
// 	}
// }

// function removeDupesUnnested(num) {
// 	let newArr = [];
// 	for(let i = 0; i < num.length; i++) {
// 		if(num[i] !== num[i+1]) 
// 			newArr.push(num[i])
// 	}
// 	return newArr;
// }