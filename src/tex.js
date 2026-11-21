// 사실적인 느낌을 내기 위한 절차적(코드로 그린) 텍스처들. 이미지 파일이 없어서 전송량이 거의 없다.
import * as THREE from 'three';

const R = Math.random;
export function canvasTex(w, h, draw, { repeat = [1, 1], srgb = true, aniso = 4 } = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso;
  return t;
}
export function grain(g, w, h, amt) {
  const id = g.getImageData(0, 0, w, h), d = id.data;
  for (let i = 0; i < d.length; i += 4) { if (d[i + 3] === 0) continue; const n = (R() - 0.5) * amt; d[i] += n; d[i + 1] += n; d[i + 2] += n; }
  g.putImageData(id, 0, 0);
}
export function stains(g, w, h, n, rgb, maxA = 0.12, maxR = 0.25) {
  for (let i = 0; i < n; i++) {
    const x = R() * w, y = R() * h, r = (0.03 + R() * maxR) * Math.max(w, h);
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, `rgba(${rgb},${R() * maxA})`); gr.addColorStop(1, `rgba(${rgb},0)`);
    g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
  }
}

// 벽: 아래쪽은 학교 특유의 연두빛 페인트, 위쪽은 누렇게 바랜 미색. 바닥 쪽은 때가 탐.
export const wallTex = () => canvasTex(256, 512, (g, w, h) => {
  g.fillStyle = '#cbc4ae'; g.fillRect(0, 0, w, h);
  const mid = h * 0.6;
  g.fillStyle = '#6f9184'; g.fillRect(0, mid, w, h - mid);
  g.fillStyle = '#41544c'; g.fillRect(0, mid - 6, w, 7);
  g.fillStyle = '#2e2a24'; g.fillRect(0, h - 14, w, 14); // 걸레받이
  stains(g, w, h, 18, '60,50,30', 0.1, 0.3);
  const gr = g.createLinearGradient(0, h - 90, 0, h); gr.addColorStop(0, 'rgba(30,25,15,0)'); gr.addColorStop(1, 'rgba(30,25,15,.35)'); g.fillStyle = gr; g.fillRect(0, h - 90, w, 90);
  for (let i = 0; i < 6; i++) { g.strokeStyle = `rgba(40,30,20,${R() * 0.15})`; g.lineWidth = 1; g.beginPath(); const x = R() * w; g.moveTo(x, R() * mid); g.lineTo(x + (R() - 0.5) * 30, mid + R() * 40); g.stroke(); }
  grain(g, w, h, 18);
});
// 복도 바닥: 얼룩진 회녹색 데코타일 (한 칸에 2x2장)
export const vinylTex = () => canvasTex(256, 256, (g, w, h) => {
  for (let ty = 0; ty < 2; ty++) for (let tx = 0; tx < 2; tx++) {
    const b = 140 + R() * 14; g.fillStyle = `rgb(${b - 4},${b},${b - 10})`; g.fillRect(tx * 128, ty * 128, 128, 128);
  }
  for (let i = 0; i < 1600; i++) { const s = R() * 2.2; g.fillStyle = R() < 0.5 ? 'rgba(70,72,66,.55)' : 'rgba(220,220,210,.45)'; g.fillRect(R() * w, R() * h, s, s); }
  stains(g, w, h, 10, '40,35,25', 0.18, 0.2);
  for (let i = 0; i < 8; i++) { g.strokeStyle = 'rgba(20,20,20,.15)'; g.lineWidth = 1 + R() * 2; g.beginPath(); const x = R() * w, y = R() * h; g.moveTo(x, y); g.lineTo(x + (R() - 0.5) * 60, y + (R() - 0.5) * 20); g.stroke(); }
  g.strokeStyle = 'rgba(30,30,28,.6)'; g.lineWidth = 2; g.strokeRect(1, 1, 127, 127); g.strokeRect(129, 1, 126, 127); g.strokeRect(1, 129, 127, 126); g.strokeRect(129, 129, 126, 126);
  grain(g, w, h, 14);
});
// 교실 바닥: 오래된 마루
export const woodFloorTex = () => canvasTex(256, 256, (g, w, h) => {
  const ph = h / 4;
  for (let i = 0; i < 4; i++) {
    const off = R() * w; const b = 95 + R() * 30;
    g.fillStyle = `rgb(${b + 30},${b},${b - 35})`; g.fillRect(0, i * ph, w, ph);
    for (let k = 0; k < 22; k++) { g.strokeStyle = `rgba(50,30,10,${0.08 + R() * 0.12})`; g.lineWidth = 1; g.beginPath(); const y = i * ph + R() * ph; g.moveTo(0, y); g.bezierCurveTo(w * 0.3, y + (R() - 0.5) * 6, w * 0.6, y + (R() - 0.5) * 6, w, y + (R() - 0.5) * 4); g.stroke(); }
    g.fillStyle = 'rgba(25,15,5,.7)'; g.fillRect(0, i * ph, w, 2); g.fillRect(off % w, i * ph, 2, ph);
  }
  stains(g, w, h, 10, '20,10,0', 0.2, 0.2);
  grain(g, w, h, 16);
});
// 화장실 타일
export const tileTex = () => canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#8f9590'; g.fillRect(0, 0, w, h);
  const n = 8, s = w / n;
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) { const b = 200 + R() * 25; g.fillStyle = `rgb(${b},${b + 3},${b + 2})`; g.fillRect(x * s + 1.5, y * s + 1.5, s - 3, s - 3); }
  stains(g, w, h, 14, '90,80,40', 0.22, 0.18);
  grain(g, w, h, 10);
});
// 천장 텍스(석고 흡음판)
export const ceilTex = () => canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#b9b6aa'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 2600; i++) { g.fillStyle = 'rgba(60,58,50,.5)'; g.fillRect(R() * w, R() * h, 1.4, 1.4); }
  stains(g, w, h, 5, '110,80,30', 0.25, 0.2); // 누수 자국
  g.strokeStyle = '#6d6a60'; g.lineWidth = 3; g.strokeRect(0, 0, w / 2, h / 2); g.strokeRect(w / 2, 0, w / 2, h / 2); g.strokeRect(0, h / 2, w / 2, h / 2); g.strokeRect(w / 2, h / 2, w / 2, h / 2);
  grain(g, w, h, 10);
});
// 책상 상판(밝은 나무 무늬 합판)
export const laminateTex = () => canvasTex(256, 128, (g, w, h) => {
  g.fillStyle = '#b8935f'; g.fillRect(0, 0, w, h);
  for (let k = 0; k < 40; k++) { g.strokeStyle = `rgba(90,55,20,${0.08 + R() * 0.15})`; g.lineWidth = 1 + R(); g.beginPath(); const y = R() * h; g.moveTo(0, y); g.bezierCurveTo(w * 0.3, y + (R() - 0.5) * 10, w * 0.7, y + (R() - 0.5) * 10, w, y + (R() - 0.5) * 8); g.stroke(); }
  for (let i = 0; i < 5; i++) { g.strokeStyle = `rgba(30,30,60,${0.2 + R() * 0.3})`; g.lineWidth = 1; g.beginPath(); const x = R() * w, y = R() * h; g.moveTo(x, y); g.lineTo(x + R() * 30, y + (R() - 0.5) * 8); g.stroke(); } // 볼펜 낙서
  grain(g, w, h, 12);
});
export const metalTex = (base = '#7c8288') => canvasTex(128, 128, (g, w, h) => {
  g.fillStyle = base; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 60; i++) { g.strokeStyle = `rgba(255,255,255,${R() * 0.06})`; g.beginPath(); const y = R() * h; g.moveTo(0, y); g.lineTo(w, y + (R() - 0.5) * 3); g.stroke(); }
  stains(g, w, h, 6, '60,40,20', 0.15, 0.3);
  grain(g, w, h, 14);
});
// 사물함 앞면 (환기구 + 손잡이 + 번호)
export const lockerTex = () => canvasTex(128, 256, (g, w, h) => {
  g.fillStyle = '#5d6a73'; g.fillRect(0, 0, w, h);
  g.strokeStyle = '#2f363b'; g.lineWidth = 3; g.strokeRect(4, 4, w - 8, h - 8);
  g.fillStyle = '#262c30'; for (let i = 0; i < 6; i++) g.fillRect(28, 20 + i * 9, w - 56, 4);
  g.fillStyle = '#9aa3a8'; g.fillRect(w - 28, h * 0.48, 8, 34);
  g.fillStyle = '#ddd'; g.fillRect(30, h * 0.36, 40, 16); g.fillStyle = '#333'; g.font = 'bold 12px sans-serif'; g.fillText(String(10 + ((R() * 40) | 0)), 36, h * 0.36 + 12);
  stains(g, w, h, 8, '80,50,20', 0.2, 0.25);
  grain(g, w, h, 16);
});
export const chalkboardTex = (text) => canvasTex(1024, 256, (g, w, h) => {
  g.fillStyle = '#20382c'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 30; i++) { g.fillStyle = `rgba(200,220,210,${R() * 0.05})`; g.beginPath(); g.ellipse(R() * w, R() * h, 60 + R() * 120, 10 + R() * 25, R() - 0.5, 0, 7); g.fill(); }
  g.fillStyle = 'rgba(235,240,230,.92)'; g.font = 'bold 54px "Nanum Pen Script", "Comic Sans MS", cursive, sans-serif'; g.textAlign = 'center';
  g.fillText(text, w / 2, h / 2 + 18);
  g.font = '30px sans-serif'; g.fillStyle = 'rgba(235,240,230,.5)'; g.fillText('주번: ____   결석: 31명', w * 0.82, h - 28);
  grain(g, w, h, 10);
}, { aniso: 8 });
export const corkTex = () => canvasTex(256, 192, (g, w, h) => {
  g.fillStyle = '#a07a4c'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 1500; i++) { g.fillStyle = R() < 0.5 ? 'rgba(70,45,20,.5)' : 'rgba(200,160,110,.4)'; g.fillRect(R() * w, R() * h, 2, 2); }
  const papers = [['가정통신문', '#eee'], ['급식 식단표', '#f4f0d0'], ['실종', '#ddd'], ['교칙 제1조', '#e8e8e8']];
  for (const [t, c] of papers) { const x = 10 + R() * (w - 90), y = 10 + R() * (h - 80); g.save(); g.translate(x, y); g.rotate((R() - 0.5) * 0.15); g.fillStyle = c; g.fillRect(0, 0, 70, 60); g.fillStyle = '#333'; g.font = '11px sans-serif'; g.fillText(t, 6, 16); for (let k = 0; k < 4; k++) g.fillRect(6, 24 + k * 8, 40 + R() * 18, 2); g.fillStyle = '#c33'; g.beginPath(); g.arc(35, 3, 3, 0, 7); g.fill(); g.restore(); }
  grain(g, w, h, 10);
});
export const signTex = (text, bg = '#e8e4d8', fg = '#1d2a4a') => canvasTex(256, 96, (g, w, h) => {
  g.fillStyle = bg; g.fillRect(0, 0, w, h); g.strokeStyle = '#3a3a3a'; g.lineWidth = 6; g.strokeRect(3, 3, w - 6, h - 6);
  g.fillStyle = fg; g.font = 'bold 44px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, w / 2, h / 2 + 2);
  stains(g, w, h, 4, '60,50,20', 0.2, 0.4); grain(g, w, h, 10);
});
export const exitTex = () => canvasTex(256, 96, (g, w, h) => {
  g.fillStyle = '#19b35a'; g.fillRect(0, 0, w, h);
  g.fillStyle = '#fff'; g.fillRect(16, 16, 46, 64); g.fillStyle = '#19b35a'; g.fillRect(26, 22, 30, 56);
  g.fillStyle = '#fff'; g.beginPath(); g.arc(90, 26, 9, 0, 7); g.fill();
  g.lineWidth = 8; g.strokeStyle = '#fff'; g.lineCap = 'round'; g.beginPath(); g.moveTo(88, 38); g.lineTo(80, 60); g.lineTo(66, 76); g.moveTo(80, 60); g.lineTo(96, 76); g.moveTo(86, 44); g.lineTo(72, 52); g.moveTo(88, 44); g.lineTo(104, 50); g.stroke();
  g.font = 'bold 34px sans-serif'; g.textBaseline = 'middle'; g.fillText('비상구', 120, 50);
});
export const paperTex = () => canvasTex(128, 160, (g, w, h) => {
  g.fillStyle = '#e6dfc8'; g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(90,120,170,.35)'; for (let y = 24; y < h; y += 12) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); }
  g.strokeStyle = 'rgba(40,40,60,.75)'; g.lineWidth = 1.5; for (let y = 34; y < h - 20; y += 12) { g.beginPath(); g.moveTo(10, y); let x = 10; while (x < w - 14 - R() * 30) { x += 4 + R() * 6; g.lineTo(x, y + (R() - 0.5) * 2); } g.stroke(); }
  stains(g, w, h, 4, '120,90,40', 0.25, 0.3); grain(g, w, h, 12);
});
export const bookSpineTex = () => canvasTex(64, 128, (g, w, h) => { g.fillStyle = '#fff'; g.fillRect(0, 0, w, h); g.fillStyle = 'rgba(0,0,0,.25)'; g.fillRect(0, 10, w, 4); g.fillRect(0, h - 20, w, 4); g.fillStyle = 'rgba(255,255,255,.4)'; g.fillRect(8, 30, w - 16, 40); grain(g, w, h, 20); });

