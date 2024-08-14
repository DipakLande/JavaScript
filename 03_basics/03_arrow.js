const user = {
    username: "Dipak",
    price: 990,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }

}

// user.welcomeMessage()

function chai() {
    console.log(this);
}

chai()