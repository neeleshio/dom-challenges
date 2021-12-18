const stars = 5
let rating = 0
let allStars = "";

//mount the stars
for (let i = 0; i < stars; i++) {
    allStars = allStars + `<span class="star" id="star-${i}">☆</span>`
}

document.querySelector("#wrapper").innerHTML = allStars

//on hover: return target element id number & uncolor all the stars & color all the stars till that returned id element.
document.querySelector("#wrapper").addEventListener("mouseover", (e) => {
    if (e.target.id !== "wrapper") {
        const starNum = (e.target.id).split('-')[1];

        for (let i = 0; i < stars; i++) {
            document.querySelector(`#star-${i}`).style.color = "#FFFFFF"
        }

        for (let i = 0; i < Number(starNum) + 1; i++) {
            document.querySelector(`#star-${i}`).style.color = "#FCE100"
        }
    }
})

//on click: return clicked element's id & color all the stars till that returned id element.
//same as on hover above but before, uncolor all the stars.
document.querySelector("#wrapper").addEventListener("click", (e) => {
    if (e.target.id !== "wrapper") {
        const starNum = (e.target.id).split('-')[1];
        rating = Number(starNum) + 1;

        document.querySelector("#rating").textContent = Number(starNum) + 1;

        for (let i = 0; i < stars; i++) {
            document.querySelector(`#star-${i}`).style.color = "#FFFFFF"
        }

        for (let i = 0; i < Number(starNum) + 1; i++) {
            document.querySelector(`#star-${i}`).style.color = "#FCE100"
        }
    }
})

//on mouse leave: uncolor all the stars. if rating exists, color the stars using rating data.
document.querySelector("#wrapper").addEventListener("mouseout", (e) => {
    for (let i = 0; i < stars; i++) {
        document.querySelector(`#star-${i}`).style.color = "#FFFFFF"
    }

    if (rating > 0) {
        for (let i = 0; i < rating; i++) {
            document.querySelector(`#star-${i}`).style.color = "#FCE100"
        }
    }
})


