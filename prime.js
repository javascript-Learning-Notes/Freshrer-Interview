
function prime(...number){
    
    if(number <=1)
    {
        return false
    }
    else{
        for ( let i = 1; i < number ; i++){
            if(number % 2 == 0){
                return true
            }
            else{
                return false
               // console.log("it is not a prime no ")
            }
        }


    }
}

console.log(prime(4));