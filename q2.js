function checkTemprature(temprature){
    let message =" ";

    if(temprature<20){
        message ="cold";
    }
    
    else if(temprature>20 && temprature<=30){
        message ="normal";
    }

    else{
        message = "hot";
    }
    return message; 
}
console.log(checkTemprature(33))