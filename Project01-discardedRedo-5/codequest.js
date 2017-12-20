console.log('JS IS IN THE House')
let index = 0;
const answers = {}
let score = 0

const checkAnswerButton = document.querySelector('button#check-answer')

//below are the questions in an object
let counter = 0;
const questions = [
  {
    question: " Inside which HTML element do we put the JavaScript?",
    a: "&lt;js&gt;",
    b: "&lt;scripting&gt;",
    c: "&lt;script&gt;",
    correctAnswer: 'c'
},
{
    question: " What is the correct JavaScript syntax to change the content of the HTML element below?<br>  &lt;p id=\"demo\"&gt;This is a demonstration.&lt;/p&gt;",
    a: "document.getElement(\"p\").innerHTML = \"Hello World!\"",
    b: "#demo.innerHTML = \"Hello World!\"",
    c: "document.getElementById(\"demo\").innerHTML = \"Hello World!\"",
    correctAnswer: 'c'
},
{
    question: " What is the correct syntax for referring to an external script called \"xxx.js\"?",
    a: "&lt;script href=\"xxx.js\"&gt;",
    b: "&lt;script name=\"xxx.js\"&gt;",
    c: "&lt;script src=\"xxx.js\"&gt;.",
    correctAnswer: 'c'
},
{
    question: " How do you write \"Hello World\" in an alert box?",
    a: "msg(\"Hello World\")",
    b: "alertBox(\"Hello World\")",
    c: "alert(\"Hello World\")",
    correctAnswer: 'c'
},
{
    question: " How do you call a function named \"myFunction\"?",
    a: "call function myFunction()",
    b: "myFunction()",
    c: "call myFunction()",
    correctAnswer: 'b',
},
];


function renderQuestion() {
  // go look at global scope and check index
  // go into question array and grab the questions[index] question
  let currentQuestion = questions[index];
  console.log("printing current question-->", currentQuestion)

  // select
  let q = document.querySelector('#question');
  let a = document.querySelector('#one');
  let b = document.querySelector('#two');
  let c = document.querySelector('#three');

  // modify
  q.innerHTML = currentQuestion.question ;
  a.innerHTML = "A.  " + currentQuestion.a;
  b.innerHTML = "B.  " + currentQuestion.b;
  c.innerHTML = "C.  " + currentQuestion.c;

}
renderQuestion();

function nextQuestion() {
  // add one to index
  index++;
  // show the nextquestion
  renderQuestion();
}

let submit = document.querySelector('submit')
console.log("pick up submit element--->", submit);
  // submit.addEventListener('click', function(event){
  //   console.log('submit clicked', event.target.id)
  //   score()
  // })


let btn = document.querySelector('button');

btn.addEventListener('click', function(event) {
  console.log('button clicked the id of btn -> ', event.target.id)
  nextQuestion();
})

//this is a function that takes the arguments of the question and what index there at, this loops over the object and
//takes out the question and puts them in the newly created div
function makeQuestionBox(question, idx) {
    let container = document.createElement('div');
    container.setAttribute('id', `background-${idx}`)
    let questionTitle = document.createElement('div');
    questionTitle.innerText = question.question;
    container.appendChild(questionTitle);
    let choices = [question.a, question.b, question.c]
    let orderedList = document.createElement('ol'); // ordered list
    for(let i = 0; i < choices.length; i++) {
        let choice = document.createElement('li');
        choice.innerText = choices[i];
        orderedList.appendChild(choice);
  }
  container.appendChild(orderedList);
//this creates the input elements, puts text inside the new submit answer button, and appends it all to the div
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('class', `submit`);
  container.appendChild(input);
  let submit = document.createElement('button');
  submit.setAttribute('class', `submit-answer ${idx}`);
  submit.innerText = 'Submit Answer';
  container.appendChild(submit)
  let background = document.querySelector('.background');
  background.appendChild(container);
};

// for (let i=0; i < questions.length; i++){
//   makeQuestionBox(questions[i], i);
// }

// let questionButtons = document.querySelectorAll('.submit-answer');
// console.log(questionButtons);

// for (let i = 0; i < questionButtons.length; i++) {
//   let button = questionButtons[i];
//   button.addEventListener("click", checkAnswers, false);
// }

// document.querySelectorAll('.submit-answer').addEventListener("click", checkAnswers, false);
function checkAnswers(e){
  console.log('check answers')
  console.log(e.target);
  // console.log(e.target.parentElement.children[4].value);
  let userInput = e.target.parentElement.children[2].value || '';
  let index = parseInt(e.target.classList[1]);
  let correct = questions[index][questions[index].correctAnswer];
  if(userInput.toUpperCase() === correct.toUpperCase()) {
    console.log('correct match')
    score += 1;
  } else {
      console.log('incorrect match')
      score += 0;
  }

  if (score == 8){
    alert("You passed")
  };

  // let inputs = document.querySelectorAll('.submit');
  // console.log(inputs);
  //let inputs = document.querySelectorAll('.submit') // select the answer boxes
  // console.log(inputs.value)
  // for (let i = 0; i < questions[i].correctAnswer; i++){
  //   for (let j = 0; j < inputs.length; j++) {
  //     console.log(inputs[j].value);
  //     if (inputs[j].value == questions[i].correctAnswer){
  //       score += 1;
  //     } else {
  //       (score -= 1)
  //     }
  //     console.log(score)
  //   }
  // }
};







//loop through array for each make a function create
//function changeImage(){
//  document.getElementById("wrapper").style.backgroundImage = "url('start_screen.jpg')";
//}
//if score > 7 == alert "You passed" else alert "Try again"

// this changes background image document.getElementById("wrapper").style.backgroundImage = "url('bg-wrapper.jpg')";

/* leave here but no need to push anymore
use if else to check truthy if true push to correct answers array
let correct = function(input){
  if input == true
} correctAnswers.push("input");
leave here but also no need to reduce
//use reduce to add up string.length and use as score, correct do not change
let score = correctAnswers.reduce(function(sum, order){
  return sum + order.amount
}, 0)
*/
