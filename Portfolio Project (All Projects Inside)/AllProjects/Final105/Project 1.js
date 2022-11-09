function input(){
let gibson = document.getElementById("userInput").value;    
let strat = document.createElement("p");
strat.id = "cookie"
strat.innerHTML = "- " + `${gibson}`;
strat.style.fontSize = "32px";
document.getElementById("div").appendChild(strat);
strat.className = "default";
strat.setAttribute("onclick", "changeClass(this)");
}
function changeClass(button){
    button.classList.toggle('line');
    button.id = 'brownie'
}

let checker = document.getElementById('itemsLeft');
function displayItemsLeft(){
let check = document.querySelectorAll('#brownie');
    for(let i = 0; i < check.length; i++ ){
        if(checker.checked == true){
            check[i].style.display = "none";
        } else{
            check[i].style.display = "block";
        }
    }
}

let purchased = document.getElementById('allItems');
function viewAllPurchases(){
    let checkAll = document.querySelectorAll('#cookie');
    let newStyle = document.querySelectorAll('#brownie');
    for(let i = 0; i < checkAll.length; i++){
        if(purchased.checked == true){
            checkAll[i].style.display = "none";
        } else{
            checkAll[i].style.display = "block";
        }
    }
    for(let i = 0; i < newStyle.length; i++){
        if(purchased.checked == true){
            newStyle[i].classList.toggle('line');
        } else {
            newStyle[i].classList.toggle('line');
        }
    }
}