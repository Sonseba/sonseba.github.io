const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');


toggleEl.addEventListener('click', () => {

    const htmlEl = document.querySelector('html')
    htmlEl.classList.toggle('dark');

    if(htmlEl.classList.contains('dark')) {
        toggleEl.textContent = 'Light Mode';
    } else {
        toggleEl.textContent = 'Dark Mode';
    }

})

function setTime() {

    const time = new Date();
    const month = time.toLocaleString('en-us', { month: 'short' });
    const day = time.toLocaleDateString('en-us', { weekday: 'long' });
    const date = time.getDate();
    const hour = time.getHours()
    const hourShort = hour % 12;
    const minute = time.getMinutes();
    const second = time.getSeconds();

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hourShort,0,11,0,360 )}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute,0,59,0,360 )}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second,0,59,0,360 )}deg)`;

    timeEl.innerHTML = `${hour < 10 ? `0${hour}`:hour}:${minute < 10 ? `0${minute}`:minute}:${second < 10 ? `0${second}`:second}`;
    dateEl.innerHTML = `${day}, ${month} <span class="circle">${date} </span>`

}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();

setInterval(setTime,1000)