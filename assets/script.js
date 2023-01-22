// Cara and Adam to code JavaScript functionality here

// DOM content loaded event listener, delays activation of JS functions until DOM loaded
document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Loaded")

    document.getElementById("amount-function").addEventListener('click', question1);
    document.getElementById('time-function').addEventListener('click', question2);

    document.getElementById('smoke-yes-no').addEventListener('click', question3YesNo);
    document.getElementById('smoke-amount-button').addEventListener('click', question3Amount);

    document.getElementById('alcohol-yes-no').addEventListener('click', question4YesNo);
    document.getElementById('alcohol-amount-button').addEventListener('click', question4Amount);

    document.getElementById('coffee-yes-no').addEventListener('click', question5YesNo);
    document.getElementById('coffee-amount-button').addEventListener('click', question5Amount);

    document.getElementById('clothes-yes-no').addEventListener('click', question6YesNo);
    document.getElementById('clothes-amount-button').addEventListener('click', question6Amount);

    document.getElementById('lottery-yes-no').addEventListener('click', question7YesNo);
    document.getElementById('lottery-amount-button').addEventListener('click', question7Amount);

    document.getElementById('call-function-final').addEventListener('click', final);
})

// Global-scoped object that holds data about a user
// Will be accessed in final functions
// Each function in the chain below will dynamically update the object's key-value pairs
// update smoke, alcohol, etc to use Boolean True/False values instead of string values
let userData = {
    amountToSave: 0,
    time: 0,
    currency: "pounds",
    smoke: false,
    smokeAmount: 0,
    alcohol: false,
    alcoholAmount: 0,
    coffee: false,
    coffeeAmount: 0,
    clothing: false,
    clothingAmount: 0,
    lottery: false,
    lotteryAmount: 0,
}

// declare
let currency = document.getElementById('currency') // grab user input of currency, will use in API
let question_1 = document.getElementById('question1-amount') // amount to save question wrapper div
let question_2 = document.getElementById('question2-time') // amount of time question wrapper div
let question_3 = document.getElementById('question3-smoke') // smoke question wrapper div
let question_4 = document.getElementById('question4-alcohol') // alcohol div wrapper
let question_5 = document.getElementById('question5-coffee') // coffee question wrapper div
let question_6 = document.getElementById('question6-clothing') // clothing question wrapper div
let question_7 = document.getElementById('question7-lottery') // lottery question wrapper div
let finalOutput = document.getElementById('final-output') // final output wrapper div

// question 1 - relates to wireframe question-1.png
// question-1 HTML is displayed by default
function question1() {

    // question1.style.display = 'block'
    // don't need because questio1 already displays

    let currency = document.getElementById('currency').value //point to currency input element
    let amount = document.getElementById('amount').value // points to amount input element
    
    console.log(`currency is ${currency}`)
    console.log(`amount is ${amount}`)

    // update progress-bar length to 0%
    var progressBar = document.getElementById('progress-bar').style.width
    progressBar = '0%'
    
    // update userData object and log value to console
    userData['currency'] = currency
    userData['amountToSave'] = amount
    console.log(`userData object has values: ${userData}`)

    question_1.style.display = 'none'
    question_2.style.display = 'block'
}

// question 2 - relates to wireframe question-2.png
function question2() {
    
    // variable assignment
    let time = document.getElementById('time').value //points to time input element

    // log out values || Remove these in final build
    console.log(`time value is ${time}`)

    // update progress-bar length to 14%
    progressBar = '14%'

    // update userData object and log value to console
    userData['time'] = time

    // log out userData object
    console.log(`userData object has values: ${userData}`)

    question_2.style.display = 'none'
    question_3.style.display = 'block'
}

function question3YesNo() {

    // update progress-bar length to 28%
    progressBar = '28%'

    let smokeYes = document.getElementById('smoke-yes')
    let smokeNo = document.getElementById('smoke-no')

    if (smokeYes.checked) {
        document.getElementById('smoke-yes-no-div').style.display = 'hide'
        document.getElementById('smoke-amount-div').style.display = 'block'
        userData['smoke'] = true
        console.log(`Does smoke`)
    }
    else if (smokeNo.checked) {
        document.getElementById('smoke-yes-no-div').style.display = 'hide'
        document.getElementById('alcohol-yes-no-div').style.display = 'block'
        userData['smoke'] = false
        console.log(`Does not smoke`)
    }
}

