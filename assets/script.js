// Cara and Adam to code JavaScript functionality here

// DOM content loaded event listener, delays activation of JS functions until DOM loaded
document.addEventListener("DOMContentLoaded", function(){
    let firstNextButton = document.getElementById("first-next");
    firstNextButton.addEventListener('click', question1);
})

// Global-scoped object that holds data about a user
// Will be accessed in final functions
// Each function in the chain below will dynamically update the object
let userData = {
    amountToSave: 0,
    timeScale: 0,
    timeUnits: "months",
    smoke: "no",
    smokeAmount: 0,
}

// progress bar must not wrapped inside any question element
// progress bar has ID of progress-bar
// progres-bar fill is controlled by style.width
// set style.width to various increasing percentage values
let progressBar = document.getElementById('progress-bar').style.width

// question 1 - relates to wireframe question-1.png
function question1() {
    let currency = document.getElementById('currency').value //point to currency input element
    let amount = document.getElementById('amount').value // points to amount input element
    let question1 = document.getElementById('question1')
    
    console.log(`currency is ${currency}`)
    console.log(`amount is ${amount}`)

    // update progress-bar length to 0%
    progressBar = '0%'

    // assume element of ID question1 is a div that wraps the question input elements
    question1.style.display = 'none'

    // update userData object and log value to console
    userData['amountToSave'] = currency
    console.log(`userData object has values: ${userData}`)

    // call next function
    question2();
}

// question 2 - relates to wireframe question-2.png
function question2() {
    let time = document.getElementById('time').value //points to time input element
    let timeUnits = document.getElementById('time-units').value // points to time-unit input element
    let question2 = document.getElementById('question2')

    console.log(`time value is ${time}`)
    console.log(`units of time are ${timeUnits}`)

    // update progress-bar length to 0%
    progressBar = '14%'

    // assume element of ID question2 is a div that wraps the question input elements
    question2.style.display = 'none'

    // update userData object and log value to console
    userData['timeScale'] = time
    userData['timeUnits'] = timeUnits

    console.log(`userData object has values: ${userData}`)

    // call next function
    question3()
}

// question 3 - relates to question-3.png, grabs smoke amount
function question3() {
    let smoke = document.getElementById('smoke') // smoke question wrapper div
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

    // hide div that wraps entire question
    smoke.style.display = 'none'

    console.log(`userData object has values: ${userData}`)

    question4()
}

// question4 - relates to question-4.png
function question4() {
    // very similar approach to question 3
    let alcohol = document.getElementById('alcohol') // alcohol div wrapper
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