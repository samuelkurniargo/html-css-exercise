inputBtn = document.getElementById("submitBtn");

inputBtn.addEventListener("click", () => {
    
    let inputNum = document.getElementById('numberInput').value;
    let message = document.getElementById('err-message');

    if (inputNum > 0 ) {
        message.innerHTML = '';
        message.style.color = "black";
        message.style.fontWeight="normal";
        
        if(inputNum % 15 === 0 ) {
            message.innerText = "FizzBuzz!";
        } else if (inputNum % 5 === 0) {
            message.innerText = "Buzz!";
        } else if (inputNum % 3 === 0) {
            message.innerText = "Fizz!";
        } else {
            message.innerText = inputNum;
        }
    } else {
        message.innerText = "Invalid input Number!";
        message.style.color = "red";
        message.style.fontWeight="bold";
    }
});
