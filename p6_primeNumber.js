function isPrime(num){
  for(let i = 2; i < num; i++){
    if(num % i){
      return false;
    }
  }
  return true;
}

isPrime(10);