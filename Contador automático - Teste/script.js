const caixa = document.querySelector('#caixa');


window.onload = () => {
    let res = 100;
    let cron;

    cron = setInterval(()=> {
        ++res;
        if(res == 170) {
            clearInterval(cron);
        }
        caixa.innerHTML = res;
    }, 20);
}