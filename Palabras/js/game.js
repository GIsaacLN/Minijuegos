// Array de preguntas con sus respuestas y opciones
const questions = [
  { question: 'G_to', answer: 'a', options: ['a', 'e', 'i', 'o', 'u'], image: 'images/gato.png' },
  { question: 'Cas_', answer: 'a', options: ['a', 'e', 'i', 'o', 'u'], image: 'images/casa.png' },
  { question: 'P_rro', answer: 'e', options: ['a', 'e', 'i', 'o', 'u'], image: 'images/perro.png' },
  { question: 'T_za', answer: 'a', options: ['a', 'e', 'i', 'o', 'u'], image: 'images/taza.png' },
  { question: 'S_l', answer: 'o', options: ['a', 'e', 'i', 'o', 'u'], image: 'images/sol.png' },
  { question: 'Fl_r', answer: 'o', options: ['a', 'e', 'i', 'o', 'u'], image: 'images/flor.png' },
  { question: 'L_na', answer: 'u', options: ['a', 'e', 'i', 'o', 'u'], image: 'images/luna.png' },
  { question: 'C_ma', answer: 'a', options: ['a', 'e', 'i', 'o', 'u'], image: 'images/cama.png' },
  { question: 'Os_to', answer: 'i', options: ['a', 'e', 'i', 'o', 'u'], image: 'images/osito.png' }
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
const questionImage = document.getElementById('question-image');

// Función para mostrar una pregunta
function showQuestion() {
  // Obtén la pregunta actual
  const currentQuestion = questions[currentQuestionIndex];

  // Actualiza el texto de la pregunta
  questionEl.textContent = currentQuestion.question;

  // Actualiza la imagen de la pregunta
  questionImage.src = currentQuestion.image;
  questionImage.alt = 'Referencia de la palabra';

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
  const userAnswer = e.target.textContent.toLowerCase();
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
    questionImage.style.display = 'none';
    answersEl.innerHTML = '';
  }
}

// Muestra la primera pregunta al cargar la página
showQuestion();
