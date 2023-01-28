const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
next.addEventListener('click', () => {
    currentActive++;
    currentActive = currentActive > circles.length && circles.length;
    update();
});

prev.addEventListener('click', () => {
    currentActive--;
    currentActive = currentActive < 1 && circles.length;
    update();
});

function update() {
    circles.forEach((circle, index) => {
        index < currentActive ? circle.classList.add('active') : circle.classList.remove('active')
        console.log(index);
    });

    const actives = document.querySelectorAll('.active');
    console.log(actives.length / circles.length);
}