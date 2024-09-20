document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.qa');
    const errorMessage = document.getElementById('error-message');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;

    // Respuestas correctas
    const correctAnswers = [
        '17 de marzo', // Respuesta para la primera pregunta
        'azul', // Respuesta para la segunda pregunta
        'cristiano ronaldo' // Respuesta para la tercera pregunta
    ];

    function showQuestion(index) {
        if (index < 0 || index >= questions.length) return;

        // Ocultar todas las preguntas
        questions.forEach((qa, i) => {
            if (i === index) {
                qa.classList.remove('hidden');
            } else {
                qa.classList.add('hidden');
            }
        });

        // Ocultar el mensaje de error
        errorMessage.classList.add('hidden');
    }

    function checkAnswer(index) {
        const input = document.querySelector(`#answer${index + 1}`);
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = correctAnswers[index].toLowerCase();

        if (userAnswer === correctAnswer) {
            errorMessage.classList.add('hidden');
            return true;
        } else {
            errorMessage.classList.remove('hidden');
            return false;
        }
    }

    function redirectToFlowersPage() {
        window.location.href = 'aleja.html';
    }

    // Mostrar la primera pregunta al cargar
    showQuestion(currentIndex);

    // Manejador del botón "Siguiente"
    nextBtn.addEventListener('click', () => {
        if (checkAnswer(currentIndex)) {
            currentIndex++;
            if (currentIndex >= questions.length) {
                // Redirigir a la página de flores
                redirectToFlowersPage();
            } else {
                showQuestion(currentIndex);
            }
        }
    });
});
