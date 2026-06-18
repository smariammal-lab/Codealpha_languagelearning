const vocabulary = [
{
word:"Hello",
translation:"Vanakkam",
pronunciation:"heh-loh"
},
{
word:"Thank You",
translation:"Nandri",
pronunciation:"thank-yoo"
},
{
word:"Good Morning",
translation:"Kaalai Vanakkam",
pronunciation:"good-mor-ning"
},
{
word:"Friend",
translation:"Nanban",
pronunciation:"frend"
},
{
word:"Book",
translation:"Puthagam",
pronunciation:"book"
}
];

let currentCard = 0;
let score = 0;
let progress = 0;

function nextCard() {

currentCard = (currentCard + 1) % vocabulary.length;

document.getElementById("word").innerText =
vocabulary[currentCard].word;

document.getElementById("translation").innerText =
vocabulary[currentCard].translation;

document.getElementById("pronunciation").innerText =
vocabulary[currentCard].pronunciation;

progress += 20;

if(progress > 100){
progress = 100;
}

document.getElementById("progress").style.width =
progress + "%";

localStorage.setItem("progress", progress);
}

function showCategory(type){

if(type === "vocabulary"){
alert("📚 Vocabulary Lesson Opened");
}

if(type === "grammar"){
alert("✍ Grammar Lesson Coming Soon");
}
}

let quizIndex = 0;

function startQuiz(){

document.getElementById("lesson-card").classList.add("hidden");
document.getElementById("quiz-section").classList.remove("hidden");

quizIndex = 0;

document.getElementById("question").innerText =
`Translate: ${vocabulary[quizIndex].word}`;
}

function checkAnswer(){

const userAnswer =
document.getElementById("answer").value.toLowerCase();

const correctAnswer =
vocabulary[quizIndex].translation.toLowerCase();

if(userAnswer === correctAnswer){

score++;

document.getElementById("result").innerHTML =
"✅ Correct";
}
else{

document.getElementById("result").innerHTML =
"❌ Correct Answer: " +
vocabulary[quizIndex].translation;
}

document.getElementById("score").innerText = score;

quizIndex++;

document.getElementById("answer").value = "";

if(quizIndex < vocabulary.length){

document.getElementById("question").innerText =
`Translate: ${vocabulary[quizIndex].word}`;
}
else{

document.getElementById("question").innerText =
"🎉 Quiz Completed!";

document.getElementById("result").innerHTML =
`Final Score: ${score}/${vocabulary.length}`;
}
}

window.onload = () => {

let savedProgress =
localStorage.getItem("progress");

if(savedProgress){

progress = savedProgress;

document.getElementById("progress").style.width =
progress + "%";
}
};