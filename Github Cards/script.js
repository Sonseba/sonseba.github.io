const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(userName) {

    try {
        const {data} = await axios.get(APIURL + userName)
        createUserCard(data)
        getRepos(userName)
    } catch (err) {
        if (err.response.status === 404) {
            createErrorCard('No Profile With This Username')
        }
    }

}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)

        })

}

async function getRepos(userName) {

    try {
        const {data} = await axios.get(APIURL + userName + '/repos?sort=created')

        console.log(data)

        addReposToCard(data)
    } catch (err) {
        console.log(err)
        createErrorCard('Problem fetching repos')
    }

}

function createUserCard(user) {
    const userID = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    main.innerHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="" class="avatar">
        </div>
        <div class="user-info">
            <h2>${userID}</h2>
            <p>${userBio}</p>

            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>
            <div id="repos">
            </div>
        </div>
    </div>
    `
}

function createErrorCard(msg) {
    main.innerHTML = `
    <div class="card"><h1>${msg}</h1></div>`
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const user = search.value

    if (user) {
        getUser(user)

        search.value = ''
    }
})