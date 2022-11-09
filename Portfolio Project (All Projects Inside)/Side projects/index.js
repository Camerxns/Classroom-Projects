let gas1 = document.getElementById('gas1').value;
let gas2 = document.getElementById('gas2').value;
let money = document.getElementById('money').value
let result = document.getElementById('results');

function gas(){
    let a = gas1 *= money;
    let b = gas2 *= money;
    let c = Math.abs(a - b);
    result.innerHTML = "The difference in gas is: " + `${c}` + " gallons!";
    button = document.getElementById('output');
    button.disabled = true;
}

function reload(){
    location.reload();
}