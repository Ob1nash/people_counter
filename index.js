// document.getElementById("count").innerText = 5

// let firstBatch = 5
// let secondBatch =8
// let count = firstBatch + secondBatch
// console.log(count);
// let myAge = 20
// console.log(myAge)

// let myAge = 20
// let humanDogRatio = 7
// myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() {
//     console.log("The button was clicked")
// }


// Setting up the the race 🏎 🏎 🏎

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()

// // GO! 🏁
// // Players are running the race 🏎 💨
// // Race is finished! 🍾

// // Get ready for a new race 🏎 🏎 🏎

// countdown()

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// function dhoniAge() {
//     console.log(42)
// }
// dhoniAge()


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
}
 function save(){
    let countStr = count + "-"
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
 }


