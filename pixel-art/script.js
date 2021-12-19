const row = 10
const column = 10
let color = ""

const gridTable = document.createElement('table')
document.querySelector('#wrapper').appendChild(gridTable)

for (let i = 0; i < row; i++) {
    const gridRow = document.createElement('tr')
    gridTable.appendChild(gridRow)

    for (let j = 0; j < column; j++) {
        const gridCell = document.createElement('td')
        gridRow.appendChild(gridCell)
    }
}

function colors() {
    return Math.floor(Math.random() * 256)
}

for (let i = 0; i < 1; i++) {
    const gridRow = document.createElement('tr')
    document.querySelector('#colors').appendChild(gridRow)

    for (j = 0; j < column; j++) {
        const gridCell = document.createElement('td')
        gridCell.style.backgroundColor = `rgb(${colors()},${colors()},${colors()})`
        gridRow.appendChild(gridCell)
    }
}

let mousedown = false

document.querySelector('table').addEventListener("mousedown", function (e) {
    mousedown = true
    document.querySelector('table').addEventListener('mouseover', function (e) {
        if (mousedown) {
            e.target.style.backgroundColor = color
        }
    })
})

document.querySelector('table').addEventListener("mouseup", function (e) {
    mousedown = false
})

document.querySelector('table').addEventListener("click", function (e) {
    if (e.target.style.backgroundColor) {
        e.target.style.backgroundColor = ""
    } else {
        if (e.target.tagName === 'TD') {
            e.target.style.backgroundColor = color
        }
    }
})

document.querySelector('#colors').addEventListener("click", function (e) {
    color = e.target.style.backgroundColor
})
