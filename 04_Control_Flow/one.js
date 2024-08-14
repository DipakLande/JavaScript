// if
const isUserLoggedIn = true
const temperature = 43

// if ( temperature <= 50 ) {
//     console.log("Temperature Is less than 50");
// }  else {
//     console.log("Temperature Is greater than 50");
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
    
// }


// let balance = 1000

// if (balance  <= 100) {
//     console.log("Balance Is less than 100");
// } else if (balance  <= 1000) {
//     console.log("Balance Is less than 1000");
// } else {
//     console.log("Balance Is greater than 1000");
// }


const UserLoggedIn = true
const debitCard = true
let loggedInFormGoogle = true
let loggedInFormEmail  = false

if (UserLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFormGoogle || loggedInFormEmail) {
    console.log("User Logged In");
}