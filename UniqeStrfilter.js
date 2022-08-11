let str = "abcab";

// console.log(str.charAt(0));
// console.log(str.indexOf("c"));
// console.log(str.lastIndexOf("c"));


function norepeate(arr){
       for(var i=0; i<arr.length; i++){
         let j = arr.charAt(i);
        //  console.log(j);
        if(str.indexOf(j)===str.lastIndexOf(j)){
            return j;
        }
       }
}

let result = norepeate(str);

console.log(result);
