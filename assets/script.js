// Cara and Adam to code JavaScript functionality here

// DOM content loaded event listener, delays activation of JS functions until DOM loaded
document.addEventListener("DOMContentLoaded", function(){
    let firstNextButton = document.getElementById("first-next");
    firstNextButton.addEventListener('click', question1);
})

// Global-scoped object that holds data about a user
// Will be accessed in final functions
// Each function in the chain below will dynamically update the object's key-value pairs
let userData = {
    amountToSave: 0,
    timeScale: 0,
    timeUnits: "months",
    smoke: "no",
    smokeAmount: 0,
    alcohol: "no",
    alcoholAmount: 0,
    coffee: "no",
    coffeeAmount: 0,
    clothing: "no",
    clothingAmount: 0,
    lotteryAmount: 0,
}

// progress bar must not wrapped inside any question element
// progress bar has ID of progress-bar
// progres-bar fill is controlled by style.width
// set style.width to various increasing percentage values
let progressBar = document.getElementById('progress-bar').style.width

// declare 
let question1 = document.getElementById('question1-amount') // amount to save question wrapper div
let question2 = document.getElementById('question2-time') // amount of time question wrapper div
let question3 = document.getElementById('question3-smoke') // smoke question wrapper div
let question4 = document.getElementById('question4-alcohol') // alcohol div wrapper
let question5 = document.getElementById('question5-coffee') // coffee question wrapper div
let question6 = document.getElementById('question6-clothing') // clothing question wrapper div
let question7 = document.getElementById('question7-lottery') // lottery question wrapper div

// question 1 - relates to wireframe question-1.png
// question-1 HTML is displayed by default
function question1() {

    question1.style.display = 'block'

    let currency = document.getElementById('currency').value //point to currency input element
    let amount = document.getElementById('amount').value // points to amount input element
    
    console.log(`currency is ${currency}`)
    console.log(`amount is ${amount}`)

    // update progress-bar length to 0%
    progressBar = '0%'
    
    // update userData object and log value to console
    userData['amountToSave'] = currency
    console.log(`userData object has values: ${userData}`)

    // call next function
    question2();
}

// question 2 - relates to wireframe question-2.png
function question2() {

    // hide question1 element, show question2 element
    question1.style.display = 'none'
    question2.style.display = 'block'

    // variable assignment
    let time = document.getElementById('time').value //points to time input element
    let timeUnits = document.getElementById('time-units').value // points to time-unit input element

    // log out values || Remove these in final build
    console.log(`time value is ${time}`)
    console.log(`units of time are ${timeUnits}`)

    // update progress-bar length to 14%
    progressBar = '14%'

    // update userData object and log value to console
    userData['timeScale'] = time
    userData['timeUnits'] = timeUnits

    // log out userData object
    console.log(`userData object has values: ${userData}`)

    // call next function
    question3()
}

// question 3 - relates to question-3.png, grabs smoke amount
function question3() {
    
    question2.style.display = 'none'
    question3.style.display = 'block'

    let smokeRadioSelect = document.getElementById('smoke-radio').value
    // here we need to see what the user has selected.
    // by default, the "No" radio button is selected, so the amount of cigarettes radio selet form is hidden by the CSS
    // if the user selects "Yes", the amount of cigarettes form should show
    // radio buttons are input elements with type=radio, and can accept a value attribute, so we should be able to grab its value
    let smokeAmountRadioForm = document.getElementById('smoke-amount')

    // update progress-bar length to 28%
    progressBar = '28%'
    
    if (smokeRadioSelect == 'yes') {
        smokeAmountRadioForm.style.display = 'block'
        // block not set in stone - will need to change based on CSS design
        userData['smoke'] = 'yes'
        console.log(`Does smoke`)
    }

    if (smokeRadioSelect == 'no' ){
        smokeAmountRadioForm.style.display = 'none'
        userData['smoke'] = 'no'
        console.log(`Does not smoke`)
    }
    
    // radio buttons for selecting amount of cigarettes the user smokes
    // Would this be easier with a select element and several child option elements?
    // easier to get value
    // can do with radio inputs and a for loop - https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/
    // all radio inputs must have the name attribute with the same attribute value of smoke-amount
    let smokeAmount = document.getElementsByName('smoke-amount') // this is a list []

    // iterate over the list above
    // if the radio is checked, push that value to the userData object
    for(count = 0; count < smokeAmount.length; count++) {
        if(smokeAmount[count].checked) {
            let selected = smokeAmount[count].checked
            userData['smokeAmount'] = selected
        }
    }

    console.log(`userData object has values: ${userData}`)

    question4()
}

