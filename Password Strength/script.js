const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e) => {
    const input = e.target.value
    const blurValue = 20 -(input.length*2)

    background.style.filter = `blur(${blurValue}px)`
})
