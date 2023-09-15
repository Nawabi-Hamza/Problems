// cac

function Palindrom(data){
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

Palindrom("foof")



function pal(data){
    data = data.toLowerCase()
    let rev = '';
    for(let i=data.length-1 ; i>=0; i--){
        rev += data[i];
    }
    data===rev? console.log(true):console.log(false);

}

pal('foof')