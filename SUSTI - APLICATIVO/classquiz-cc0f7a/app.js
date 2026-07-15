const letters = ["A", "B", "C", "D", "E"];

let state = {
  questions: [],
  current: 0,
  answers: {},
  startedAt: null,
  timerId: null,
  finished: false
};

const $ = (id) => document.getElementById(id);

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function cloneQuestion(q) {
  return {
    ...q,
    options: shuffle(q.options.map((o, index) => ({ ...o, originalIndex: index })))
  };
}

function isMultiple(q) {
  return q.options.filter(o => o.correct).length > 1;
}

function getSelected(qid) {
  return state.answers[qid] || [];
}

function setSelected(qid, values) {
  state.answers[qid] = values;
  updateProgress();
  renderNav();
}

function isAnswered(qid) {
  return getSelected(qid).length > 0;
}

function exactCorrect(q) {
  const selected = new Set(getSelected(q.id));
  const correct = new Set(q.options.filter(o => o.correct).map(o => String(o.originalIndex)));
  if (selected.size !== correct.size) return false;
  for (const value of correct) if (!selected.has(value)) return false;
  return true;
}

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function elapsedSeconds() {
  if (!state.startedAt) return 0;
  return Math.floor((Date.now() - state.startedAt) / 1000);
}

function startTimer() {
  clearInterval(state.timerId);
  state.startedAt = Date.now();
  state.timerId = setInterval(() => {
    $("timer").textContent = formatTime(elapsedSeconds());
  }, 500);
}

function stopTimer() {
  clearInterval(state.timerId);
  state.timerId = null;
}

function startQuiz() {
  const source = $("sourceFilter").value;
  let pool = QUESTION_BANK.filter(q => source === "all" || q.source === source);
  pool = shuffle(pool).map(cloneQuestion);

  const countValue = $("questionCount").value;
  const count = countValue === "all" ? pool.length : Math.min(Number(countValue), pool.length);

  state = {
    questions: pool.slice(0, count),
    current: 0,
    answers: {},
    startedAt: null,
    timerId: null,
    finished: false
  };

  $("setup").classList.add("hidden");
  $("results").classList.add("hidden");
  $("review").classList.add("hidden");
  $("quiz").classList.remove("hidden");
  $("sidebar").classList.remove("hidden");
  startTimer();
  renderQuestion();
  renderNav();
  updateProgress();
}

function renderQuestion() {
  const q = state.questions[state.current];
  if (!q) return;

  $("sourceBadge").textContent = q.source;
  $("topicBadge").textContent = q.topic;
  $("questionNumber").textContent = `Question ${state.current + 1} of ${state.questions.length}`;
  $("questionPrompt").textContent = q.prompt;
  $("questionType").textContent = isMultiple(q)
    ? "Selección múltiple: puede haber más de una alternativa correcta."
    : "Selección única: marque una sola alternativa.";

  const selected = new Set(getSelected(q.id));
  const type = isMultiple(q) ? "checkbox" : "radio";
  const form = $("optionsForm");
  form.innerHTML = "";

  q.options.forEach((option, index) => {
    const value = String(option.originalIndex);
    const row = document.createElement("label");
    row.className = "option-row";
    row.innerHTML = `
      <input type="${type}" name="answer" value="${value}" ${selected.has(value) ? "checked" : ""} />
      <span class="letter">${letters[index]}.</span>
      <span class="option-text"></span>
    `;
    row.querySelector(".option-text").textContent = option.text;
    row.querySelector("input").addEventListener("change", handleAnswerChange);
    form.appendChild(row);
  });

  $("btnPrev").disabled = state.current === 0;
  $("btnNext").textContent = state.current === state.questions.length - 1 ? "Finalizar" : "Siguiente";
}

function handleAnswerChange() {
  const q = state.questions[state.current];
  const inputs = [...document.querySelectorAll("input[name='answer']")];
  if (isMultiple(q)) {
    setSelected(q.id, inputs.filter(i => i.checked).map(i => i.value));
  } else {
    const checked = inputs.find(i => i.checked);
    setSelected(q.id, checked ? [checked.value] : []);
  }
}

