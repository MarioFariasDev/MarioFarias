const treinos = [
  // ===================== SEMANA 1 – DUATHLON BASE =====================
  {
    dia: "DIA 1 – Rodagem leve + Técnica de Corrida",
    tecnica: "Base Aeróbica + Drills",
    objetivo: "Desenvolver resistência e economia de movimento",
    tipo: "corrida",
    exercicios: [
      { nome: "Aquecimento", series: "10 min", obs: "Mobilidade e trote leve" },
      { nome: "Corrida leve (Z2)", series: "30 min", obs: "Ritmo confortável e respiração nasal" },
      { nome: "Drills técnicos", series: "3x20m", obs: "Skipping alto, passadas curtas, elevação de joelhos" },
    ],
  },
  {
    dia: "DIA 2 – Funcional de Força (Jiu-Jitsu + Corrida)",
    tecnica: "Circuito Funcional",
    objetivo: "Fortalecer core, quadril e estabilidade para performance",
    tipo: "funcional",
    exercicios: [
      { nome: "Agachamento com salto", series: "4x15", obs: "Explosivo" },
      { nome: "Ponte de quadril unilateral", series: "4x12/lado", obs: "Ativa glúteo e posterior" },
      { nome: "Flexão com joelho alternado", series: "4x15", obs: "Controle total do tronco" },
      { nome: "Avanço alternado", series: "4x20", obs: "Passada longa e estável" },
      { nome: "Prancha com toque no ombro", series: "4x30seg", obs: "Core firme" },
      { nome: "Hollow hold", series: "4x30seg", obs: "Isometria abdominal" },
    ],
  },
  {
    dia: "DIA 3 – Corrida de Tiros Curtos",
    tecnica: "Intervalado Curto (8x400m)",
    objetivo: "Aumentar velocidade e resistência anaeróbica",
    tipo: "corrida",
    exercicios: [
      { nome: "Aquecimento", series: "10 min", obs: "Corrida leve e mobilidade" },
      { nome: "Tiros de 400m", series: "8x", obs: "Ritmo forte (Z4–Z5), 1’30 trote leve entre" },
      { nome: "Desaquecimento", series: "10 min", obs: "Trote leve e alongamento" },
    ],
  },
  {
    dia: "DIA 4 – Mobilidade e Recuperação Ativa",
    tecnica: "Alongamento + Controle Respiratório",
    objetivo: "Soltar quadris, tornozelos e lombar",
    tipo: "recuperacao",
    exercicios: [
      { nome: "Caminhada leve", series: "30–40 min", obs: "Respiração profunda e postura ereta" },
      { nome: "Alongamentos dinâmicos", series: "10 min", obs: "Foco em quadril e posterior" },
    ],
  },
  {
    dia: "DIA 5 – Corrida Fartlek",
    tecnica: "Alternância de Ritmos",
    objetivo: "Melhorar ritmo e percepção de esforço",
    tipo: "corrida",
    exercicios: [
      { nome: "Aquecimento", series: "10 min", obs: "Trote leve" },
      { nome: "Blocos de Fartlek", series: "5x (2’ forte + 3’ leve)", obs: "Ritmo variável Z2–Z4" },
      { nome: "Desaquecimento", series: "10 min", obs: "Trote leve + mobilidade" },
    ],
  },
  {
    dia: "DIA 6 – Funcional Explosivo",
    tecnica: "Potência + Resistência Muscular",
    objetivo: "Gerar força rápida e resistência para transições",
    tipo: "funcional",
    exercicios: [
      { nome: "Saltos no step", series: "4x10", obs: "Explosão vertical" },
      { nome: "Kettlebell swing (ou mochila)", series: "4x15", obs: "Potência de quadril" },
      { nome: "Agachamento isométrico", series: "4x30seg", obs: "Mantém tensão constante" },
      { nome: "Prancha lateral", series: "4x30seg/lado", obs: "Estabilização de tronco" },
      { nome: "Burpee técnico", series: "4x10", obs: "Execução controlada" },
    ],
  },
  {
    dia: "DIA 7 – Longão",
    tecnica: "Endurance Sustentado",
    objetivo: "Aumentar tempo em pé e controle respiratório",
    tipo: "corrida",
    exercicios: [
      { nome: "Aquecimento", series: "10 min", obs: "Trote leve e mobilidade" },
      { nome: "Corrida contínua leve (Z2)", series: "55–65 min", obs: "Ritmo constante, foco na respiração" },
      { nome: "Desaquecimento", series: "5 min", obs: "Caminhada + alongamento leve" },
    ],
  },
];

