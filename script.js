const treinos = [
  // Treino A – Peito + Tríceps
  {
    dia: "Treino A – Peito + Tríceps",
    tecnica: "Bi-Set e Drop-set",
    objetivo: "Hipertrofia e intensidade",
    exercicios: [
      ["Supino reto + Crucifixo reto", "4", "12-10-8-6", "Drop-set", "Drop na última série"],
      ["Supino inclinado + Cross-over", "3", "12", "Bi-set", "-"],
      ["Mergulho entre bancos", "3", "Falha", "-", "-"],
      ["Tríceps corda", "3", "15", "-", "-"]
    ]
  },
  // Treino B – Costas + Bíceps
  {
    dia: "Treino B – Costas + Bíceps",
    tecnica: "Rest-pause e Técnica Lenta",
    objetivo: "Força e controle neuromuscular",
    exercicios: [
      ["Barra fixa", "4", "Falha", "-", "-"],
      ["Remada curvada", "3", "10", "Cadência 3:1", "-"],
      ["Pulley frente + Rosca direta", "3", "12", "Bi-set", "-"],
      ["Rosca alternada unilateral", "3", "10", "Isometria", "-"]
    ]
  },
  // Treino C – Pernas
  {
    dia: "Treino C – Pernas completas",
    tecnica: "Pirâmide + Falha",
    objetivo: "Desenvolvimento de força e volume",
    exercicios: [
      ["Agachamento livre", "5", "15-12-10-8-6", "Pirâmide", "-"],
      ["Leg press 45°", "4", "12", "-", "-"],
      ["Afundo com halteres", "3", "8 cada perna", "-", "-"],
      ["Cadeira extensora", "3", "Falha", "Drop-set triplo", "-"]
    ]
  },
  // Treino D – Ombros + Trapézio
  {
    dia: "Treino D – Ombros + Trapézio",
    tecnica: "Técnica 21 + Drop-set",
    objetivo: "Definição e hipertrofia",
    exercicios: [
      ["Elevação lateral", "3", "21 reps (7+7+7)", "Técnica 21", "-"],
      ["Desenvolvimento com halteres", "3", "10", "Drop-set na última", "-"],
      ["Encolhimento com barra", "4", "12", "-", "-"],
      ["Face pull", "3", "15", "-", "-"]
    ]
  },
  // Corrida – Foco Híbrido
  {
    dia: "Treinos de Corrida – Híbrido",
    tecnica: "Variedade de estímulos",
    objetivo: "Resistência e VO2máx",
    exercicios: [
      ["Corrida leve", "1", "30min", "Pace 5:30", "Base aeróbica"],
      ["Intervalado", "5x800m", "Rec 2min", "Pace 4:10", "VO2máx"],
      ["Corrida moderada", "1", "40min", "Pace 4:40", "Ritmo sustentado"],
      ["HIIT", "10x200m", "-", "Pace 4:00", "Neuromuscular"],
      ["Longão", "1", "10km", "Pace 5:00", "Resistência mental"]
    ]
  },
  // Dieta
  {
    dia: "Dieta Econômica e Inteligente",
    tecnica: "Baixo custo",
    objetivo: "Manutenção de massa e energia",
    exercicios: [
      ["Café da manhã", "-", "-", "-", "2 ovos + pão integral + banana + café"],
      ["Almoço", "-", "-", "-", "Arroz + feijão + frango (ou ovo) + legumes"],
      ["Lanche", "-", "-", "-", "Pasta de amendoim + banana + limão"],
      ["Jantar", "-", "-", "-", "Ovos mexidos + salada + arroz integral"],
      ["Ceia (opcional)", "-", "-", "-", "Mingau de aveia"]
    ]
  },
  // Suplementação
  {
    dia: "Suplementação Inteligente",
    tecnica: "Acessível",
    objetivo: "Recuperação e performance",
    exercicios: [
      ["Whey Protein", "1 dose", "Pós-treino", "-", "Se possível"],
      ["Alternativa", "-", "-", "-", "3 ovos ou leite com banana"],
      ["Creatina", "3-5g/dia", "-", "-", "Altamente eficaz"],
      ["Multivitamínico", "1 comp/dia", "-", "-", "Farmácia popular"]
    ]
  }
];

const treinoContainer = document.getElementById("treinoContainer");
const progresso = JSON.parse(localStorage.getItem("progresso") || "{}");

treinos.forEach((treino, i) => {
  const card = document.createElement("div");
  card.className = "card";

  let html = `
    <h2>${treino.dia}</h2>
    <p><strong>Técnica:</strong> ${treino.tecnica}</p>
    <p><strong>Objetivo:</strong> ${treino.objetivo}</p>
    <table class="exercise-table">
      <thead>
        <tr>
          <th>✔</th>
          <th>Exercício</th>
          <th>Séries</th>
          <th>Reps</th>
          <th>Técnica</th>
          <th>Obs</th>
          <th>Descanso</th>
        </tr>
      </thead>
      <tbody>
  `;

  treino.exercicios.forEach((ex, j) => {
    const key = `d${i}_e${j}`;
    const checked = progresso[key]?.feito ? "checked" : "";
    const doneClass = progresso[key]?.feito ? "done" : "";

    html += `
      <tr class="exercise-row ${doneClass}" data-key="${key}">
        <td><input type="checkbox" ${checked}></td>
        <td>${ex[0]}</td>
        <td>${ex[1]}</td>
        <td>${ex[2]}</td>
        <td>${ex[3]}</td>
        <td>${ex[4]}</td>
        <td>
          <button class="timer-btn" onclick="iniciarTimer(this)">⏱️</button>
          <span class="timer-display">00:00</span>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  card.innerHTML = html;
  treinoContainer.appendChild(card);
});

// Checkbox progresso
document.querySelectorAll(".exercise-row input[type='checkbox']").forEach(input => {
  input.addEventListener("change", function () {
    const row = this.closest(".exercise-row");
    const key = row.dataset.key;
    const feito = this.checked;
    row.classList.toggle("done", feito);
    progresso[key] = { feito };
    localStorage.setItem("progresso", JSON.stringify(progresso));
  });
});

// Timer por exercício
function iniciarTimer(btn) {
  const span = btn.nextElementSibling;
  let tempo = 60;
  span.textContent = formatar(tempo);
  btn.disabled = true;

  const intervalo = setInterval(() => {
    tempo--;
    span.textContent = formatar(tempo);
    if (tempo <= 0) {
      clearInterval(intervalo);
      btn.disabled = false;
      span.textContent = "✔️";
    }
  }, 1000);
}

function formatar(s) {
  const m = String(Math.floor(s / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${m}:${sec}`;
}

// Feedback
const feedback = document.getElementById("feedback");
const feedbackSalvo = localStorage.getItem("feedbackGlobal");
if (feedbackSalvo) feedback.value = feedbackSalvo;

document.getElementById("salvarFeedback").addEventListener("click", () => {
  localStorage.setItem("feedbackGlobal", feedback.value);
  alert("Feedback salvo com sucesso!");
});
