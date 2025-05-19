### Q1. Create polyfill for flat method of Array.
#### *Hint*: Use Recursion
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
#### *Hint*: Use Stack method
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