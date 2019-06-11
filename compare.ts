{
    function compare(a,b){
        return a > b ? 1 : -1;
    }
    
    var compare1 =  function(a,b){
        return a > b ? 1 : -1;
    }
    
    var compare2 = (a,b) => {
        return a > b ? 1 : -1;
    }
    
    function abs(a){
        return a > 0 ? a : -a;
    }
    
    var abs1 = (a) => {
        return a > 0? a : -a;
    }
    
    var abs2 = a => {
        return a > 0? a : -a;
    }
    
    var foo = () => {
    
    }
    
    console.log(compare2(10,20));
}