// 종이인형: 누렇게 바랜 종이 + 가운데 접힌 자국 + 좌우 대칭 먹물 얼룩 얼굴
export const dollTex = () => canvasTex(256, 512, (g, w, h) => {
  g.fillStyle = '#e8e2cf'; g.fillRect(0, 0, w, h);
  stains(g, w, h, 20, '120,100,60', 0.18, 0.2);
  for (let i = 0; i < 25; i++) { g.strokeStyle = `rgba(80,70,50,${R() * 0.25})`; g.lineWidth = 1; g.beginPath(); let x = R() * w, y = R() * h; g.moveTo(x, y); for (let k = 0; k < 4; k++) { x += (R() - 0.5) * 50; y += (R() - 0.5) * 50; g.lineTo(x, y); } g.stroke(); } // 구김
  // 왼쪽 반만 그리고 오른쪽으로 뒤집어 붙이면 데칼코마니처럼 대칭이 된다
  const half = document.createElement('canvas'); half.width = w / 2; half.height = h; const hg = half.getContext('2d');
  const ink = (x, y, r) => { hg.fillStyle = 'rgba(12,8,8,.92)'; hg.beginPath(); for (let a = 0; a < 7; a += 0.5) { const rr = r * (0.7 + R() * 0.5); hg.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } hg.fill(); };
  ink(w / 2 - 34, 62, 16); ink(w / 2 - 30, 70, 9); // 눈구멍
  hg.fillStyle = 'rgba(12,8,8,.9)'; hg.beginPath(); hg.ellipse(w / 2, 108, 14, 6, 0, 0, 7); hg.fill(); // 입
  for (let i = 0; i < 14; i++) ink(w / 2 - R() * 50, 140 + R() * 300, 3 + R() * 10); // 몸통 얼룩
  for (let i = 0; i < 6; i++) { hg.strokeStyle = 'rgba(12,8,8,.8)'; hg.lineWidth = 2 + R() * 3; hg.beginPath(); hg.moveTo(w / 2 - 34, 76); hg.lineTo(w / 2 - 34 + (R() - 0.5) * 20, 90 + R() * 60); hg.stroke(); } // 흘러내린 먹물
  g.drawImage(half, 0, 0); g.save(); g.translate(w, 0); g.scale(-1, 1); g.drawImage(half, 0, 0); g.restore();
  const cr = g.createLinearGradient(w / 2 - 8, 0, w / 2 + 8, 0); cr.addColorStop(0, 'rgba(0,0,0,0)'); cr.addColorStop(0.5, 'rgba(60,50,30,.5)'); cr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = cr; g.fillRect(w / 2 - 8, 0, 16, h);
  grain(g, w, h, 14);
});

