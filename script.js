let div = document.getElementById('container');
let buttons = Array.from(div.children);
buttons.sort((a, b) => a.innerText.localeCompare(b.innerText))
div.innerHTML = '';
buttons.forEach(b => div.appendChild(b));