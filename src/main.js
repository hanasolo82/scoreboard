
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
    let results = initialHomeScore += btnAddOne
    return homeScoreEl.textContent = results
}

function addTwo() {
    let results = initialHomeScore += btnAddTwo
    return homeScoreEl.textContent = results
}

function addThree() {
    let results = initialHomeScore += btnAddThree
    return homeScoreEl.textContent = results
}

/*------------------Guest-------------------------------*/

let guestScoreEl = document.getElementById('number-box-guest')

function addOneGuest() {
    let result = initialGuestScore += btnAddOne
    return guestScoreEl.textContent = result

}
function addTwoGuest() {
    let result = initialGuestScore += btnAddTwo
    return guestScoreEl.textContent = result
}

function addThreeGuest() {
    let result = initialGuestScore += btnAddThree
    return guestScoreEl.textContent = result
}
