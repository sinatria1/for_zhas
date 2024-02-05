const mdiv = document.getElementById('message');
const nbtn = document.querySelector('.no');
const ybtn = document.querySelector('.yes');

nbtn.addEventListener('click', ()=>{
    const sw = window.innerWidth;
    const sh = window.innerHeight;

    const bw = nbtn.offsetWidth;
    const bh = nbtn.offsetHeight;

    const randx = Math.floor(Math.random() * (sw - bw));
    const randy = Math.floor(Math.random() * (sh - bh));

    nbtn.style.left = randx + 'px';
    nbtn.style.top = randy + 'px';

});

ybtn.addEventListener('click', ()=>{
    mdiv.textContent = "Woahhh STFU !!! i love you too zhas";
});
