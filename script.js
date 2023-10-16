
// score cards
let computerPoints = document.getElementById('computerScoreDisplay')
let userPoints = document.getElementById('userScoreDisplay')

// rock paper and scissor elements....
let rockSelection = document.getElementById('selectRock')
let scissorSelection = document.getElementById('selectScissor')
let paperSelection = document.getElementById('selectPaper')

// container of rock paper and scissor
let options = document.getElementById('containerbottom')

// container for showing result
let result = document.getElementById('resultContainer')

// image that displays based on user selection
let userSelectionImg = document.getElementById('user-img')
let userSelctionBorder = document.getElementById('userChoice')

// image that displays based on pc selection
let pcSelectionImg = document.getElementById('pc-img')
let pcSelectionBorder = document.getElementById('pcChoice')

// Buttons 
let rulesBtn = document.getElementById('rulesButton')
let playAgainButton = document.getElementById('playAgainButton')
let nextButton = document.getElementById('nextButton')

// to display result of the game.
let resultOfGame = document.getElementById('result')
let resultAgainst = document.getElementById('resultOn')

// local storage.
window.onload = () => {
    if (localStorage.getItem('userScore')) {
        var userScore = localStorage.getItem('userScore');
        var pcScore = localStorage.getItem('pcScore');
    }
    else {
        var userScore = 0;
        var pcScore = 0;
    }
    userPoints.innerHTML = userScore
    computerPoints.innerHTML = pcScore
}

// available options for computer
const computerChoices = {
    gameOptions: ['rock', 'paper', 'scissor']
}

// methods to generate rondom number
let randomNumber = Math.floor(Math.random() * 3)

// picks the random option and stores in expression
let expression = computerChoices.gameOptions[randomNumber]

// function to display the computer generated option.
function computerSelection() {
    switch (expression) {
        case 'rock':
            pcSelectionBorder.style.border = '13px solid  rgba(0,116,182,1)'
            pcSelectionImg.src = "/rock.png"
            break;

        case 'scissor':
            pcSelectionBorder.style.border = '13px solid rgba(189,0,255,1)'
            pcSelectionImg.src = "/scissor.png"
            break;

        case 'paper':
            pcSelectionBorder.style.border = '13px solid rgba(255,169,1,1)'
            pcSelectionImg.src = "/paper.png"
            break;
    }
}

// circle's for animation when user wins the game
let userAnimation1 = document.getElementById('userCircle1')
let userAnimation2 = document.getElementById('userCircle2')
let userAnimation3 = document.getElementById('userCircle3')

// circle's for animation when pc wins the game
let pcAnimation1 = document.getElementById('pc-circle1')
let pcAnimation2 = document.getElementById('pc-circle2')
let pcAnimation3 = document.getElementById('pc-circle3')

