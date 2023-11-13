document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('animated-text');
    const svgIcon = document.getElementById('Iconsvg');

    // Textos del juego
    const introText = ' Aquesta ha sigut fàcil, ara ja és hora de complicar una mica més el repte, continua alerta!';
    const questionText = 'Quina unitat Stormtrooper utilitza com a muntura els dewbacks?';
    const correctAnswerText = 'La unitat que s\'alça sobre els Dewbacks són les teves guies. A l\'exterior, on la brisa es barreja amb la força de les estrelles, descobreix la següent pista al teu camí.';

    // Opciones de respuesta
    const answerOptions = [
        'Shadow Stormtroopers',
        'Sand Stormtrooper',
        'Guardia de Coruscant',
        'Piloto TIE'
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
        const isCorrectAnswer = index === 1; // En este ejemplo, la primera opción es la respuesta correcta

        // Mostrar la respuesta después de un breve período (puedes ajustar el tiempo según tus preferencias)
        setTimeout(() => {
            textElement.innerHTML = isCorrectAnswer ? correctAnswerText : 'Resposta incorrecta. Torna-ho a intentar.';
        }, 1000);
    }
});
