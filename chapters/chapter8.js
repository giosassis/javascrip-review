'use strict'

function canYouSpotTheProblem() {
    for (let counter = 0; counter < 10; counter++) {
        console.log("Happy happy!")
    }
}

//Tratamento de Erro//

function promptDirection(question) {
    let result = question 
    if (result.toLowerCase() == "Left") return "L"
    if (result.toLowerCase() == "Right") return "R"
    else throw new Error("Invalid direction")
}

function look(){
    if(promptDirection("Which direction do you want?") == "L") {
        return "House"
    } else {
        return "Two angry bears"
    }
}

try {
    console.log("You see", look())
} catch (error) {
    console.log("Something went wrong", error)
}