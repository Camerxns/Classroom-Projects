let questionNumber = 0;
let value;
let score = 0;
let questions = [
    {
        "Question": "What is my first class?",
        "A1": "English",
        "A2": "CSET",
        "A3": "Math",
        "A4": "Sleeping in",
    },
    {
        "Question": "What is my age?",
        "A1": "20",
        "A2": "21",
        "A3": "25",
        "A4": "33",
    },
    {
        "Question": "What do I do for fun?",
        "A1": "Coding",
        "A2": "Writing",
        "A3": "Reading",
        "A4": "Gaming",
    },
    {
        "Question": "What car do I drive?",
        "A1": "Green 2000 Honda Civic",
        "A2": "Blue 2012 Ford Escape",
        "A3": "White 2017 Ford Fusion",
        "A4": "Black 2008 Nissan Altima",
    },
    {
        "Question": "What is my favorite music genre?",
        "A1": "Rap",
        "A2": "Hard Rock/Heavy Metal",
        "A3": "Video game OSTs",
        "A4": "Jazz",
    },
    {
        "Question": "What is my favorite food?",
        "A1": "Pizza",
        "A2": "Pasta",
        "A3": "Tacos",
        "A4": "SOUP",
    },
]

let order = randomize();
//This randomizes the order in which the questions are displayed
function grass(){
   return Math.floor(Math.random() * questions.length);
}

// This also helps ranomize the order in which questions are displayed
function randomize(){
    let array = [];
    do{
        let x = grass();
        if(!array.includes(x)){
            array.push(x);
        }
    } while (array.length < questions.length);
    return array;
}

// This enables the submit button only after someone selects an input
function buttonShift(y){
    f = document.getElementsByTagName("button")[0];
    if( y === "button"){
        f.disabled = true;
        for(let i = 0; i < 4; i++){
            let reset = document.getElementsByTagName("input")[i];
            reset.checked = false
        }
    }
    else{
        f.disabled = false;
        value = y
    }
}

// This displays an alert when you lose
function youLose(){
    alert("You have lost!");
    x = document.getElementsByTagName("h3")[0];
    x.innerHTML = "Congratulations! You won: " + "$" + score;
    x = document.getElementsByTagName("button")[1];
    x.style.visibility = "visible";
    y = document.getElementsByTagName("input")[0];
    y.disabled = true;
    y = document.getElementsByTagName("input")[1];
    y.disabled = true;
    y = document.getElementsByTagName("input")[2];
    y.disabled = true;
    y = document.getElementsByTagName("input")[3];
    y.disabled = true;
}

// This checks the answer to see if it is correct. If it is not it refers to function youLose
function checker(){
    y = document.getElementsByTagName("input")[1];
    y.disabled = false;
    y = document.getElementsByTagName("input")[3];
    y.disabled = false;
    y = document.getElementsByTagName("input")[0];
    y.disabled = false;
    y = document.getElementsByTagName("input")[2];
    y.disabled = false;
    if(order[questionNumber] === 0 && value === "a1"){
        score += 500;
    } else if(order[questionNumber] === 0 && value !== "a1"){
        youLose();
    }
    if(order[questionNumber] === 1 && value === "a2"){
        score += 500;
    } else if(order[questionNumber] === 1 && value !== "a2"){
        youLose();
    }
    if(order[questionNumber] === 2 && value === "a4"){
        score += 500;
    } else if(order[questionNumber] === 2 && value !== "a4"){
        youLose();
    }
    if(order[questionNumber] === 3 && value === "a3"){
        score += 500;
    } else if(order[questionNumber] === 3 && value !== "a3"){
        youLose();
    } 
    if(order[questionNumber] === 4 && value === "a2"){
        score += 500;
    } else if(order[questionNumber] === 4 && value !== "a2"){
        youLose();
    }
    if(order[questionNumber] === 5 && value === "a1"){
        score += 500;
    } else if(order[questionNumber] === 5 && value !== "a1"){
        youLose();
    }
    questionNumber += 1;
    if(questionNumber === 6){
        x = document.getElementsByTagName("h3")[0];
        x.innerHTML = "Congratulations! You won: " + "$" + score;
        x = document.getElementsByTagName("button")[1];
        x.style.visibility = "visible";
    }
 quiz()
}

//This is to launch the quiz
function quiz(){
    let x = document.getElementsByTagName("h1")[0];
    x.innerHTML = questions[order[questionNumber]].Question;
    x.style.fontSize = "34px";
    x = document.getElementsByTagName("label")[0];
    x.innerHTML = questions[order[questionNumber]].A1;
    x.style.fontSize = "24px";
    x = document.getElementsByTagName("label")[1];
    x.innerHTML = questions[order[questionNumber]].A2;
    x.style.fontSize = "24px";
    x = document.getElementsByTagName("label")[2];
    x.innerHTML = questions[order[questionNumber]].A3;
    x.style.fontSize = "24px";
    x = document.getElementsByTagName("label")[3];
    x.innerHTML = questions[order[questionNumber]].A4;
    x.style.fontSize = "24px";
}

