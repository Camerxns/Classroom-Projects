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

function grass(){
   return Math.floor(Math.random() * questions.length);
}

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

function checker(){
    if(order[questionNumber] === 0 && value === "a1"){
        score += 1;
    }
    if(order[questionNumber] === 1 && value === "a2"){
        score += 1;
    }
    if(order[questionNumber] === 2 && value === "a4"){
        score += 1;
    }
    if(order[questionNumber] === 3 && value === "a3"){
        score += 1;
    }
    if(order[questionNumber] === 4 && value === "a2"){
        score += 1;
    }
    if(order[questionNumber] === 5 && value === "a1"){
        score += 1;
    }
    questionNumber += 1;
    if(questionNumber === 6){
        x = document.getElementsByTagName("p")[0];
        x.innerHTML = "Score: " + score + "/6";
        x = document.getElementsByTagName("button")[1];
        x.style.visibility = "visible";
    }
 quiz()
}

function quiz(){
    let x = document.getElementsByTagName("h1")[0];
    x.innerHTML = questions[order[questionNumber]].Question;
    x.style.fontSize = "34px"
    x = document.getElementsByTagName("label")[0];
    x.innerHTML = questions[order[questionNumber]].A1;
    x.style.fontSize = "24px"
    x = document.getElementsByTagName("label")[1];
    x.innerHTML = questions[order[questionNumber]].A2
    x.style.fontSize = "24px"
    x = document.getElementsByTagName("label")[2];
    x.innerHTML = questions[order[questionNumber]].A3
    x.style.fontSize = "24px"
    x = document.getElementsByTagName("label")[3];
    x.innerHTML = questions[order[questionNumber]].A4
    x.style.fontSize = "24px"
}