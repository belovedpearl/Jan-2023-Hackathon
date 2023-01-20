// Cara and Adam to code JavaScript functionality here

// DOM content loaded event listener, delays activation of JS functions until DOM loaded
document.addEventListener("DOMContentLoaded", function(){
    let firstNextButton = document.getElementById("first-next");
    firstNextButton.addEventListener('click', saveAmount);
})

// Global-scoped object that holds data about a user
// Will be accessed in final functions
// Each function in the chain below will dynamically update the object
let userData = {
    amountToSave: 0,
    timeScale: 0,
    timeUnits: "months",
}

// question 1
function saveAmount() {
    let currency = document.getElementById('currency').value //point to currency input element
    let amount = document.getElementById('amount').value // points to amount input element
    let question1 = document.getElementById('question1')
    
    console.log(`currency is ${currency}`)
    console.log(`amount is ${amount}`)

    // assume element of ID question1 is a div that wraps the question input elements
    question1.style.display = 'none'

    // update userData object and log value to console
    userData['amountToSave'] = currency
    console.log(`userData object has values: ${userData}`)

    // call next function
    timeAmount();
}

// question 2
function timeAmount() {
    let time = document.getElementById('time').value //points to time input element
    let timeUnits = document.getElementById('time-units').value // points to time-unit input element
    let question2 = document.getElementById('question2')

    console.log(`time value is ${time}`)
    console.log(`units of time are ${timeUnits}`)

    // assume element of ID question2 is a div that wraps the question input elements
    question2.style.display = 'none'

    // update userData object and log value to console
    userData['timeScale'] = time
    userData['timeUnits'] = timeUnits

    // call next function
    question3()
}

