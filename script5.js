document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('animated-text');
    const svgIcon = document.getElementById('Iconsvg');

    // Textos del juego
    const introText = 'Vas força bé, tal com s\'esperava de tu';
    const questionText = 'Quina unitat rep una formació més tècnica i de suport que altres? ';
    const correctAnswerText = 'Els *Scout *Troopers s\'entrenen en habilitats tècniques i de suport, igual que cuidar i nodrir a les plantes! Dirigeix-te cap a on creixen les fulles en el menjador per a trobar la pròxima pista.';

    // Opciones de respuesta
    const answerOptions = [
        'Soldats G-Cero',
        'Stormtrooper tecnic',
        'Scout Trooper',
        'Guardia de l\'Emperador'
    ];

    // Mostrar la introducción al cargar la página
    textElement.innerHTML = introText;

    // Función para cambiar el texto y aplicar la animación de fade-in
    function changeTextOnClick() {
        textElement.style.opacity = '0';

        setTimeout(() => {
            // Mostrar la pregunta con opciones después de cambiar el texto
            const optionsHTML = answerOptions.map(option => `<div class="answer-option">${option}</div>`).join('');
            textElement.innerHTML = `${questionText}<br>${optionsHTML}`;
            textElement.style.opacity = '1';

            // Asignar la función al evento de clic en las opciones de respuesta
            const answerOptionElements = document.querySelectorAll('.answer-option');
            answerOptionElements.forEach((element, index) => {
                element.addEventListener('click', () => handleAnswerClick(index));
            });
        }, 1000); // Ajusta este valor según tus preferencias de duración de la animación
    }

    // Función para manejar el clic en el icono SVG
    function handleSvgClick() {
        console.log("hello")
        // Cambiar el texto al hacer clic en el SVG
        changeTextOnClick();
    }

    // Asigna la función al evento de clic en el icono SVG
    svgIcon.addEventListener('click', handleSvgClick);

    // Función para manejar el clic en una opción de respuesta
    function handleAnswerClick(index) {
        // Verificar si la respuesta es correcta (puedes personalizar esta lógica según tus necesidades)
        const isCorrectAnswer = index === 2; // En este ejemplo, la primera opción es la respuesta correcta

        // Mostrar la respuesta después de un breve período (puedes ajustar el tiempo según tus preferencias)
        setTimeout(() => {
            textElement.innerHTML = isCorrectAnswer ? correctAnswerText : 'Resposta incorrecta. Torna-ho a intentar.';
        }, 1000);
    }
});
