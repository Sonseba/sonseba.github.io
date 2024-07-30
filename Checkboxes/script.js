const toggles = document.querySelectorAll('.toggle');
const togglesLength = toggles.length;
let checked = []

toggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => doTheTrick(e.target))
})


function doTheTrick (clickedOne) {

    if(clickedOne.checked) {
        checked.push(clickedOne)
    } else {
        checked = checked.filter(e => e !== clickedOne)
    }

    if (checked.length ===togglesLength) {
        checked[0].checked = false
        checked = checked.slice(1,togglesLength)
    }
    console.log(checked)
}