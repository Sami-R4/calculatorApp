// Tab Logic
const tabLinks = document.querySelectorAll('.tablinks');
const tabContents = document.querySelectorAll('.tabcontents');

// Toggling Active classes
tabLinks.forEach(button => {
    button.addEventListener('click', () => {
        tabLinks.forEach(btn => 
            btn.classList.remove('active'));
        tabContents.forEach(content =>
            content.classList.remove('active'));
        button.classList.add('active');

        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
    
   });

// Display on screen
const displayNumbers = document.getElementById('displayNumbers');
const displayAnswer = document.getElementById('displayAnswer');

function appendToDisplay(value){
    displayNumbers.innerHTML += value;
}
document.addEventListener("keydown", 
    function(event){
        if(event.key >= '0' && event.key<= '9'){
           displayNumbers.textContent += event.key;
        }
    }
);
// display operation btn
document.addEventListener("keydown", 
    function(event){
    if(event.key == '+' || event.key == '-' || event.key == 'x' || event.key == '/' || event.key == '.'){
    displayNumbers.textContent += event.key;
    }
    }
);

// Clear Logic
// Backspace button
document.addEventListener("keydown",
    function(event){
    if(event.key == 'Backspace'){
        event.preventDefault();
        let chars = displayNumbers.textContent.split("");
    chars.pop();
    displayNumbers.textContent = chars.join("");
    }    
    }
)
// Delete button
function deleteLast(){
    let chars = displayNumbers.textContent.split("");
    chars.pop();
    displayNumbers.textContent = chars.join("");
};
// AC button
function clearDisplay(value){
    displayNumbers.textContent = '';
}

// Addition
function getSum(val1, val2){
    sum = val1 + val2;
    return sum;
}

// Subtract
function getDifference(val1, val2){
    diff = val1 - val2;
    return diff;
}

// Divide
function getQuotient(val1, val2){
    quot = val1 / val2;
    return quot;
}

// 
function getProduct(val1, val2){
    prod = val1 * val2;
    return prod;
}



