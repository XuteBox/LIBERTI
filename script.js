/* Navigation hide on scroll */

const nav = document.getElementById('navigation')
let lastScrollY = window.scrollY

document.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add("hidden")
    }
    else {
        nav.classList.remove("hidden")
    }
    lastScrollY = window.scrollY
})

/* Custom Cursor */

const cursor = document.querySelector('.custom-cursor.site-wide')
const pointer = document.querySelector('.site-wide .pointer')
const headings = document.querySelectorAll('a, h1, button')
const logos = document.querySelectorAll('.logo')

document.body.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
});

document.body.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
});

document.addEventListener('pointermove', (e) => {
    const w = cursor.clientWidth;
    const h = cursor.clientHeight;
    cursor.style.transform = `translate(${e.clientX - w / 2}px, ${e.clientY - h / 2}px)`
})

function updateCursorPosition(e) {
    const w = cursor.clientWidth;
    const h = cursor.clientHeight;
    cursor.style.transform = `translate(${e.clientX - w / 2}px, ${e.clientY - h / 2}px)`;
}

document.addEventListener('mousemove', (e) => {
    updateCursorPosition(e);
});
document.addEventListener('pointermove', (e) => {
    updateCursorPosition(e);
});
document.addEventListener('dragover', (e) => {
    updateCursorPosition(e);
});

document.addEventListener('mousedown', (e) => {
    pointer.classList.add('active')
})

document.addEventListener('mouseup', (e) => {
    pointer.classList.remove('active')
})

document.addEventListener('dragend', (e) => {
    pointer.classList.remove('active')
})

logos.forEach(a => {
    a.addEventListener('mouseenter', () => {
        pointer.classList.add('headHover')
    })
    a.addEventListener('mouseleave', () => {
        pointer.classList.remove('headHover')
    })
})

headings.forEach(a => {
    a.addEventListener('mouseenter', () => {
        pointer.classList.add('hover')
    })
    a.addEventListener('mouseleave', () => {
        pointer.classList.remove('hover')
    })
})