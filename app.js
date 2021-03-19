window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    const key = document.querySelector(`.white-key[data-key = "${e.keyCode}"]`) || document.querySelector(`.black-key[data-key = "${e.keyCode}"]`)

    if (!audio) return  // stop function for empty character
    audio.currentTime = 0 // sound repeatedly
    audio.play()

    $(key).addClass('playing');
}
)

function removeTransition(e) {
    if(e.propertyName != "transform" ) return
    $(this).removeClass('playing');
}


const whiteKeys = document.querySelectorAll('.white-key')
const blackKeys = document.querySelectorAll('.black-key')

whiteKeys.forEach(key => key.addEventListener('transitionend', removeTransition))
blackKeys.forEach(key => key.addEventListener('transitionend', removeTransition))
