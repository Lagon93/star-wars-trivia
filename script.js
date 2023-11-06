const questions = [
    {
        question: "Qui va ser l'aprenent Sith de Darth Sidious?",
        answers: ["Darth Maul", "Darth Vader", "Darth Tyranus", "Darth Plagueis"],
        correct: 0
    },
    {
        question: "En quin planeta va néixer l'Emperador Palpatine?",
        answers: ["Coruscant", "Tatooine", "Naboo", "Mustafar"],
        correct: 2
    },
    {
        question: "Quin és el nom del Sith que es va convertir en Darth Bane i va establir la 'Regla de Dos'?",
        answers: ["Darth Malak", "Darth Revan", "Darth Sion", "Darth Des"],
        correct: 1
    },
    {
        question: "Quin Lord Sith va governar la Galàxia durant el període de la 'Gran Purga Jedi'?",
        answers: ["Darth Malgus", "Darth Nihilus", "Darth Tenebrous", "Darth Sidious"],
        correct: 3
    },
    {
        question: "Com es diu el líder dels Inquisidors, que caçava els Jedi supervivents després de l'Ordre 66?",
        answers: ["Darth Talon", "Darth Nihl", "Darth Traya", "Darth Vader"],
        correct: 1
    },
    {
        question: "Quin és el nom del Sith conegut per ser el 'Senyor dels Sith' a la sèrie de còmics 'Legends'?",
        answers: ["Darth Bane", "Darth Krayt", "Darth Vader", "Darth Malgus"],
        correct: 1
    },
    {
        question: "Quin és el nom de la batalla en què l'Imperi va destruir la base rebel a Hoth a 'El Imperi Contraataca'?",
        answers: ["Batalla de Jakku", "Batalla d'Endor", "Batalla de Yavin", "Batalla de Hoth"],
        correct: 3
    },
    {
        question: "Quin és el nom del planeta natal de Darth Maul?",
        answers: ["Dathomir", "Korriban", "Lothal", "Eriadu"],
        correct: 0
    },
    {
        question: "En quina pel·lícula de Star Wars apareix el planeta Exegol?",
        answers: ["El Imperi Contraataca", "El Retorn del Jedi", "L'Amenaça Fantasma", "L'Ascens de Skywalker"],
        correct: 3
    },
    {
        question: "Quin és el nom del famós sable de llum Sith amb una empunyadura creuada?",
        answers: ["Sable de llum de Darth Tyranus", "Sable de llum de Darth Vader", "Sable de llum de Darth Sidious", "Sable de llum de Darth Maul"],
        correct: 3
    }
];


let currentQuestion = 0;
let score = 0;

function startGame() {
    window.location.href = 'trivia.html'; // Reemplaza 'trivia.html' con la ruta correcta a tu página de preguntas
}


function loadQuestion() {
    const questionElement = document.querySelector(".question-container p");
    const answersElement = document.querySelector(".question-container ul");

    questionElement.textContent = questions[currentQuestion].question;

    // Borra todas las respuestas anteriores
    answersElement.innerHTML = "";

    questions[currentQuestion].answers.forEach((answer, index) => {
        // Crea un nuevo elemento de lista (li)
        const listItem = document.createElement("li");
        
        // Crea un botón de respuesta y configura su texto y función onclick
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);

        // Agrega el botón de respuesta al elemento de lista
        listItem.appendChild(button);

        // Agrega el elemento de lista a la lista desordenada
        answersElement.appendChild(listItem);
    })

}


function checkAnswer(index) {
    const correctIndex = questions[currentQuestion].correct;
    const answerButtons = document.querySelectorAll(".question-container button");

    answerButtons.forEach((button) => {
        button.disabled = true;
    });

    if (index === correctIndex) {
        score++;
        answerButtons[index].style.backgroundColor = "rgba(86, 238, 138, 0.48)";

        const nextButton = document.createElement("button");
        nextButton.textContent = "Siguiente Pregunta";
        nextButton.onclick = () => {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                showResult();
            }
            document.querySelector(".question-container").removeChild(nextButton);
        };

        document.querySelector(".question-container").appendChild(nextButton);
    } else {
        answerButtons[index].style.backgroundColor = " rgba(255, 61, 56, 0.48)";

        const retryButton = document.createElement("button");
        retryButton.textContent = "Volver a Intentar";
        retryButton.onclick = () => {
            answerButtons.forEach((button) => {
                button.disabled = false;
            });
            document.querySelector(".question-container").removeChild(retryButton);
        };

        document.querySelector(".question-container").appendChild(retryButton);
    }
}

function showResult() {
    const resultElement = document.getElementById("result");
    window.location.href = "resultado.html";
}

loadQuestion();