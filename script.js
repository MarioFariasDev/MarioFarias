const treinos = [
  // ===================== SEMANA 0 – ATIVAÇÃO DUATHLON ELITE =====================

  {
    dia: "DIA 1 – Teste de Limiar + Bike Girada",
    tecnica: "Tempo Run + Cadência Alta",
    objetivo: "Determinar limiar e preparar o corpo para treinos intensos",
    tipo: "teste",
    exercicios: [
      { nome: "Aquecimento corrida", series: "10 min", obs: "Trote leve + mobilidade" },
      { nome: "Tempo Run (Limiar)", series: "20 min", obs: "Máximo sustentável; anotar ritmo e FC" },
      { nome: "Bike girada leve", series: "45 min", obs: "Cadência 90–95 rpm; soltar as pernas" },
    ],
  },

  {
    dia: "DIA 2 – Tiros VO2 (12x400m)",
    tecnica: "Intervalado Curto Alta Intensidade",
    objetivo: "Aumentar VO2, velocidade e capacidade anaeróbica",
    tipo: "corrida",
    exercicios: [
      { nome: "Aquecimento", series: "15 min", obs: "Trote + mobilidade" },
      { nome: "Tiros de 400m", series: "12x", obs: "Ritmo 3K; 1’30 trote leve entre" },
      { nome: "Desaquecimento", series: "10 min", obs: "Trote leve e alongamento" },
    ],
  },

  {
    dia: "DIA 3 – Longão de Bike (Torque + Giro)",
    tecnica: "Resistência + Cadência",
    objetivo: "Criar base forte para treinos longos e ritmo de prova",
    tipo: "bike",
    exercicios: [
      { nome: "Aquecimento", series: "15 min", obs: "Cadência crescente até 95 rpm" },
      { nome: "Bloco principal", series: "90 min", obs: "20 min Z2 + 5x(5 min Z3 + 3 min Z2)" },
      { nome: "Desaquecimento", series: "10 min", obs: "Giro leve 85–90 rpm" },
    ],
  },

  {
    dia: "DIA 4 – BRICK Agressivo (Bike + Corrida)",
    tecnica: "Transição Real",
    objetivo: "Treinar pernas pesadas e correr após carga alta",
    tipo: "brick",
    exercicios: [
      { nome: "Bike contínua", series: "50 min", obs: "Z3 ritmado, intensidade forte e constante" },
      { nome: "Transição (T2)", series: "2 min", obs: "Cronometrada; velocidade total" },
      { nome: "Corrida pós-bike", series: "20 min", obs: "Ritmo de 5K; cadência alta" },
    ],
  },

  {
    dia: "DIA 5 – Fartlek Elite",
    tecnica: "Alternância Violenta de Ritmos",
    objetivo: "Desenvolver aceleração e resistência sob variação",
    tipo: "corrida",
    exercicios: [
      { nome: "Aquecimento", series: "10 min", obs: "Trote leve" },
      { nome: "Fartlek", series: "10x (1 min forte + 1 min leve)", obs: "Z4 nos fortes; z2 nos leves" },
      { nome: "Bloco moderado final", series: "15 min", obs: "Z3 estável" },
      { nome: "Desaquecimento", series: "10 min", obs: "Trocar respiração e postura" },
    ],
  },

  {
    dia: "DIA 6 – Bike de Subida (Força Bruta)",
    tecnica: "Hill Repeats",
    objetivo: "Aumentar força específica para ciclismo competitivo",
    tipo: "bike",
    exercicios: [
      { nome: "Aquecimento", series: "20 min", obs: "Z2 constante" },
      { nome: "Subidas", series: "8x2 min", obs: "75 rpm sentado; torque máximo; recuperação 1:30" },
      { nome: "Desaquecimento", series: "20 min", obs: "Soltando com cadência leve" },
    ],
  },

  {
    dia: "DIA 7 – Longão Progressivo",
    tecnica: "Endurance + Crescimento de Ritmo",
    objetivo: "Trabalhar aparato cardiovascular e controle de esforço",
    tipo: "corrida",
    exercicios: [
      { nome: "Aquecimento", series: "20 min", obs: "Z1-Z2" },
      { nome: "Bloco moderado", series: "20 min", obs: "Z3 constante" },
      { nome: "Bloco forte", series: "20 min", obs: "Progredir até Z4" },
      { nome: "Desaquecimento", series: "10 min", obs: "Trocar respiração + soltura" },
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