//This code is for the 50/50 lifeline
function crossOut(){
    if(order[questionNumber] === 0){
        y = document.getElementsByTagName("input")[1];
        y.disabled = true;
        y = document.getElementsByTagName("input")[3];
        y.disabled = true;
    }
    if(order[questionNumber] === 1){
        y = document.getElementsByTagName("input")[0];
        y.disabled = true;
        y = document.getElementsByTagName("input")[2];
        y.disabled = true;
    }
    if(order[questionNumber] === 2){
        y = document.getElementsByTagName("input")[1];
        y.disabled = true;
        y = document.getElementsByTagName("input")[2];
        y.disabled = true;
    }
    if(order[questionNumber] === 3){
        y = document.getElementsByTagName("input")[1];
        y.disabled = true;
        y = document.getElementsByTagName("input")[3];
        y.disabled = true;
    }
    if(order[questionNumber] === 4){
        y = document.getElementsByTagName("input")[2];
        y.disabled = true;
        y = document.getElementsByTagName("input")[3];
        y.disabled = true;
    }
    if(order[questionNumber] === 5){
        y = document.getElementsByTagName("input")[3];
        y.disabled = true;
        y = document.getElementsByTagName("input")[2];
        y.disabled = true;
    }
    x = document.getElementById("50");
    x.disabled = true;
    x.style.opacity = "50%";
}

//This code is for the Phone a friend Lifeline
let gifDiv = document.getElementById("gif")
let get = document.getElementById("phone");
let getGif = document.getElementById("ring");
let friendCaption = document.getElementById("caption");
let friendImage = document.getElementById("friend");
let friendDIV = document.getElementsByClassName("friend")[0];
get.onclick = function (){
    gifDiv.style.display = "block";
    getGif.src;
    setTimeout("hide()", 3000);    
}
function hide(){
    gifDiv.style.display = "none";
    show();
}
function show(){
    friendDIV.style.display = "block";
    friendImage.src;
    friendAnswers();
    get.disabled = true;
    get.style.opacity = "50%";
}
let span = document.getElementsByClassName("close")[0];
span.onclick = function(){
    friendDIV.style.display = "none";
}
function friendAnswers(){
    if(order[questionNumber] === 0){
        x = document.getElementsByTagName("label")[0];
        friendCaption.innerHTML = "I think the answer is... " + questions[order[questionNumber]].A1
    }
    if(order[questionNumber] === 1){
        x = document.getElementsByTagName("label")[1];
        friendCaption.innerHTML = "I think the answer is... " + questions[order[questionNumber]].A2
    }
    if(order[questionNumber] === 2){
        x = document.getElementsByTagName("label")[3];
        friendCaption.innerHTML = "I think the answer is... " + questions[order[questionNumber]].A4
    }
    if(order[questionNumber] === 3){
        x = document.getElementsByTagName("label")[4];
        friendCaption.innerHTML = "I think the answer is... " + questions[order[questionNumber]].A3
    }
    if(order[questionNumber] === 4){
        x = document.getElementsByTagName("label")[1];
        friendCaption.innerHTML = "I think the answer is... " + questions[order[questionNumber]].A2
    }
    if(order[questionNumber] === 5){
        x = document.getElementsByTagName("label")[0];
        friendCaption.innerHTML = "I think the answer is... " + questions[order[questionNumber]].A1
    }
}

//This code is for the Aduience Lifeline (spoiler: the Audience is coded to always be wrong!)
let audienceCaption = document.getElementById("captionAudience");
let audienceDIV = document.getElementsByClassName("audianceDIV")[0];
let audienceIMG = document.getElementById("audience");
let getAudience = document.getElementById("audianceInput");
getAudience.onclick = function(){
    audienceDIV.style.display = "block";
    audienceIMG.src;
    audienceAnswer();
    getAudience.disabled = true;
    getAudience.style.opacity = "50%";
}
let span2 = document.getElementsByClassName("close")[1];
span2.onclick = function(){
    audienceDIV.style.display = "none";
}
function audienceAnswer(){
    if(order[questionNumber] === 0){
        x = document.getElementsByTagName("label")[2];
        audienceCaption.innerHTML = "We think the answer is... " + questions[order[questionNumber]].A3
    }
    if(order[questionNumber] === 1){
        x = document.getElementsByTagName("label")[3];
        audienceCaption.innerHTML = "We think the answer is... " + questions[order[questionNumber]].A4
    }
    if(order[questionNumber] === 2){
        x = document.getElementsByTagName("label")[0];
        audienceCaption.innerHTML = "We think the answer is... " + questions[order[questionNumber]].A1
    }
    if(order[questionNumber] === 3){
        x = document.getElementsByTagName("label")[0];
        audienceCaption.innerHTML = "We think the answer is... " + questions[order[questionNumber]].A1
    }
    if(order[questionNumber] === 4){
        x = document.getElementsByTagName("label")[0];
        audienceCaption.innerHTML = "We think the answer is... " + questions[order[questionNumber]].A1
    }
    if(order[questionNumber] === 5){
        x = document.getElementsByTagName("label")[1];
        audienceCaption.innerHTML = "We think the answer is... " + questions[order[questionNumber]].A2
    }
}