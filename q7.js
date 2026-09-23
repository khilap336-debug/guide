function getDayName(day){
    let present;

    switch(day){

        case 1:
            present ="Monday";
            break;
        
        case 2:
            present ="Tuesday";
            break;    

        case 3:
            present ="Wednesday";
            break;

        case 4:
            present ="Thrusday";
            break;
            
        case 5:
            present ="Friday";
            break;
            
        case 6:
            present ="Saturday";
            break;
            
        case 7:
            present ="Sunday";
            break;    
        }

        return present;
}

console.log(getDayName(1))