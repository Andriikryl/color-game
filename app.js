const board = document.querySelector('#board')
const SQuares_number = 450

for (let i = 0; i < SQuares_number; i++){
    const square =document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    board.append(square)
}

function setColor(element) {
    element.style.backgroundColor = 'red'
}