

// Find Vowels Of Text
function vowel(text){
    text = text.toLowerCase();
    let total = 0;
    for(let i = 0 ; i < text.length ; i++){
        if(text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o'|| text[i] == 'u'){
            total += 1;
        }
    }
    console.log(total);

}


vowel("Hello World")
