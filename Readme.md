#### Q1. Write a custom function for flat method of Array.
##### *Hint*: Use Recursion
```
function flatten(array){
    let result = [];
    function subArr(arr){
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])) subArr(arr[i]);
            else result.push(arr[i]);
        }
    }
    subArr(array);
    return result;
}
let testData = [1,2,[3,[4,5],6],7,8];
const output = flatten(testData);
console.log(output);
```

#### Q2. Write a function to check balanced brackets in a string which contains only these brackts: {},[],()
##### *Hint*: Use Stack method
```
function bakancedBrackets(str){
     let stack = [];
     const bracketMap = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
     }
     for(let char of str){
        if(bracketMap[char]) stack.push(char);
        else if(Object.values(bracketMap).includes(char)){
            const last = stack.pop();
            if(bracketMap[last]!==char) return false;
        }
     }
     return stack.length === 0;
}
let testData = '{{[][]}}{}';
const result = bakancedBrackets(testData);
console.log(result);
```

#### Q3. Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i], without using division, and in O(n) time. You must solve it without using the division operator and with constant extra space (excluding the output array).
##### *Hint*: a. Builds left: left[i] contains the product of all elements before index i.
#####         b. Builds right: right[i] contains the product of all elements after index i.
#####         c. Final product: productArr[i] = left[i] * right[i].
```
function productOfArray(arr){
    let left = [];
    let right = [];
    let productArray = [];
    let product = 1;
    for(let i=0;i<arr.length;i++){
        left[i] = product;
        product*=arr[i];
    }
    product = 1;
    for(let i=arr.length-1;i>=0;i--){
        right[i]=product;
        product*=arr[i];
    }
    for(let i=0;i<arr.length;i++){
        productArray[i] = left[i]*right[i];
    }
    return productArray;
}
let testData = [1,2,3,4];
console.log(productOfArray(testData));
```
#### Q4. Implement a throttle function that ensures the mouse position is logged at most once every 1000 milliseconds, regardless of how often the event fires.
```
function throttle(callback, delay) {
  let isThrottled = false;

  return function (...args) {
    if (!isThrottled) {
      callback.apply(this, args);
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
      }, delay);
    }
  };
}

function logMousePosition(x, y) {
  console.log(`Mouse position = (${x}, ${y})`);
}

const throttledMouseLogger = throttle(logMousePosition, 1000);

window.addEventListener('mousemove', (event) => {
  throttledMouseLogger(event.clientX, event.clientY);
});
```
#### Q5. Implement a debounce function that ensures the mouse position is logged when user takes a pause of 1000 milliseconds, regardless of how often the event fires.
```
function debounce(callback, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

function logMousePosition(x, y) {
  console.log(`Mouse position = (${x}, ${y})`);
}

const debouncedMouseLogger = debounce(logMousePosition, 1000);

window.addEventListener('mousemove', (event) => {
  debouncedMouseLogger(event.clientX, event.clientY);
});
```
#### Q6. Insert a given character in a given string after every 3rd character, starting from the end of the string.
```
function insertChar(inputStr, charToInsert) {
  const modifiedChars = [];
  let charCount = 0;

  for (let i = inputStr.length - 1; i >= 0; i--) {
    modifiedChars.push(inputStr[i]);
    charCount++;

    if (charCount % 3 === 0 && i !== 0) {
      modifiedChars.push(charToInsert);
    }
  }

  return modifiedChars.reverse().join('');
}

console.log(insertChar('abcdefghjk','r')); // abcrdefrghjrk
```
#### Q7. Given two array, one having array elements and second having some index values. Delete those elements from array whose index value is present in index array.
```
let arr = ['a','b','c','d','e'];

let indexes = [3,1];

for(let i=arr.length-1;i>=0;i--){
    if(indexes.includes(i)) {
        arr.splice(i,1);
    }
}

console.log(arr);
```
#### Q8. Find the first unique character (non repeating) in a given string.
```
function firstUniqueChar(str){
    let arr = str.split('');
    for(let i=0;i<arr.length;i++){
        let element = arr[i];
        if(arr.indexOf(element)===arr.lastIndexOf(element)){
            return element;
        }
    }
}
let input_string = 'aaabbccdef';
console.log(firstUniqueChar(input_string));
```
