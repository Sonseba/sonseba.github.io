const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = "This is great!"

let idx = 1
let speed = speedEl.value

writeText()


function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++
    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, (300 /speed) )
}


speedEl.addEventListener('input', (e) => {
    speed = e.target.value
})