// 거울 속 나의 얼굴 (평소 / 웃을 때)
export const faceTex = (grin) => canvasTex(512, 512, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  const cx = w / 2, k = 2;
  const soft = (x, y, rx, ry, rgba) => { const gr = g.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry)); gr.addColorStop(0, rgba); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.save(); g.translate(x, y); g.scale(rx / Math.max(rx, ry), ry / Math.max(rx, ry)); g.translate(-x, -y); g.fillStyle = gr; g.beginPath(); g.arc(x, y, Math.max(rx, ry), 0, 7); g.fill(); g.restore(); };
  for (const s of [-1, 1]) {
    const ex = cx + s * 44 * k, ey = 112 * k;
    soft(ex, ey + 4, 34 * k, 22 * k, grin ? 'rgba(40,10,10,.55)' : 'rgba(90,50,40,.28)'); // 눈두덩 그늘
    soft(cx + s * 52 * k, 150 * k, 26 * k, 16 * k, grin ? 'rgba(160,40,40,.22)' : 'rgba(200,110,100,.12)'); // 볼
    // 눈썹
    g.strokeStyle = 'rgba(25,16,10,.9)'; g.lineCap = 'round';
    for (let i = 0; i < 9; i++) { g.lineWidth = (6 - Math.abs(i - 3) * 0.6) * k * 0.6; g.beginPath(); const x0 = cx + s * (20 + i * 5) * k; g.moveTo(x0, (88 - (grin ? 10 : 0) + Math.abs(i - 3) * 0.6) * k); g.lineTo(x0 + s * 6 * k, (86 - (grin ? 12 : 0) + Math.abs(i - 3) * 0.6) * k); g.stroke(); }
    // 눈
    const ew = (grin ? 17 : 19) * k, eh = (grin ? 14 : 7.5) * k;
    g.fillStyle = grin ? '#efe9dc' : '#e9e2d6'; g.beginPath(); g.ellipse(ex, ey, ew, eh, 0, 0, 7); g.fill();
    g.save(); g.beginPath(); g.ellipse(ex, ey, ew, eh, 0, 0, 7); g.clip();
    const ix0 = ex + (grin ? 0 : s * -3 * k), ir = (grin ? 5 : 8.5) * k;
    const ig = g.createRadialGradient(ix0, ey, 0, ix0, ey, ir); ig.addColorStop(0, '#1a0f08'); ig.addColorStop(0.45, '#3d2617'); ig.addColorStop(1, '#22150c'); g.fillStyle = ig; g.beginPath(); g.arc(ix0, ey, ir, 0, 7); g.fill();
    g.fillStyle = '#030303'; g.beginPath(); g.arc(ix0, ey, (grin ? 1.8 : 3.8) * k, 0, 7); g.fill();
    if (!grin) { g.fillStyle = 'rgba(255,255,255,.8)'; g.beginPath(); g.arc(ix0 + 3 * k, ey - 3 * k, 1.6 * k, 0, 7); g.fill(); }
    g.fillStyle = 'rgba(0,0,0,.25)'; g.fillRect(ex - ew, ey - eh, ew * 2, eh * 0.5);
    g.restore();
    g.strokeStyle = '#140c07'; g.lineWidth = 3 * k; g.beginPath(); g.ellipse(ex, ey, ew, eh, 0, Math.PI * 1.02, Math.PI * 1.98); g.stroke(); // 윗눈꺼풀
    g.strokeStyle = 'rgba(70,40,30,.45)'; g.lineWidth = 1.5 * k; g.beginPath(); g.ellipse(ex, ey - 5 * k, ew * 0.95, eh + 3 * k, 0, Math.PI * 1.1, Math.PI * 1.9); g.stroke(); // 쌍꺼풀 주름
    g.strokeStyle = 'rgba(80,45,35,.35)'; g.lineWidth = 1.2 * k; g.beginPath(); g.ellipse(ex, ey + 1 * k, ew * 0.95, eh, 0, 0.15, Math.PI - 0.15); g.stroke();
  }
  // 코
  soft(cx, 140 * k, 12 * k, 26 * k, 'rgba(120,70,55,.15)');
  g.strokeStyle = 'rgba(110,60,45,.45)'; g.lineWidth = 2 * k; g.beginPath(); g.moveTo(cx - 6 * k, 118 * k); g.quadraticCurveTo(cx - 9 * k, 140 * k, cx - 12 * k, 152 * k); g.stroke();
  g.fillStyle = 'rgba(70,35,28,.55)'; for (const s of [-1, 1]) { g.beginPath(); g.ellipse(cx + s * 7 * k, 156 * k, 4 * k, 2.4 * k, s * 0.3, 0, 7); g.fill(); }
  g.strokeStyle = 'rgba(110,60,45,.35)'; g.lineWidth = 1.5 * k; g.beginPath(); g.moveTo(cx - 14 * k, 154 * k); g.quadraticCurveTo(cx, 162 * k, cx + 14 * k, 154 * k); g.stroke();
  // 인중
  g.strokeStyle = 'rgba(110,60,45,.2)'; g.lineWidth = 1.5 * k; for (const s of [-1, 1]) { g.beginPath(); g.moveTo(cx + s * 3 * k, 163 * k); g.lineTo(cx + s * 4 * k, 176 * k); g.stroke(); }
  if (!grin) {
    g.fillStyle = '#a5625a'; g.beginPath(); g.moveTo(cx - 22 * k, 184 * k); g.quadraticCurveTo(cx - 8 * k, 177 * k, cx, 180 * k); g.quadraticCurveTo(cx + 8 * k, 177 * k, cx + 22 * k, 184 * k); g.quadraticCurveTo(cx, 186 * k, cx - 22 * k, 184 * k); g.fill(); // 윗입술
    g.fillStyle = '#b4706a'; g.beginPath(); g.moveTo(cx - 20 * k, 185 * k); g.quadraticCurveTo(cx, 198 * k, cx + 20 * k, 185 * k); g.fill(); // 아랫입술
    g.strokeStyle = '#5a2a26'; g.lineWidth = 1.8 * k; g.beginPath(); g.moveTo(cx - 22 * k, 184.5 * k); g.quadraticCurveTo(cx, 187 * k, cx + 22 * k, 184.5 * k); g.stroke();
    soft(cx, 205 * k, 18 * k, 7 * k, 'rgba(90,50,40,.2)');
  } else {
    g.fillStyle = '#120303'; g.beginPath(); g.moveTo(cx - 84 * k, 156 * k); g.quadraticCurveTo(cx, 262 * k, cx + 84 * k, 156 * k); g.quadraticCurveTo(cx, 196 * k, cx - 84 * k, 156 * k); g.fill();
    for (let i = -7; i <= 7; i++) { const x = cx + i * 10.5 * k, top = (172 + (1 - Math.abs(i) / 8) * 16) * k; const tg = g.createLinearGradient(0, top, 0, top + 13 * k); tg.addColorStop(0, '#e9dfc6'); tg.addColorStop(1, '#b9a98a'); g.fillStyle = tg; g.beginPath(); g.roundRect ? g.roundRect(x - 4.5 * k, top, 9 * k, 13 * k, 2 * k) : g.rect(x - 4.5 * k, top, 9 * k, 13 * k); g.fill(); }
    for (let i = -6; i <= 6; i++) { const x = cx + i * 10.5 * k, top = (205 + (1 - Math.abs(i) / 7) * 18) * k; g.fillStyle = '#cbbd9e'; g.fillRect(x - 4 * k, top, 8 * k, 9 * k); }
    g.strokeStyle = '#6a1414'; g.lineWidth = 3 * k; g.beginPath(); g.moveTo(cx - 86 * k, 156 * k); g.quadraticCurveTo(cx, 264 * k, cx + 86 * k, 156 * k); g.stroke();
    g.strokeStyle = 'rgba(60,10,10,.5)'; g.lineWidth = 2 * k; for (const s of [-1, 1]) { g.beginPath(); g.moveTo(cx + s * 86 * k, 156 * k); g.lineTo(cx + s * 96 * k, 146 * k); g.stroke(); }
  }
}, { aniso: 8 });

