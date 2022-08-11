let str = ["a","b","c","b","a","b","a","c","a","d"];

function UniqueCount(arr){
    let counter = {};

    arr.forEach((val)=>{
        if(!counter[val]){
            counter[val] = 1
        }else{
            counter[val] = counter[val] + 1;
        }
    })
    return counter;
}

let result = UniqueCount(str);

console.log(result);