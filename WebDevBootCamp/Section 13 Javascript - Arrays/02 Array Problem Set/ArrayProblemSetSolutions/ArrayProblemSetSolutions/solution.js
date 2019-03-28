console.log("CONNECTED");

function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

printReverse([3,6,2,5]);

//*** isUniform() ***

function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}

/* 
The follow solution with .forEach() will not work
(see Colt's explanation here: https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/3861414?start=296), 
see link below for a potential solution, but bear in mind that a for loop is preferred
for this sort of problem.
Alternate solution with .forEach: https://www.udemy.com/the-web-developer-bootcamp/learn/v4/questions/2072936
*/

// function isUniform(arr){
// 	var first = arr[0];
// 	arr.forEach(function(element){
// 		if(element !== first){
// 			return false;
// 		}
// 	});

// 	return true;
// }

// *** sumArray() ***

function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}

// *** max() ***

function max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}