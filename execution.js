   
      function a(){
        c();
        console.log("hello");
        b();
    }
     function b(){
         console.log("my");
         
     }
     function c(){
         console.log("world");
         d();
     }
    
     function d(){
         console.log("life");
     }
    
     a();
