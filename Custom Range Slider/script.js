const range = document.getElementById('range');

range.addEventListener('input', (e) => {
    const value = e.target.value;
    const label = e.target.nextElementSibling;

    const range_width = parseFloat(getComputedStyle(range).getPropertyValue('width'));
    const label_width = parseFloat(getComputedStyle(label).getPropertyValue('width'));
    const max = parseInt(e.target.max)
    const min = parseInt(e.target.min)

    const left = value * (range_width/100) - label_width/2 + scale(value,min,max,10,-10)
    label.style.left = left + 'px'


    label.innerHTML = value
})



const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}