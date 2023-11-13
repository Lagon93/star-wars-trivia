document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('animated-text');
    const svgIcon = document.getElementById('Iconsvg');

    // Textos del juego
    const introText = '<b>Comença la cerca!</b><br><br>Un bon capità ha de ser capaç de desxifrar pistes que pugui trobar, és el moment de demostrar que tens aquesta virtut.';
    const questionText = 'Per quin altre nom es coneix als Blackhole Stormtroopers?';
    const correctAnswerText = 'El nom Blackhole Stormtrooper també pot ser la seva ombra. Troba la proxima pista en un lloc on els teus records de batalles i figures d\'acció s\'entrellacen. El tresor que busques aguarda entre els soldats de joguina.';

    // Opciones de respuesta
    const answerOptions = [
        'Shadow Stormtroopers',
        'Blackhole Guardians',
        'Dark Side Stormtroopers',
        'Galactic Shadows'
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
        const isCorrectAnswer = index === 0; // En este ejemplo, la primera opción es la respuesta correcta

        // Mostrar la respuesta después de un breve período (puedes ajustar el tiempo según tus preferencias)
        setTimeout(() => {
            textElement.innerHTML = isCorrectAnswer ? correctAnswerText : 'Resposta incorrecta. Torna-ho a intentar.';
        }, 1000);
    }
});
