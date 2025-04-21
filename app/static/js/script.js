// 🎧 Radio wave animation
const canvas = document.getElementById('radio-wave');
const ctx = canvas.getContext('2d');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let t = 0;
function drawWave() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  for (let x = 0; x < canvas.width; x++) {
    const y = canvas.height / 2 + Math.sin((x + t) * 0.05) * 20;
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = '#00e5ff';
  ctx.lineWidth = 2;
  ctx.stroke();
  t += 1;
  requestAnimationFrame(drawWave);
}
drawWave();

// 🎹 Piano key animation
const keys = document.querySelectorAll('.key');
setInterval(() => {
  const index = Math.floor(Math.random() * keys.length);
  keys[index].classList.add('active');
  setTimeout(() => keys[index].classList.remove('active'), 300);
}, 500);

// 🃏 Tarot card flip interaction con cartas reales
const cartasTarot = [
  "el_loco", "el_mago", "la_sacerdotisa", "la_emperatriz", "el_emperador",
  "el_hierofante", "los_enamorados", "el_carro", "la_justicia", "el_colgado",
  "la_muerte", "la_templanza", "el_diablo", "la_torre", "la_estrella",
  "la_luna", "el_sol", "el_juicio", "el_mundo", "la_fuerza",
  "el_ermitanio", "la_rueda_de_la_fortuna"
];

const seleccionadas = cartasTarot.sort(() => 0.5 - Math.random()).slice(0, 3);
const cardsContainer = document.querySelectorAll('.card');

cardsContainer.forEach((card, index) => {
  card.innerHTML = `<img src="/static/img/tarot/reverso.png" width="100%" height="100%">`;
  card.dataset.revelada = "false";

  card.addEventListener('click', () => {
    if (card.dataset.revelada === "true") return;
    card.dataset.revelada = "true";

    anime({
      targets: card,
      rotateY: '+=180',
      duration: 800,
      easing: 'easeInOutSine',
      complete: () => {
        const carta = seleccionadas[index];
        card.innerHTML = `<img src="/static/img/tarot/${carta}.png" width="100%" height="100%">`;
      }
    });
  });
});