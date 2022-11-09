function random(x){
    return Math.floor(Math.random() * x);
}

let pass;
let length;
let uppercase,lowercase,numbers,symbols;
function generate(){
    pass = "";
    length = document.getElementById('passwordLength').value;
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    lowercase = "abcdefghijklmnopqrstuvwxyz";
    numbers = "1234567890";
    let symbols = "~!@#$%^&*_(){[}]|;+=-'<,>.?/";
    if(document.getElementById("uppercase").checked){
        pass += uppercase;
    }
    if(document.getElementById("lowercase").checked){
        pass += lowercase;
    }
    if(document.getElementById("numbers").checked){
        pass += numbers;
    }
    if(document.getElementById("symbols").checked){
        pass += symbols;
    }
    let arr = pass.split('');
    let arrLength = arr.length;
    for(let i = 0; i < arrLength - 1; i++){
        let j = random(arrLength);
        let orange = arr[i];
        arr[i] = arr[j];
        arr[j] = orange
    }
    arr.length = length;
    pass = arr.join('');
    password.innerHTML = pass;
}