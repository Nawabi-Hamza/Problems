



function Reverse(data){
    // console.log(data.length)
    // because the array start from 0 and the length start from 1 
    const length = data.length-1;
    let text = '';
    for(let i = length ; i>=0 ; --i){
        text += data[i];
    }
    console.log(text)
    
}

Reverse("hello")