// --- RENDERIZAÇÃO DOS TREINOS ---

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
        <tr>`;

  if (treino.tipo === "dieta") {
    html += `
          <th>✔</th>
          <th>Refeição</th>
          <th>Descrição</th>`;
  } else {
    html += `
          <th>✔</th>
          <th>Exercício</th>
          <th>Séries</th>
          <th>Reps</th>
          <th>Técnica</th>
          <th>Obs</th>
          <th>Descanso</th>
          <th>Vídeo</th>`;
  }

  html += `</tr></thead><tbody>`;

  treino.exercicios.forEach((ex, j) => {
    const key = `d${i}_e${j}`;
    const checked = progresso[key]?.feito ? "checked" : "";
    const doneClass = progresso[key]?.feito ? "done" : "";

    html += `<tr class="exercise-row ${doneClass}" data-key="${key}">`;
    html += `<td><input type="checkbox" ${checked}></td>`;

    if (treino.tipo === "dieta") {
      html += `<td>${ex[0]}</td><td>${ex[1]}</td>`;
    } else {
      const nome = ex.nome || ex[0];
      const series = ex.series || ex[1] || "-";
      const reps = ex.reps || ex[2] || "-";
      const tecnica = ex.tecnica || ex[3] || "-";
      const obs = ex.obs || ex[4] || "-";
      const videoFile = ex.video || "sem-video.mp4";

      html += `
        <td>${nome}</td>
        <td>${series}</td>
        <td>${reps}</td>
        <td>${tecnica}</td>
        <td>${obs}</td>
        <td>
          <button class="timer-btn" onclick="iniciarTimer(this)">⏱️</button>
          <span class="timer-display">00:00</span>
        </td>
        <td><button class="timer-btn" onclick="abrirVideo('${videoFile}')">🎥</button></td>`;
    }

    html += `</tr>`;
  });

  html += `</tbody></table>`;
  card.innerHTML = html;
  treinoContainer.appendChild(card);
});

// --- CHECKBOX PROGRESSO ---
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

// --- TIMER POR EXERCÍCIO ---
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

// Modal de vídeo (criado após o DOM estar carregado)
document.addEventListener("DOMContentLoaded", () => {
  const videoModal = document.createElement("div");
  videoModal.id = "videoModal";
  videoModal.innerHTML = `
    <div class="video-content">
      <span class="close-btn" id="fecharBtn">✖</span>
      <video id="videoPlayer" controls>
        <source src="" type="video/mp4">
        Seu navegador não suporta vídeo.
      </video>
    </div>
  `;
  document.body.appendChild(videoModal);

  // Conecta o botão X ao fechamento
  document.getElementById("fecharBtn").addEventListener("click", fecharVideo);
});

function abrirVideo(arquivo) {
  const videoPath = "videos/" + arquivo;
  const player = document.getElementById("videoPlayer");
  player.src = videoPath;
  document.getElementById("videoModal").style.display = "flex";
  player.play();
}

function fecharVideo() {
  const modal = document.getElementById("videoModal");
  const player = document.getElementById("videoPlayer");

  if (player) {
    player.pause();
    player.currentTime = 0;
  }

  modal.style.display = "none";
}

// --- FEEDBACK ---
const feedback = document.getElementById("feedback");
const feedbackSalvo = localStorage.getItem("feedbackGlobal");
if (feedbackSalvo) feedback.value = feedbackSalvo;

document.getElementById("salvarFeedback").addEventListener("click", () => {
  localStorage.setItem("feedbackGlobal", feedback.value);
  alert("Feedback salvo com sucesso!");
});
