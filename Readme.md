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