// Your code goes here
const rapid = (str) => {
    const regex = /[aeiou]/gi;
    str.replace(regex, "");
    str = str.toUpperCase();
    return str;
};

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
