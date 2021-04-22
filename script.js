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



function genPass(){
    let value = range.value;
    let password = new Password(value);
    pass = password.pick()
    document.getElementById("rangeValue").innerHTML = value;
    document.getElementById("passwordText").innerHTML = pass;
}



let range = document.getElementById("myRange");

button = document.getElementById("genBtn")
range.addEventListener("input", genPass);