function question3Amount() {

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

    question_3.style.display = 'none'
    question_4.style.display = 'block'
}

function question4YesNo() {}

// question4 - relates to question-4.png
function question4Amount() {
    
    // variable assignment
    let alcoholRadioSelect = document.getElementsByName('alcohol-radio') // alcohol yes-no radio select
    let alcoholAmountRadioForm = document.getElementById('alcohol-amount') // alcohol amount radio buttons in fieldset

    // update progress-bar length to 42%
    progressBar = '42%'

    if (alcoholRadioSelect == 'yes') {
        alcoholAmountRadioForm.style.display = 'block'
        // block not set in stone - will need to change based on CSS design
        userData['alcohol'] = true
        console.log(`Drinks`)
    }

    if (alcoholRadioSelect == 'no' ){
        alcoholAmountRadioForm.style.display = 'none'
        userData['alcohol'] = false
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

    console.log(`userData object has values: ${userData}`)

    question_4.style.display = 'none'
    question_5.style.display = 'block'
}

function question5YesNo() {}

// question 5 - relates to question-5.png
// coffee is a placeholder for a hot drink - tea, hot chocolate, etc
function question5Amount() {

    // variable assignment
    let coffeeRadioSelect = document.getElementsByName('coffee-radio') // coffee yes-no radio selector
    let coffeeAmountRadioForm = document.getElementById('coffee-amount')

    // update progressBar to 56%
    progressBar = '56%'

    if (coffeeRadioSelect == 'yes') {
        coffeeAmountRadioForm.style.display = 'block'
        // block not set in stone - will need to change based on CSS design
        userData['coffee'] = true
        console.log(`Drinks coffee`)
    }

    if (coffeeRadioSelect == 'no'){
        coffeeAmountRadioForm.style.display = 'none'
        userData['coffee'] = false
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

    question_5.style.display = 'none'
    question_6.style.display = 'block'
}

function question6YesNo(){}

function question6Amount() {

    // variable assignment
    let clothingRadioSelect = document.getElementsByName('clothes-radio') // coffee yes-no radio selector
    let clothingAmountRadioForm = document.getElementById('clothes-amount')

    // update progressBar to 70%
    progressBar = '70%'

    if (clothingRadioSelect == 'yes') {
        clothingAmountRadioForm.style.display = 'block'
        // block not set in stone - will need to change based on CSS design
        userData['clothing'] = true
        console.log(`buys clothes`)
    }

    if (clothingRadioSelect == 'no'){
        clothingAmountRadioForm.style.display = 'none'
        userData['clothing'] = false
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

    question_6.style.display = 'none'
    question_7.style.display = 'block'
}

function question7YesNo() {}

function question7Amount() {

    // variable assignment
    let lotteryRadioSelect = document.getElementById('lottery-radio') // lottery yes-no radio selector
    let lotteryAmountRadioForm = document.getElementById('lottery-amount')

    // update progressBar to 84%
    progressBar = '84%'

    if (lotteryRadioSelect == 'yes') {
        lotteryAmountRadioForm.style.display = 'block'
        // block not set in stone - will need to change based on CSS design
        userData['lottery'] = true
        console.log(`buys lottery tickets`)
    }

    if (lotteryRadioSelect == 'no'){
        lotteryAmountRadioForm.style.display = 'none'
        userData['lottery'] = false
        console.log(`does not buy clothes`)
    }

    let lotteryAmount = document.getElementsByName('lottery-amount')

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

    question_7.style.display = 'none'
    finalOutput.style.display = 'block'
}

// Final function
// amount to save and time period ex. £150 and 3 months
// Cara's approach:
// divide amount to save by time period
// this gives amount to save per unit time, so in this case £50 / month

// prelimary data:
// £12.60 per pack of 20 cigarettes
// £3.40 for a latte/cappucino
// £5 per drink
// £80 per month
// £2.50 per ticket

function final() {

    // update progressBar to 100%
    progressBar = '100%'

    // unpack userData object into function-scope variables
    console.log('unpack userData')
    let amountToSave = userData['amountToSave']
    let timeScale = userData['timeScale']
    let timeUnits = userData['timeUnits']
    let currency = userDatap['currency']
    // amounts below are currency amounts (£50), not numbers of objects (3 packs of cigarettes)
    let smokeAmount = userData['smokeAmount']
    let alcoholAmount = userData['alcoholAmount']
    let coffeeAmount = userData['coffeeAmount']
    let clothingAmount = userData['clothingAmount']
    let lotteryAmount  = userData['lotteryAmount']
    // boolean true/false values of userData
    let smoke = userData['smoke']
    let alcohol = userData['alcohol']
    let coffee = userData['coffee']
    let clothing = userData['clothing']
    let lottery = userData['lottery']

    // average prices of stuff:
    smokePrice = 12.60
    alcoholPrice = 5.00
    coffeePrice = 3.40
    clothingPrice = 80.00
    lotteryPrice = 2.50

    // now calculate the length of time it would take to save the specified amount of money just by forgoing that one thing
    // would need to check to see if this length of time is greater than the timeScale
    // for example 150 / 15

    // instantiate an empty array that will contain the time periods calculated below. Contains integers
    let active_elements = []

    // Instantiate a second array to hold strings = "packs of cigarettes", "cups of coffee", etc
    let strings = []
    // contains strings

    // pretty sure this needs the inputs of costs of packs of cigarettes, shopping trips, etc
    if (smoke == true) {
        let packsToGiveUp = (smokeAmount / smokePrice) * timeScale
        active_elements.push(packsToGiveUp)
        strings.push("packs of cigarettes") // can change this to whatever unit we decide works best
        console.log(`user must give up ${packsToGiveUp} packs of cigarettes`)
    }

    if (alcohol == true) {
        let alcoholicDrinksToGiveUp = (alcoholAmount / alcoholPrice) * timeScale
        active_elements.push(alcoholicDrinksToGiveUp)
        strings.push("akcoholic drinks")
        console.log(`The user must give up ${alcoholicDrinksToGiveUp} alcoholic drinks`)
    }

    if (coffee == true) {
        let coffeeToGiveUp = (coffeeAmount / coffeePrice) * timeScale
        active_elements.push(coffeeToGiveUp)
        strings.push("cups of coffee")
        console.log(`user must give up ${coffeeToGiveUp} cups of coffee`)
    }

    if (clothing == true) {
        let clothingToGiveUp = (clothingAmount / clothingPrice) * timeScale
        active_elements.push(clothingToGiveUp)
        strings.push("shopping trips")
        console.log(`user must give up ${clothingToGiveUp} shopping trips`)
    }

    if (lottery == true) {
        let lotteryToGiveUp = (lotteryAmount / lotteryPrice) * timeScale
        active_elements.push(lotteryToGiveUp)
        strings.push("lottery tickets")
        console.log(`user must give up ${lotteryToGiveUp} lottery tickets`)
    }

    // active_elements array should now contain some elements
    console.log(`active_elements array is ${active_elements}`)

    // get length of the array
    let length = active_elements.length
    // length should be same as strings.length
    // active_elements.length == strings.length

    // log out length, remove in final build
    console.log(length)

    //get a random number between 0 and and the integer length of the array
    // so between 0 and 3 if the array is 3 elements long
    random = Math.floor(Math.random() * length) + 1
    // between 1 and 5 if user smokes, drinks, coffees, shops and lotterys

    // use the random number to get an associated random index of the active_elements array
    let suggestion = active_elements[random]
    let suggestion_string = strings[random]

    // second array will have same number of elements as suggestion
    // ergo, same length means that random can be used to index both and get the same element

    // this is where we push the suggested number of things to give up to the user
    finalOutput.innerText = `The Penny Smart tool recommends that you give up ${suggestion} ${suggestion_string} for ${timeScale} ${timeUnits} to save ${amountToSave} ${currency}`
    // this should inject "The Penny Smart tool recommends that you give up 10 fewer cups of coffee over 5 weeks to save 50 pounds"
}


// API

