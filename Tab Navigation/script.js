const buttons = document.querySelectorAll('nav ul li')
const content = document.querySelectorAll('.content')

buttons.forEach((button, idx) => {
    button.addEventListener('click', () => {
        deactivatePrevious()
        makeActive(button,idx)
        console.log(button)
    })
})


function makeActive(clickedButton,index) {
    clickedButton.classList.add('active')
    content[index].classList.add('show')
}

function deactivatePrevious(){
    buttons.forEach((button) => {
        button.classList.remove('active')
    })
    content.forEach((img) => {
        img.classList.remove('show')
    })
}