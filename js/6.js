console.log('task 6');


//const arr = [1, 5, 8, 9, 9]
//for (let i = 0; i < arr.length; i++) {
//   console.log(`item: ${arr[i]}, index: ${i}`)
//}

//arr.forEach(function(index, item, array){
//   console.log(`item: ${item}, index: ${index}`)
//})

//let arr = [-1, -2, -3, 4];

//let check = arr.some(function(elem) {
//	if (elem >= 0) {
//		return true;
//	} else {
//		return false;
//	}
//});

//console.log(check);

//const array = [1, 2, 3, 4];

//let chek = array.some(function(num){
//   if (num = array) {
//       return true;
//   } else {
//        return false;
//   }
//})
//console.log(chek);

function checkArray(arr, curr = 0) {
    if (arr.length < 2 || curr == arr.length - 1) {
        return true;
    }

    return typeof arr[curr] !== typeof arr[curr + 1]
        ? false
        : checkArray(arr, ++curr)
}

console.log(checkArray([0, 1, 2, 3]))
console.log(checkArray([0, '1', 2, 3]))