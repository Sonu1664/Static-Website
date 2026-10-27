// ============================================
// SKILLPROBE — QUIZ ENGINE
// Phase-2: JavaScript Functionality
// ============================================

let quizState = {
  questions: [],
  currentIndex: 0,
  answers: [],       // { selected: index|null, correct: index, skipped: bool }
  timePerQ: 45,
  startTime: null,
  totalTime: 0,
  timerInterval: null,
  timeLeft: 45,
  selectedOption: null,
  answered: false
};

function startQuiz() {
  const category = document.getElementById('categorySelect').value;
  const count = parseInt(document.getElementById('questionCount').value);
  const timePerQ = parseInt(document.getElementById('timePerQ').value);

  quizState.questions = getQuestions(category, count);
  quizState.currentIndex = 0;
  quizState.answers = [];
  quizState.timePerQ = timePerQ;
  quizState.startTime = Date.now();
  quizState.selectedOption = null;
  quizState.answered = false;

  document.getElementById('quizStart').style.display = 'none';
  document.getElementById('quizActive').style.display = 'block';
  document.getElementById('qTotal').textContent = quizState.questions.length;

  renderQuestion();
}

function renderQuestion() {
  const q = quizState.questions[quizState.currentIndex];
  const total = quizState.questions.length;
  const current = quizState.currentIndex + 1;

  quizState.selectedOption = null;
  quizState.answered = false;

  // Update header
  document.getElementById('qNum').textContent = current;
  document.getElementById('progressFill').style.width = ((current - 1) / total * 100) + '%';

  // Render question
  document.getElementById('questionCat').textContent = q.cat;
  document.getElementById('questionText').textContent = q.q;

  // Render options
  const optionsEl = document.getElementById('optionsContainer');
  const letters = ['A', 'B', 'C', 'D'];
  optionsEl.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span>${opt}`;
    btn.onclick = () => selectOption(i, btn);
    optionsEl.appendChild(btn);
  });

  // Button states
  document.getElementById('skipBtn').style.display = '';
  document.getElementById('nextBtn').style.display = 'none';

  // Start timer
  startTimer();

  // Animate
  const card = document.getElementById('questionCard');
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = 'slideIn .35s ease';
}

function selectOption(index, btnEl) {
  if (quizState.answered) return;
  quizState.answered = true;
  quizState.selectedOption = index;

  const q = quizState.questions[quizState.currentIndex];
  stopTimer();

  // Disable all buttons
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(b => b.disabled = true);

  // Mark correct / wrong
  buttons[q.answer].classList.add('correct');
  if (index !== q.answer) {
    btnEl.classList.add('wrong');
  }

  // Record answer
  quizState.answers.push({
    question: q,
    selected: index,
    correct: q.answer,
    skipped: false
  });

  // Show next button
  document.getElementById('skipBtn').style.display = 'none';
  document.getElementById('nextBtn').style.display = '';

  // Auto-advance check
  if (quizState.currentIndex + 1 >= quizState.questions.length) {
    document.getElementById('nextBtn').textContent = 'View Scorecard →';
  }
}

function skipQuestion() {
  if (quizState.answered) return;
  quizState.answered = true;
  stopTimer();

  const q = quizState.questions[quizState.currentIndex];
  quizState.answers.push({
    question: q,
    selected: null,
    correct: q.answer,
    skipped: true
  });

  // Show correct
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(b => b.disabled = true);
  buttons[q.answer].classList.add('correct');

  document.getElementById('skipBtn').style.display = 'none';
  document.getElementById('nextBtn').style.display = '';
  if (quizState.currentIndex + 1 >= quizState.questions.length) {
    document.getElementById('nextBtn').textContent = 'View Scorecard →';
  }
}

function nextQuestion() {
  quizState.currentIndex++;
  if (quizState.currentIndex >= quizState.questions.length) {
    finishQuiz();
  } else {
    renderQuestion();
  }
}

function finishQuiz() {
  stopTimer();
  quizState.totalTime = Math.floor((Date.now() - quizState.startTime) / 1000);

  // Save to sessionStorage for scorecard
  sessionStorage.setItem('quizResults', JSON.stringify({
    answers: quizState.answers,
    totalTime: quizState.totalTime
  }));

  window.location.href = 'scorecard.html';
}

// ===== TIMER =====
function startTimer() {
  quizState.timeLeft = quizState.timePerQ;
  updateTimerDisplay();

  clearInterval(quizState.timerInterval);
  quizState.timerInterval = setInterval(() => {
    quizState.timeLeft--;
    updateTimerDisplay();

    if (quizState.timeLeft <= 10) {
      document.getElementById('timerDisplay').classList.add('warning');
    }

    if (quizState.timeLeft <= 0) {
      stopTimer();
      autoSkip();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(quizState.timerInterval);
  document.getElementById('timerDisplay').classList.remove('warning');
}

function updateTimerDisplay() {
  const mins = Math.floor(quizState.timeLeft / 60);
  const secs = quizState.timeLeft % 60;
  document.getElementById('timerDisplay').textContent = `${mins}:${secs.toString().padStart(2,'0')}`;
}

function autoSkip() {
  if (!quizState.answered) {
    skipQuestion();
    // Brief pause then advance
    setTimeout(() => nextQuestion(), 1200);
  }
}
