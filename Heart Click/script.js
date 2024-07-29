const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times')

let lastClick = 0

loveMe.addEventListener('click', (e) => {

    if(lastClick && lastClick+800 > e.timeStamp ){
        createHeart(e)
        lastClick = 0

    }
    lastClick = e.timeStamp
})



function createHeart(e) {
    console.log(e.clientX)
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = Number(times.innerHTML)+1

    setTimeout(() => heart.remove(),1000)
}