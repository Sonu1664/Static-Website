// ============================================
// SKILLPROBE — SCORECARD ENGINE
// Phase-2: Dynamic Content & Evaluation
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const raw = sessionStorage.getItem('quizResults');
  if (!raw) {
    // No results — demo mode with sample data
    renderDemo();
    return;
  }
  const data = JSON.parse(raw);
  renderScorecard(data.answers, data.totalTime);
});

function renderScorecard(answers, totalTime) {
  const total = answers.length;
  const correct = answers.filter(a => !a.skipped && a.selected === a.correct).length;
  const skipped = answers.filter(a => a.skipped).length;
  const wrong = total - correct - skipped;
  const pct = Math.round((correct / total) * 100);

  // Grade and message
  const { grade, title, desc, color } = getGrade(pct);

  document.getElementById('scoreGrade').textContent = pct + '%';
  document.getElementById('scoreGrade').style.color = color;
  document.getElementById('scoreTitle').textContent = title;
  document.getElementById('scoreDesc').textContent = desc;

  document.getElementById('correctCount').textContent = correct;
  document.getElementById('wrongCount').textContent = wrong + skipped;

  const mins = Math.floor(totalTime / 60);
  const secs = totalTime % 60;
  document.getElementById('timeTaken').textContent = `${mins}m ${secs}s`;

  // Topic breakdown
  renderTopicBreakdown(answers);

  // Answer list
  renderAnswerList(answers);

  // Animate grade
  animateScore(pct);
}

function getGrade(pct) {
  if (pct >= 90) return { grade: 'A+', title: 'Outstanding! 🏆', desc: 'Exceptional performance! You have mastered this topic.', color: 'var(--success)' };
  if (pct >= 80) return { grade: 'A', title: 'Excellent! 🌟', desc: 'Great job! You have a strong understanding of the subject.', color: 'var(--success)' };
  if (pct >= 70) return { grade: 'B', title: 'Good Work! 👍', desc: 'Solid performance. A little more practice will take you to the top.', color: 'var(--accent2)' };
  if (pct >= 60) return { grade: 'C', title: 'Average 📚', desc: 'You passed! Focus on the topics you missed for better results.', color: 'var(--warning)' };
  if (pct >= 40) return { grade: 'D', title: 'Needs Improvement 💪', desc: 'Keep practicing. Review the questions you got wrong and try again.', color: 'var(--warning)' };
  return { grade: 'F', title: 'Keep Trying! 🔥', desc: 'Don\'t give up! Study the fundamentals and give it another shot.', color: 'var(--accent3)' };
}

function renderTopicBreakdown(answers) {
  const topics = {};
  answers.forEach(a => {
    const cat = a.question.cat;
    if (!topics[cat]) topics[cat] = { correct: 0, total: 0 };
    topics[cat].total++;
    if (!a.skipped && a.selected === a.correct) topics[cat].correct++;
  });

  const container = document.getElementById('topicBars');
  container.innerHTML = '';

  Object.entries(topics).forEach(([cat, data]) => {
    const pct = Math.round((data.correct / data.total) * 100);
    const color = pct >= 70 ? 'var(--success)' : pct >= 40 ? 'var(--warning)' : 'var(--accent3)';

    const el = document.createElement('div');
    el.style.marginBottom = '20px';
    el.innerHTML = `
      <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:0.88rem;">
        <span style="font-weight:600">${cat}</span>
        <span style="color:var(--text2)">${data.correct}/${data.total} correct &nbsp;|&nbsp; <strong style="color:${color}">${pct}%</strong></span>
      </div>
      <div style="height:10px;background:var(--bg3);border-radius:5px;overflow:hidden">
        <div style="height:100%;width:0%;background:${color};border-radius:5px;transition:width 1s ease;--target:${pct}%" class="animated-bar"></div>
      </div>
    `;
    container.appendChild(el);
  });

  // Animate bars after render
  setTimeout(() => {
    document.querySelectorAll('.animated-bar').forEach(bar => {
      bar.style.width = bar.style.getPropertyValue('--target');
    });
  }, 300);
}

function renderAnswerList(answers) {
  const container = document.getElementById('answerList');
  container.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D'];

  answers.forEach((a, i) => {
    const isCorrect = !a.skipped && a.selected === a.correct;
    const el = document.createElement('div');
    el.className = `answer-item ${isCorrect ? 'correct-ans' : 'wrong-ans'}`;

    const selectedText = a.skipped ? '<em style="color:var(--text3)">Skipped</em>' : a.question.options[a.selected];
    const correctText = a.question.options[a.correct];
    const icon = isCorrect ? '✅' : (a.skipped ? '⏭' : '❌');

    el.innerHTML = `
      <div class="answer-q">
        <span class="q-num">Q${i + 1}</span>
        <span class="q-text">${icon} ${a.question.q}</span>
      </div>
      <div class="answer-detail">
        ${!isCorrect ? `<div class="ans-given"><span class="dot"></span><span class="ans-label">Your Answer:</span> ${selectedText}</div>` : ''}
        <div class="ans-correct"><span class="dot" style="background:var(--success)"></span><span class="ans-label">Correct:</span> ${letters[a.correct]}. ${correctText}</div>
      </div>
    `;
    container.appendChild(el);
  });
}

function animateScore(targetPct) {
  // Simple counter animation
  const el = document.getElementById('scoreGrade');
  let current = 0;
  const increment = targetPct / 40;
  const interval = setInterval(() => {
    current = Math.min(current + increment, targetPct);
    el.textContent = Math.round(current) + '%';
    if (current >= targetPct) clearInterval(interval);
  }, 30);
}

function printScorecard() {
  window.print();
}

// Demo mode if no quiz was taken
function renderDemo() {
  const demoAnswers = [
    { question: { q: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], cat: "Web Development" }, selected: 1, correct: 1, skipped: false },
    { question: { q: "Which keyword defines a function in Python?", options: ["function", "define", "def", "func"], cat: "Python Programming" }, selected: 2, correct: 2, skipped: false },
    { question: { q: "What is 15% of 200?", options: ["20", "25", "30", "35"], cat: "Quantitative Aptitude" }, selected: 0, correct: 2, skipped: false },
    { question: { q: "Which SQL command retrieves data?", options: ["GET", "FETCH", "SELECT", "RETRIEVE"], cat: "Database & SQL" }, selected: 2, correct: 2, skipped: false },
    { question: { q: "What does DOM stand for?", options: ["Document Object Model", "Data Object Management", "Design Object Method", "Document Orientation Module"], cat: "Web Development" }, selected: 1, correct: 0, skipped: false },
    { question: { q: "What is the output of print(2 ** 3)?", options: ["6", "23", "8", "Error"], cat: "Python Programming" }, selected: 2, correct: 2, skipped: false },
    { question: { q: "What is the LCM of 12 and 18?", options: ["24", "36", "48", "72"], cat: "Quantitative Aptitude" }, selected: 1, correct: 1, skipped: false },
    { question: { q: "Which keyword filters SQL records?", options: ["HAVING", "WHERE", "FILTER", "MATCH"], cat: "Database & SQL" }, selected: null, correct: 1, skipped: true },
    { question: { q: "Which CSS unit is relative to root font-size?", options: ["em", "px", "rem", "vh"], cat: "Web Development" }, selected: 2, correct: 2, skipped: false },
    { question: { q: "Which Python method removes last item?", options: ["remove()", "delete()", "pop()", "discard()"], cat: "Python Programming" }, selected: 2, correct: 2, skipped: false }
  ];
  renderScorecard(demoAnswers, 214);
}
