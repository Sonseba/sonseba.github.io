const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener('click', () => {
    if (currentActive <= circles.length) currentActive++
    update()
})

prev.addEventListener('click', () => {
    if (currentActive >= 1) currentActive--
    update()
})

function update() {
    updateCircle()
    updateButtons()
}

function updateCircle() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    })

}

function updateButtons() {

    progress.style.width = (currentActive - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) prev.disabled = true
    if (currentActive === circles.length) next.disabled = true

    if (currentActive > 1 && currentActive < circles.length) {
        next.disabled = prev.disabled = false
    }
}