function renderNav() {
  const nav = $("questionNav");
  nav.innerHTML = "";
  state.questions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = idx + 1;
    btn.className = "nav-btn";
    if (idx === state.current) btn.classList.add("active");
    if (isAnswered(q.id)) btn.classList.add("done");
    btn.addEventListener("click", () => {
      state.current = idx;
      renderQuestion();
      renderNav();
    });
    nav.appendChild(btn);
  });
}

function updateProgress() {
  const answered = state.questions.filter(q => isAnswered(q.id)).length;
  $("progressText").textContent = `${answered}/${state.questions.length}`;
}

function nextQuestion() {
  if (state.current === state.questions.length - 1) {
    finishQuiz();
    return;
  }
  state.current += 1;
  renderQuestion();
  renderNav();
}

function prevQuestion() {
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
    renderNav();
  }
}

function finishQuiz() {
  const unanswered = state.questions.filter(q => !isAnswered(q.id)).length;
  if (unanswered > 0) {
    const ok = confirm(`Faltan ${unanswered} pregunta(s) por responder. ¿Deseas finalizar de todos modos?`);
    if (!ok) return;
  }

  stopTimer();
  state.finished = true;
  const correct = state.questions.filter(exactCorrect).length;
  const total = state.questions.length;
  const percent = total ? Math.round((correct / total) * 100) : 0;

  $("quiz").classList.add("hidden");
  $("sidebar").classList.add("hidden");
  $("results").classList.remove("hidden");
  $("scorePercent").textContent = `${percent}%`;
  $("scoreCorrect").textContent = `${correct}/${total}`;
  $("finalTime").textContent = formatTime(elapsedSeconds());
  renderReview();
}

function renderReview() {
  const container = $("review");
  container.innerHTML = "";
  state.questions.forEach((q, qIndex) => {
    const selected = new Set(getSelected(q.id));
    const card = document.createElement("article");
    card.className = `review-card ${exactCorrect(q) ? "ok" : "bad"}`;
    const options = q.options.map((o, idx) => {
      const val = String(o.originalIndex);
      const selectedMark = selected.has(val) ? "Tu marca" : "";
      const correctMark = o.correct ? "Correcta" : "";
      const cls = o.correct ? "correct" : selected.has(val) ? "wrong" : "";
      return `<li class="${cls}"><strong>${letters[idx]}.</strong> ${escapeHtml(o.text)} <span>${selectedMark}${selectedMark && correctMark ? " · " : ""}${correctMark}</span></li>`;
    }).join("");

    card.innerHTML = `
      <div class="review-head">
        <strong>Question ${qIndex + 1} of ${state.questions.length}</strong>
        <span class="badge ${exactCorrect(q) ? "badge-ok" : "badge-bad"}">${exactCorrect(q) ? "Correcta" : "Incorrecta"}</span>
      </div>
      <p class="review-topic">${escapeHtml(q.source)} · ${escapeHtml(q.topic)}</p>
      <h3>${escapeHtml(q.prompt)}</h3>
      <ul>${options}</ul>
      <div class="explanation"><strong>Explicación:</strong> ${escapeHtml(q.explanation)}</div>
    `;
    container.appendChild(card);
  });
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function resetRandom() {
  stopTimer();
  startQuiz();
}

$("btnStart").addEventListener("click", startQuiz);
$("btnNext").addEventListener("click", nextQuestion);
$("btnPrev").addEventListener("click", prevQuestion);
$("btnFinishTop").addEventListener("click", () => {
  if (!$("quiz").classList.contains("hidden")) finishQuiz();
});
$("btnResetTop").addEventListener("click", resetRandom);
$("btnRestart").addEventListener("click", resetRandom);
$("btnReview").addEventListener("click", () => $("review").classList.toggle("hidden"));

window.addEventListener("keydown", (e) => {
  if ($("quiz").classList.contains("hidden")) return;
  if (e.key === "ArrowRight") nextQuestion();
  if (e.key === "ArrowLeft") prevQuestion();
});

window.addEventListener("beforeunload", (e) => {
  if (state.startedAt && !state.finished) {
    e.preventDefault();
    e.returnValue = "";
  }
});
