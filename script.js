const preguntasNormales = [
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

const preguntasDificiles = [
    {
        question: "Quin dels següents Sith és conegut com el 'Darth dels Lors Sith' i porta una màscara distintiva?",
        answers: ["Darth Maul", "Darth Revan", "Darth Plagueis", "Darth Bane"],
        correct: 1
    },
    {
        question: "Quina antiga arma Sith, que apareix a 'Star Wars: Knights of the Old Republic', va ser capaç de destruir estrelles senceres?",
        answers: ["Sable làser", "Estrella de la Mort", "Bastó làser Sith", "Súper arma Sith"],
        correct: 2
    },
    {
        question: "A la sèrie de còmics de Star Wars, quin és el nom del Sith que va assumir el títol de 'Darth Malak'?",
        answers: ["Darth Nihilus", "Darth Sion", "Darth Traya", "Darth Revan"],
        correct: 3
    },
    {
        question: "Qui va ser el Lord Sith darrere del Projecte Eclipse en el videojoc 'Star Wars: El Poder de la Força'?",
        answers: ["Darth Vader", "Darth Sidious", "Darth Plagueis", "Darth Starkiller"],
        correct: 3
    },
    {
        question: "Quin va ser el planeta d'origen d'Exar Kun, un antic Sith que va desencadenar una guerra galàctica als còmics de Star Wars?",
        answers: ["Korriban", "Koros Major", "Dromund Kaas", "Ziost"],
        correct: 1
    },
    {
        question: "Qui es va convertir en el primer Emperador de l'Imperi Galàctic després de la caiguda de Palpatine a 'Star Wars: Llegat'?",
        answers: ["Cade Skywalker", "Roan Fel", "Carnor Jax", "Jax Pavan"],
        correct: 1
    },
    {
        question: "Quin Lord Sith, que apareix a les novel·les de Star Wars, va liderar el 'Nou Imperi' després de la Batalla d'Endor?",
        answers: ["Darth Caedus", "Darth Vectivus", "Darth Krayt", "Darth Plagueis"],
        correct: 2
    },
    {
        question: "Quin és el nom del Mestre Sith que va entrenar a Darth Bane a la Regla de Dos dels Sith a l'univers expandit?",
        answers: ["Darth Zannah", "Darth Cognus", "Darth Tenebrous", "Darth Andeddu"],
        correct: 2
    },
    {
        question: "A 'Star Wars: The Clone Wars', qui és el governant de Mandalore que es converteix en deixeble Sith de Darth Maul?",
        answers: ["Pre Vizsla", "Bo-Katan Kryze", "Satine Kryze", "Savage Opress"],
        correct: 3
    },
    {
        question: "Quin és el nom de l'antic Lord Sith que va descobrir el secret per evitar la mort i la immortalitat a l'univers expandit?",
        answers: ["Darth Traya", "Darth Nihilus", "Darth Sion", "Darth Vitiate"],
        correct: 3
    }
];


let currentQuestion = 0;
let score = 0;

function startGame() {
    const difficulty = document.getElementById("difficulty").value;
    const url = `trivia.html?difficulty=${difficulty}`; // Agrega el parámetro de dificultad a la URL
    window.location.href = url;
}

// Obtiene el valor del parámetro 'difficulty' de la URL
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Obtiene la dificultad seleccionada
const selectedDifficulty = getURLParameter('difficulty');

// Carga las preguntas correspondientes según la dificultad
let preguntas;

if (selectedDifficulty === "dificil") {
    preguntas = preguntasDificiles; // Preguntas difíciles
} else {
    preguntas = preguntasNormales; // Preguntas normales
}

// Llama a la función para iniciar el juego con las preguntas seleccionadas
loadQuestion(preguntas);


function loadQuestion(preguntas) {

    const questionElement = document.querySelector(".question-container p");
        // Verifica si el elemento existe antes de intentar acceder a sus propiedades
        if (questionElement) {
            questionElement.textContent = preguntas[currentQuestion].question;
    
            // Resto de tu código...
        }
    const answersElement = document.querySelector(".question-container ul");

    questionElement.textContent = preguntas[currentQuestion].question;

    // Borra todas las respuestas anteriores
    answersElement.innerHTML = "";

    preguntas[currentQuestion].answers.forEach((answer, index) => {
        // Crea un nuevo elemento de lista (li)
        const listItem = document.createElement("li");
        
        // Crea un botón de respuesta y configura su texto y función onclick
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index, preguntas);

        // Agrega el botón de respuesta al elemento de lista
        listItem.appendChild(button);

        // Agrega el elemento de lista a la lista desordenada
        answersElement.appendChild(listItem);
    })

}


function checkAnswer(index, preguntas) {
    const correctIndex = preguntas[currentQuestion].correct;
    const answerButtons = document.querySelectorAll(".question-container button");

    answerButtons.forEach((button) => {
        button.disabled = true;
    });

    if (index === correctIndex) {
        score++;
        answerButtons[index].style.backgroundColor = "rgba(86, 238, 138, 0.48)";

        // Desactiva el botón de "Siguiente Pregunta" si no quedan más preguntas
        if (currentQuestion < preguntas.length - 1) {
            const nextButton = document.createElement("button");
            nextButton.textContent = "Siguiente Pregunta";
            nextButton.onclick = () => {
                currentQuestion++;
                loadQuestion(preguntas); // Agrega el argumento de preguntas
                document.querySelector(".question-container").removeChild(nextButton);
            };

            document.querySelector(".question-container").appendChild(nextButton);
        } else {
            showResult();
        }
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

