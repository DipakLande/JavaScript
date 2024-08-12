function sayMyName(){
    console.log("D");
    console.log("i");
    console.log("p");
    console.log("a");
    console.log("k");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){
    
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2 
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ",result);

function loginUserMessage(username){
    if (!undefined) {
        console.log("Please Enter Username");
        return
    }
    return `${username} just logged In`
}

// console.log(loginUserMessage("Dipak"));
// console.log(loginUserMessage());

function calculateCardPrice(...num1){
    return num1

}

// console.log(calculateCardPrice(200, 400, 590, 488, 584));

const user = {
    username: "Dipak",
    price: 3999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

handleObject({
    username: "Deepak",
    price: 389
})

const myNewArray = [120, 300, 740]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
