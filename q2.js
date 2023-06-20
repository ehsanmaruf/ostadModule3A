function squareRootOfSumOfSquares(numbersArray) {
    let sum = 0;
    const sumOfSquares = numbersArray.map((item)=>{
        sum += (item*item);
    });
    const squareRoot = Math.sqrt(sum);
    return squareRoot;
  };
  
  console.log(squareRootOfSumOfSquares([3, 4, 5]));