const palindrome = (str)=> {
    let regex = /[^A-Za-z0–9]/g;///[\W_]/g;

    let lowRegStr = str.toLowerCase().replace(regex, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
  }

  console.log({isPalindrome: palindrome("A man, a plan, a canal. Panama")})