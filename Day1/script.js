const circles     = document.querySelectorAll('.circle');
const disabled    = document.getElementById('.disabled');
const prev        = document.getElementById('prev');
const progress    = document.getElementById('progress');
const next        = document.getElementById('next');
let currentActive = 1;
let currentBtn = 1;
progress.style.width =  "25%";
toogleButtons(prev,true);
toogleButtons(next);

circles.forEach((element, index) => {
    element.addEventListener('click', function() {
        document.querySelector('.active').classList.remove('active');
        element.classList.remove('inactive');
        element.classList.add('active');
        currentBtn = (index + 1) / 4 * 100;
        progress.style.width = currentBtn <= 100 && currentBtn + "%";
        toogleButtons(prev,true);
        toogleButtons(next);

        if (progress.style.width == '100%') {
            circles[3].setAttribute('disabled', true);
            next.setAttribute('disabled', true);
            next.classList.add('disabled');
        } else {
            circles[3].removeAttribute('disabled');
            next.removeAttribute('disabled');
            next.classList.remove('disabled');
        }
    });
});
this.next.addEventListener('click', () => {
    currentActive++;
    currentActive += currentActive > circles.length && circles.length;
    update();
    currentActive > 4 && 4;
    currentActive >= 4 && this.next.classList.add('disabled');
    console.log(currentActive)
});
prev.addEventListener('click', () => {
    currentActive--;
    currentActive < 1 && 1;
    currentActive += currentActive < 1 && 1;
    update();
});


function update() {
    circles.forEach((circle, index) => {
        index < currentActive ? circle.classList.add('active') : circle.classList.remove('active');
        progress.style.width = currentActive + "%";
        toogleButtons(prev,true);
        toogleButtons(next);
    });
    progress.style.width = currentActive <= 4 ? (currentActive / 4) * 100 + '%' : '100%';
    if (progress.style.width == '100%') {
        next.setAttribute("disabled", true);
    } else {
        next.removeAttribute("disabled");
    }
}


function toogleButtons(btn, isPrev=false) {
    btn = isPrev ? this.prev : next
    btn.disabled = isPrev ? (currentActive === 1 ? true : false) : (currentActive === circles.length ? true : false);
    this.prev.disabled = progress.style.width <= '25%' && currentActive < 2 && currentBtn <= 25 && true;
    btn.classList.toggle('disabled', btn.disabled);
    console.log(currentBtn)
}