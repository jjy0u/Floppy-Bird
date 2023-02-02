const flappy = document.querySelector("#flappy")
const game = document.querySelector(".game")


const pipes = document.querySelector(".pipes")
const pipes1 = document.querySelector(".pipes1")
const pipe1_1 = document.querySelector(".pipes1__pipe1")
const pipe1_2 = document.querySelector(".pipes1__pipe2")
const pipes1_hole = document.querySelector(".pipes1__hole")

const pipes2 = document.querySelector(".pipes2")
const pipe2_1 = document.querySelector(".pipes2__pipe1")
const pipe2_2 = document.querySelector(".pipes2__pipe2")

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
        pipe2Movement()
        hasGravity = true
    let gravityAdd = 2
    const frame = () => {
        let flappyTop = parseInt(window.getComputedStyle(flappy).getPropertyValue("top"))
        if (flappy.style.top == 600 + "px") {
            clearInterval(gravity);
            pipes1.style.right = 0 + "px";
            pipes2.style.right = -300 + "px";
            randomizePipe(pipe1_1)
            randomizePipe(pipe1_2) 
            randomizePipe(pipe2_1)
            randomizePipe(pipe2_2) 
            flappy.style.top = 330 + "px";
            hasGravity = false
        } else{
            flappy.style.top = flappyTop +  gravityAdd + 'px'
        }
    }
    const gravity = setInterval(frame, 10);
}
}


const pipeMovement = () => {
    flappyTouchesPipe()
    let motion = 1
const frame = () => {
    let pipesRight = parseInt(window.getComputedStyle(pipes1).getPropertyValue("right"))
    if (flappy.style.top == 600 + "px") {
        clearInterval(movingPipes);
    }
    if (pipes1.style.right == 500 + 'px') {
        pipes1.style.right = -100 + 'px'
        randomizePipe(pipe1_1)
        randomizePipe(pipe1_2) 
    } else{
        pipes1.style.right = pipesRight + motion + 'px'
    }
}
const movingPipes = setInterval(frame, 10);
}

const pipe2Movement = () => {
    let motion = 1
const frame = () => {
    let pipesRight = parseInt(window.getComputedStyle(pipes2).getPropertyValue("right"))
    if (flappy.style.top == 600 + "px") {
        clearInterval(movingPipes);
    }
    if (pipes2.style.right == 500 + 'px') {
        pipes2.style.right = -100 + 'px'
        randomizePipe(pipe2_1)
        randomizePipe(pipe2_2) 
    } else{
        pipes2.style.right = pipesRight + motion + 'px'
    }
}
const movingPipes = setInterval(frame, 10);
}

const randomizePipe = (pipe) => {
    pipe.style.flex = Math.random() * (5 - 0.3) + 0.3
}


const flappyTouchesPipe = () => {
    let pipesRight = parseInt(window.getComputedStyle(pipes1).getPropertyValue("right"))
    let flappyRight = parseInt(window.getComputedStyle(flappy).getPropertyValue("right"))
    if (flappy.style.right == pipes1.style.right && flappy.style.top != pipes1_hole.style.top) {
        console.log("hello")
            pipes1.style.right = 0 + "px";
            pipes2.style.right = -300 + "px";
            randomizePipe(pipe1_1)
            randomizePipe(pipe1_2) 
            randomizePipe(pipe2_1)
            randomizePipe(pipe2_2) 
            flappy.style.top = 330 + "px";
    }

}

flappyTouchesPipe()



document.addEventListener('keydown',setGravity)
document.addEventListener('keydown',makeFlappyJumpEvent)
