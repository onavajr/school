var num = [1,2,3,4];
// var value = 5;
// var index = 0;


// function reverse(num) {
//     for(var i=0; i<num.length/2; i++) {
//         var temp = num[i];
//         num[i] = num[num.length-1-i];
//         num[num.length-1-i] = temp;
//     }
// }

// reverse(num);
// console.log(num);

// function rotate(num, shiftBy) {
// 	let t = Math.abs(shiftBy);
// 	while(t > 0) {

// 		if(shiftBy > 0) {
// 			let temp = num[num.length-1]
			
// 			for(let i = num.length - 1; i > 0; i--)
// 				num[i] = num[i-1];
// 			num[0] = temp;

// 		} else {
// 			let temp = num[0];
// 			for(let i = 0; i < num.length - 1; i++) {
// 				num[i] = num[i + 1];
// 			}
// 			num[num.length-1] = temp;
// 		}
// 		t--;
// 	}
// }

// rotate(num);
// console.log(num);


// function filterRange(num, min, max) {
// 	for(let i = 0; i < num.length; i++) {
// 		if(num[i] > min && num[i] < max) {
// 			for(let j = i; j < num.length - 1; j++) {
//                 num[j] = num[j + 1];
//             }
//             num.length = num.length - 1;
// 			i--;
// 		}
// 	}
//     console.log(num,min,max);
// }

// filterRange(num);