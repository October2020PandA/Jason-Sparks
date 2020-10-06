// To Do 1

// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. 
// Do this without using any built-in array methods.
    sample = [10, 20, 30, 40, 50, 60]
function pushFront(value, arr){
    newArr = [value];
    for (var i = 0; i < arr.length; i++){
        newArr.push(arr[i]);
    }
    return newArr;
};
    // console.log(pushFront(0, sample));

// Pop Front
// Given an array, remove and return the value at the beginning of the array. 
// Do this without using any built-in array methods except pop().
function popFront(arr){
    var temp = arr[0];
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(arr[i]);
    }
    return temp;
};
    // console.log(popFront(sample));

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. 
// Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(arr, index, value){
    var newArr = [];
    var temp = arr[index];

    for (var i = 0; i < arr.length; i++){
        if (i != index){
            newArr.push(arr[i]);
        }
        else {
            newArr.push(value);
            newArr.push(temp);
        }
    }
    return newArr;
};
    // console.log(insertAt(sample, 2, 44));

// Remove At
// Given an array and an index into array, remove and return the array value at that index. 
// Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr, index){
    var newArr = [];
    var temp = arr[index];

    for (var i = 0; i < arr.length; i++){
        if (i === index){
            continue;
        }
        else {
            newArr.push(arr[i])
        }
    }

    return temp;
};
    // console.log(removeAt(sample, 1));

// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. 
// For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
// As with all array challenges, do this without using any built-in array methods.
    var sample2 = ["Brendan",true,42]
function swapPairs(arr){
    for (var i = 0; i < arr.length; i = i + 2){
        if (i === arr.length - 1 ){
            continue;
        }
        else {
            console.log(`i: ${i}`)
            var temp = arr[i];
            console.log(`temp: ${temp}`)
    
            arr[i] = arr[i + 1];
            console.log(`arr[i]: ${arr[i]}`)
            arr[i + 1] = temp;
            console.log(`arr[i + 1]: ${arr[i + 1]} \n\n`)
        }        
    }
    return arr;
};
    // console.log(swapPairs(sample2));
// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. 
// Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. 
// Because array elements are already in order, all duplicate values will be grouped together. 
// As with all these array challenges, do this without using any built-in array methods.
    var sample3 = [10, 10, 20, 30, 40, 40, 50, 60, 70, 70]
function removeDups(arr){
    newArr = [arr[0]]
    for (var i = 1; i < arr.length; i++){
        if (arr[i] !== newArr[newArr.length - 1]){
            newArr.push(arr[i])
        };
    };
    return newArr;
};
    // console.log(removeDups(sample3));
// Second: Solve this without using any nested loops.

