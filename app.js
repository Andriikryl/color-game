const board = document.querySelector('#board')
const SQuares_number = 500


function generetRandomColor(){
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for(let i = 0; i < 6; i++){
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

for (let i = 0; i < SQuares_number; i++){
    const square =document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    element.style.backgroundColor = generetRandomColor()
    element.style.boxShadow = `0 0 2px ${generetRandomColor()}, 0 0 10px ${generetRandomColor()}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

