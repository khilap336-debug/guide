function checkPalindrome(pal) {
  if (pal < 0) {
    console.log("Palindrome of a negative number does not exist");
    return false;
  }

  const originalNum = pal;
  let revNum = 0;

  while (pal > 0) {
    let digit = pal % 10;
    revNum = revNum * 10 + digit;
    pal = Math.trunc(pal / 10);
  }
 
  return originalNum === revNum;
}

console.log(checkPalindrome(132));