// question4 - relates to question-4.png
function question4() {
    // very similar approach to question 3

    // hide question 3 element, show question 4 element
    question3.style.display = 'none'
    question4.style.display = 'block'
    
    // variable assignment
    let alcoholRadioSelect = document.getElementById('alcohol-radio') // alcohol yes-no radio select
    let alcoholAmountRadioForm = document.getElementById('alcohol-amount') // alcohol amount radio buttons in fieldset

    // update progress-bar length to 42%
    progressBar = '42%'

    if (alcoholRadioSelect == 'yes') {
        alcoholAmountRadioForm.style.display = 'block'
        // block not set in stone - will need to change based on CSS design
        userData['alcohol'] = 'yes'
        console.log(`Drinks`)
    }

    if (alcoholRadioSelect == 'no' ){
        alcoholAmountRadioForm.style.display = 'none'
        userData['alcohol'] = 'no'
        console.log(`Filthy teetotaler`)
    }

    let alcoholAmount = document.getElementsByName('alcohol-amount')

    // iterate over the list above
    // if the radio is checked, push that value to the userData object
    for(count = 0; count < alcoholAmount.length; count++) {
        if(alcoholAmount[count].checked) {
            let selected = alcoholAmount[count].checked
            userData['alcoholAmount'] = selected
        }
    }

    alcohol.style.display = 'none'

    console.log(`userData object has values: ${userData}`)

    question5()
}

// question 5 - relates to question-5.png
// coffee is a placeholder for a hot drink - tea, hot chocolate, etc
function question5() {
    // hide question 4 element, show question 5 element
    question4.style.display = 'none'
    question5.style.display = 'block'

    // variable assignment
    let coffeeRadioSelect = document.getElementById('coffee-radio') // coffee yes-no radio selector
    let coffeeAmountRadioForm = document.getElementById('coffee-amount')

    // update progressBar to 56%
    progressBar = '56%'

    if (coffeeRadioSelect == 'yes') {
        coffeeAmountRadioForm.style.display = 'block'
        // block not set in stone - will need to change based on CSS design
        userData['coffee'] = 'yes'
        console.log(`Drinks coffee`)
    }

    if (coffeeRadioSelect == 'no'){
        coffeeAmountRadioForm.style.display = 'none'
        userData['coffee'] = 'no'
        console.log(`does not drink coffee`)
    }

    let coffeeAmount = document.getElementsByName('coffee-amount')

    // iterate over the list above
    // if the radio is checked, push that value to the userData object
    for(count = 0; count < coffeeAmount.length; count++) {
        if(coffeeAmount[count].checked) {
            let selected = coffeeAmount[count].checked
            userData['coffeeAmount'] = selected
        }
    }

    // log out userData object values
    console.log(`userData object has values: ${userData}`)

    question6()
}

function queston6() {
    // hide question 5 element, show question 6 element
    question5.style.display = 'none'
    question6.style.display = 'block'

    // variable assignment
    let clothingRadioSelect = document.getElementById('clothing-radio') // coffee yes-no radio selector
    let clothingAmountRadioForm = document.getElementById('clothing-amount')

    // update progressBar to 70%
    progressBar = '70%'

    if (clothingRadioSelect == 'yes') {
        clothingAmountRadioForm.style.display = 'block'
        // block not set in stone - will need to change based on CSS design
        userData['clothing'] = 'yes'
        console.log(`buys clothes`)
    }

    if (clothingRadioSelect == 'no'){
        clothingAmountRadioForm.style.display = 'none'
        userData['clothing'] = 'no'
        console.log(`does not buy clothes`)
    }

    let clothingAmount = document.getElementsByName('clothing-amount')

    // iterate over the list above
    // if the radio is checked, push that value to the userData object
    for(count = 0; count < clothingAmount.length; count++) {
        if(clothingAmount[count].checked) {
            let selected = clothingAmount[count].checked
            userData['clothingAmount'] = selected
        }
    }

    // log out userData object values
    console.log(`userData object has values: ${userData}`)

    question7()
}

function question7() {
    // hide question 6 element, show question 7 element
    question6.style.display = 'none'
    question7.style.display = 'block'

    // update progressBar to 84%
    progressBar = '84%'

    let lotteryAmount = document.getElementsByName('clothing-amount')

    // iterate over the list above
    // if the radio is checked, push that value to the userData object
    for(count = 0; count < lotteryAmount.length; count++) {
        if(lotteryAmount[count].checked) {
            let selected = lotteryAmount[count].checked
            userData['lotteryAmount'] = selected
        }
    }

    // log out userData object values
    console.log(`userData object has values: ${userData}`)

    final()
}

function final() {

}