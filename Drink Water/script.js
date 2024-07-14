const smallCups = document.querySelectorAll('.cup-small')

const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup,idx) => {
        cup.addEventListener('click', () => {highlightCups(idx)})
    }

)

function highlightCups(idx) {
        smallCups.forEach((cup,idx2) => {
            if(idx2 === idx) {
                cup.classList.toggle('full')
            } else {
                if(idx2 < idx) {
                    cup.classList.add('full')
                }
                else
                    cup.classList.remove('full')
            }
        })
    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length
    const currentHeight = ((fullCups/totalCups) *330).toString() + 'px'
    const currentPercent = ((fullCups/totalCups) *100).toString() + '%'
    const remaining = ((totalCups-fullCups)*250/1000).toString() + 'L'



    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = '0'
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = currentHeight.toString()
        percentage.innerText = currentPercent
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        console.log(remained.style.height)
        remained.style.height = '0'
    }
    else {
        remained.style.visibility  = 'visible'
        remained.style.height = ''
        liters.innerText =remaining
    }

}