const flappy = document.querySelector("#flappy")
const game = document.querySelector(".game")
const pipes = document.querySelector(".pipes")
const pipe1 = document.querySelector(".pipes__pipe1")
const pipe2 = document.querySelector(".pipes__pipe2")

let hasGravity = false

let jumpInt = 0
const makeFlappyJumpEvent = () => {
    jumpInt = 90
    const frame = () => {
        let flappyTop = parseInt(window.getComputedStyle(flappy).getPropertyValue("top"))
        if (flappy.style.top <0 + "px") {
            clearInterval(jump)
            jumpInt = 0
            console.log("time to stop")
        }else{
        flappy.style.top = flappyTop  - jumpInt + 'px'
        }
    }
    const jump = setTimeout(frame,10)
}


const setGravity = () => {
    if (!hasGravity) {
        pipeMovement()
        hasGravity = true
    let gravityAdd = 2
    const frame = () => {
        let flappyTop = parseInt(window.getComputedStyle(flappy).getPropertyValue("top"))
        if (flappy.style.top == 600 + "px") {
        
            clearInterval(gravity);
            pipes.style.right = 0 + "px";
            flappy.style.top = 330 + "px"
            hasGravity = false
        } else{
            flappy.style.top = flappyTop +  gravityAdd + 'px'
        }
    }
    const gravity = setInterval(frame, 10);
}
}


const pipeMovement = () => {
    let motion = 1
const frame = () => {
    let pipesRight = parseInt(window.getComputedStyle(pipes).getPropertyValue("right"))
    if (flappy.style.top == 600 + "px") {
        clearInterval(movingPipes);
    }
        if (pipes.style.right == 500 + 'px') {
            pipes.style.right = -100 + 'px'
            pipe1.style.flex = Math.random() * (5 - 0.3) + 0.3
            pipe2.style.flex = Math.random() * (5 - 0.3) + 0.3
            
        } else{
        pipes.style.right = pipesRight + motion + 'px'
    }
}
const movingPipes = setInterval(frame, 10);
}



//pipeMovement()


document.addEventListener('keydown',setGravity)
document.addEventListener('keydown',makeFlappyJumpEvent)
//document.addEventListener('change' , pipeMovement)