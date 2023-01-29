const actives = document.querySelectorAll('.active');
const circles  = document.querySelectorAll('.circle');
const prev     = document.getElementById('prev');
const progress = document.getElementById('progress');
const next     = document.getElementById('next');
let currentActive = 1;
progress.style.width = currentActive + "%";

toogleButtons(prev, true);
toogleButtons(next);
circles.forEach((element, index) => {
    element.addEventListener('click', function() {
        document.querySelector('.active').classList.remove('active');
        element.classList.remove('inactive');
        element.classList.add('active');
        currentActive = (index + 1) / 4 * 100;
        progress.style.width = currentActive <= 100 && currentActive + "%";
        toogleButtons(prev, true);
        toogleButtons(next);
    });
});
next.addEventListener('click', () => {
    currentActive++;
    currentActive += currentActive > circles.length && circles.length;
    update();
});

prev.addEventListener('click', () => {
    currentActive--;
    currentActive += currentActive < 1 && 1;
    update();
});

function update() {
    circles.forEach((circle, index) => {
        index < currentActive ? circle.classList.add('active') : circle.classList.remove('active');
        console.log(progress.style.width = currentActive + "%");
    });
    toogleButtons(prev, true);
    toogleButtons(next);
    progress.style.width = currentActive <= 4 ? (currentActive / 4) * 100 + '%' : '100%';
}

function toogleButtons(btn, prev=false) {
    btn.disabled = prev ? (currentActive === 1 ? true : false) : (currentActive === circles.length ? true : false);
    btn.classList.toggle('disabled', btn.disabled);
}
