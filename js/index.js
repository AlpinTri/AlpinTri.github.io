window.addEventListener('load', () => {
    document.querySelector('h1').classList.add('reveal');
    document.querySelector('.profile-detail').classList.add('reveal');
});

const mid = document.querySelector('.mid-detail');
const foot = document.querySelector('.container-footer');
const el = [mid, foot];
window.addEventListener('scroll', () => {
    el.forEach(e => {
        if (e.getBoundingClientRect().top < window.innerHeight - 100) {
            e.classList.add('reveal');
        };
    });
});