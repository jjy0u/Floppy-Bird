const flappy = document.querySelector("#flappy")
const game = document.querySelector(".game")
const score = document.querySelector("#number_score")
const gameOverScore = document.querySelector("#over_score")
const bestScore = document.querySelector("#best_score")
const gameOver = document.querySelector(".game-over")
const restartButton = document.querySelector(".restart-button")

const pipes1 = document.querySelector(".pipes1")
const pipe1_1 = document.querySelector(".pipes1__pipe1")
const pipe1_2 = document.querySelector(".pipes1__pipe2")
const pipes1_hole = document.querySelector(".pipes1__hole")

const pipes2 = document.querySelector(".pipes2")
const pipe2_1 = document.querySelector(".pipes2__pipe1")
const pipe2_2 = document.querySelector(".pipes2__pipe2")
const pipes2_hole = document.querySelector(".pipes2__hole")

let scoreStore = []
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
        if (flappy.style.top == 600 + "px" || (flappy.style.right == pipes1.style.right && flappy.style.top != pipes1_hole.style.top)) {
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

const GameOverScreen = () => {
gameOverScore.innerHTML = score.innerHTML
bestScore.innerHTML = Math.max(...scoreStore)
gameOver.style.display = "flex"
}

const restartGame = () => {
    gameOver.style.display = "none";
    score.innerHTML = 0;
}

const scoreKeep = () => {
    scoreStore.push(score.innerHTML)
    console.log(scoreStore)
}


const pipeMovement = () => {
    let motion = 1

const frame = () => {
    const holePosition = pipes1_hole.getBoundingClientRect()
    let pipesRight = parseInt(window.getComputedStyle(pipes1).getPropertyValue("right"))
    let pipesWidth = parseInt(window.getComputedStyle(pipes1).getPropertyValue("width"))
    let flappyRight = parseInt(window.getComputedStyle(flappy).getPropertyValue("right"))
    let flappyTop = parseInt(window.getComputedStyle(flappy).getPropertyValue("top"))
    let flappyHeight = parseInt(window.getComputedStyle(flappy).getPropertyValue("height"))

    if (flappy.style.top == 600 + "px" || (((pipes1.style.right <= flappyRight + "px") && (pipesRight + pipesWidth + "px" >= flappyRight + "px") && (pipes1.style.right)>0 + "px") && ((holePosition.top + "px" >= flappy.style.top) || (holePosition.top + holePosition.height + "px" <= flappyTop + flappyHeight + "px")))) {
        scoreKeep()
        GameOverScreen()
        clearInterval(movingPipes);
    } else if (pipes1.style.right == flappyRight + 50 + "px") {
        score.innerText ++
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
    const holePosition = pipes2_hole.getBoundingClientRect()
    let pipesRight = parseInt(window.getComputedStyle(pipes2).getPropertyValue("right"))
    let pipesWidth = parseInt(window.getComputedStyle(pipes2).getPropertyValue("width"))
    let flappyRight = parseInt(window.getComputedStyle(flappy).getPropertyValue("right"))
    let flappyTop = parseInt(window.getComputedStyle(flappy).getPropertyValue("top"))
    let flappyHeight = parseInt(window.getComputedStyle(flappy).getPropertyValue("height"))
    

    if (flappy.style.top == 600 + "px" || (((pipes2.style.right <= flappyRight + "px") && (pipesRight + pipesWidth + "px" >= flappyRight + "px") && (pipes2.style.right)>0 + "px") && ((holePosition.top + "px" >= flappy.style.top) || (holePosition.top + holePosition.height + "px" <= flappyTop + flappyHeight + "px")))) {
        scoreKeep()
        GameOverScreen()
        clearInterval(movingPipes);
    } else if (pipes2.style.right == flappyRight + 50 + "px") {
        score.innerText ++
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
    pipe.style.flex = (Math.random() * (5 - 0.3) + 0.3).toFixed(2)
}


document.addEventListener('keydown',setGravity)
document.addEventListener('keydown',makeFlappyJumpEvent)
restartButton.addEventListener('click', restartGame)