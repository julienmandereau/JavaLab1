    
    function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
    let result = multiply(num1, num2);
    let result2 = sum(num1, num2);
    let result3 = quotient(num1, num2);
    
                    // Display the result
                    displayResult(result,result2,result3);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }

            function multiply(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Multiply the numbers
                return a * b;
            }

            function sum(a, b) {
                // Introduce a debugger statement to pause execution
                return a + b;
            }

            function quotient(a, b) {
                return a / b;
            }

            function displayResult(result,result2,result3) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                resultElement.textContent = `The multiplication is: ${result}`;
                const resultElement2 = document.getElementById('result2');
                resultElement2.textContent = `The sum is: ${result2}`;
                const resultElement3 = document.getElementById('result3');
                resultElement3.textContent = `The quotient is: ${result3}`;
            }
        