class Password{
    constructor(length){
        this.length = length;
        this.charset = "abcdefghijklmnopqrstuvwqyzABCDEFGHIJKLMNOPQRSTUVWQYZ!@#$%&*1234567890"
    }

    pick(){
        let pass = "";
        let n = this.charset.length;
        for(let i = 0; i < this.length; i++ ){
            pass += this.charset.charAt(Math.floor(Math.random() * n))
        }
        return pass;
    }
}

const password = new Password(10);
console.log(password.pick())



function genPass(){
    pass = password.pick()
    document.getElementById("passwordText").innerHTML = pass;
}

button = document.getElementById("genBtn")
button.addEventListener("click", genPass);