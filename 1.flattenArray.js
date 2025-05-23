// Custom function for flat method of Array
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