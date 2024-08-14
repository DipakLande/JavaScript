const userEmail = ""

if (userEmail) {
    console.log("got user Email");
} else {
    console.log("Dont have user Email");
}


// false values 

// false, 0, -0, BigInt 0n, "", null, undefine, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
    
}