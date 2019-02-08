// <<Function Declaration>>

// function isEven(x){
//     if (x % 2 === 0){
//         return true;
//     }
//     return false;
// }

function isEven(x){
    return x % 2 === 0;
}

// <<Function Expression>>
// var isEven = function(x){
//     if (x % 2 === 0){
//         return true;
//     }
//     return false;
// }

alert(isEven(50));

// <<Function Declaration>>
function factorial(num){
    var result = 1 ;
    for(var i = 2; i<=num; i++){
        result *= i;
    }
    return result;
}

