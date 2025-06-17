//function that will return first non repeating character in given string
function firstUniqueChar(str){
    let arr = str.split('');
    for(let i=0;i<arr.length;i++){
        let element = arr[i];
        if(arr.indexOf(element)===arr.lastIndexOf(element)){
            return element;
        }
    }
}
//sample string that contains multiple repeating and non-repeating characters
let input_string = 'aaabbccdef';
console.log(firstUniqueChar(input_string));