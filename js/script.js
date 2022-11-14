const expertCoachesSpan = document.querySelector('.expert-coaches-span');
const membersJoinedSpan = document.querySelector('.members-joined-span');
const fitnessProgramsSpan = document.querySelector('.fitness-programs-span');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hiddenMenu = document.querySelector('.hidden-menu-box');

// Hamburger Menu Toggle Hidden Menu

hamburgerMenu.addEventListener("click", ()=> {
    hiddenMenu.classList.toggle("display");
});

// Window Scroll = True, hide menu (responsive)

window.onscroll = ()=> {
    if(hiddenMenu.classList.contains("display")) {
        hiddenMenu.classList.remove("display");
    }
};

// Animate effects

function cron1() {
    let res = 100;
    let cron;

    cron = setInterval(()=> {
        ++res;
        if(res == 170) {
            clearInterval(cron);
        }
        expertCoachesSpan.innerHTML = res;
    }, 25);
};

function cron2() {
    let res = 880;
    let cron;

    cron = setInterval(()=> {
        ++res;
        if(res == 978) {
            clearInterval(cron);
        }
        membersJoinedSpan.innerHTML = res;
    }, 17);
};

function cron3() {
    let res = 0;
    let cron;

    cron = setInterval(()=> {
        ++res;
        if(res == 50) {
            clearInterval(cron);
        }
        fitnessProgramsSpan.innerHTML = res;
    }, 30);
}

$(document).load(
    /* Orange Little box move */
    $('.orange-move-box').animate(
        {left: '0.5em'}, 2000),
    /* Main section counters */
    cron1(), cron2(), cron3()
);