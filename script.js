const questions = [
  {
    question: "What is the capital of India?",
    answer: [
      { text: "New Delhi", correct: true },
      { text: "Mumbai", correct: false },
      { text: "Chennai", correct: false },
      { text: "Kolkata", correct: false }
    ]
  },
  {
    question: "Which river is considered the holiest in India?",
    answer: [
      { text: "Yamuna", correct: false },
      { text: "Ganges (Ganga)", correct: true },
      { text: "Brahmaputra", correct: false },
      { text: "Godavari", correct: false }
    ]
  },
  {
    question: "Who is the Father of the Nation in India?",
    answer: [
      { text: "Sardar Vallabhbhai Patel", correct: false },
      { text: "Subhas Chandra Bose", correct: false },
      { text: "Mahatma Gandhi", correct: true },
      { text: "Jawaharlal Nehru", correct: false }
    ]
  },
  {
    question: "Which festival is widely celebrated as the Festival of Lights in India?",
    answer: [
      { text: "Holi", correct: false },
      { text: "Diwali", correct: true },
      { text: "Eid", correct: false },
      { text: "Christmas", correct: false }
    ]
  },
  {
    question: "Who wrote the Indian national anthem?",
    answer: [
      { text: "Rabindranath Tagore", correct: true },
      { text: "Jawaharlal Nehru", correct: false },
      { text: "Mahatma Gandhi", correct: false },
      { text: "Sardar Vallabhbhai Patel", correct: false }
    ]
  },
  {
    question: "Which is the largest state in India by area?",
    answer: [
      { text: "Rajasthan", correct: true },
      { text: "Madhya Pradesh", correct: false },
      { text: "Uttar Pradesh", correct: false },
      { text: "Maharashtra", correct: false }
    ]
  },
  {
    question: "What is the national emblem of India?",
    answer: [
      { text: "Lotus", correct: false },
      { text: "Peacock", correct: false },
      { text: "Lion Capital of Ashoka", correct: true },
      { text: "Tiger", correct: false }
    ]
  },
  {
    question: "Which is the highest mountain peak in India?",
    answer: [
      { text: "Mount Everest", correct: false },
      { text: "Nanda Devi", correct: true },
      { text: "Kanchenjunga", correct: false },
      { text: "Annapurna", correct: false }
    ]
  },
  {
    question: "Who was the first Prime Minister of India?",
    answer: [
      { text: "Jawaharlal Nehru", correct: true },
      { text: "Sardar Vallabhbhai Patel", correct: false },
      { text: "Indira Gandhi", correct: false },
      { text: "Lal Bahadur Shastri", correct: false }
    ]
  },
  {
    question: "Which state in India is known as the 'Land of Five Rivers'?",
    answer: [
      { text: "Punjab", correct: true },
      { text: "Haryana", correct: false },
      { text: "Uttar Pradesh", correct: false },
      { text: "Rajasthan", correct: false }
    ]
  },
  {
    question: "In which year did India gain independence from British rule?",
    answer: [
      { text: "1942", correct: false },
      { text: "1945", correct: false },
      { text: "1947", correct: true },
      { text: "1950", correct: false }
    ]
  },
  {
    question: "What is the national flower of India?",
    answer: [
      { text: "Rose", correct: false },
      { text: "Lotus", correct: true },
      { text: "Marigold", correct: false },
      { text: "Sunflower", correct: false }
    ]
  },
  {
    question: "Who was the first woman Prime Minister of India?",
    answer: [
      { text: "Indira Gandhi", correct: true },
      { text: "Sonia Gandhi", correct: false },
      { text: "Priyanka Gandhi", correct: false },
      { text: "Mamata Banerjee", correct: false }
    ]
  },
  {
    question: "Which city is known as the 'Pink City' of India?",
    answer: [
      { text: "Jaipur", correct: true },
      { text: "Udaipur", correct: false },
      { text: "Jodhpur", correct: false },
      { text: "Agra", correct: false }
    ]
  },
  {
    question: "What is the national bird of India?",
    answer: [
      { text: "Peacock", correct: true },
      { text: "Sparrow", correct: false },
      { text: "Crow", correct: false },
      { text: "Eagle", correct: false }
    ]
  },
  {
    question: "Who is known as the 'Missile Man of India'?",
    answer: [
      { text: "Jawaharlal Nehru", correct: false },
      { text: "Rajiv Gandhi", correct: false },
      { text: "Abdul Kalam", correct: true },
      { text: "Indira Gandhi", correct: false }
    ]
  },
  {
    question: "Which state in India is famous for its backwaters and houseboats?",
    answer: [
      { text: "Goa", correct: false },
      { text: "Kerala", correct: true },
      { text: "Tamil Nadu", correct: false },
      { text: "Andhra Pradesh", correct: false }
    ]
  },
  {
    question: "What is the currency of India?",
    answer: [
      { text: "Rupee", correct: true },
      { text: "Dollar", correct: false },
      { text: "Yen", correct: false },
      { text: "Euro", correct: false }
    ]
  },
  {
    question: "Which famous monument in India is known as the 'Symbol of Love'?",
    answer: [
      { text: "Hawa Mahal", correct: false },
      { text: "Taj Mahal", correct: true },
      { text: "Red Fort", correct: false },
      { text: "Qutub Minar", correct: false }
    ]
  },
  {
    question: "What is the national animal of India?",
    answer: [
      { text: "Lion", correct: false },
      { text: "Tiger", correct: true },
      { text: "Elephant", correct: false },
      { text: "Leopard", correct: false }
    ]
  },
  {
    question: "Which state in India is famous for its tea plantations?",
    answer: [
      { text: "Assam", correct: true },
      { text: "Karnataka", correct: false },
      { text: "Gujarat", correct: false },
      { text: "Himachal Pradesh", correct: false }
    ]
  },
  {
    question: "Who is the current President of India?",
    answer: [
      { text: "Narendra Modi", correct: false },
      { text: "Amit Shah", correct: false },
      { text: "Droupadi Murmu", correct: true },
      { text: "Ram Nath Kovind", correct: false }
    ]
  },
  {
    question: "Which state in India is known for its Sun Temple?",
    answer: [
      { text: "Rajasthan", correct: false },
      { text: "Odisha", correct: true },
      { text: "Haryana", correct: false },
      { text: "Gujarat", correct: false }
    ]
  },
  {
    question: "What is the national tree of India?",
    answer: [
      { text: "Mango", correct: false },
      { text: "Banyan", correct: false },
      { text: "Peepal", correct: true },
      { text: "Neem", correct: false }
    ]
  },
  {
    question: "Who was the first woman to fly solo across the Atlantic Ocean?",
    answer: [
      { text: "Amelia Earhart", correct: true },
      { text: "Valentina Tereshkova", correct: false },
      { text: "Sally Ride", correct: false },
      { text: "Bessie Coleman", correct: false }
    ]
  },
  {
    question: "Which famous Indian leader is often referred to as 'Netaji'?",
    answer: [
      { text: "Mahatma Gandhi", correct: false },
      { text: "Jawaharlal Nehru", correct: false },
      { text: "Subhas Chandra Bose", correct: true },
      { text: "Sardar Vallabhbhai Patel", correct: false }
    ]
  },
  {
    question: "What is the national sport of India?",
    answer: [
      { text: "Cricket", correct: false },
      { text: "Field Hockey", correct: true },
      { text: "Football", correct: false },
      { text: "Badminton", correct: false }
    ]
  },
  {
    question: "Which Indian festival is also known as the 'Festival of Colors'?",
    answer: [
      { text: "Diwali", correct: false },
      { text: "Holi", correct: true },
      { text: "Navratri", correct: false },
      { text: "Eid", correct: false }
    ]
  },
];



const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let shuffledQuestions, currentQuestionIndex = 0, score = 0;

function startGame() {
  shuffledQuestions = questions.sort(() => Math.random() - .5);
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

  currentQuestion.answer.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    answerButtonsElement.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);

  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  let selectedButton = e.target;
  let isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add('correct');
    score++;
  }
  else {
    selectedButton.classList.add('incorrect');
  }

  Array.from(answerButtonsElement.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length} .`;
  nextButton.style.display = "block";
  nextButton.innerHTML = "Play Again";
  nextButton.addEventListener('click', startGame);
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  }
  else {
    showScore();
  }
}

);

startGame();