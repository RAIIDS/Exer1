<script> 
function displayProduct() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);

  let product = firstNum * secondNum;
  document.getElementById("answer1").innerHTML = `The product of ${firstNum} and ${secondNum} is: ${product}`;
}

document.getElementById('productButton').addEventListener("click", displayProduct);
</script> 

<script> 
function displayDifference() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);

  let difference = firstNum - secondNum;
  document.getElementById("answer2").innerHTML = `The difference between ${firstNum} and ${secondNum} is: ${difference}`;
}

document.getElementById('differenceButton').addEventListener("click", displayDifference);
</script> 
