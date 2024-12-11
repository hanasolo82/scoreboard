
// aqui las funciones
let initialHomeScore = 0
let btnAddOne =  1
let btnAddTwo =  2
let btnAddThree =  3
document.getElementById('number-box-home').textContent = initialHomeScore


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