// Min to Front

// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. 
// Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 
// As always, do this without using built-in functions 

var sample = [4,2,1,3,5];
var sample2 = [8,22,4,3,50];

function minToFront(arr){
    var min = arr[0];
    idx = 0; //

    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
            idx = i;
        }
    };

    for (var x = idx; x > 0; x--){
        var temp = arr[x];
            console.log(`temp is now: ${arr[x]}`)
        arr[x] = arr[x - 1];
            console.log(`arr[${x}] is now: ${arr[x - 1]}`)
        arr[x - 1] = temp;
            console.log(`arr[${x} - 1] is now: ${temp} \n\n`)
    }
    return arr;
};

console.log(minToFront(sample));