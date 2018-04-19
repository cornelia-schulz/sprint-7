//MINIMUM

// Your code here.
function min(a, b){
	if (a <= b){
      return a;
    }
  else {
    return b;
  }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10



//RECURSION

// Your code here.
function isEven(x){
    if (x === 0){
      return true;
    }
    else if (x === 1) {
      return false;
    }
    else if (x < 0) {
      return isEven(Math.abs(x));
    }
      else {
        return isEven(x-2);
    }
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → ??



  //BEAN COUNTING

  // Your code here.
function countBs(str){
    return countChar(str, "B");
  }
  
  function countChar(str, find){
    var result = 0;
    for (var i = 0; i < str.length; i++){
        if(str.substring(i, i+find.length) == find){
          result ++;
      }
    }
    return result;
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4