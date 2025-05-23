// A function to get product array of given array elements except self without using division operator.

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