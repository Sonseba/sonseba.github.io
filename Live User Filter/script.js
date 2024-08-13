/**
 *
 * @property {string} user.picture.large
 * @property {string} user.name.first
 * @property {string} user.name.last
 * @property {string} user.location.city
 * @property {string} user.location.country
 */

const result = document.getElementById("result");
const filter = document.getElementById("filter");
const API_LINK = 'https://randomuser.me/api?results=50'
const listItems = []

filter.addEventListener('input', (e) => {
    filterData(e.target.value)
})

async function getData() {
    const res = await fetch(API_LINK)

    const {results} = await res.json()

    //clear results
    result.innerHTML = ''

    results.forEach((user) => {
        const li = document.createElement("li");

        listItems.push(li)

        li.innerHTML = `
            <img src ="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        result.appendChild(li)
    })

}

getData().then(() => {})

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase()) ) {
            item.classList.remove('hide')
        }
        else {
            item.classList.add('hide')
        }
    })
}