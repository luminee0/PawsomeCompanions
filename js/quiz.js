document.addEventListener('DOMContentLoaded', function() {
  // Quiz functionality
  const quizOptions = document.querySelectorAll('.quiz-option');
  const quizResult = document.getElementById('quiz-result');
  const nextButton = document.getElementById('next-question');
  const questionText = document.getElementById('question-text');
  
  // Quiz questions array
  const quizQuestions = [
    {
      question: "What's the most popular pet in the world?",
      options: ["Dogs", "Cats", "Fish"],
      correctAnswer: "Dogs"
    },
    {
      question: "How often should you take your dog for a checkup?",
      options: ["Once a year", "Twice a year", "Only when they're sick"],
      correctAnswer: "Once a year"
    },
    {
      question: "Which of these foods is toxic to cats?",
      options: ["Chicken", "Tuna", "Chocolate"],
      correctAnswer: "Chocolate"
    },
    {
      question: "What is the average lifespan of a goldfish in proper conditions?",
      options: ["1-3 years", "5-10 years", "10-15 years"],
      correctAnswer: "10-15 years"
    },
    {
      question: "Which animal makes the best pet for someone with allergies?",
      options: ["Reptiles", "Birds", "Hamsters"],
      correctAnswer: "Reptiles"
    }
  ];
  
  let currentQuestionIndex = 0;
  
  // Function to check answer
  function checkAnswer(selectedOption) {
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
    const isCorrect = selectedOption === correctAnswer;
    
    // Display result
    quizResult.textContent = isCorrect 
      ? `Correct! ${correctAnswer} is the right answer.` 
      : `Incorrect. The correct answer is ${correctAnswer}.`;
    
    quizResult.className = 'quiz-result ' + (isCorrect ? 'correct' : 'incorrect');
    quizResult.style.display = 'block';
    
    // Highlight the selected option
    quizOptions.forEach(option => {
      const optionAnswer = option.getAttribute('data-answer');
      option.classList.remove('correct', 'incorrect');
      
      if (optionAnswer === selectedOption) {
        option.classList.add(isCorrect ? 'correct' : 'incorrect');
      } else if (optionAnswer === correctAnswer) {
        option.classList.add('correct');
      }
      
      // Disable all options after an answer is selected
      option.disabled = true;
    });
    
    // Show next button if there are more questions
    if (currentQuestionIndex < quizQuestions.length - 1) {
      nextButton.style.display = 'inline-block';
    } else {
      nextButton.textContent = 'Restart Quiz';
      nextButton.style.display = 'inline-block';
    }
  }
  
  // Function to load next question
  function loadNextQuestion() {
    currentQuestionIndex++;
    
    // Check if we've reached the end of the questions
    if (currentQuestionIndex >= quizQuestions.length) {
      currentQuestionIndex = 0; // Reset to beginning
    }
    
    // Update question text
    questionText.textContent = quizQuestions[currentQuestionIndex].question;
    
    // Update options
    quizOptions.forEach((option, index) => {
      option.textContent = quizQuestions[currentQuestionIndex].options[index];
      option.setAttribute('data-answer', quizQuestions[currentQuestionIndex].options[index]);
      option.classList.remove('correct', 'incorrect');
      option.disabled = false;
    });
    
    // Hide result and next button
    quizResult.style.display = 'none';
    nextButton.style.display = 'none';
  }
  
  // Add event listeners to options
  quizOptions.forEach(option => {
    option.addEventListener('click', function() {
      const selectedAnswer = this.getAttribute('data-answer');
      checkAnswer(selectedAnswer);
    });
  });
  
  // Add event listener to next button
  if (nextButton) {
    nextButton.addEventListener('click', loadNextQuestion);
  }
  
  // Initialize with first question
  loadNextQuestion();
});