const leftButton = document.getElementById('left')
const rightButton = document.getElementById('right')
const imgContainer = document.getElementById('imgs')
const imageSize = imgContainer.children.length
let index = 0

leftButton.addEventListener('click', () => {
    index--
    move()
})

rightButton.addEventListener('click', () => {
    index++
    move()
})

function move(){
    if (index === 0) {
        index = imageSize-1
    } else {
        if( index === imageSize ) {
            index = 0
    }}

    updateImg()
}


function updateImg(){
    imgContainer.style.transform = `translateX(-${index*100}%)`
}