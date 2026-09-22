function findNumber(number,target){
    let result ="notfound";

    for(i =0 ; i< number.length ; i++){
        if( number[i]< target ){
            continue; 
        }
        
        if(number[i] === target){
            result = "foumd";
            break;
        }
    }
    return result;
}

console.log(findNumber([12,32,53,38,1,-2,-42] , 100))

