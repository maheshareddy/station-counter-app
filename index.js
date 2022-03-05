// document.getElementById("count-el").innerText = 5



// function increment (){
//     console.log("The buttin is clicked")
// }

// function countdown (){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()
// function test(){
//     console.log(42)
// }
// test()
// let lap1 = 34
// let lap2 = 43
// let lap3 = 33

// function logLapTime(){
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }
// logLapTime()

// letlapsCompleted = 0 
// function incrementLap(){
//     letlapsCompleted = letlapsCompleted + 1
// }
// incrementLap()
// incrementLap()
// incrementLap()
// console.log(letlapsCompleted)

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
// console.log(saveEl)
function increment(){
    count += 1
    countEl.textContent = count
}

function save (){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


// let userName = "Per"
// let message = "You have 3 new mesgs"
// let messageToUser = message + ", " + userName + "!"
//     console.log(messageToUser)

// let fname = "Mahesha"
// let greeting = "Hi, my name is"
// let myGreeting = greeting + " " + fname
// // console.log (myGreeting)

// let points = 4
// let bonusPoints = "10"
// let totatPoints = "410"
// console.log(totatPoints)