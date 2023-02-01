const flappy = document.querySelector("#flappy")
const game = document.querySelector(".game")

const clickEvent = () => {
    let gravityAdd = 2
    const gravity = setInterval(frame, 10);
    function frame() {
        let flappyTop = parseInt(window.getComputedStyle(flappy).getPropertyValue("top"))
        if (flappy.style.top == 600 + "px") {
            console.log("time to stop")
            clearInterval(gravity);
            flappy.style.top = 330 + "px"
        } else{
            flappy.style.top = flappyTop +  gravityAdd + 'px'
        }
    }
}

let jumpInt = 0
const makeFlappyJumpEvent = () => {
    const jump = setInterval(frame, 10);
    jumpInt = 5
    let jumpCount = 0
    function frame() {
        let flappyOrigin = parseInt(window.getComputedStyle(flappy).getPropertyValue("top"))
        if (flappy.style.top >= 6 + "px") {
            clearInterval(jumpInt)
            jumpInt = 0
            jumpCount = 0
            console.log("time to stop")
        }else{
        flappy.style.top = flappyOrigin  - jumpInt + 'px'
        }
        jumpCount++
    }
    
}

document.addEventListener('click',clickEvent)
document.addEventListener('keydown',makeFlappyJumpEvent)