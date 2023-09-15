

function pangram(text){
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


pangram("The Quick Brown fox jumps over the lazy dog");