const data = [
    {
        'id' : 0,
        'q' : 'Javascript is an _____ language?',
        'c1' : 'Object-Oriented',
        'c2' : 'Object-Based',
        'c3' : 'Procedural',
        'c4' : 'None of the above',
        'ans' : 'Object-Oriented'
    },
    {
        'id' : 1,
        'q' : 'What keyword is used to check whether a given property is valid or not?',
        'c1' : 'in',
        'c2' : 'is',
        'c3' : 'exists',
        'c4' : 'lies',
        'ans' : 'in'
    },
    {
        'id' : 2,
        'q' : 'Which function is used to serialize an object into a JSON string in Javascript?',
        'c1' : 'stringify()',
        'c2' : 'parse()',
        'c3' : 'convert()',
        'c4' : 'None of the above',
        'ans' : 'stringify()'
    },
    {
        'id' : 3,
        'q' : 'What keyword is used to declare an asynchronous function in Javascript?',
        'c1' : 'async',
        'c2' : 'await',
        'c3' : 'setTimeout',
        'c4' : 'None of the above',
        'ans' : 'async'
    },
    {
        'id' : 4,
        'q' : 'How to stop an interval timer in Javascript?',
        'c1' : 'clearInterval',
        'c2' : 'clearTimer',
        'c3' : 'intervalOver',
        'c4' : 'None of the above',
        'ans' : 'clearInterval'
    }

];

let quiz = {
    'correctans' : 0
}
let id = 0;
const qid = document.getElementById("question");

const choice0 = document.getElementById("choice0");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");

const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const progress = document.getElementById("progress");

let result = document.getElementById("result");
let score = document.getElementById("score");
let quizpage = document.getElementById("quiz");
let percentage = document.getElementById("percentage");



window.onload = function(){
    console.log("page loaded");
    qid.innerText = data[id].q;

    choice0.innerText = data[id].c1;
    choice1.innerText = data[id].c2;
    choice2.innerText = data[id].c3;
    choice3.innerText = data[id].c4;

    progress.innerText = "Question " + (id+1) + " of " + (data.length);
}

btn0.addEventListener("click", () => {
    
    if(choice0.innerText === data[id].ans){
        quiz.correctans+=1;
        console.log(quiz.correctans);
    }
    else{
        console.log("wrong ans");
    }
    id++;
    
    if(id == data.length){
        console.log("end");
        quizpage.classList.add("hidden");
        result.classList.remove("hidden");
        result.classList.add("show");
        score.innerText = "Score is " +quiz.correctans+ " out of " + data.length;
        percentage.innerText = "Total percentage : " + ((quiz.correctans/data.length)*100) + "%";
    }
    else{
        qid.innerText = data[id].q;

        choice0.innerText = data[id].c1;
        choice1.innerText = data[id].c2;
        choice2.innerText = data[id].c3;
        choice3.innerText = data[id].c4;
    
        progress.innerText = "Question " + (id+1) + " of " + (data.length);
    }
    

})

btn1.addEventListener("click", () => {
    if(choice1.innerText === data[id].ans){
        quiz.correctans+=1;
        console.log(quiz.correctans);
    }
    else{
        console.log("wrong ans");
    }
    id++;

    if(id == data.length){
        console.log("end");
        quizpage.classList.add("hidden");
        result.classList.remove("hidden");
        result.classList.add("show");
        score.innerText = "Score is " +quiz.correctans+ " out of " + data.length;
        percentage.innerText = "Total percentage : " + ((quiz.correctans/data.length)*100) + "%";
    }
    else{
        qid.innerText = data[id].q;

    choice0.innerText = data[id].c1;
    choice1.innerText = data[id].c2;
    choice2.innerText = data[id].c3;
    choice3.innerText = data[id].c4;

    progress.innerText = "Question " + (id+1) + " of " + (data.length);
    }
    

})

btn2.addEventListener("click", () => {
    if(choice2.innerText === data[id].ans){
        quiz.correctans+=1;
        console.log(quiz.correctans);
    }
    else{
        console.log("wrong ans");
    }
    id++;

    if(id == data.length){
        console.log("end");
        quizpage.classList.add("hidden");
        result.classList.remove("hidden");
        result.classList.add("show");
        score.innerText = "Score is " +quiz.correctans+ " out of " + data.length;
        percentage.innerText = "Total percentage : " + ((quiz.correctans/data.length)*100) + "%";
    }
    else{
        qid.innerText = data[id].q;

    choice0.innerText = data[id].c1;
    choice1.innerText = data[id].c2;
    choice2.innerText = data[id].c3;
    choice3.innerText = data[id].c4;

    progress.innerText = "Question " + (id+1) + " of " + (data.length);
    }
    

})

btn3.addEventListener("click", () => {
    if(choice3.innerText === data[id].ans){
        quiz.correctans+=1;
        console.log(quiz.correctans);
    }
    else{
        console.log("wrong ans");
    }
    id++;

    if(id == data.length){
        console.log("end");
        quizpage.classList.add("hidden");
        result.classList.remove("hidden");
        result.classList.add("show");
        score.innerText = "Score is " +quiz.correctans+ " out of " + data.length;
        percentage.innerText = "Total percentage : " + ((quiz.correctans/data.length)*100) + "%";
    }
    else{
        qid.innerText = data[id].q;

    choice0.innerText = data[id].c1;
    choice1.innerText = data[id].c2;
    choice2.innerText = data[id].c3;
    choice3.innerText = data[id].c4;

    progress.innerText = "Question " + (id+1) + " of " + (data.length);
    }
    

})

