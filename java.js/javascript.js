function displayProduct() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum * secondNum;
  document.getElementById("answer1").innerHTML = `The product of ${firstNum} and ${secondNum} is: ${product}`;
}

 document.getElementById('productButton').addEventListener("click", displayProduct);


function displayDifference() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)


  let total = firstNum - secondNum;
 document.getElementById("answer2").innerHTML = `The difference between ${firstNum} and ${secondNum} is: ${difference}`;
}

  document.getElementById('differenceButton').addEventListener("click", displayDifference);
