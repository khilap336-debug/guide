function login(attempts, correctPassword="1234"){
    let entry;
    for(i=0; i<attempts.length ;i++){
        if(attempts[i] === correctPassword){
            entry ="Login Successful";
            break;
        }

        else{
            entry ="Account Locked";
        }

        if(attempts[i] === ""){
            continue;
        }
    }
    return entry;
}

console.log(login(["1362","3922","3415","1636","1234","5212","",""]))