// 학생 조끼 앞면: 검정 니트 + 흰 줄 V넥 + 흰 셔츠 + 넥타이
export const vestFrontTex = () => canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#16171a'; g.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 3) for (let x = 0; x < w; x += 4) { g.fillStyle = `rgba(255,255,255,${0.02 + R() * 0.03})`; g.fillRect(x, y, 2, 2); } // 니트 결
  g.fillStyle = '#eef0f2'; g.beginPath(); g.moveTo(w * 0.22, 0); g.lineTo(w / 2, h * 0.55); g.lineTo(w * 0.78, 0); g.fill(); // 셔츠
  g.fillStyle = '#3b4250'; g.beginPath(); g.moveTo(w / 2 - 10, 0); g.lineTo(w / 2 + 10, 0); g.lineTo(w / 2 + 14, h * 0.5); g.lineTo(w / 2, h * 0.56); g.lineTo(w / 2 - 14, h * 0.5); g.fill(); // 넥타이
  g.strokeStyle = 'rgba(255,255,255,.12)'; g.lineWidth = 2; for (let i = 0; i < 8; i++) { g.beginPath(); g.moveTo(w / 2 - 12, i * 18); g.lineTo(w / 2 + 12, i * 18 + 10); g.stroke(); }
  g.strokeStyle = '#e8e8e8'; g.lineWidth = 7; g.beginPath(); g.moveTo(w * 0.2, 0); g.lineTo(w / 2, h * 0.58); g.lineTo(w * 0.8, 0); g.stroke(); // V넥 흰 줄
  g.strokeStyle = '#16171a'; g.lineWidth = 6; g.beginPath(); g.moveTo(w * 0.16, 0); g.lineTo(w / 2, h * 0.63); g.lineTo(w * 0.84, 0); g.stroke();
  g.strokeStyle = '#d8d8d8'; g.lineWidth = 4; g.beginPath(); g.moveTo(w * 0.12, 0); g.lineTo(w / 2, h * 0.67); g.lineTo(w * 0.88, 0); g.stroke();
  g.fillStyle = 'rgba(255,255,255,.08)'; for (let x = 0; x < w; x += 6) g.fillRect(x, h - 18, 3, 18); // 밑단 골지
});
export const knitTex = () => canvasTex(64, 64, (g, w, h) => { g.fillStyle = '#16171a'; g.fillRect(0, 0, w, h); for (let y = 0; y < h; y += 3) for (let x = 0; x < w; x += 4) { g.fillStyle = `rgba(255,255,255,${0.02 + R() * 0.03})`; g.fillRect(x, y, 2, 2); } });
export const checkPantsTex = () => canvasTex(64, 64, (g, w, h) => {
  g.fillStyle = '#4a4d52'; g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(30,30,35,.5)'; g.lineWidth = 1; for (let i = 0; i < w; i += 6) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, h); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(w, i); g.stroke(); }
  grain(g, w, h, 16);
}, { repeat: [3, 6] });
// 복도 감독: 정장 앞면(흰 셔츠 + 빨간 넥타이)
export const suitFrontTex = () => canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#1b1c20'; g.fillRect(0, 0, w, h);
  g.fillStyle = '#d8d6cf'; g.beginPath(); g.moveTo(w * 0.3, 0); g.lineTo(w / 2, h * 0.5); g.lineTo(w * 0.7, 0); g.fill();
  g.fillStyle = '#6a0b0b'; g.beginPath(); g.moveTo(w / 2 - 9, 6); g.lineTo(w / 2 + 9, 6); g.lineTo(w / 2 + 12, h * 0.45); g.lineTo(w / 2, h * 0.5); g.lineTo(w / 2 - 12, h * 0.45); g.fill();
  g.strokeStyle = '#0b0b0d'; g.lineWidth = 5; g.beginPath(); g.moveTo(w * 0.28, 0); g.lineTo(w / 2, h * 0.55); g.lineTo(w / 2, h); g.moveTo(w * 0.72, 0); g.lineTo(w / 2, h * 0.55); g.stroke();
  g.fillStyle = '#0e0e10'; for (const y of [0.65, 0.82]) { g.beginPath(); g.arc(w / 2 + 6, h * y, 5, 0, 7); g.fill(); }
  stains(g, w, h, 6, '60,10,10', 0.2, 0.2); grain(g, w, h, 12);
});
export const clipboardTex = () => canvasTex(128, 160, (g, w, h) => {
  g.fillStyle = '#6b4a2b'; g.fillRect(0, 0, w, h); g.fillStyle = '#eee9dc'; g.fillRect(10, 18, w - 20, h - 26);
  g.fillStyle = '#222'; g.font = 'bold 13px sans-serif'; g.fillText('출 석 부', 34, 36);
  for (let i = 0; i < 9; i++) { g.fillStyle = '#444'; g.fillRect(16, 46 + i * 12, 44, 2); g.strokeStyle = '#a00'; g.lineWidth = 2; if (R() < 0.7) { g.beginPath(); g.moveTo(14, 47 + i * 12); g.lineTo(64, 45 + i * 12); g.stroke(); } }
  g.fillStyle = '#999'; g.fillRect(44, 6, 40, 14);
});
export const crackTex = () => canvasTex(512, 256, (g, w, h) => {
  g.clearRect(0, 0, w, h); g.strokeStyle = 'rgba(255,255,255,.75)';
  const cx0 = w * (0.3 + R() * 0.4), cy0 = h * 0.5;
  for (let i = 0; i < 18; i++) { g.lineWidth = 1 + R() * 2; g.beginPath(); let x = cx0, y = cy0; g.moveTo(x, y); const a = R() * 7; for (let k = 0; k < 6; k++) { x += Math.cos(a + (R() - 0.5)) * 40; y += Math.sin(a + (R() - 0.5)) * 30; g.lineTo(x, y); } g.stroke(); }
  for (let r = 20; r < 90; r += 25) { g.lineWidth = 1; g.beginPath(); for (let a = 0; a < 7; a += 0.6) g.lineTo(cx0 + Math.cos(a) * r * (0.8 + R() * 0.4), cy0 + Math.sin(a) * r * 0.6); g.closePath(); g.stroke(); }
});

// 데칼코마니: 바닥·벽을 타고 다니는 좌우 대칭 먹물 얼룩
export const inkBlotTex = () => canvasTex(512, 512, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  const half = document.createElement('canvas'); half.width = w / 2; half.height = h; const hg = half.getContext('2d');
  const blob = (x, y, r, a) => { hg.fillStyle = `rgba(8,4,6,${a})`; hg.beginPath(); for (let t = 0; t < 6.3; t += 0.35) { const rr = r * (0.6 + R() * 0.6); hg.lineTo(x + Math.cos(t) * rr, y + Math.sin(t) * rr); } hg.fill(); };
  blob(w / 2 - 20, h / 2, 120, 0.95);
  for (let i = 0; i < 26; i++) { const a = R() * 6.28, d = 60 + R() * 140; blob(w / 2 - 10 - Math.abs(Math.cos(a)) * d, h / 2 + Math.sin(a) * d, 10 + R() * 45, 0.9); }
  for (let i = 0; i < 40; i++) { const x = w / 2 - R() * 230, y = R() * h; hg.fillStyle = 'rgba(8,4,6,.85)'; hg.beginPath(); hg.arc(x, y, 1 + R() * 5, 0, 7); hg.fill(); }
  hg.globalCompositeOperation = 'destination-out'; // 눈처럼 보이는 빈 구멍
  hg.beginPath(); hg.ellipse(w / 2 - 55, h / 2 - 40, 16, 26, 0.3, 0, 7); hg.fill();
  hg.beginPath(); hg.ellipse(w / 2 - 30, h / 2 + 60, 30, 7, 0, 0, 7); hg.fill();
  g.drawImage(half, 0, 0); g.save(); g.translate(w, 0); g.scale(-1, 1); g.drawImage(half, 0, 0); g.restore();
}, { srgb: true });

