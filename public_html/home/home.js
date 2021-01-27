setInterval(setClock, 1000)

const hourHand = document.querySelector('[handhour]');
const minuteHand = document.querySelector('[handminute]');
const secondHand = document.querySelector('[handsecond]');

function setClock(){
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

    setRatio(hourHand, hourRatio);
    setRatio(minuteHand, minuteRatio);
    setRatio(secondHand, secondRatio);
}

function setRatio(element, rotateRatio){
    element.style.setProperty('--rotation', rotateRatio * 360);
}

setClock();