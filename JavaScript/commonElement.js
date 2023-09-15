

const first=[1,2,3,4] ;
const second=[3,4,5,6] ;

function CommonElement(data1,data2){
    for(let key1 in data1){
        for(let key2 in data2){
            if(data1[key1] ==  data2[key2]){
                console.log(data1[key1]);
            }
        }
    }
}

CommonElement(first,second);