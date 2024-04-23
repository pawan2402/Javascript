// <<<<<<<<<< Array Properties >>>>>>>>>>>>> //

// Array length > To check the length of array

// Array to String > Convert Array to String

// Array at

// Array Join

// Array POP > To remove an element 

// Array Push > To add an element

// Array Shift > To add first element of array

// Array Concatenate > Adding two arrays


// taking array's data by innerhtml + checking length
const lengthInnerHTML = ["mohit", "pawan", "sayar", "js", "html"];
console.log(lengthInnerHTML.length);

//array to string
const arrayForString = ["mohit", "pawan", "sayar", "js", "html"];
console.log(arrayForString.toString());

// array at 
const arrayForAt = ["mohit", "pawan", "sayar", "js", "html"];
console.log(arrayForAt.at(2));

// array joining 
const arrayToJoin = ["mohit", "pawan", "sayar", "js", "html"];
console.log(arrayForAt.join("+"));

// array pop 
const arrayForPOP = ["mohit", "pawan", "sayar", "js", "html"];
console.log(arrayForPOP.pop());

// array push
const arrayForPush = ["mohit", "pawan", "sayar", "js", "html"];
console.log(arrayForPush.push('hello'));

// array shift
const arrayToShift = ["mohit", "pawan", "sayar", "js", "html"];
console.log(arrayToShift.shift());

// array unshift 
const arrayToUnShift = ["mohit", "pawan", "sayar", "js", "html"];
console.log(arrayToShift.unshift('mohit'));

// array concinate
const arrayToConcat1 = ["mohit", "pawan", "sayar", "js", "html"];
const arrayToConcat2 = ["other", "members"];
const concatenatedArray = arrayToConcat1.concat(arrayToConcat2);
console.log(concatenatedArray);