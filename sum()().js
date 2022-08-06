function first(a){
    function second(b){
        function third(c){
              return console.log(a+b+c)
        }
        third(1)
    }
    second(2)
}
first(3)