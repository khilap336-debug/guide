function revNum(nums) {
  let revNum = 0;
  
  if (nums < 0) { 
    return false; 
  }
  
  while (nums > 0) {
    digit = nums % 10; 
    revNum = revNum * 10 + digit;
    nums = Math.trunc(nums / 10);
    
  }
  return revNum; 
}

console.log(revNum(1234)); 
