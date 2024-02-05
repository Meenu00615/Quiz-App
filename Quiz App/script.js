const questions = [
    {
        question: "Which of the following standard algorithms is not Dynamic Programming based?",
        answers: [
            {text: "Bellman–Ford Algorithm for single source shortest path", correct: "False"},
            {text: "Prim's Minimum Spanning Tree", correct: "True"},
            {text: "0-1 Knapsack problem", correct: "False"},
            {text: "Floyd Warshall Algorithm for all pairs shortest paths", correct: "False"}
        ]
    },
    {
        question: "We use dynamic programming approach when",
        answers: [
            {text: "We need an optimal solution", correct: "False"},
            {text: "The given problem can be reduced to the 3-SAT problem", correct: "False"},
            {text: "The solution has optimal substructure", correct: "True"},
            {text: "It's faster than Greedy", correct: "False"}
        ]
    },
    {
        question: "Which of the following is NOT a characteristic of dynamic programming?",
        answers: [
            {text: "Memoization, which involves storing the results of expensive function calls and reusing them.", correct: "False"},
            {text: "Solving problems in a sequential manner.", correct: "True"},
            {text: "Dynamic programming can be used for problems where the solution has an optimal substructure.", correct: "False"},
            {text: "Breaking a problem into smaller overlapping subproblems.", correct: "False"}
        ]
    },

    {
        question: "What is the time complexity of Bellman-Ford single-source shortest path algorithm on a complete graph of n vertices?",
        answers: [
            {text: "θ(n3)", correct: "True"},
            {text: "θ(n2 log n)", correct: "False"},
            {text: "θ(n2)", correct: "False"},
            {text: "θ(n3 log n)", correct: "False"}
        ]
    },
    {
        question: "Consider two strings A = qpqrr and B = pqprqrp. Let x be the length of the longest common subsequence (not necessarily contiguous) between A and B and let y be the number of such longest common subsequences between A and B. Then x + 10y=___.",
        answers: [
            {text: "33", correct: "False"},
            {text: "23", correct: "False"},
            {text: "43", correct: "True"},
            {text: "34", correct: "False"}
        ]
    },
    {
        question: "The following paradigm can be used to find the solution of the problem in minimum time: Given a set of non-negative integer, and a value K, determine if there is a subset of the given set with sum equal to K:",
        answers: [
            {text: "Divide and Conquer", correct: "False"},
            {text: "Dynamic Programming", correct: "False"},
            {text: "Greedy Algorithm", correct: "True"},
            {text: "Branch and Bound", correct: "False"}
        ]
    },
    {
        question: "What is memoization in the context of dynamic programming?",
        answers: [
            {text: " A method of analyzing the time complexity of algorithms.", correct: "False"},
            {text: "A process of converting recursive algorithms into iterative ones.", correct: "False"},
            {text: "A way to avoid solving subproblems by storing their solutions and reusing them.", correct: "True"},
            {text: "A technique to write memory-efficient programs. ", correct: "False"}
        ]
    },
    {
        question: "What happens when a top-down approach of dynamic programming is applied to any problem?",
        answers: [
            {text: "It increases both, the time complexity and the space complexity", correct: "False"},
            {text: "It *decreases both, the time complexity and the space complexity", correct: "False"},
            {text: "It increases the time complexity and decreases the space complexity", correct: "False"},
            {text: "It increases the space complexity and decreases the time complexity.", correct: "True"}
        ]
    },
    {
        question: "The Fibonacci sequence is often used to illustrate dynamic programming concepts. What is the time complexity of a naive recursive implementation of Fibonacci numbers?",
        answers: [
            {text: " O(2^n)", correct: "True"},
            {text: "O(n)", correct: "False"},
            {text: "O(log n)", correct: "False"},
            {text: "O(1)", correct: "False"}
        ]
    },
    {
        question: "In dynamic programming, the time complexity of solving a problem with overlapping subproblems using memoization is:",
        answers: [
            {text: "O(1)", correct: "False"},
            {text: "O(log n)", correct: "False"},
            {text: "O(n^2)", correct: "True"},
            {text: "O(n)", correct: "False"}
        ]  
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1; 
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "True"; 
    if(isCorrect) {
        selectedBtn.classList.add("correct"); // Fix the class name
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
    }
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }  
});
startQuiz();

