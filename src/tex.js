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
