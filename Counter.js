const counterBtn = document.querySelector('.counterBtn button');
const secCountBtn = document.querySelector('.secCountBtn button');

let countNum = document.querySelector('.countNum h1');
let countNum2 = document.querySelector('.countNum2 h1');

let dueDate = new Date("Oct 25, 2020 12:00:00").getTime();
let timer = setInterval(tick, 1000);

counterBtn.addEventListener('click', countUp);
secCountBtn.addEventListener('click', secCountUp);

function countUp(){
    countNum.innerHTML ++;
}

function secCountUp(){
    countNum2.innerHTML ++;
}

// function countdown() {
//     var now = new Date();
//     var eventDate = new Date(2020, 9, 26);

//     var currentTime = now.getTime();
//     var eventTime = eventDate.getTime();

//     var remainderTime = eventTime - currentTime;

//     var s = Math.floor(remainderTime / 1000);
//     var m = Math.floor(s / 60);
//     var h = Math.floor(m / 60);
//     var d = Math.floor(h / 24);

//     h %= 24;
//     m %= 60;
//     s %= 60;

//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;

//     document.getElementById("days").textContent = d;
//     document.getElementById("hours").textContent = h;
//     document.getElementById("minutes").textContent = m;
//     document.getElementById("seconds").textContent = s;

//     setTimeout(countdown, 1000);
// }
// countdown();
function tick (){
    let now = new Date().getTime();
    let t = dueDate - now;

    if(t > 0){

        let days = Math.floor( t / (1000* 60 * 60 * 24));
        if( days < 10) { days = "0" + days; }

        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if( hours < 10) { hours = "0" + hours; }

        let mins = Math.floor(( t % (1000* 60 * 60)) / (1000 * 60));
        if( mins < 10) { mins = "0" + mins; }

        let secs = Math.floor(( t % (1000* 60 * 60 * 24)) / 1000);
        if( secs < 10) { secs = "0" + secs; }

        let time = "${days} : ${hours} : ${mins} : ${secs}";

        document.querySelector(".countdown").innerHTML = time;
    }
}