// function for result evaluation 
function evaluating(input) {
    //conditional for user win.
    if ((input === 'rock' && expression === 'scissor') ||
        (input === 'scissor' && expression === 'paper') ||
        (input === 'paper' && expression === 'rock')) {

        //displays this messages when user wins the game.
        resultOfGame.innerHTML = "WON"
        resultAgainst.innerHTML = "AGAINST PC"
        nextButton.style.display = "block"
        resultAgainst.style.display = 'block'

        //conditional for handling the animation when user wins the game.
        if (resultOfGame.innerHTML === "WON") {
            userAnimation1.style.backgroundColor = 'rgba(46, 154, 37, 0.39)'
            userAnimation2.style.backgroundColor = 'rgba(29, 168, 43, 0.79)'
            userAnimation3.style.backgroundColor = 'rgba(59, 103, 32, 1)'

            pcAnimation1.style.backgroundColor = ''
            pcAnimation2.style.backgroundColor = ''
            pcAnimation3.style.backgroundColor = ''

        }

        //instructions for setting output data to local storage
        let userOutput = parseInt(userPoints.innerText)
        ++userOutput
        localStorage.setItem('userScore', userOutput)
        localUserScore = localStorage.getItem('userScore')
        userPoints.innerHTML = localUserScore
    }

    //conditional when user lost the game.
    else if ((input === 'rock' && expression === 'paper') ||
        (input === 'scissor' && expression === 'rock') ||
        (input === 'paper' && expression === 'scissor')) {

        //displays this messages when user lost the game.
        resultOfGame.innerHTML = "LOST"
        resultAgainst.innerHTML = "AGAINST PC"
        resultAgainst.style.display = 'block'

        //conditional for handling the animation when user wins the game.
        if (resultOfGame.innerHTML === "LOST") {
            pcAnimation1.style.backgroundColor = ' rgba(46, 154, 37, 0.39)'
            pcAnimation2.style.backgroundColor = 'rgba(29, 168, 43, 0.79)'
            pcAnimation3.style.backgroundColor = 'rgba(59, 103, 32, 1)'

            userAnimation1.style.backgroundColor = ''
            userAnimation2.style.backgroundColor = ''
            userAnimation3.style.backgroundColor = ''
        }

        //instructions for setting output data to local storage
        let pcOutput = parseInt(computerPoints.textContent)
        ++pcOutput
        localStorage.setItem('pcScore', pcOutput)
        localPcStorage = localStorage.getItem('pcScore')
        computerPoints.innerHTML = localPcStorage
    }

    //condtional when the game gets tied.
    else {
        resultOfGame.innerHTML = "TIE UP"
        resultAgainst.style.display = 'none'
        playAgainButton.innerHTML = "REPLAY"

        //conditional that keeps the animationa neutral when game is tied.
        if ((resultOfGame.innerHTML === "TIE UP")&&
            (userAnimation1.style.backgroundColor = 'rgba(46, 154, 37, 0.39)') &&
            (userAnimation2.style.backgroundColor = 'rgba(29, 168, 43, 0.79)') &&
            (userAnimation3.style.backgroundColor = 'rgba(59, 103, 32, 1)')) {

            userAnimation1.style.backgroundColor = ''
            userAnimation2.style.backgroundColor = ''
            userAnimation3.style.backgroundColor = ''

            pcAnimation1.style.backgroundColor = ''
            pcAnimation2.style.backgroundColor = ''
            pcAnimation3.style.backgroundColor = ''
        }
        else if((resultOfGame.innerHTML === "TIE UP")&&
            (pcAnimation1.style.backgroundColor = 'rgba(46, 154, 37, 0.39)') &&
            (pcAnimation2.style.backgroundColor = 'rgba(29, 168, 43, 0.79)') &&
            (pcAnimation3.style.backgroundColor = 'rgba(59, 103, 32, 1)')) {

            pcAnimation1.style.backgroundColor = ''
            pcAnimation2.style.backgroundColor = ''
            pcAnimation3.style.backgroundColor = ''

            userAnimation1.style.backgroundColor = ''
            userAnimation2.style.backgroundColor = ''
            userAnimation3.style.backgroundColor = ''
        }
    }

}

// function expression when user clicks rock.
let rock = function () {
    options.style.display = 'none'
    result.style.display = 'block'
    userSelctionBorder.style.border = '13px solid  rgba(0,116,182,1)'
    userSelectionImg.src = "/rock.png"
    computerSelection()
    evaluating('rock')
}
rockSelection.addEventListener('click', rock)

// function expression when user clicks scissor.
let scissor = function () {
    options.style.display = 'none'
    result.style.display = 'block'
    userSelctionBorder.style.border = '13px solid rgba(189,0,255,1)'
    userSelectionImg.src = "/scissor.png"
    computerSelection()
    evaluating('scissor')
}
scissorSelection.addEventListener('click', scissor)

// function expression when user clicks paper.
let paper = function () {

    options.style.display = 'none'
    result.style.display = 'block'
    userSelctionBorder.style.border = '13px solid rgba(255,169,1,1)'
    userSelectionImg.src = "/paper.png"
    computerSelection()
    evaluating('paper')
}
paperSelection.addEventListener('click', paper)

//playAgain Button functionality
playAgainButton.onclick = () => {
    result.style.display = 'none'
    options.style.display = 'block'
    document.getElementById('nextButton').style.display = "none"
}

// rules button functionality.
rulesBtn.onclick = () => {
    document.getElementById('rulesbox').style.visibility = 'visible'
}

let crossSymbol = document.getElementById('crossSymbol')

// functionality to close the rules box
crossSymbol.onclick = () => {
    document.getElementById('rulesbox').style.visibility = 'hidden'
}


