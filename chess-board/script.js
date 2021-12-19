const rows = 8
const columns = 8
let activeCell = null

for (let i = 0; i < rows; i++) {
    const gridRow = document.createElement('tr')
    document.querySelector('#wrapper').appendChild(gridRow)

    for (let j = 0; j < columns; j++) {
        const gridCell = document.createElement('td')
        gridCell.classList.add(`a${i}-${j}`)

        if (i % 2 !== 0) {
            if (j % 2 === 0) {
                gridCell.classList.add('black')
            }
        } else {
            if (j % 2 !== 0) {
                gridCell.classList.add('black')
            }
        }
        gridRow.appendChild(gridCell)
    }
}

document.querySelector('#wrapper').addEventListener('click', (e) => {
    if (activeCell) activeCell.removeAttribute('id')
    let x = ""
    let y = ""

    if (e.target.id !== "wrapper") {
        activeCell = e.target
        e.target.setAttribute('id', 'active')
        x = Number(e.target.classList['value'].split(" ")[0].split("-")[0].split("")[1])
        y = Number(e.target.classList['value'].split(" ")[0].split("-")[1])
    }

    document.querySelector(`.a${x + 1}-${y + 1}`).setAttribute('id', 'diagonal')
    document.querySelector(`.a${x + 1}-${y - 1}`).setAttribute('id', 'diagonal')
    document.querySelector(`.a${x - 1}-${y + 1}`).setAttribute('id', 'diagonal')
    document.querySelector(`.a${x - 1}-${y - 1}`).setAttribute('id', 'diagonal')
})
