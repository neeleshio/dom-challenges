const progress = document.querySelector('.progress')
const button = document.querySelector('button')
const wrapper = document.querySelector('.wrapper')

let width = 350
let progressWidth = 0

wrapper.style.width = `${width}px`

function progressBar() {
    if (progressWidth <= width) {
        setTimeout(() => {
            progress.style.width = `${progressWidth}px`

            progressWidth = progressWidth + 1
            progressBar()
        }, 10);
    } else {
        button.disabled = false
    }
}

button.addEventListener('click', () => {
    progressWidth = 0
    progressBar()
    button.disabled = true
})