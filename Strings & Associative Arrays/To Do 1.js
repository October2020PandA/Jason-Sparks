// To Do 1

// Remove Blanks: 
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
    var string = " Pl ayTha tF u nkyM usi c ";

function rmBlanks(str){
    var newString = "";
    for (var i = 0; i < str.length; i++){
        if (str[i] !== " "){
            newString += str[i]
        }
    }
    return newString;
};

    console.log(rmBlanks(string));


// Get Digits: 
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
    var sample = "0s1a3y5w7h9a2t4?6!8?0";

function getDigits(str){
    intArr = "";
    var charArr = str.split("");
    for (var i = 0; i < charArr.length; i++){
        if (charArr[i] % 1 === 0){
            intArr += charArr[i];
        }
    }
    return intArr;
};

    console.log(getDigits(sample));


// Acronyms: 
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".
    var test1 = "Live from New York, it's Saturday Night!"
    var test2 = " there's no free lunch - gotta pay yer way. "

function acronym(str){
    wordArr = str.split(" ")
    result = "";
    for (var i = 0; i < wordArr.length; i++){
        if (wordArr[i] !== ""){
            result += wordArr[i][0].toUpperCase();
        }
    }
    return result;
};

    console.log(acronym(test1));
    console.log(acronym(test2));


// Count Non-Spaces: 
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
    var example = "Honey pie, you are driving me crazy"
function countNS(str){
    counter = 0;
    charArr = str.split("");
    for (var i = 0; i < charArr.length; i++){
        if (charArr[i] !== ' '){
            counter += 1;
        }
    }
    return counter;
};

    console.log(countNS(example))


// Remove Shorter Strings: 
// Given a string array and value (length), remove any strings shorter than the length from the array.

function rmShort(strArr, length){

};

function removeShort(strArr, val) {
    for (var ind = strArr.length-1; ind >= 0; ind--) { // Loop backwards through the string array. 
        if (strArr[ind].length < val) { // Test if the string at the given index position's length is shorter than the given value
            for (var i = ind; i < strArr.length-1; i++){
                var temp = strArr[i];
                strArr[i] = strArr[i+1];
                strArr[i+1] = temp;
            }
            strArr.pop();
        }
    }
    return strArr;
}
