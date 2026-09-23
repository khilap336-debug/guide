function classifyNumber(number){
    let result;

    if(number>0){
        result ="The number is Positive";
    }

    else if(number==0){
        result ="Equal to zero";
    }

    else{
        result ="The number is Negative";
    }

    return result;
}

console.log(classifyNumber(0))