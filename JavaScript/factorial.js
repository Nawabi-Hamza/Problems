

function Factorial(num){
    
    if(typeof num === 'number' && num > 0){
        let total = new Number('1');
        for(let i = num; i>1 ;i--){
            total = total*i
        }
        console.log(total)
    }else{
        console.log("Please Write Positive Number")
    }


}

Factorial(5)