const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5
  });
}

function animate() {
  // Create a subtle purple gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)');  // Dark purple top
  gradient.addColorStop(1, 'rgba(47, 0, 74, 0.95)'); // Slightly lighter purple bottom

  // Fill background with gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw stars
  for (let s of stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();

    s.y -= 0.2;
    if (s.y < 0) s.y = canvas.height;
  }

  requestAnimationFrame(animate);
}

animate();
