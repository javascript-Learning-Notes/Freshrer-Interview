let a = [1,2,3,4,5,6,4,5];

for(let i = 0; i < a.length; i++){
    if(a[i] + a[i + 1]===9){
        console.log(a[i]);
    }
}