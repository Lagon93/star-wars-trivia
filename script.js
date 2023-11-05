const questions = [
    {
        question: "¿Quien interpreta a Luke Skywalker en Star Wars?",
        answers: ["Harrison Ford", "Mark Hamill", "Carrie Fisher", "Alec Guinness"],
        correct: 1
    },
    {
        question: "¿Cuál es el nombre completo de Darth Vader?",
        answers: ["Anakin Skywalker", "Luke Skywalker", "Obi-Wan Kenobi", "Han Solo"],
        correct: 0
    },
    {
        question: "¿Cuál es el nombre del planeta natal de Chewbacca?",
        answers: ["Endor", "Tatooine", "Kashyyyk", "Hoth"],
        correct: 2
    },
    {
        question: "¿En qué película de Star Wars aparece el personaje Yoda por primera vez?",
        answers: ["El Imperio Contraataca", "La Amenaza Fantasma", "El Retorno del Jedi", "Una Nueva Esperanza"],
        correct: 0
    },
    {
        question: "¿Qué sable de luz de Star Wars tiene un color rojo característico?",
        answers: ["Sable de luz de Luke Skywalker", "Sable de luz de Obi-Wan Kenobi", "Sable de luz de Darth Vader", "Sable de luz de Yoda"],
        correct: 2
    },
    {
        question: "¿Quién es el co-piloto del Halcón Milenario?",
        answers: ["Princesa Leia", "C-3PO", "R2-D2", "Chewbacca"],
        correct: 3
    },
    {
        question: "¿Qué arma es capaz de destruir un planeta entero en Star Wars?",
        answers: ["Bláster", "Lanzallamas", "Sable de luz", "Estación Espacial de Combate"],
        correct: 3
    },
    {
        question: "¿Quién es el líder de la Alianza Rebelde en Star Wars?",
        answers: ["Darth Vader", "El Emperador Palpatine", "Yoda", "Princesa Leia"],
        correct: 3
    },
    {
        question: "¿Qué cazarrecompensas es conocido por su casco mandaloriano en Star Wars?",
        answers: ["Boba Fett", "IG-88", "Dengar", "Bossk"],
        correct: 0
    },
    {
        question: "¿En qué película de Star Wars se destruye la primera Estrella de la Muerte?",
        answers: ["La Amenaza Fantasma", "El Imperio Contraataca", "Una Nueva Esperanza", "El Retorno del Jedi"],
        correct: 2
    }
        // Agrega más preguntas aquí
];

let currentQuestion = 0;
let score = 0;



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
    });
    setTimeout(() => {
        const preguntaElement = document.querySelector('.preg-cambiar-fuente');
        preguntaElement.classList.add('preg-cambiar-fuente');
    }, 1000);
}


function checkAnswer(index) {
    const correctIndex = questions[currentQuestion].correct;
    const answerButtons = document.querySelectorAll(".question-container button");

    answerButtons.forEach((button) => {
        button.disabled = true;
    });

    if (index === correctIndex) {
        score++;
        answerButtons[index].style.backgroundColor = "green";

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
        answerButtons[index].style.backgroundColor = "red";

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
    resultElement.textContent = `Puntaje final: ${score} de ${questions.length}`;
}

loadQuestion();