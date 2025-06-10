//given array with elements
let arr = ['a','b','c','d','e'];
// given array with index values
let indexes = [3,1];
//logic to delete array elements for indexes present in indexes array
for(let i=arr.length-1;i>=0;i--){
    if(indexes.includes(i)) {
        arr.splice(i,1);
    }
}
//log to update the array on console
console.log(arr);