const accountId = 144553
let accountEmail = "dipaklande1112@gmail.com"
let accountPassword = "12345"
let accountCity = "Maharastra"

// accountId = 2 not allowed

accountEmail = "hc@hc.com"
accountPassword = "182182"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not be user var
bacause of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity])