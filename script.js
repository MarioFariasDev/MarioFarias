const treinos = [
  // ===================== SEMANA 1 =====================
  {
    dia: "DIA 3 – Pernas",
    tecnica: "Pré-exaustão + Pirâmide + Drop-set",
    objetivo: "Choque inicial para quadríceps e posterior",
    tipo: "normal",
    exercicios: [
      { nome: "Cadeira extensora (Pré-exaustão)", series: "4x20", obs: "Isolamento antes dos compostos" },
      { nome: "Agachamento livre (Pirâmide)", series: "5x12-10-8-6-6", obs: "Aumenta carga progressivamente" },
      { nome: "Leg Press 45°", series: "4x12 + drop na última", obs: "Falha controlada" },
      { nome: "Stiff", series: "4x10", obs: "Desce lento para alongar posterior" },
      { nome: "Afundo no Smith", series: "3x12 cada perna", obs: "Passos longos e firmes" },
      { nome: "Gêmeos sentado", series: "4x20", obs: "Segura 2s no topo" },
    ],
  },
  {
    dia: "DIA 4 – Ombros + Trapézio + Core",
    tecnica: "Bi-set + Old School",
    objetivo: "Volume e densidade em deltoides e trapézio",
    tipo: "normal",
    exercicios: [
      { nome: "Elevação lateral + Elevação frontal (Bi-set)", series: "4x12 cada", obs: "Sem descanso entre exercícios" },
      { nome: "Desenvolvimento militar barra", series: "4x8", obs: "Estilo old school pesado" },
      { nome: "Crucifixo inverso", series: "4x12", obs: "Deltoide posterior isolado" },
      { nome: "Encolhimento com barra", series: "4x15", obs: "Segura 2s no topo" },
      { nome: "Prancha isométrica", series: "3x1min", obs: "Core firme e alinhado" },
      { nome: "Abdominal canivete", series: "3x15", obs: "Amplitude total" },
    ],
  },
  {
    dia: "DIA 5 – Full Body Intensivo",
    tecnica: "Old School Volume",
    objetivo: "Base de força e resistência geral",
    tipo: "normal",
    exercicios: [
      { nome: "Supino reto", series: "4x10", obs: "Foco na execução perfeita" },
      { nome: "Remada curvada", series: "4x10", obs: "Explosão na subida" },
      { nome: "Agachamento livre", series: "4x12", obs: "Controle na descida" },
      { nome: "Desenvolvimento halteres", series: "4x12", obs: "Amplitude máxima" },
      { nome: "Barra fixa", series: "3xFalha", obs: "Peso corporal ou com carga" },
      { nome: "Abdominal infra", series: "3x20", obs: "Controle e respiração" },
    ],
  },
  {
    dia: "DIA 6 – Foco Ponto Fraco (Costas)",
    tecnica: "Rest-pause + Drop-set",
    objetivo: "Zerar máquinas e ganhar densidade dorsal",
    tipo: "normal",
    exercicios: [
      { nome: "Puxada aberta", series: "4x8 + rest-pause", obs: "Última série: 8 + 5 + 3" },
      { nome: "Remada baixa", series: "4x10 + drop final", obs: "Reduz 50% carga e continua" },
      { nome: "Barra fixa com carga", series: "3xFalha", obs: "Adicione anilha se possível" },
      { nome: "Pullover máquina", series: "3x12", obs: "Alongamento e contração máxima" },
    ],
  },

  // ===================== SEMANA 2 =====================
  {
    dia: "DIA 1 – Peito + Tríceps",
    tecnica: "Cluster Set + Old School",
    objetivo: "Força máxima e densidade",
    tipo: "normal",
    exercicios: [
      { nome: "Supino reto (Cluster Set)", series: "5x6-6-6-4-4", obs: "20s pausa interna nas últimas" },
      { nome: "Supino inclinado halteres", series: "4x8", obs: "Desce lento, sobe explosivo" },
      { nome: "Crucifixo reto", series: "3x12", obs: "Isolamento de peitoral" },
      { nome: "Tríceps testa barra", series: "4x8", obs: "Old school pesado" },
      { nome: "Paralelas", series: "3xFalha", obs: "Peso corporal ou cinto" },
      { nome: "Coice halteres", series: "3x12", obs: "Movimento controlado" },
    ],
  },
  {
    dia: "DIA 2 – Costas + Bíceps",
    tecnica: "Rest-pause + Bi-set",
    objetivo: "Força, densidade e pump",
    tipo: "normal",
    exercicios: [
      { nome: "Puxada aberta", series: "4x6 + rest-pause", obs: "Última série com pausa 10s e continua" },
      { nome: "Remada curvada barra", series: "4x8", obs: "Controle e explosão" },
      { nome: "Remada unilateral halteres", series: "4x10", obs: "Segura 1s no topo" },
      { nome: "Rosca direta barra", series: "4x8", obs: "Carga progressiva" },
      { nome: "Rosca alternada supinada", series: "3x12", obs: "Estímulo completo de bíceps" },
      { nome: "Rosca martelo concentrada", series: "3x10", obs: "Foco em braquial e antebraço" },
    ],
  },
  {
    dia: "DIA 3 – Pernas",
    tecnica: "Progressão de carga + Old School",
    objetivo: "Força e espessura de pernas",
    tipo: "normal",
    exercicios: [
      { nome: "Agachamento livre", series: "5x8", obs: "Progressão de carga em cada série" },
      { nome: "Leg press 45°", series: "4x10", obs: "Pausa de 1s na descida" },
      { nome: "Stiff halteres", series: "4x8", obs: "Enfase em posterior" },
      { nome: "Afundo barra", series: "3x8 cada perna", obs: "Controle de core" },
      { nome: "Panturrilha em pé", series: "5x20", obs: "Segura no topo 2s" },
    ],
  },

  // ===================== SEMANA 3 =====================
  {
    dia: "DIA 5 – Full Body Old School Final",
    tecnica: "Bi-set + Intensidade Máxima",
    objetivo: "Choque final para todo o corpo",
    tipo: "normal",
    exercicios: [
      { nome: "Supino reto + Barra fixa (Bi-set)", series: "4x8 cada", obs: "Sem descanso entre exercícios" },
      { nome: "Agachamento + Desenvolvimento halteres (Bi-set)", series: "4x8 cada", obs: "Explosivo e técnico" },
      { nome: "Levantamento terra", series: "4x6", obs: "Old School pesado, controle total" },
      { nome: "Crucifixo inverso + Rosca direta (Bi-set)", series: "3x12 cada", obs: "Pump total" },
      { nome: "Encolhimento halteres", series: "4x15", obs: "Segura 2s no topo" },
      { nome: "Prancha com carga", series: "3x1min", obs: "Core finalizador" },
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
