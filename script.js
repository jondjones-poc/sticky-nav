const nav = document.querySelector('.nav');

const fixNav = () => {
    const y = window.scrollY;
    const offset = nav.offsetHeight + 150;
console.log(offset)
    if (y > offset) {
        nav.classList.add('active');
        console.log(1)
    } else {
        nav.classList.remove('active');
        console.log(2)
    }
}

window.addEventListener('scroll', fixNav);