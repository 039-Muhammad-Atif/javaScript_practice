class Password{
    constructor(){
        console.log("Wellcome to password generator.");
        this.pass = "";
    }
    generatePassword(len){
        let chars = "abcdefghijklmnopqrstuvwxyz"
        let nums = "0123456789"
        let symbs = "!@#$%^&*()><"

        if (this.len < 3){
            console.log("Your Password must be greater then 3:")
        }
        else{
            let i= 0;
            while (i < len) {
                this.pass += chars[Math.floor(Math.random()*chars.length)]
                this.pass += nums[Math.floor(Math.random()*chars.length)]
                this.pass += symbs[Math.floor(Math.random()*chars.length)]
                i += 3;
            }
            this.pass = this.pass.substr(0, len);
            return this.pass;
        }
    }
}

let p = new Password();
console.log(p.generatePassword(7));