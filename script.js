const question = [
    {
    question : 'Who does si think the prettiest girl in the world?',
    answer : [
        { text: 'Alaina Castillo', correct: false},
        { text: 'Dua Lipa', correct: false},
        { text: 'Zhas', correct: true},
        { text: 'Sofia Reyes', correct: false}
    ]
},
{
    question : 'Who has the prettiest voice in the world?',
    answer : [
        { text: 'Zhas', correct: true},
        { text: 'Sofia Reyes', correct: false},
        { text: 'Alaina Castillo', correct: false},
        { text: 'Dua Lipa', correct: false}
    ]
},
{
    question : 'Will you give me some cute pics of you tonight?',
    answer : [
        { text: 'Mmmm, maybe', correct: false},
        { text: 'Nah', correct: false},
        { text: 'I guess so', correct: false},
        { text: 'Yes !!!!', correct: true}
    ]
},

{
    question : 'Will you sing me song tonight?',
    answer : [
        { text: 'No i hate my voice', correct: false},
        { text: 'Yes but you have to sing me song first', correct: false},
        { text: 'Later, i am shy', correct: false},
        { text: 'Yes, how many songs you wanna hear?', correct: true}
    ]   
}

]

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    // Clear previous buttons
    answerButton.innerHTML = '';

    resetState();

    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = 'true';
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!!!... and dont forget to sing me song hehe!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();
