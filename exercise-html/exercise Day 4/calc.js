function addition() {
  // Retrieve the values of num1 and num2 when the function is called
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  // Check if the input values are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid numbers");
    return;
  }

  // Perform addition
  let sum = num1 + num2;

  // Display the result in the result text field
  resultado(sum);
}

function subtraction() {
  // Retrieve the values of num1 and num2 when the function is called
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  // Check if the input values are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid numbers");
    return;
  }

  // Perform addition
  let subtraction = num1 - num2;

  // Display the result in the result text field
  resultado(subtraction);
}

function multiply() {
  // Retrieve the values of num1 and num2 when the function is called
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  // Check if the input values are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid numbers");
    return;
  }

  // Perform multiply
  let multiply = num1 * num2;

  // Display the result in the result text field
  resultado(multiply);
}

function division() {
  // Retrieve the values of num1 and num2 when the function is called
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  // Check if the input values are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid numbers");
    return;
  }

  // Perform multiply
  let division = num1 / num2;

  // Display the result in the result text field
  resultado(division);
}

function square() {
  // Retrieve the values of num1 and num2 when the function is called
  let num1 = document.getElementById("num1").value;

  // Check if the input values are valid numbers
  if (isNaN(num1)) {
    alert("Please enter valid numbers");
    return;
  }

  // Perform multiply
  let square = Math.sqrt(num1);

  // Display the result in the result text field
  resultado(square);
}
function exponentiation() {
  // Retrieve the values of num1 and num2 when the function is called
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  // Check if the input values are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid numbers");
    return;
  }

  // Perform multiply
  let exponentiation = Math.pow(num1, num2);

  // Display the result in the result text field
  resultado(exponentiation);
}

function abs() {
  // Retrieve the values of num1 and num2 when the function is called
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  // Check if the input values are valid numbers
  if (isNaN(num1)) {
    console.log("Please enter valid numbers");
    return;
  }

  // Perform multiply
  let abs = Math.abs(num1);

  // Display the result in the result text field
  resultado(abs);
}

function random() {
  // Perform multiply
  let random = Math.random();

  // Display the result in the result text field
  resultado(random);
}

function round() {
  let num1 = parseFloat(document.getElementById("num1").value);
  // Perform multiply
  let round = Math.round(num1);

  // Display the result in the result text field
  resultado(round);
}

function floor() {
  let num1 = parseFloat(document.getElementById("num1").value);
  // Perform multiply
  let floor = Math.floor(num1);

  // Display the result in the result text field

  resultado(floor);
}

function ceil() {
  let num1 = parseFloat(document.getElementById("num1").value);
  // Perform multiply
  let ceil = Math.ceil(num1);

  resultado(ceil);
}

function resultado(result) {
  document.getElementById("result").value = result;
}
