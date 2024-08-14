const ratings = document.querySelectorAll('.rating');
const ratingContainer = document.querySelector('.ratings-container');
const send = document.getElementById('send');
const panel = document.getElementById('panel');
let selectedRating = 'Satisfied'

ratingContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

send.addEventListener('click', () => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support.</p>
    `
})

function removeActive() {
    ratings.forEach(rating => {
        rating.classList.remove('active')
    })
}