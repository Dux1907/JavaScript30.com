const panels = document.querySelectorAll('.panel')

function open() {
    console.log('opened')
    this.classList.toggle('open')
}
function openActive(e) {
    console.log('hi')
    if (e.propertyName.includes('flex-grow'))
        this.classList.toggle('open-active')
}

panels.forEach(panel => panel.addEventListener('click', open))
panels.forEach(panel => panel.addEventListener('transitionend',openActive))