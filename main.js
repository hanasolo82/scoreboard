
// aqui las funciones
let initialHomeScore = 0
let initialGuestScore = 0
let btnAddOne =  1
let btnAddTwo =  2
let btnAddThree =  3
document.getElementById('number-box-home').textContent = initialHomeScore
document.getElementById('number-box-guest').textContent = initialGuestScore

let homeScoreEl = document.getElementById('number-box-home')

function addOne() {
    let result = initialHomeScore += btnAddOne
    return homeScoreEl.textContent = result
}

function addTwo() {
    let result = initialHomeScore += btnAddTwo
    return homeScoreEl.textContent = result
}

function addThree() {
    let result = initialHomeScore += btnAddThree
    return homeScoreEl.textContent = result
}

/*------------------Guest-------------------------------*/

let guestScoreEl = document.getElementById('number-box-guest')

function addOneGuest() {
    let result = initialHomeScore += btnAddOne
    return guestScoreEl.textContent = result
}

function addTwoGuest() {
    let result = initialHomeScore += btnAddTwo
    return guestScoreEl.textContent = result
}

function addThreeGuest() {
    let result = initialHomeScore += btnAddThree
    return guestScoreEl.textContent = result
}