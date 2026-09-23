function checkEntry(age,hasID){
  let permission;

  if(age>=18){
    if(hasID === true){
      permission ="entry allowed";
    }
    else{
      permission ="Id required";
    }  
  }
  else{
    permission ="Too Young";
  }
  return permission;
}

console.log(checkEntry(2,true))