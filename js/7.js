console.log('task 7');


let arr = [7, 9, 5, 4, 2, 5, 1, 5, 1, 1, 3, 4, 1];

//for (let elem of arr) {
//	console.log(elem);
//}

for (let elem of arr) {
	if (elem % 2 === 0) {
		console.log(elem);
	}
}
for (let elem of arr){
    if (elem % 2 ===1){
        console.log(elem);
    }
}