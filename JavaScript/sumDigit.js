


function sum(numbers){
    const number = String(numbers).split('');
    // console.log(number)
    let sum = 0 ;
    for(let i=0 ; i<= number.length-1 ;i++){
        if(number[i]=='e'||number[i]=='+'||number[i]=='.'){
           continue;
        }else{
            sum = sum+Number(number[i]);
        }
    }
    console.log(sum);
}

sum(11111111111)
// const n = '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111';
// console.log(n.length)