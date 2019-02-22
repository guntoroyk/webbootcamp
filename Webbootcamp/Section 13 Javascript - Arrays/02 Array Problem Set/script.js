function printReverse(arr){
    for (var i = arr.length - 1; i>=0; i--){
        console.log(arr[i]);
    }
}

printReverse([1, 2, 3, 4, 5]);

// function isUniform(arr){
//     var first = arr[0];
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] !== first){
//             return false;
//         }
//     }
//     return true;
// }

function isUniform(arr){
    var first = arr[0];
    var bool = true;
    arr.forEach(function(index) {
        if (index !== first){
            bool = false;
        }
    });
    return bool;
}

// function sumArray(arr){
//     var total = 0;
//     for(var i = 0; i < arr.length; i++){
//         total += arr[i];
//     }
//     return total;
// }

function sumArray(arr){
    var total = 0;
    arr.forEach(function(index){
        total += index;
    });
    return total;
}

function getMax(arr){
    var max = arr[0];
    arr.forEach(function(index){
        if(index > max){
            max = index;
        }
    });
    return max;
}