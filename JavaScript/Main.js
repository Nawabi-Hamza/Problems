

class ICPC{
    constructor(name){
        const text = `Welcome ${name} This is ICPC for solve probems !`
        let dash = '';
        for(let key in text){
            dash += '-';
        }
        console.log(text)
        console.log(dash)
    }
    // ============================Find Vowel Letter in text============================
    Vowel(text){
        text = text.toLowerCase();
        let total = 0;
        for(let i = 0 ; i < text.length ; i++){
            if(text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o'|| text[i] == 'u'){
                total += 1;
            }
        }
        console.log(total);
    
    }
    // ============================Check the all alphabit should include in you text============================
    Pangram(text){
        text = text.toLowerCase();
        // const alphabit = ['a','b','c','d','e','f','g','h','i','j','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        const alphabit = 'abcdefghijklmnopqrstuvwxyz';
        let check = false;
        for(let key in alphabit){
            if(text.includes(alphabit[key])){
                check = true
            }else{
                check = false
                break;
            }
        }
        console.log(check)
    }
    // ============================Reverse Your Data============================
    Reverse(data){
        // because the array start from 0 and the length start from 1 
        const length = data.length-1;
        let text = '';
        for(let i = length ; i>=0 ; --i){
            text += data[i];
        }
        console.log(text)
        
    }
    // ============================Calculate Factorial============================ 
    Factorial(num){ 
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
    // =======================Febenacci Formulla================================
    
    Fibonacci(number){
        let n1=0 , n2=1 , nextnum;
        // let b = 1 ;
        // console.log(number)
        const fib = [];
        for(let i=0 ; i < number ; i++){
            // console.log(n1)
            fib.push(n1)
            nextnum = n1+n2;
            n1 = n2;
            n2 = nextnum;  
        }
        console.log(fib);
    }
    // =======================Palindrom if we reverse a word it be like none reverse================
    Palindrom(data){
        // console.log(data)
        let left = 0;
        let right = data.length - 1;
        // console.log(right)
        // console.log(data[right])
        let conclution = false;
        while(left < right){
            if(data[left] !== data[right]){
                conclution = false;
            }
            else{
                conclution = true;
            }
            left++;
            right--;
        }
        console.log(conclution)
    
    }
    // ==================For number%3 = 0 and number%5=0 else return the exact number===========
    FizzBuzz(data){
        for(let i=1 ; i<=data ; i++){
            if(i%3==0 && i%5==0){
                console.log("FizzBuzz");
            }
            else if(i%3==0){
                console.log("Fizz");
            }else if(i%5==0){
                console.log("Buzz");
            }
            else{
                console.log(i);
            }
        }
    }
    // ============Find Doplicate in two array=================
    CommonElement(data1,data2){
        for(let key1 in data1){
            for(let key2 in data2){
                if(data1[key1] ==  data2[key2]){
                    console.log(data1[key1]);
                }
            }
        }
    }
    
    
    

        
}

const Main = new ICPC('Hamza Nawabi');

// Find Vowel
Main.Vowel('Hello World')
// Check A-Z all alphabit should used 
Main.Pangram("The quick brown fox jumps over the lazy dog")
// Reverse Your text
Main.Reverse("Hello")
// Find Factorial
Main.Factorial(5);
// Fibonacci Formula
Main.Fibonacci(8)
// Palindrom 
Main.Palindrom("lol")
// 3 and 5 
Main.FizzBuzz(15)
// Douplicate in array
Main.CommonElement([1,2,3,4] ,[3,4,5,6] )


module.exports = ICPC;