// To Do 2

// Reverse:
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, 
// with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that 
// you cannot use a second array – move values within the array that you are given. As always, do not use built-in 
// array functions such as splice().
    var sample = [11, 22, 33, 44, 55, 66, 77, 88, 99];
    var sample2 = [23, 55, 38, 28, 58];
    var sample3 = [13, 53, 49, 42];

function reverse(arr){
    for (var i = 0; i < (arr.length / 2); i++){
        temp = arr[i]; 
        arr[i] = arr[arr.length - (i + 1)]; 
        arr[arr.length - (i + 1)] = temp; 
    }
    return arr;
};

    // console.log(reverse(sample));
    // console.log(reverse(sample2));
    // console.log(reverse(sample3));

// Rotate:
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. 
// ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. 
// Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.
    // var sample = [11, 22, 33, 44, 55, 66, 77, 88, 99];
    // var sample2 = [23, 55, 38, 28, 58];
    // var sample3 = [13, 53, 49, 42];

function rotateArr(arr, shiftBy){
    let t = Math.abs(shiftBy);
	while (t > 0) {

		if (shiftBy > 0) {
			let temp = arr[arr.length-1] // 99 
			
			for(let i = arr.length - 1; i > 0; i--) //g
				arr[i] = arr[i-1];
			arr[0] = temp;

        } 
        else {
			let temp = arr[0];
			for(let i = 0; i < arr.length - 1; i++) {
				arr[i] = arr[i + 1];
			}
			arr[arr.length-1] = temp;
		}
		t--;
	}
};


    // console.log(rotateArr(sample, 1))
    // console.log(rotateArr(sample, 2))

// Filter Range:
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. 
// Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array 
// you are given, with values in original order. No built-in array functions.

function filterRange(arr, min, max) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > min && arr[i] < max) {
			for (let j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length = arr.length - 1;
			i--;
		}
	}
}

// Concat:
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. 
// Return a new array containing the first array’s elements, followed by the second array’s elements. 
// Do not alter the original arrays. 
// Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function arrConcat(arr1, arr2){
    newArr = [];
    for (var i = 0; i < arr1.length; i++){
        newArr.push(arr1[i])
    }
    for (var i = 0; i < arr2.length; i++){
        newArr.push(arr2[i])
    }
    return newArr;
};

    // console.log(arrConcat(sample, sample2))