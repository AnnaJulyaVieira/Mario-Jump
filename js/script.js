const mario = document.querySelector('.mario')
const paper = document.querySelector('.paper')


const jump  = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')

    }, 600)
}

const loop = setInterval(() => {
    console.log();

    const paperPosition = paper.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if(paperPosition <= 110 && paperPosition > 0 && marioPosition < 80 )
    {
        paper.style.animation = 'none';
        paper.style.left = `${paperPosition}px`

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`

        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', jump)