// 벽에 색연필로 그려진 기괴한 사람 (데칼코마니에게 접힌 학생들). me=true 면 나(조끼·넥타이)
export const pencilPersonTex = (seed = 0, me = false) => canvasTex(256, 400, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  let s = seed * 9301 + 49297; const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const pal = me ? { top: '#1b1b20', sh: '#f0f0f0', pants: '#5a5d63', skin: '#e8b896' } : [{ top: '#2a3f7a', sh: '#f2f2f2', pants: '#2a2a40', skin: '#e9b593' }, { top: '#7a1f2a', sh: '#f2f2f2', pants: '#3a2a20', skin: '#e3a985' }, { top: '#2f5a3a', sh: '#efefe6', pants: '#33363a', skin: '#efc3a2' }][seed % 3];
  // 색연필 칠: 얇고 반투명한 선을 여러 번 겹친다
  const scribble = (pts, col, n = 60, wdt = 2) => {
    g.strokeStyle = col; g.lineCap = 'round';
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]); const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    g.save(); g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.closePath(); g.clip();
    for (let i = 0; i < n; i++) { g.globalAlpha = 0.25 + rnd() * 0.4; g.lineWidth = wdt * (0.6 + rnd()); g.beginPath(); const y = y0 + rnd() * (y1 - y0), x = x0 - 10; g.moveTo(x, y); g.lineTo(x1 + 10, y + (rnd() - 0.3) * 30); g.stroke(); }
    g.restore(); g.globalAlpha = 1;
  };
  const outline = (pts, col = '#151010', wdt = 2.2) => { for (let k = 0; k < 2; k++) { g.strokeStyle = col; g.globalAlpha = 0.7; g.lineWidth = wdt; g.beginPath(); pts.forEach(([x, y], i) => { const j = () => (rnd() - 0.5) * 2.5; i ? g.lineTo(x + j(), y + j()) : g.moveTo(x + j(), y + j()); }); g.closePath(); g.stroke(); } g.globalAlpha = 1; };
  const L = (pts) => pts.map(([x, y]) => [w / 2 - x, y]), Rr = (pts) => pts.map(([x, y]) => [w / 2 + x, y]);
  const twist = rnd() * 30 - 15, armLen = 120 + rnd() * 80, neck = 20 + rnd() * 40;
  const headY = 60, bodyTop = headY + 40 + neck;
  // 다리 (너무 가늘고 길다)
  for (const side of [L, Rr]) { const leg = side([[8, bodyTop + 110], [26, bodyTop + 110], [30 + twist * 0.3, h - 14], [16, h - 12]]); scribble(leg, pal.pants, 40); outline(leg); }
  // 몸통
  const body = [[w / 2 - 38, bodyTop], [w / 2 + 38, bodyTop], [w / 2 + 34, bodyTop + 115], [w / 2 - 34, bodyTop + 115]];
  scribble(body, pal.sh, 40); scribble(me ? [[w / 2 - 38, bodyTop], [w / 2 - 6, bodyTop + 60], [w / 2 + 6, bodyTop + 60], [w / 2 + 38, bodyTop], [w / 2 + 34, bodyTop + 105], [w / 2 - 34, bodyTop + 105]] : body, pal.top, 70); outline(body);
  if (me) { g.strokeStyle = '#eee'; g.lineWidth = 3; g.beginPath(); g.moveTo(w / 2 - 34, bodyTop); g.lineTo(w / 2, bodyTop + 64); g.lineTo(w / 2 + 34, bodyTop); g.stroke(); scribble([[w / 2 - 5, bodyTop], [w / 2 + 5, bodyTop], [w / 2 + 6, bodyTop + 55], [w / 2 - 6, bodyTop + 55]], '#3b4250', 20); }
  // 팔 (비틀리고 바닥까지 길다)
  for (const sgn of [-1, 1]) { const ax = w / 2 + sgn * 38; const arm = [[ax, bodyTop + 4], [ax + sgn * 14, bodyTop + 4], [ax + sgn * (30 + twist * sgn), bodyTop + armLen], [ax + sgn * (16 + twist * sgn), bodyTop + armLen + 6]]; scribble(arm, pal.sh, 30); outline(arm);
    const hx = ax + sgn * (24 + twist * sgn), hy = bodyTop + armLen + 8; g.strokeStyle = '#2a1a14'; g.lineWidth = 2; for (let f = 0; f < 5; f++) { g.beginPath(); g.moveTo(hx, hy); g.lineTo(hx + sgn * (f - 2) * 6, hy + 18 + rnd() * 16); g.stroke(); } }
  // 목·머리
  const nk = [[w / 2 - 7, headY + 30], [w / 2 + 7, headY + 30], [w / 2 + 7, bodyTop], [w / 2 - 7, bodyTop]]; scribble(nk, pal.skin, 20); outline(nk, '#2a1a14', 1.5);
  const hd = []; for (let a = 0; a < 6.28; a += 0.3) hd.push([w / 2 + Math.cos(a) * 34, headY + Math.sin(a) * 40]);
  scribble(hd, pal.skin, 50); outline(hd);
  g.fillStyle = '#120a0a'; for (let k = 0; k < 40; k++) { g.globalAlpha = 0.5; g.fillRect(w / 2 - 36 + rnd() * 72, headY - 44 + rnd() * 26, 2, 10 + rnd() * 14); } g.globalAlpha = 1; // 머리카락
  for (const sgn of [-1, 1]) { g.fillStyle = '#050505'; g.beginPath(); g.ellipse(w / 2 + sgn * 13, headY - 2, 8, 11, 0, 0, 7); g.fill(); g.strokeStyle = '#7a0a0a'; g.lineWidth = 2; g.beginPath(); g.moveTo(w / 2 + sgn * 13, headY + 8); g.lineTo(w / 2 + sgn * 14, headY + 26 + rnd() * 30); g.stroke(); } // 눈 + 핏물
  g.fillStyle = '#120505'; g.beginPath(); g.moveTo(w / 2 - 22, headY + 20); g.quadraticCurveTo(w / 2, headY + 42, w / 2 + 22, headY + 20); g.quadraticCurveTo(w / 2, headY + 28, w / 2 - 22, headY + 20); g.fill();
  // 낙서 글씨
  g.fillStyle = 'rgba(120,10,10,.75)'; g.font = 'bold 18px "Nanum Pen Script", cursive, sans-serif'; g.save(); g.translate(14, h - 30); g.rotate(-0.08); g.fillText(me ? '너' : ['살려줘', '여기 있어', '조용히 해'][seed % 3], 0, 0); g.restore();
});
// 접히는 복도 벽: 원래 벽 위에 구김·접힌 그늘·번진 먹물
export const foldTex = () => canvasTex(512, 512, (g, w, h) => {
  const base = wallTex().image; g.drawImage(base, 0, 0, w / 2, h); g.drawImage(base, w / 2, 0, w / 2, h);
  for (let i = 0; i < 40; i++) { g.strokeStyle = `rgba(20,15,10,${0.15 + R() * 0.3})`; g.lineWidth = 1 + R() * 2; g.beginPath(); let x = R() * w, y = R() * h; g.moveTo(x, y); for (let k = 0; k < 5; k++) { x += (R() - 0.5) * 120; y += (R() - 0.5) * 120; g.lineTo(x, y); } g.stroke(); }
  const gr = g.createLinearGradient(w / 2 - 60, 0, w / 2 + 60, 0); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(0.5, 'rgba(0,0,0,.85)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(w / 2 - 60, 0, 120, h);
  g.globalAlpha = 0.85; g.drawImage(inkBlotTex().image, w * 0.15, h * 0.2, w * 0.7, h * 0.6); g.globalAlpha = 1;
});

// ===== 원작 괴물용 텍스처 =====
// 국어 교과서 삽화 같은 얼굴 (단순한 선, 동그란 볼터치, 웃는 입). wide=true 면 입이 찢어질 듯 커진다
export const textbookFaceTex = (wide) => canvasTex(512, 512, (g, w, h) => {
  g.clearRect(0, 0, w, h); const cx = w / 2;
  for (const s of [-1, 1]) {
    g.fillStyle = '#151515'; g.beginPath(); g.ellipse(cx + s * 70, 230, 22, wide ? 34 : 28, 0, 0, 7); g.fill();
    g.fillStyle = '#fff'; g.beginPath(); g.arc(cx + s * 70 + 7, 220, 7, 0, 7); g.fill();
    g.strokeStyle = '#151515'; g.lineWidth = 6; g.lineCap = 'round'; g.beginPath(); g.moveTo(cx + s * 48, 182); g.quadraticCurveTo(cx + s * 70, 172, cx + s * 94, 184); g.stroke();
    g.fillStyle = 'rgba(240,110,120,.45)'; g.beginPath(); g.ellipse(cx + s * 95, 290, 34, 18, 0, 0, 7); g.fill();
  }
  g.strokeStyle = '#a0504a'; g.lineWidth = 4; g.beginPath(); g.moveTo(cx - 6, 270); g.lineTo(cx, 282); g.stroke();
  if (!wide) { g.strokeStyle = '#7a2020'; g.lineWidth = 7; g.beginPath(); g.arc(cx, 300, 40, 0.25, Math.PI - 0.25); g.stroke(); }
  else { g.fillStyle = '#2a0505'; g.beginPath(); g.moveTo(cx - 150, 280); g.quadraticCurveTo(cx, 470, cx + 150, 280); g.quadraticCurveTo(cx, 350, cx - 150, 280); g.fill(); g.fillStyle = '#efe6d0'; for (let i = -9; i <= 9; i++) { g.beginPath(); g.moveTo(cx + i * 14 - 6, 300 + (1 - Math.abs(i) / 10) * 30); g.lineTo(cx + i * 14 + 6, 300 + (1 - Math.abs(i) / 10) * 30); g.lineTo(cx + i * 14, 322 + (1 - Math.abs(i) / 10) * 30); g.fill(); } }
}, { aniso: 8 });
// 체육 괴물: 그림자 진 얼굴에 커다란 눈, 찢어질 듯한 입
export const shadowFaceTex = () => canvasTex(512, 512, (g, w, h) => {
  g.fillStyle = '#060607'; g.fillRect(0, 0, w, h); const cx = w / 2;
  for (const s of [-1, 1]) { const gr = g.createRadialGradient(cx + s * 80, 210, 0, cx + s * 80, 210, 60); gr.addColorStop(0, '#fffef6'); gr.addColorStop(0.75, '#e8e4d8'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.beginPath(); g.ellipse(cx + s * 80, 210, 58, 64, 0, 0, 7); g.fill(); g.fillStyle = '#000'; g.beginPath(); g.arc(cx + s * 80 + s * -6, 214, 9, 0, 7); g.fill(); }
  g.fillStyle = '#e8e2d2'; g.beginPath(); g.moveTo(cx - 190, 300); g.quadraticCurveTo(cx, 440, cx + 190, 300); g.quadraticCurveTo(cx, 360, cx - 190, 300); g.fill();
  g.strokeStyle = '#060607'; g.lineWidth = 4; for (let i = -12; i <= 12; i++) { g.beginPath(); g.moveTo(cx + i * 15, 320 + (1 - Math.abs(i) / 13) * 25); g.lineTo(cx + i * 15, 350 + (1 - Math.abs(i) / 13) * 45); g.stroke(); }
});
// 공 괴물: 공이 되어 버린 머리 (비명 지르는 얼굴)
export const ballFaceTex = (seed = 0) => canvasTex(256, 128, (g, w, h) => {
  g.fillStyle = ['#c8651e', '#e9e6dc', '#d8d1b0'][seed % 3]; g.fillRect(0, 0, w, h);
  g.strokeStyle = 'rgba(20,10,5,.7)'; g.lineWidth = 3; g.beginPath(); g.moveTo(0, h / 2); g.lineTo(w, h / 2); g.moveTo(w / 4, 0); g.lineTo(w / 4, h); g.moveTo(w * 3 / 4, 0); g.lineTo(w * 3 / 4, h); g.stroke();
  const cx = w / 2; g.fillStyle = '#100808';
  for (const s of [-1, 1]) { g.beginPath(); g.ellipse(cx + s * 14, 50, 6, 9, 0, 0, 7); g.fill(); }
  g.beginPath(); g.ellipse(cx, 80, 12, 18, 0, 0, 7); g.fill();
  g.fillStyle = 'rgba(20,10,5,.8)'; for (let i = 0; i < 30; i++) g.fillRect(cx - 24 + R() * 48, 18 + R() * 10, 2, 8);
  grain(g, w, h, 16);
});
// 스케치북에서 뜯어낸 종이처럼 변한 벽 (데칼코마니가 숨은 자리)
export const tornPaperTex = () => canvasTex(512, 512, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  g.fillStyle = '#ece6d6'; g.beginPath(); for (let a = 0; a < 6.28; a += 0.12) { const r = 210 + (R() - 0.5) * 60; g.lineTo(w / 2 + Math.cos(a) * r, h / 2 + Math.sin(a) * r * 1.1); } g.fill();
  g.save(); g.clip();
  for (let i = 0; i < 120; i++) { g.strokeStyle = `rgba(40,40,45,${0.1 + R() * 0.25})`; g.lineWidth = 1 + R(); g.beginPath(); const x = R() * w, y = R() * h; g.moveTo(x, y); g.lineTo(x + 40 + R() * 40, y + (R() - 0.5) * 20); g.stroke(); } // 연필 빗금
  g.strokeStyle = 'rgba(30,30,35,.6)'; g.lineWidth = 2; for (let k = 0; k < 6; k++) { g.beginPath(); g.moveTo(R() * w, 0); g.lineTo(R() * w, h); g.stroke(); } // 접힌 자국
  g.restore();
  g.strokeStyle = 'rgba(120,110,90,.6)'; g.lineWidth = 3; g.beginPath(); for (let a = 0; a < 6.28; a += 0.12) { const r = 205 + (R() - 0.5) * 50; g.lineTo(w / 2 + Math.cos(a) * r, h / 2 + Math.sin(a) * r * 1.1); } g.closePath(); g.stroke();
});
// 거대한 손: 연필로 그린 듯한 창백한 피부
export const sketchSkinTex = () => canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#d9d4c8'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 160; i++) { g.strokeStyle = `rgba(30,30,35,${0.08 + R() * 0.2})`; g.lineWidth = 1; g.beginPath(); const x = R() * w, y = R() * h; g.moveTo(x, y); g.lineTo(x + 18, y + 24); g.stroke(); }
  stains(g, w, h, 8, '60,50,40', 0.2, 0.2); grain(g, w, h, 14);
});
export const gymFloorTex = () => canvasTex(256, 256, (g, w, h) => {
  for (let i = 0; i < 8; i++) { const b = 150 + R() * 30; g.fillStyle = `rgb(${b + 40},${b + 10},${b - 40})`; g.fillRect(0, i * 32, w, 32); g.fillStyle = 'rgba(60,30,0,.4)'; g.fillRect(0, i * 32, w, 1); g.fillRect(R() * w, i * 32, 1, 32); }
  for (let k = 0; k < 40; k++) { g.strokeStyle = `rgba(90,50,10,${R() * 0.15})`; g.beginPath(); const y = R() * h; g.moveTo(0, y); g.lineTo(w, y + (R() - 0.5) * 4); g.stroke(); }
  grain(g, w, h, 12);
});
export const tracksuitTex = () => canvasTex(128, 256, (g, w, h) => {
  g.fillStyle = '#1d2a4f'; g.fillRect(0, 0, w, h); g.fillStyle = '#e8e8e8'; g.fillRect(8, 0, 6, h); g.fillRect(w - 14, 0, 6, h); grain(g, w, h, 10);
});
// 스케치북 종이 (접히는 바닥의 뒷면)
export const sketchPaperTex = () => canvasTex(512, 512, (g, w, h) => {
  g.fillStyle = '#e4dfcc'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 260; i++) { g.strokeStyle = `rgba(35,40,30,${0.06 + R() * 0.16})`; g.lineWidth = 1 + R() * 1.2; g.beginPath(); const x = R() * w, y = R() * h, a = 0.6 + (R() - 0.5) * 0.3; g.moveTo(x, y); g.lineTo(x + Math.cos(a) * 60, y + Math.sin(a) * 60); g.stroke(); }
  for (let i = 0; i < 6; i++) { g.strokeStyle = 'rgba(30,30,30,.35)'; g.lineWidth = 2; g.beginPath(); g.moveTo(R() * w, 0); g.bezierCurveTo(R() * w, h * 0.3, R() * w, h * 0.7, R() * w, h); g.stroke(); }
  stains(g, w, h, 8, '90,80,50', 0.15, 0.25); grain(g, w, h, 12);
});
// 백룸처럼 누렇게 바랜 연두색 벽 (지하층)
export const backroomWallTex = () => canvasTex(256, 512, (g, w, h) => {
  g.fillStyle = '#b9bf8c'; g.fillRect(0, 0, w, h);
  const mid = h * 0.6; g.fillStyle = '#7f8d63'; g.fillRect(0, mid, w, h - mid); g.fillStyle = '#4f5a3c'; g.fillRect(0, mid - 5, w, 6); g.fillStyle = '#2e3324'; g.fillRect(0, h - 14, w, 14);
  for (let x = 0; x < w; x += 16) { g.fillStyle = 'rgba(80,90,50,.12)'; g.fillRect(x, 0, 2, mid - 6); }
  stains(g, w, h, 22, '70,60,20', 0.14, 0.3);
  const gr = g.createLinearGradient(0, h - 100, 0, h); gr.addColorStop(0, 'rgba(30,25,10,0)'); gr.addColorStop(1, 'rgba(30,25,10,.4)'); g.fillStyle = gr; g.fillRect(0, h - 100, w, 100);
  grain(g, w, h, 16);
});
export const carpetTex = () => canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#8c8a5a'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 9000; i++) { const b = 100 + R() * 70; g.fillStyle = `rgba(${b},${b - 4},${b - 50},.35)`; g.fillRect(R() * w, R() * h, 1.5, 1.5); }
  stains(g, w, h, 12, '50,40,20', 0.25, 0.25); grain(g, w, h, 10);
});
export const redDoorTex = () => canvasTex(128, 256, (g, w, h) => {
  g.fillStyle = '#5a1818'; g.fillRect(0, 0, w, h); g.strokeStyle = '#2a0a0a'; g.lineWidth = 4; g.strokeRect(10, 10, w - 20, h - 20); g.strokeRect(20, 30, w - 40, 80);
  g.fillStyle = '#b8b0a0'; g.fillRect(w - 26, h * 0.52, 10, 22);
  g.fillStyle = '#eee'; g.font = 'bold 20px sans-serif'; g.textAlign = 'center'; g.fillText('▼ 아래로', w / 2, 76);
  stains(g, w, h, 10, '20,0,0', 0.3, 0.3); grain(g, w, h, 14);
});
