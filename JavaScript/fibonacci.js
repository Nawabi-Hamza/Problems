

function Fibonacci(number){
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

Fibonacci(14)

// const text = 'hello world';
// let find = '';
// for(let i = text.length-1 ; i > 0 ; --i){
//     find += text[i]
// }
// console.log(find)

// console.log(text.reverse())

// program to generate fibonacci series up to n terms

// take input from the user
// const number = 8
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }