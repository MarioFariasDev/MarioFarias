const treinos = [
  // DIA 1 – Peito + Tríceps
  {
    dia: "DIA 1 – Peito + Tríceps",
    tecnica: "Supersérie com pausa curta",
    objetivo: "Alta congestão e estímulo metabólico",
    tipo: "normal",
    exercicios: [
      { nome: "Supino reto + Crucifixo reto", series: "4x12", obs: "Supersérie com 30s de pausa" },
      { nome: "Supino inclinado + Cross-over", series: "3x10", obs: "Supersérie com foco em parte superior" },
      { nome: "Paralelas", series: "3xFalha", obs: "Use peso corporal ou carga adicional" },
      { nome: "Tríceps testa + Coice", series: "3x12", obs: "Supersérie de exaustão" },
      { nome: "Mergulho entre bancos", series: "3x15", obs: "Finalizador com volume" },
    ],
  },

  // DIA 2 – Costas + Bíceps
  {
    dia: "DIA 2 – Costas + Bíceps",
    tecnica: "5-10-20 + Bi-set + pico de contração",
    objetivo: "Força, pump e estímulo completo",
    tipo: "normal",
    exercicios: [
      { nome: "Puxada frente", series: "3x(5-10-20)", obs: "Muda carga durante a mesma série" },
      { nome: "Remada curvada", series: "4x10", obs: "Foco em força e contração total" },
      { nome: "Remada baixa + Rosca direta", series: "3x12", obs: "Bi-set intenso" },
      { nome: "Rosca martelo com pico de contração", series: "3x10", obs: "Segure 2s no topo" },
      { nome: "Rosca concentrada unilateral", series: "2xFalha", obs: "Isolamento final" },
    ],
  },

  // DIA 3 – Pernas
  {
    dia: "DIA 3 – Pernas completas",
    tecnica: "Drop-set + excêntrica lenta",
    objetivo: "Estresse muscular controlado e intensidade",
    tipo: "normal",
    exercicios: [
      { nome: "Agachamento livre", series: "3x8", obs: "Descida em 4s" },
      { nome: "Leg Press", series: "3x10 + Drop", obs: "Reduz 50% da carga na sequência" },
      { nome: "Cadeira extensora", series: "3x12", obs: "Isometria de 3s no topo" },
      { nome: "Stiff com halteres", series: "3x10", obs: "Enfase em posterior" },
      { nome: "Gêmeos unilateral", series: "4x20", obs: "Amplitude total e foco na contração" },
    ],
  },

  // DIA 4 – Core + Mobilidade
  {
    dia: "DIA 4 – Core + Mobilidade",
    tecnica: "Circuito funcional + isometria",
    objetivo: "Estabilidade e ativação do core",
    tipo: "normal",
    exercicios: [
      { nome: "Prancha frontal", series: "3x1min", obs: "Ativação total de core e lombar" },
      { nome: "Abdominal bicicleta", series: "3x20", obs: "Controle do movimento" },
      { nome: "Abdominal canivete", series: "3x15", obs: "Amplitude total" },
      { nome: "Abdominal infra", series: "3x20", obs: "Sem balançar o quadril" },
      { nome: "Alongamento geral", series: "10min", obs: "Mobilidade de quadril, ombros e tornozelos" },
    ],
  },

  // DIA 5 – Ombros + Trapézio
  {
    dia: "DIA 5 – Ombros + Trapézio",
    tecnica: "Pré-exaustão + Time under tension",
    objetivo: "Volume total e detalhamento dos deltoides",
    tipo: "normal",
    exercicios: [
      { nome: "Elevação lateral", series: "4x15", obs: "Cadência 3:1 (subida e descida lenta)" },
      { nome: "Desenvolvimento com barra", series: "4x8", obs: "Carga controlada" },
      { nome: "Elevação frontal com halteres", series: "3x10", obs: "Foco na porção anterior" },
      { nome: "Face pull", series: "3x12", obs: "Isolamento do deltoide posterior" },
      { nome: "Encolhimento com barra", series: "4x20", obs: "Trapézio com contração máxima" },
    ],
  },

  // DIA 6 – Full Body (opcional)
  {
    dia: "DIA 6 – Full Body Potente",
    tecnica: "Complexo + pliometria",
    objetivo: "Explosão, resistência e finalização",
    tipo: "normal",
    exercicios: [
      { nome: "Complexo com barra (agachamento + supino + remada + desenvolvimento)", series: "3 rounds", obs: "5 reps de cada exercício sem descanso" },
      { nome: "Saltos no step", series: "3x10", obs: "Explosão" },
      { nome: "Burpees com salto", series: "3x10", obs: "Alta intensidade" },
      { nome: "Remada curvada", series: "3x12", obs: "Volume para costas" },
      { nome: "Prancha", series: "3x1min", obs: "Estabilização final" },
    ],
  },
  // Corrida
  {
    dia: "Treinos de Corrida – Híbrido",
    tecnica: "Variedade de estímulos",
    objetivo: "Resistência e VO2máx",
    tipo: "normal",
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
    tipo: "dieta",
    exercicios: [
      ["Café da manhã", "2 ovos + pão integral + banana + café"],
      ["Almoço", "Arroz + feijão + frango (ou ovo) + legumes"],
      ["Lanche", "Pasta de amendoim + banana + limão"],
      ["Jantar", "Ovos mexidos + salada + arroz integral"],
      ["Ceia (opcional)", "Mingau de aveia"]
    ]
  },
  // Suplementação
  {
    dia: "Suplementação Inteligente",
    tecnica: "Acessível",
    objetivo: "Recuperação e performance",
    tipo: "normal",
    exercicios: [
      ["Whey Protein", "1 dose", "Pós-treino", "-", "Se possível"],
      ["Alternativa", "-", "-", "-", "3 ovos ou leite com banana"],
      ["Creatina", "3-5g/dia", "-", "-", "Altamente eficaz"],
      ["Multivitamínico", "1 comp/dia", "-", "-", "Farmácia popular"]
    ]
  }
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
