// function to check whether brackets in a given string are balanced or not
// Every opening bracket should have it's matching closed bracket in correct order

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