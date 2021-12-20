const wrapper = document.querySelector(".wrapper")
const button = document.querySelector("button")
const scoreElem = document.querySelector('.score')
const levelElem = document.querySelector('.level')

const row = 5
const column = 5
let imposter = null
let level = 0
let score = 0

for (let i = 0; i < row; i++) {
    const gridRow = document.createElement('tr')
    wrapper.appendChild(gridRow)

    for (let j = 0; j < column; j++) {
        const gridCell = document.createElement('td')
        gridRow.appendChild(gridCell)
    }
}

scoreElem.textContent = score
levelElem.textContent = level

function rc() {
    return Math.floor(Math.random() * 255)
}

function startGame() {
    level = level + 1
    levelElem.textContent = level

    const randomNum = Math.floor(Math.random() * (row * column))
    const randomCell = wrapper.querySelectorAll('td')[randomNum]

    const tableCells = wrapper.querySelectorAll('td')

    imposter = randomCell
    let randomColor = ""
    randomColor = `${rc()}, ${rc()}, ${rc()}`

    for (let i = 0; i < tableCells.length; i++) {
        tableCells[i].style.backgroundColor = `rgb(${randomColor})`
    }
    randomCell.style.backgroundColor = `rgba(${randomColor}, 0.9)`
}

document.querySelector('.wrapper').addEventListener('click', (e) => {
    if (e.target === imposter) {
        score = score + 1
        scoreElem.textContent = score
        startGame()
    } else {
        wrapper.classList.add("shake")
        setTimeout(() => {
            wrapper.classList.remove("shake")
            startGame()
        }, 500);
    }
})

button.addEventListener('click', () => {
    startGame()
})