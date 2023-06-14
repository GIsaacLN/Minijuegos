// Array de preguntas con sus respuestas y opciones
const questions = [
    { question: '5 x _ = 10', answer: 2, options: [2, 5, 1, 10] },
    { question: '3 x _ = 6', answer: 2, options: [2, 3, 1, 9] },
    { question: '4 x _ = 24', answer: 6, options: [5, 6, 8, 10] },
    { question: '5 x _ = 40', answer: 8, options: [6, 7, 8, 10] },
    { question: '6 x _ = 42', answer: 7, options: [6, 7, 8, 9] },
    { question: '7 x _ = 63', answer: 9, options: [8, 9, 10, 11] },
    { question: '8 x _ = 72', answer: 9, options: [9, 10, 11, 12] },
    { question: '9 x _ = 45', answer: 5, options: [4, 5, 6, 7] },
    { question: '10 x _ = 80', answer: 8, options: [6, 7, 8, 10] },
    { question: '11 x _ = 99', answer: 9, options: [8, 9, 10, 11] }    
    // más preguntas
  ];
  
  // Variables para controlar la pregunta actual y la puntuación
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
    
  var correctSound = new Audio('audio/correct.mp3');
  var incorrectSound = new Audio('audio/incorrect.mp3');

  
  // Referencia a los elementos de la página
  const questionEl = document.getElementById('question');
  const answersEl = document.getElementById('answers');
  const messageEl = document.getElementById('message');
  const scoreEl = document.getElementById('score');
  
  // Función para mostrar una pregunta
  function showQuestion() {
    // Obtén la pregunta actual
    const currentQuestion = questions[currentQuestionIndex];
  
    // Actualiza el texto de la pregunta
    questionEl.textContent = currentQuestion.question;
  
    // Limpia el contenedor de las respuestas
    answersEl.innerHTML = '';
  
    // Crea los botones de las opciones de respuesta
    for (let i = 0; i < currentQuestion.options.length; i++) {
      const btn = document.createElement('button');
      btn.textContent = currentQuestion.options[i];
      btn.addEventListener('click', checkAnswer);
      answersEl.appendChild(btn);
    }
  }
  
  // Función para comprobar la respuesta
  function checkAnswer(e) {
    const userAnswer = parseInt(e.target.textContent);
    const correctAnswer = questions[currentQuestionIndex].answer;

    // Comprueba si la respuesta es correcta
    if (userAnswer === correctAnswer) {
        // Si es correcta, aumenta la puntuación, reproduce el sonido correcto y muestra un mensaje
        correctAnswers++;
        correctSound.play();
        messageEl.textContent = '¡Correcto!';
        messageEl.style.color = 'green';
    } else {
        // Si es incorrecta, reproduce el sonido incorrecto y muestra un mensaje
        incorrectSound.play();
        messageEl.textContent = 'Incorrecto, ¡inténtalo de nuevo!';
        messageEl.style.color = 'red';
    }

    // Muestra la puntuación
    scoreEl.textContent = `Puntuación: ${correctAnswers}`;

    // Si quedan más preguntas, pasa a la siguiente. Si no, muestra un mensaje final
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        questionEl.textContent = '¡Has terminado el juego!';
        answersEl.innerHTML = '';
    }
}
  
  // Muestra la primera pregunta al cargar la página
  showQuestion();