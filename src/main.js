// 뒤틀린 학교 — 1인칭 학교 공포 생존 게임
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import * as TX from './tex.js';
import * as MD from './models.js';

// ===== 설정 (이름·문구는 여기만 바꾸면 된다) =====
const GAME_TITLE = '44교시 생존수업';
const SERVER = location.hostname.endsWith('onrender.com') ? '' : 'https://random-football-cflg.onrender.com';
const RULES = {
  bell: { text: '수업 종이 울리면 반드시 교실 안에 있을 것. 국어책 괴물은 수업 시간에 돌아다니는 사람만 죽인다.', why: '수업 시간에 복도에 있었다. "수업 시간에 돌아다녔어!!"' },
  run: { text: '복도에서는 떠들지 말 것. 데칼코마니는 눈이 없는 대신 소리를 듣고, 벽과 바닥을 접어 사람을 그림으로 만든다.', why: '"데칼코마니?" 벽이 접혔다. 나는 벽에 그려진 그림이 되었다.' },
  mirror: { text: '화장실 거울 속의 나와 오래 눈을 마주치지 말 것. 도플갱어는 화장실 밖으로는 못 나온다.', why: '거울 속의 내가 웃었다. 그리고 나를 거울 속으로 끌고 들어가 내 몸을 차지했다.' },
  gym: { text: '체육관 안에서는 반드시 체육복을 입을 것. 호루라기가 울리면 공이 달려든다.', why: '교복을 입은 채 체육관에 들어갔다. 삑— 호루라기 소리와 함께 나도 공이 되었다.' },
};
const NOTES = {
  n1: { t: '칠판', b: '"종이 울리면 반드시 자리에 앉을 것."' },
  n2: { t: '화장실 벽 낙서', b: '거울 속 애들은 단추가 반대쪽에 달려 있어.\n계속 보고 있으면 멈췄다가… 웃어.\n웃으면 화장실 밖으로 도망쳐. 걔는 화장실 밖으로는 못 나와.' },
  n3: { t: '1학년 3반 쪽지', b: '3반은 다 끝났어.\n"데칼코마니?" 하는 소리가 들리면 숨도 쉬지 마.\n걔는 눈이 없어. 소리 나는 곳을 벽째로 접어 버려.\n물건을 던지면 그쪽으로 가. 빗자루든 핸드폰이든.' },
  n4: { t: '교무실 메모', b: '[체육관 교칙] 체육관 안에서는 반드시 체육복 착용.\n분실물 상자에 체육복 한 벌 있음.\n지하 계단 철문 열쇠 — 체육관 농구 골대 아래 보관.' },
  n5: { t: '과학실 쪽지', b: '사물함에 숨으면 데칼코마니한테 안 들켜.\n근데 안은 좁아서 8초 이상은 못 버텨.\n국어책 괴물은 수업 시간에만 나와. 교실 안에만 있으면 웃으면서 보기만 해.' },
  n6: { t: '도서실 신문 스크랩', b: '「세계 곳곳에 정체불명의 \'검은 원\' 발생… 실종자 천 명 넘어」\n\n여백에 적힌 글씨:\n안에서의 1년은 밖에서의 하루.\n출구는 맨 아래에 있다.' },
};
const NPCS = [ // 1학년 4반 친구들 (앉아 있는 책상 칸)
  { name: '남정우', x: 5, y: 5, o: { glasses: true }, lines: ['도윤아, 종 치기 전에 무조건 교실로 돌아와. 선생님처럼 되기 싫으면.', '교무실 분실물 상자에 체육복이 있었던 것 같아. 체육관은 체육복 없이 들어가면 안 돼.', '출구는 맨 아래라고 했어. 지하로 가는 계단을 찾아.'] },
  { name: '임선아', x: 9, y: 5, o: { girl: true, hairColor: 0x2a1a12 }, lines: ['복도에선 절대 소리 내지 마. 3반이… 전부 벽에 그려져 있었어.', '걔한테 쫓기면 뭐든 던져. 소리 나는 쪽으로 가니까.'] },
  { name: '최원균', x: 3, y: 7, o: {}, big: true, lines: ['나, 나는 여기서 안 나갈 거야…', '아까 복도에서 목소리 들렸어. 사람 목소리였는데… 사람 아니었던 것 같아.'] },
  { name: '전석오', x: 11, y: 3, o: {}, lines: ['화장실 거울 보지 마. 거울 속 애들이 우리보다 늦게 움직였어.', '괴물이든 뭐든 다 같이 덮치면 이길 수 있을 줄 알았는데…'] },
  { name: '한수진', x: 9, y: 7, o: { girl: true, hairColor: 0x3a2418 }, lines: ['괴물들은 다 교칙이랑 관련 있는 것 같아. 교칙만 지키면 살 수 있어.', '국어책 괴물은 교실 안까지는 안 들어와. 수업 시간엔 무조건 여기 있어.'] },
];

// ===== 맵 (1칸 = 1.2m) =====
const S = 1.2, WALL_H = 3;
const W = 58, H = 27;
const FLOOR = 0, WALL = 1, DOOR = 3, LOCK = 4, STAIR = 5, LOCKER = 6, MIRROR = 7, DESK = 8;
let T = new Uint8Array(W * H).fill(WALL), RM = new Uint8Array(W * H);
const ix = (x, y) => y * W + x;
const tt = (x, y) => (x < 0 || y < 0 || x >= W || y >= H) ? WALL : T[ix(x, y)];
const rr = (x, y) => (x < 0 || y < 0 || x >= W || y >= H) ? 0 : RM[ix(x, y)];
function room(x0, y0, x1, y1, r) { for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) { T[ix(x, y)] = FLOOR; RM[ix(x, y)] = r; } }
const ROOMS = ['복도', '1-4', '화장실', '1-3', '교무실', '계단', '체육관', '과학실', '도서실'];
room(1, 11, 56, 14, 0);
room(1, 1, 13, 9, 1); room(15, 1, 22, 9, 2); room(24, 1, 35, 9, 3); room(37, 1, 46, 9, 4); room(48, 1, 56, 9, 5);
room(1, 16, 16, 25, 6); room(18, 16, 34, 25, 7); room(36, 16, 56, 25, 8);
const DOORS = [[7, 10, 1], [18, 10, 2], [29, 10, 3], [41, 10, 4], [8, 15, 6], [26, 15, 7], [46, 15, 8]];
for (const [x, y] of DOORS) T[ix(x, y)] = DOOR;
T[ix(52, 10)] = LOCK;
for (let x = 16; x <= 21; x++) T[ix(x, 0)] = MIRROR;
for (let x = 51; x <= 53; x++) for (let y = 2; y <= 3; y++) T[ix(x, y)] = STAIR;
const solidList = [
  [3, 3], [5, 3], [9, 3], [11, 3], [3, 5], [5, 5], [9, 5], [11, 5], [3, 7], [5, 7], [9, 7], [11, 7], [6, 2], [7, 2], [8, 2],
  [26, 3], [29, 3], [32, 3], [26, 6], [32, 6],
  [39, 3], [40, 3], [43, 3], [44, 3], [39, 6], [40, 6], [43, 6], [44, 6],
  [2, 24],
  [20, 18], [21, 18], [22, 18], [26, 18], [27, 18], [28, 18], [31, 18], [32, 18], [20, 22], [21, 22], [22, 22], [26, 22], [27, 22], [28, 22], [31, 22], [32, 22],
];
for (const y of [18, 21, 24]) { for (let x = 38; x <= 44; x++) solidList.push([x, y]); for (let x = 48; x <= 54; x++) solidList.push([x, y]); }
for (let y = 5; y <= 9; y++) for (const x of [21, 22]) solidList.push([x, y]); // 화장실 칸
for (const [x, y] of solidList) T[ix(x, y)] = DESK;
let LOCKERS = [[4, 11], [11, 11], [21, 11], [33, 11], [45, 11], [13, 14], [20, 14], [31, 14], [39, 14], [53, 14]].map(([x, y]) => [x, y, 0, y === 11 ? 1 : -1]); // [x, y, 바라보는 방향 x, y]
for (const [x, y] of LOCKERS) T[ix(x, y)] = LOCKER;
let stairsOpen = false;
const solid = (x, y) => { const t = tt(x, y); return t === WALL || t === DESK || t === LOCKER || t === MIRROR || (t === LOCK && !stairsOpen); };
const monsterOk = (x, y) => !solid(x, y) && rr(x, y) !== 1;
const NOTE_SPOTS = { n2: [16.5, 8.5], n3: [28.5, 1.6], n4: [45.5, 2.5], n5: [33.5, 24.5], n6: [55.5, 16.5] };
const KEY_SPOT = [8.5, 25.3], PE_SPOT = [38.5, 8.3], PE_MON = [8.5, 21.5];
const BROOM_SPOTS = [[2.5, 13.6], [23.5, 13.6], [47.5, 11.5]];

// ===== 저장 =====
let save = { notes: ['n1'], rules: [], deaths: 0, clears: 0, best: 0 };
let token = localStorage.getItem('hor_tok') || '', nick = '';
try { const l = JSON.parse(localStorage.getItem('hor_save') || 'null'); if (l) save = Object.assign(save, l); } catch (e) {}
const uniq = (a) => [...new Set(a)];
const merge = (a, b) => ({ notes: uniq([...(a.notes || []), ...(b.notes || [])]), rules: uniq([...(a.rules || []), ...(b.rules || [])]), deaths: Math.max(a.deaths || 0, b.deaths || 0), clears: Math.max(a.clears || 0, b.clears || 0), best: [a.best, b.best].filter((v) => v > 0).sort((x, y) => x - y)[0] || 0 });
let saveTimer = 0;
function persist() { localStorage.setItem('hor_save', JSON.stringify(save)); if (!token) return; clearTimeout(saveTimer); saveTimer = setTimeout(() => api('/api/horror/save', { save }).catch(() => {}), 800); }
async function api(path, body) {
  const r = await fetch(SERVER + path, { method: body ? 'POST' : 'GET', headers: Object.assign({ 'Content-Type': 'application/json' }, token ? { Authorization: 'Bearer ' + token } : {}), body: body ? JSON.stringify(body) : undefined });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) { const e = new Error(j.error || 'http_' + r.status); e.status = r.status; throw e; }
  return j;
}
async function loadServer() { const j = await api('/api/horror/save'); nick = j.nick || ''; if (j.save) save = merge(save, j.save); persist(); }

// ===== 렌더러 =====
const $ = (id) => document.getElementById(id);
const cv = $('cv');
const renderer = new THREE.WebGLRenderer({ canvas: cv, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(1.5, window.devicePixelRatio || 1));
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.15;
const scene = new THREE.Scene(); scene.background = new THREE.Color(0x000000);
scene.fog = new THREE.FogExp2(0x0a0b0d, 0.022);
const camera = new THREE.PerspectiveCamera(72, 1, 0.04, 70); scene.add(camera);
function resize() { renderer.setSize(innerWidth, innerHeight, false); camera.aspect = innerWidth / innerHeight; camera.fov = innerWidth < innerHeight ? 80 : 70; camera.updateProjectionMatrix(); }
addEventListener('resize', resize); resize();
scene.add(new THREE.HemisphereLight(0xb8c0cc, 0x3a342c, 1.5)); scene.add(new THREE.AmbientLight(0x9aa0a8, 0.55)); // 화면 전체가 보이도록 밝게
const sceneBase = new Set(scene.children);

// 손전등 (카메라에 붙어 있음)
const flash = new THREE.SpotLight(0xfff0d6, 30, 22, 0.6, 0.6, 1.6);
flash.position.set(0.1, -0.13, -0.5); flash.castShadow = true;
flash.shadow.mapSize.set(1024, 1024); flash.shadow.camera.near = 0.15; flash.shadow.camera.far = 22; flash.shadow.bias = -0.0008;
camera.add(flash); flash.target.position.set(0, -0.8, -6); camera.add(flash.target);
const flashModel = new THREE.Group(); // (손전등 모델은 화면을 가려서 뺐다)
const fill = new THREE.PointLight(0xffe6c8, 0.5, 3.2, 2); camera.add(fill); // 손전등 주변 반사광

// ===== 월드 만들기 =====
const std = (o) => new THREE.MeshStandardMaterial(o);
const wallMat = std({ map: TX.wallTex(), roughness: 0.85 });
const floorMats = {
  vinyl: std({ map: TX.vinylTex(), roughness: 0.55 }),
  vinylWarm: std({ map: TX.vinylTex(), color: 0xd8c8b0, roughness: 0.6 }),
  vinylCold: std({ map: TX.vinylTex(), color: 0xb0c4c8, roughness: 0.5 }),
  wood: std({ map: TX.woodFloorTex(), roughness: 0.6 }),
  woodDark: std({ map: TX.woodFloorTex(), color: 0x9a8070, roughness: 0.7 }),
  tile: std({ map: TX.tileTex(), roughness: 0.25 }),
  gym: std({ map: TX.gymFloorTex(), roughness: 0.35 }),
};
const floorKey = (x, y) => { const t = tt(x, y); if (t === DOOR || t === LOCK) return 'vinyl'; return ['vinyl', 'wood', 'tile', 'wood', 'vinylWarm', 'vinyl', 'gym', 'vinylCold', 'woodDark'][rr(x, y)]; };
const geos = { walls: [] }; for (const k in floorMats) geos[k] = [];
const at = (g, x, y, z) => { g.translate(x, y, z); return g; };
for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
  const t = T[ix(x, y)], cxw = (x + 0.5) * S, czw = (y + 0.5) * S;
  if (t === WALL) {
    let near = false; for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const n = tt(x + dx, y + dy); if (n !== WALL && n !== MIRROR) near = true; }
    if (near) geos.walls.push(at(new THREE.BoxGeometry(S, WALL_H, S), cxw, WALL_H / 2, czw));
    continue;
  }
  if (t === MIRROR) { geos.walls.push(at(new THREE.BoxGeometry(S, 1.0, S), cxw, 0.5, czw)); geos.walls.push(at(new THREE.BoxGeometry(S, 0.75, S), cxw, WALL_H - 0.375, czw)); continue; }
  if (t !== STAIR) { const pg = new THREE.PlaneGeometry(S, S); pg.rotateX(-Math.PI / 2); geos[floorKey(x, y)].push(at(pg, cxw, 0, czw)); }
  if (t === DOOR || t === LOCK) geos.walls.push(at(new THREE.BoxGeometry(S, 0.75, S), cxw, WALL_H - 0.375, czw)); // 문 위 벽
}
const addMerged = (list, mat, shadow = true) => { if (!list.length) return; const m = new THREE.Mesh(mergeGeometries(list), mat); m.receiveShadow = true; m.castShadow = shadow; scene.add(m); return m; };
addMerged(geos.walls, wallMat);
for (const k in floorMats) addMerged(geos[k], floorMats[k], false);
{ const ct = TX.ceilTex(); ct.repeat.set(W, H); const c = new THREE.Mesh(new THREE.PlaneGeometry(W * S, H * S), std({ map: ct, roughness: 0.95 })); c.rotation.x = Math.PI / 2; c.position.set(W * S / 2, WALL_H, H * S / 2); c.receiveShadow = true; scene.add(c); }

const staticG = new THREE.Group(); scene.add(staticG); // 움직이지 않는 가구: 나중에 재질별로 합쳐서 그리기 횟수를 줄인다 (폰 성능)
const place = (obj, x, y, rot = 0, h = 0) => { obj.position.set(x * S, h, y * S); obj.rotation.y = rot; obj.traverse((o) => { if (o.isMesh) { o.receiveShadow = true; } }); staticG.add(obj); return obj; };
function mergeStatic(root, target = scene) {
  root.updateMatrixWorld(true);
  const byMat = new Map(), keep = [];
  root.traverse((o) => {
    if (!o.isMesh) return;
    if (Array.isArray(o.material) || o.isInstancedMesh) { keep.push(o); return; }
    let g = o.geometry.clone().applyMatrix4(o.matrixWorld); if (g.index) g = g.toNonIndexed();
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!g.attributes.uv) return;
    if (!byMat.has(o.material)) byMat.set(o.material, { list: [], cast: false });
    const e = byMat.get(o.material); e.list.push(g); e.cast = e.cast || o.castShadow;
  });
  for (const o of keep) { const m = o.matrixWorld.clone(); o.removeFromParent(); m.decompose(o.position, o.quaternion, o.scale); target.add(o); }
  for (const [mat, e] of byMat) { const m = new THREE.Mesh(mergeGeometries(e.list), mat); m.castShadow = e.cast; m.receiveShadow = true; target.add(m); }
  root.removeFromParent();
}
// 가구
for (const [x, y] of solidList) {
  const r = rr(x, y), cx0 = x + 0.5, cy0 = y + 0.5;
  if (r === 1 && y !== 2) place(MD.studentDesk(), cx0, cy0 - 0.15);
  else if (r === 3) { const d = place(MD.studentDesk(), cx0, cy0, (Math.random() - 0.5) * 2.4); if (Math.random() < 0.4) { d.rotation.z = Math.PI / 2; d.position.y = 0.36; } }
  else if (r === 4) place(MD.officeDesk(), cx0, cy0, y === 3 ? 0 : Math.PI);
  else if (r === 6) place(MD.ballCart(), cx0, cy0, 0.3);
  else if (r === 7) place(MD.labBench(), cx0, cy0);
  else if (r === 8) place(MD.shelf(), cx0, cy0);
}
place(MD.teacherDesk(), 7.5, 2.5);
{ const ct = TX.canvasTex(512, 640, (g, w, h) => { g.clearRect(0, 0, w, h); g.strokeStyle = 'rgba(240,240,240,.8)'; g.lineWidth = 5; g.strokeRect(10, 10, w - 20, h - 20); g.beginPath(); g.moveTo(10, h / 2); g.lineTo(w - 10, h / 2); g.stroke(); g.beginPath(); g.arc(w / 2, h / 2, 60, 0, 7); g.stroke(); for (const y of [10, h - 10]) { g.beginPath(); g.arc(w / 2, y, 140, y < h / 2 ? 0 : Math.PI, y < h / 2 ? Math.PI : 7); g.stroke(); } });
  const c = new THREE.Mesh(new THREE.PlaneGeometry(15 * S, 9.6 * S), std({ map: ct, transparent: true, depthWrite: false, roughness: 0.4 })); c.rotation.x = -Math.PI / 2; c.position.set(9 * S, 0.005, 21 * S); scene.add(c); }
place(MD.hoop(), 8.5, 16.08); place(MD.hoop(), 8.5, 25.92, Math.PI);
place(MD.lostBox(), PE_SPOT[0], PE_SPOT[1] + 0.3);
{ const blood = new THREE.Mesh(new THREE.CircleGeometry(0.9, 24), std({ map: TX.canvasTex(256, 256, (g, w, h) => { g.clearRect(0, 0, w, h); for (let i = 0; i < 30; i++) { const gr = g.createRadialGradient(128 + (Math.random() - 0.5) * 120, 128 + (Math.random() - 0.5) * 120, 0, 128, 128, 30 + Math.random() * 40); gr.addColorStop(0, 'rgba(70,5,5,.7)'); gr.addColorStop(1, 'rgba(70,5,5,0)'); g.fillStyle = gr; g.fillRect(0, 0, w, h); } }), transparent: true, depthWrite: false, roughness: 0.2 })); blood.rotation.x = -Math.PI / 2; blood.position.set(7.5 * S, 0.004, 12.2 * S); scene.add(blood); } // 선생님이 쓰러진 자리
// 도서실 책 (인스턴스로 한 번에 그림)
{
  const spots = solidList.filter(([x, y]) => rr(x, y) === 8); const N = spots.length * 4 * 2 * 22;
  const im = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), std({ map: TX.bookSpineTex(), roughness: 0.8 }), N);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), col = new THREE.Color(); let n = 0;
  const pal = [0x7a2a2a, 0x2a3f6a, 0x2f5a3a, 0x6a5a2a, 0x4a2a5a, 0x8a7a6a, 0x1f1f1f, 0x9a4a2a];
  for (const [sx, sy] of spots) for (let lv = 0; lv < 4; lv++) for (const side of [-1, 1]) {
    let x = -0.55; while (x < 0.53 && n < N) {
      const w = 0.025 + Math.random() * 0.04, h = 0.2 + Math.random() * 0.14; if (Math.random() < 0.06) { x += 0.08; continue; }
      const lean = Math.random() < 0.05 ? 0.25 : 0;
      e.set(0, 0, lean); q.setFromEuler(e);
      m4.compose(new THREE.Vector3((sx + 0.5) * S + x + w / 2, 0.1 + lv * 0.48 + h / 2, (sy + 0.5) * S + side * 0.16), q, new THREE.Vector3(w, h, 0.2));
      im.setMatrixAt(n, m4); im.setColorAt(n, col.setHex(pal[(Math.random() * pal.length) | 0]).multiplyScalar(0.7 + Math.random() * 0.4)); n++; x += w + 0.002;
    }
  }
  im.count = n; im.castShadow = true; im.receiveShadow = true; scene.add(im);
}
// 사물함
for (const [x, y] of LOCKERS) place(MD.locker(), x + 0.5, y === 11 ? 11 + 0.25 : 15 - 0.25, y === 11 ? 0 : Math.PI);
// 칠판
{
  const b = new THREE.Mesh(new THREE.PlaneGeometry(9 * S, 1.25), std({ map: TX.chalkboardTex('종이 울리면 반드시 자리에 앉을 것'), roughness: 0.9 }));
  b.position.set(7.5 * S, 1.7, S + 0.025); b.receiveShadow = true; scene.add(b);
  const fr = std({ color: 0x5a4028, roughness: 0.7 });
  const tray = new THREE.Mesh(new THREE.BoxGeometry(9 * S, 0.04, 0.1), fr); tray.position.set(7.5 * S, 1.07, S + 0.06); scene.add(tray);
  const top = new THREE.Mesh(new THREE.BoxGeometry(9 * S + 0.1, 0.06, 0.06), fr); top.position.set(7.5 * S, 2.35, S + 0.03); scene.add(top);
  const clock = new THREE.Mesh(new THREE.CircleGeometry(0.17, 32), std({ map: TX.canvasTex(128, 128, (g) => { g.fillStyle = '#eee'; g.beginPath(); g.arc(64, 64, 62, 0, 7); g.fill(); g.strokeStyle = '#222'; g.lineWidth = 5; g.stroke(); g.lineWidth = 4; g.beginPath(); g.moveTo(64, 64); g.lineTo(64, 22); g.moveTo(64, 64); g.lineTo(92, 74); g.stroke(); for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; g.fillStyle = '#222'; g.fillRect(64 + Math.cos(a) * 52 - 2, 64 + Math.sin(a) * 52 - 2, 4, 4); } }), roughness: 0.4 }));
  clock.position.set(7.5 * S, 2.65, S + 0.02); scene.add(clock);
}
// 게시판, 소화기
for (const [x, z, ry] of [[25.5, 11, 0], [42.5, 15, Math.PI], [5, 15, Math.PI]]) { const b = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.0), std({ map: TX.corkTex(), roughness: 0.9 })); b.position.set(x * S, 1.55, z * S + (ry ? -0.02 : 0.02)); b.rotation.y = ry; scene.add(b); }
for (const [x, z, ry] of [[15.5, 11, 0], [34.5, 11, 0], [17.5, 15, Math.PI], [35.5, 15, Math.PI]]) place(MD.extinguisher(), x, z + (ry ? -0.1 : 0.1), ry, 0);
mergeStatic(staticG);
// 문틀·미닫이문·표찰
const doorFrame = std({ color: 0x4a3420, roughness: 0.7 });
for (const [x, y, r] of DOORS) {
  const z = (y + (y === 10 ? 1 : 0)) * S, out = y === 10 ? 1 : -1;
  for (const s of [0, 1]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.07, 2.25, S + 0.04), doorFrame); p.position.set((x + s) * S + (s ? -0.035 : 0.035), 1.125, (y + 0.5) * S); p.receiveShadow = true; scene.add(p); }
  const dp = new THREE.Mesh(new THREE.BoxGeometry(0.95, 2.1, 0.04), MD.M.doorWood()); dp.position.set((x + 1) * S + 0.5, 1.07, z + out * 0.03); dp.castShadow = dp.receiveShadow = true; scene.add(dp);
  const win = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.6), std({ color: 0x0a0c10, roughness: 0.1, metalness: 0.3 })); win.position.set((x + 1) * S + 0.5, 1.6, z + out * 0.052); if (out < 0) win.rotation.y = Math.PI; scene.add(win);
  const sg = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.19), std({ map: TX.signTex(ROOMS[r]), roughness: 0.7, side: THREE.DoubleSide }));
  sg.position.set(x * S + 0.05, 2.5, z + out * 0.27); sg.rotation.y = Math.PI / 2; scene.add(sg);
}
// 계단 철문 + 비상구 표시
const lockDoor = new THREE.Mesh(new THREE.BoxGeometry(S - 0.04, 2.25, 0.07), std({ map: TX.metalTex('#4b5a50'), metalness: 0.6, roughness: 0.45 }));
lockDoor.position.set(52.5 * S, 1.125, 10.5 * S + 0.3); lockDoor.castShadow = lockDoor.receiveShadow = true; scene.add(lockDoor);
{ const bar = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.05, 0.06), MD.M.steel()); bar.position.set(0, 0, 0.06); lockDoor.add(bar); }
{ const s = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.23, 0.06), [0, 0, 0, 0, 0, 0].map((_, i) => i === 4 ? new THREE.MeshBasicMaterial({ map: TX.exitTex() }) : std({ color: 0xdddddd }))); s.position.set(52.5 * S, 2.6, 11 * S + 0.05); scene.add(s); const gl = new THREE.PointLight(0x30ff80, 0.25, 2, 2); gl.position.set(52.5 * S, 2.45, 11 * S + 0.3); scene.add(gl); }
{ const sg = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.19), std({ map: TX.signTex('지하', '#7a1515', '#fff'), roughness: 0.7, side: THREE.DoubleSide })); sg.position.set(52 * S + 0.05, 2.5, 11 * S + 0.27); sg.rotation.y = Math.PI / 2; scene.add(sg); }
// 계단 (북쪽으로 올라감)
{ const sm = std({ map: TX.metalTex('#6c6a64'), roughness: 0.8 }), dk = std({ color: 0x0a0a0a, roughness: 1 }); // 아래로 내려가는 계단 (검은 원의 맨 아래로)
  for (let i = 0; i < 9; i++) { const st = new THREE.Mesh(new THREE.BoxGeometry(3 * S, 0.18, 0.3), sm); st.position.set(52.5 * S, -0.09 - 0.18 * i, 4 * S - 0.15 - i * 0.3); st.receiveShadow = true; scene.add(st); }
  for (const x of [51, 54]) { const w = new THREE.Mesh(new THREE.BoxGeometry(0.05, 2, 2.4), dk); w.position.set(x * S, -1, 3 * S); scene.add(w); }
  const back = new THREE.Mesh(new THREE.BoxGeometry(3 * S, 2, 0.05), dk); back.position.set(52.5 * S, -1, 2 * S); scene.add(back); }
// 천장 형광등
const lampOn = std({ color: 0xcccccc, emissive: 0xeef2ff, emissiveIntensity: 1.4 }), lampOff = std({ color: 0x777, emissive: 0x222, emissiveIntensity: 0.1, roughness: 0.4 });
const lampGeo = new THREE.BoxGeometry(1.2, 0.05, 0.28);
const flicker = [], classLamps = [];
for (let x = 3; x < 56; x += 4) { const on = x === 11 || x === 31 || x === 47; const l = new THREE.Mesh(lampGeo, on ? lampOn.clone() : lampOff); l.position.set(x * S, WALL_H - 0.03, 12.5 * S); scene.add(l); if (on) { const p = new THREE.PointLight(0xdfe8ff, 5, 9, 2); p.position.set(x * S, WALL_H - 0.25, 12.5 * S); scene.add(p); flicker.push({ l, p, base: 5, t: Math.random() * 5 }); } }
for (const [x, y] of [[4, 3.5], [11, 3.5], [4, 7], [11, 7]]) { const l = new THREE.Mesh(lampGeo, lampOff.clone()); l.position.set(x * S, WALL_H - 0.03, y * S); scene.add(l); classLamps.push(l); }
const classLight = new THREE.PointLight(0xfff2dd, 0, 14, 1.6); classLight.position.set(7.5 * S, 2.6, 5.5 * S); scene.add(classLight);

// 화장실: 세면대·칸막이 (거울 속 세계에도 똑같이 만든다)
function restroomFixtures(group, mirrored) {
  const c = MD.sinkCounter(6 * S - 0.1); c.position.set(19 * S, 0, S); group.add(c);
  for (let k = 0; k < 3; k++) { const s = MD.stall(); s.position.set(22 * S - 0.05, 0, 5 * S + 0.95 + k * 1.95); s.rotation.y = -Math.PI / 2; group.add(s); }
  if (mirrored) {
    const fl = TX.tileTex(); fl.repeat.set(8, 9);
    const f = new THREE.Mesh(new THREE.PlaneGeometry(8 * S, 9 * S), std({ map: fl, roughness: 0.25 })); f.rotation.x = -Math.PI / 2; f.position.set(19 * S, 0.001, 5.5 * S); f.receiveShadow = true; group.add(f);
    const ct = TX.ceilTex(); ct.repeat.set(8, 9); const c2 = new THREE.Mesh(new THREE.PlaneGeometry(8 * S, 9 * S), std({ map: ct, roughness: 0.95 })); c2.rotation.x = Math.PI / 2; c2.position.set(19 * S, WALL_H, 5.5 * S); group.add(c2);
    const wt = (rep) => { const t = TX.wallTex(); t.repeat.set(rep, 1); return std({ map: t, roughness: 0.85 }); };
    const w1 = new THREE.Mesh(new THREE.PlaneGeometry(9 * S, WALL_H), wt(9)); w1.position.set(15 * S, WALL_H / 2, 5.5 * S); w1.rotation.y = Math.PI / 2; group.add(w1);
    const w2 = w1.clone(); w2.position.x = 23 * S; w2.rotation.y = -Math.PI / 2; group.add(w2);
    const w3 = new THREE.Mesh(new THREE.PlaneGeometry(8 * S, WALL_H), wt(8)); w3.position.set(19 * S, WALL_H / 2, 10 * S); w3.rotation.y = Math.PI; group.add(w3);
    const dg = new THREE.Mesh(new THREE.PlaneGeometry(S, 2.25), new THREE.MeshBasicMaterial({ color: 0x000000 })); dg.position.set(18.5 * S, 1.125, 10 * S - 0.01); dg.rotation.y = Math.PI; group.add(dg);
    group.traverse((o) => { if (o.isMesh) o.receiveShadow = true; });
  }
}
restroomFixtures(scene, false);
const mirrorWorld = new THREE.Group(); mirrorWorld.position.z = 2 * S; mirrorWorld.scale.z = -1; scene.add(mirrorWorld);
restroomFixtures(mirrorWorld, true);
const crack = TX.crackTex();
const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x9fb4c0, roughness: 0.04, metalness: 0.1, transparent: true, opacity: 0.16 });
const glass = new THREE.Mesh(new THREE.PlaneGeometry(6 * S, 1.25), glassMat); glass.position.set(19 * S, 1.625, S + 0.002); scene.add(glass);
const crackMesh = new THREE.Mesh(new THREE.PlaneGeometry(6 * S, 1.25), new THREE.MeshBasicMaterial({ map: crack, transparent: true, depthWrite: false })); crackMesh.position.set(19 * S, 1.625, S + 0.004); crackMesh.visible = false; scene.add(crackMesh);
{ const fm = MD.M.steel(); for (const [w, h, x, y] of [[6 * S + 0.06, 0.03, 19 * S, 2.25], [6 * S + 0.06, 0.03, 19 * S, 1.0], [0.03, 1.25, 16 * S, 1.625], [0.03, 1.25, 22 * S, 1.625]]) { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.03), fm); b.position.set(x, y, S + 0.01); scene.add(b); } }
const dop = MD.makeStudent(); scene.add(dop); dop.visible = false; // 거울 속의 나

// 벽의 색연필 그림 (데칼코마니에게 접힌 사람들). 내가 접혀 죽으면 내 그림도 늘어난다
const drawG = new THREE.Group(); scene.add(drawG);
const DRAW_SPOTS = [[25.5, 1, 0], [27.3, 1, 0], [30.5, 1, 0], [32.4, 1, 0], [34.4, 1, 0], [24, 4, 3], [24, 7.5, 3], [36, 3, 2], [36, 6.5, 2], [26.5, 10, 1], [32, 10, 1], [27.3, 11, 0], [31, 11, 0], [36.5, 11, 0], [24, 15, 1], [29, 15, 1]];
const ME_SPOTS = [[38.5, 11, 0], [43, 15, 1], [50, 15, 1], [55.5, 15, 1]];
const drawTexCache = {};
function drawMesh(tex, x, y, side) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(0.95, 1.5), std({ map: tex, transparent: true, roughness: 0.9, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1 }));
  const z = y * S; m.position.set(x * S, 0.42 + 0.75 + (Math.random() - 0.5) * 0.15, side === 0 ? z + 0.012 : side === 1 ? z - 0.012 : z);
  if (side === 1) m.rotation.y = Math.PI; if (side === 2) { m.rotation.y = -Math.PI / 2; m.position.x = x * S - 0.012; } if (side === 3) { m.rotation.y = Math.PI / 2; m.position.x = x * S + 0.012; }
  m.rotation.z = (Math.random() - 0.5) * 0.12; drawG.add(m);
}
function buildDrawings() {
  drawG.clear();
  DRAW_SPOTS.forEach(([x, y, sd], i) => drawMesh(drawTexCache[i] || (drawTexCache[i] = TX.pencilPersonTex(i + 1, false)), x, y, sd));
  for (let i = 0; i < Math.min(ME_SPOTS.length, save.folds || 0); i++) { const [x, y, sd] = ME_SPOTS[i]; drawMesh(drawTexCache['me' + i] || (drawTexCache['me' + i] = TX.pencilPersonTex(100 + i, true)), x, y, sd); }
}
let meURL = '';
function meDrawURL() { if (!meURL) { const t = TX.pencilPersonTex(7, true); meURL = t.image.toDataURL(); } return meURL; }

// 쪽지·열쇠
const noteMeshes = {};
for (const id in NOTE_SPOTS) { const [x, y] = NOTE_SPOTS[id]; const m = new THREE.Mesh(new THREE.PlaneGeometry(0.21, 0.28), std({ map: TX.paperTex(), roughness: 0.9, emissive: 0x2a2818, side: THREE.DoubleSide })); m.rotation.x = -Math.PI / 2; m.rotation.z = Math.random() * 3; m.position.set(x * S, 0.006, y * S); m.receiveShadow = true; scene.add(m); noteMeshes[id] = m; }
const keyObj = MD.keyModel(); scene.add(keyObj);
const npcModels = [];
const peItem = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.07, 0.38), std({ map: TX.tracksuitTex(), roughness: 0.8 })); peItem.position.set(PE_SPOT[0] * S, 0.45, (PE_SPOT[1] + 0.3) * S); peItem.rotation.y = 0.2; scene.add(peItem);
const broomObjs = BROOM_SPOTS.map(([x, y]) => { const b = MD.broom(); b.position.set(x * S, 0, y * S); b.rotation.y = Math.random() * 3; b.userData.x = x; b.userData.y = y; scene.add(b); return b; });
for (const n of NPCS) { // 1학년 4반 친구들
  const st = MD.makeStudent(n.o); if (n.big) st.scale.set(1.12, 1.03, 1.12);
  const pz = (n.y + 0.5 - 0.15) * S + 0.42; st.position.set((n.x + 0.5) * S, 0, pz); st.rotation.y = Math.PI; MD.sit(st); st.traverse((o) => { if (o.isMesh) o.castShadow = true; }); scene.add(st);
  npcModels.push({ model: st, px: n.x + 0.5, py: n.y + 0.85, name: n.name, lines: n.lines, i: 0 });
}

// ===== 층 (1층 = 학교, 그 아래로 백룸처럼 끝없이 이어지는 지하층) =====
const level1 = new THREE.Group(); for (const o of scene.children.slice()) if (!sceneBase.has(o)) level1.add(o); scene.add(level1);
const LV0 = { depth: 0, T, RM, LOCKERS, start: [7.5, 8.5], group: level1 };
const levels = {};
const rngOf = (seed) => { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
const bWallMat = std({ map: TX.backroomWallTex(), roughness: 0.9 }), bCarpet = std({ map: TX.carpetTex(), roughness: 0.95 }), redDoorMat = std({ map: TX.redDoorTex(), roughness: 0.6 });
function genLevel(depth) {
  if (levels[depth]) return levels[depth];
  const R = rngOf(depth * 7919 + 13);
  const T2 = new Uint8Array(W * H).fill(WALL), RM2 = new Uint8Array(W * H);
  const rooms = [];
  for (let k = 0; k < 400 && rooms.length < 14; k++) {
    const w = 4 + ((R() * 8) | 0), h = 3 + ((R() * 5) | 0), x = 1 + ((R() * (W - w - 2)) | 0), y = 1 + ((R() * (H - h - 2)) | 0);
    if (rooms.some((r) => x < r.x + r.w + 2 && x + w + 2 > r.x && y < r.y + r.h + 2 && y + h + 2 > r.y)) continue;
    rooms.push({ x, y, w, h });
  }
  rooms.forEach((r, i) => { r.type = i < 3 ? 1 : i === 3 || i === 7 ? 3 : 0; for (let y = r.y; y < r.y + r.h; y++) for (let x = r.x; x < r.x + r.w; x++) { T2[ix(x, y)] = FLOOR; RM2[ix(x, y)] = r.type; } });
  const ccx = (r) => r.x + (r.w >> 1), ccy = (r) => r.y + (r.h >> 1);
  const carve = (x, y) => { if (x < 1 || y < 1 || x >= W - 1 || y >= H - 1) return; const i = ix(x, y); if (T2[i] === WALL) { T2[i] = FLOOR; RM2[i] = 0; } };
  const corridor = (a, b) => {
    let x = ccx(a), y = ccy(a); const tx = ccx(b), ty = ccy(b), wd = R() < 0.5 ? 2 : 3;
    const sx = () => { while (x !== tx) { for (let k = 0; k < wd; k++) carve(x, y + k); x += Math.sign(tx - x); } };
    const sy = () => { while (y !== ty) { for (let k = 0; k < wd; k++) carve(x + k, y); y += Math.sign(ty - y); } };
    if (R() < 0.5) { sx(); sy(); } else { sy(); sx(); } for (let k = 0; k < wd; k++) for (let j = 0; j < wd; j++) carve(x + k, y + j);
  };
  for (let i = 1; i < rooms.length; i++) { let best = 0, bd = 1e9; for (let j = 0; j < i; j++) { const d = Math.hypot(ccx(rooms[i]) - ccx(rooms[j]), ccy(rooms[i]) - ccy(rooms[j])); if (d < bd) { bd = d; best = j; } } corridor(rooms[i], rooms[best]); }
  for (let k = 0; k < 4; k++) { const a = rooms[(R() * rooms.length) | 0], b = rooms[(R() * rooms.length) | 0]; if (a !== b) corridor(a, b); }
  for (const r of rooms) {
    if (r.type === 0 && r.w >= 7 && r.h >= 5) for (let y = r.y + 2; y < r.y + r.h - 2; y += 3) for (let x = r.x + 2; x < r.x + r.w - 2; x += 3) T2[ix(x, y)] = WALL; // 백룸 기둥
    if (r.type === 1 && r.w >= 6 && r.h >= 5) for (let y = r.y + 1; y < r.y + r.h - 1; y += 2) for (let x = r.x + 1; x < r.x + r.w - 1; x += 2) T2[ix(x, y)] = DESK;
  }
  const start = [rooms[0].x + (rooms[0].w >> 1) + 0.5, rooms[0].y + rooms[0].h - 0.5];
  const old = [T, RM]; T = T2; RM = RM2; // 거리 계산 동안만 잠깐 바꿔 둔다
  const dist = new Int32Array(W * H).fill(-1), q = [ix(rooms[0].x, rooms[0].y)]; dist[q[0]] = 0;
  for (let qi = 0; qi < q.length; qi++) { const c = q[qi], x = c % W, y = (c / W) | 0; for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const n = ix(x + dx, y + dy); if (solid(x + dx, y + dy) || dist[n] >= 0) continue; dist[n] = dist[c] + 1; q.push(n); } }
  const far = rooms.slice(1).filter((r) => r.type !== 1 && dist[ix(ccx(r), ccy(r))] > 0).sort((a, b) => dist[ix(ccx(b), ccy(b))] - dist[ix(ccx(a), ccy(a))]);
  const sr = far[0] || rooms[rooms.length - 1], dr = far[1] || rooms[1];
  const stair = [ccx(sr), ccy(sr)];
  for (let y = stair[1]; y <= stair[1] + 1; y++) for (let x = stair[0]; x <= stair[0] + 1; x++) if (x < sr.x + sr.w && y < sr.y + sr.h) T2[ix(x, y)] = STAIR;
  const door = [ccx(dr), dr.y]; // 방 북쪽 벽에 붙은 빨간 문
  const lockers = [];
  for (let k = 0; k < 400 && lockers.length < 7; k++) {
    const x = 2 + ((R() * (W - 4)) | 0), y = 2 + ((R() * (H - 4)) | 0);
    if (T2[ix(x, y)] !== FLOOR || RM2[ix(x, y)] !== 0) continue;
    const n = T2[ix(x, y - 1)] === WALL, s2 = T2[ix(x, y + 1)] === WALL;
    if (n === s2 || T2[ix(x - 1, y)] !== FLOOR || T2[ix(x + 1, y)] !== FLOOR) continue;
    const fy = n ? 1 : -1; if (T2[ix(x, y + fy)] !== FLOOR || T2[ix(x, y + 2 * fy)] !== FLOOR) continue;
    T2[ix(x, y)] = LOCKER; lockers.push([x, y, 0, fy]);
  }
  const spawn = []; for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (!solid(x, y) && RM2[ix(x, y)] === 0 && dist[ix(x, y)] > 12) spawn.push([x + 0.5, y + 0.5]);
  T = old[0]; RM = old[1];
  // ---- 모양 만들기
  const grp = new THREE.Group(); grp.visible = false; scene.add(grp);
  const wl = [], fl = { carpet: [], wood: [], woodDark: [] }, lampL = [];
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const t = T2[ix(x, y)], cx0 = (x + 0.5) * S, cz0 = (y + 0.5) * S;
    if (t === WALL) { let near = false; for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const xx = x + dx, yy = y + dy; if (xx >= 0 && yy >= 0 && xx < W && yy < H && T2[ix(xx, yy)] !== WALL) near = true; } if (near) wl.push(at(new THREE.BoxGeometry(S, WALL_H, S), cx0, WALL_H / 2, cz0)); continue; }
    if (t !== STAIR) { const pg = new THREE.PlaneGeometry(S, S); pg.rotateX(-Math.PI / 2); fl[RM2[ix(x, y)] === 1 ? 'wood' : RM2[ix(x, y)] === 3 ? 'woodDark' : 'carpet'].push(at(pg, cx0, 0, cz0)); }
    if (x % 3 === 1 && y % 3 === 1) lampL.push(at(new THREE.BoxGeometry(1.1, 0.05, 0.5), cx0, WALL_H - 0.03, cz0));
  }
  const mm = (list, mat, cast = true) => { if (!list.length) return null; const m = new THREE.Mesh(mergeGeometries(list), mat); m.receiveShadow = true; m.castShadow = cast; grp.add(m); return m; };
  mm(wl, bWallMat); mm(fl.carpet, bCarpet, false); mm(fl.wood, floorMats.wood, false); mm(fl.woodDark, floorMats.woodDark, false);
  const lampMat = std({ color: 0xeeeedd, emissive: 0xf4f0c8, emissiveIntensity: 1.2 }); mm(lampL, lampMat, false);
  { const ct = TX.ceilTex(); ct.repeat.set(W, H); const c = new THREE.Mesh(new THREE.PlaneGeometry(W * S, H * S), std({ map: ct, color: 0xd8d4b0, roughness: 0.95 })); c.rotation.x = Math.PI / 2; c.position.set(W * S / 2, WALL_H, H * S / 2); grp.add(c); }
  const stat = new THREE.Group(); grp.add(stat);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (T2[ix(x, y)] === DESK) { const d = MD.studentDesk(); d.position.set((x + 0.5) * S, 0, (y + 0.35) * S); if (R() < 0.25) { d.rotation.z = Math.PI / 2; d.position.y = 0.36; } d.rotation.y = (R() - 0.5) * 0.6; stat.add(d); }
  for (const [x, y, , fy] of lockers) { const l = MD.locker(); l.position.set((x + 0.5) * S, 0, (y + (fy > 0 ? 0.25 : 0.75)) * S); l.rotation.y = fy > 0 ? 0 : Math.PI; stat.add(l); }
  mergeStatic(stat, grp);
  { const sm = std({ map: TX.metalTex('#6c6a64'), roughness: 0.8 }), dk = std({ color: 0x050505, roughness: 1 }); // 아래로 내려가는 계단
    for (let i = 0; i < 7; i++) { const st = new THREE.Mesh(new THREE.BoxGeometry(2 * S, 0.18, 0.32), sm); st.position.set((stair[0] + 1) * S, -0.09 - 0.18 * i, (stair[1] + 2) * S - 0.16 - 0.32 * i); grp.add(st); }
    const pit = new THREE.Mesh(new THREE.BoxGeometry(2 * S, 0.02, 2 * S), dk); pit.position.set((stair[0] + 1) * S, -1.4, (stair[1] + 1) * S); grp.add(pit);
    const sg = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.23, 0.06), [0, 0, 0, 0, 0, 0].map((_, i) => i === 4 || i === 5 ? new THREE.MeshBasicMaterial({ map: TX.exitTex() }) : std({ color: 0xdddddd }))); sg.position.set((stair[0] + 1) * S, 2.55, (stair[1] + 1) * S); grp.add(sg);
    const gl = new THREE.PointLight(0x30ff80, 1.2, 4, 2); gl.position.set((stair[0] + 1) * S, 2.2, (stair[1] + 1) * S); grp.add(gl); }
  { const dm = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 2.1), redDoorMat); dm.position.set((door[0] + 0.5) * S, 1.05, door[1] * S + 0.012); grp.add(dm); const rl = new THREE.PointLight(0xff3020, 1.0, 4, 2); rl.position.set((door[0] + 0.5) * S, 2.2, door[1] * S + 0.6); grp.add(rl); }
  // 색연필 그림 (3반처럼 전멸한 방 벽)
  const dsp = []; for (const r of rooms.filter((r) => r.type === 3)) for (let x = r.x; x < r.x + r.w; x += 2) if (T2[ix(x, r.y - 1)] === WALL) dsp.push([x + 0.5, r.y, 0]);
  dsp.slice(0, 10).forEach(([x, y, sd], i) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(0.95, 1.5), std({ map: drawTexCache[i] || (drawTexCache[i] = TX.pencilPersonTex(i + 1, false)), transparent: true, roughness: 0.9, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1 })); m.position.set(x * S, 1.15, y * S + 0.012); m.rotation.z = (R() - 0.5) * 0.15; grp.add(m); });
  const fl2 = []; for (let i = 0; i < Math.min(5, lampL.length); i++) { const k = (R() * lampL.length) | 0; const p = lampL[k].boundingBox || (lampL[k].computeBoundingBox(), lampL[k].boundingBox); const c = new THREE.Vector3(); p.getCenter(c); const pl = new THREE.PointLight(0xfff2c0, 4, 10, 2); pl.position.set(c.x, WALL_H - 0.3, c.z); grp.add(pl); fl2.push({ p: pl, base: 4, t: R() * 4, l: null }); }
  const L = { depth, T: T2, RM: RM2, LOCKERS: lockers, start, group: grp, spawn, stair, door, flick: fl2 };
  levels[depth] = L; return L;
}
let level = 0, LV = LV0, transitioning = false;
function applyLevel(L) { T = L.T; RM = L.RM; LOCKERS = L.LOCKERS; level1.visible = L === LV0; for (const k in levels) levels[k].group.visible = levels[k] === L; LV = L; level = L.depth; scene.fog.color.set(level ? 0x14140c : 0x0a0b0d); }
const floorName = (d) => d === 0 ? '1층' : '지하 ' + d + '층';
function descend() {
  if (transitioning) return; transitioning = true; playerSteps(0); monitorSteps(null);
  $('fade').classList.add('show'); noise(1.2, 0.5, 150, 0, 1);
  setTimeout(() => {
    const L = genLevel(level + 1); applyLevel(L);
    save.deep = Math.max(save.deep || 0, level); persist();
    reset(true); $('floorBig').textContent = floorName(level); $('floorBig').classList.add('show');
    setTimeout(() => { $('fade').classList.remove('show'); transitioning = false; }, 400);
    setTimeout(() => $('floorBig').classList.remove('show'), 2600);
  }, 700);
}

// ===== 입력 =====
const keys = {};
let yaw = 0, pitch = 0;
addEventListener('keydown', (e) => { const k = e.key.toLowerCase(); keys[k] = true; if (k === 'c') toggleSneak(); if (k === 'e') hideAct(); if (k === 'f' || k === 'q') throwItem(); });
addEventListener('keyup', (e) => { keys[e.key.toLowerCase()] = false; });
const joy = { id: null, ox: 0, oy: 0, x: 0, y: 0 }, looks = new Map();
cv.addEventListener('pointerdown', (e) => {
  audioInit();
  if (e.pointerType === 'mouse') { if (started && !anyModal() && !document.pointerLockElement && cv.requestPointerLock) cv.requestPointerLock(); return; }
  if (joy.id === null && e.clientX < innerWidth * 0.45) { joy.id = e.pointerId; joy.ox = e.clientX; joy.oy = e.clientY; joy.x = joy.y = 0; }
  else looks.set(e.pointerId, { x: e.clientX, y: e.clientY });
  cv.setPointerCapture(e.pointerId);
});
cv.addEventListener('pointermove', (e) => {
  if (e.pointerType === 'mouse') { if (document.pointerLockElement === cv) look(e.movementX * 0.0024, e.movementY * 0.0024); return; }
  if (e.pointerId === joy.id) { let dx = e.clientX - joy.ox, dy = e.clientY - joy.oy; const d = Math.hypot(dx, dy), m = 55; if (d > m) { dx *= m / d; dy *= m / d; } joy.x = dx / m; joy.y = dy / m; return; }
  const l = looks.get(e.pointerId); if (l) { look((e.clientX - l.x) * 0.0055, (e.clientY - l.y) * 0.0055); l.x = e.clientX; l.y = e.clientY; }
});
const pend = (e) => { if (e.pointerId === joy.id) { joy.id = null; joy.x = joy.y = 0; } looks.delete(e.pointerId); };
cv.addEventListener('pointerup', pend); cv.addEventListener('pointercancel', pend);
function look(dx, dy) { if (!started || !alive || hidden) return; yaw -= dx; pitch = Math.max(-1.2, Math.min(1.2, pitch - dy)); }
let runHeld = false, sneak = false;
const runB = $('runB'), sneakB = $('sneakB'), hideB = $('hideB');
runB.addEventListener('pointerdown', (e) => { e.preventDefault(); audioInit(); runHeld = true; runB.classList.add('on'); runB.setPointerCapture(e.pointerId); });
const runUp = () => { runHeld = false; runB.classList.remove('on'); };
runB.addEventListener('pointerup', runUp); runB.addEventListener('pointercancel', runUp);
function toggleSneak() { sneak = !sneak; sneakB.classList.toggle('on', sneak); }
sneakB.addEventListener('pointerdown', (e) => { e.preventDefault(); audioInit(); toggleSneak(); });
hideB.addEventListener('pointerdown', (e) => { e.preventDefault(); hideAct(); });
$('throwB').addEventListener('pointerdown', (e) => { e.preventDefault(); throwItem(); });
let toastT = 0;
function toast(s, ms = 2400) { const t = $('toast'); t.innerHTML = s; t.style.opacity = 1; clearTimeout(toastT); toastT = setTimeout(() => (t.style.opacity = 0), ms); }
const modal = (id, on) => { $(id).classList.toggle('show', on); if (on && document.pointerLockElement) document.exitPointerLock(); };
const anyModal = () => document.querySelector('.modal.show');

// ===== 소리 =====
let AC = null, master = null, stepBuf = null, stepSrc = null, stepGain = null, stepPan = null, beatT = 0;
function audioInit() {
  if (AC) { if (AC.state === 'suspended') AC.resume(); return; }
  try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
  master = AC.createGain(); master.gain.value = 0.85; master.connect(AC.destination);
  const o = AC.createOscillator(), g = AC.createGain(), lfo = AC.createOscillator(), lg = AC.createGain(), f = AC.createBiquadFilter();
  o.type = 'sawtooth'; o.frequency.value = 46; g.gain.value = 0.03; lfo.frequency.value = 0.13; lg.gain.value = 5; f.type = 'lowpass'; f.frequency.value = 170;
  lfo.connect(lg); lg.connect(o.frequency); o.connect(f); f.connect(g); g.connect(master); o.start(); lfo.start();
  // 복도 감독 발소리 (보내준 「발걸음」 소리)
  fetch('steps.mp3').then((r) => r.arrayBuffer()).then((b) => AC.decodeAudioData(b)).then((buf) => { stepBuf = buf; }).catch(() => {});
}
function tone(freq, t0, dur, vol = 0.2, type = 'sine') { if (!AC) return; const o = AC.createOscillator(), g = AC.createGain(); o.type = type; o.frequency.value = freq; g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(vol, t0 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur); o.connect(g); g.connect(master); o.start(t0); o.stop(t0 + dur + 0.05); }
function bellSound(det = 1) { if (!AC) return; const t = AC.currentTime; [659, 523, 587, 392, 392, 587, 659, 523].forEach((f, i) => { tone(f * det, t + i * 0.42, 1.5, 0.15); tone(f * 2 * det, t + i * 0.42, 0.6, 0.03); tone(f * det * 1.01, t + i * 0.42, 1.5, 0.05); }); }
function dingSound() { if (!AC) return; const t = AC.currentTime; tone(880, t, 0.8, 0.12); tone(880, t + 0.35, 0.8, 0.12); }
function noise(dur, vol, freq = 1200, pan = 0, q = 1) {
  if (!AC) return; const n = AC.createBufferSource(), b = AC.createBuffer(1, Math.max(1, AC.sampleRate * dur), AC.sampleRate), d = b.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
  n.buffer = b; const f = AC.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q; const g = AC.createGain(); g.gain.value = vol;
  let last = g; n.connect(f); f.connect(g); if (AC.createStereoPanner) { const p = AC.createStereoPanner(); p.pan.value = pan; g.connect(p); last = p; } last.connect(master); n.start();
}
const footstep = (loud) => noise(0.07, loud, 350 + Math.random() * 200, 0, 2);
function heartbeat() { if (!AC) return; const t = AC.currentTime; tone(55, t, 0.18, 0.35); tone(50, t + 0.22, 0.2, 0.28); }
function scream() { if (!AC) return; const t = AC.currentTime; noise(1.3, 1.3, 1800, 0, 0.7); const o = AC.createOscillator(), g = AC.createGain(); o.type = 'sawtooth'; o.frequency.setValueAtTime(950, t); o.frequency.exponentialRampToValueAtTime(130, t + 1.1); g.gain.setValueAtTime(0.42, t); g.gain.exponentialRampToValueAtTime(0.001, t + 1.2); o.connect(g); g.connect(master); o.start(t); o.stop(t + 1.25); }
const glassBreak = () => { noise(0.9, 1.0, 5000, 0, 0.5); noise(0.4, 0.6, 2500, 0, 1); };
// 내 발소리: 보내준 「발걸음」 소리 (걷기 1, 달리기 2, 살금 0.5, 멈춤 0)
let pMode = -1;
function playerSteps(mode) {
  if (!AC || !stepBuf) return;
  if (!stepSrc) { stepSrc = AC.createBufferSource(); stepSrc.buffer = stepBuf; stepSrc.loop = true; stepGain = AC.createGain(); stepGain.gain.value = 0; stepSrc.connect(stepGain); stepGain.connect(master); stepSrc.start(); }
  if (mode === pMode) return; pMode = mode;
  const vol = mode === 2 ? 1.0 : mode === 1 ? 0.6 : mode === 0.5 ? 0.12 : 0, rate = mode === 2 ? 1.75 : mode === 1 ? 1.15 : 0.7;
  stepGain.gain.setTargetAtTime(vol, AC.currentTime, mode ? 0.04 : 0.08);
  if (mode) stepSrc.playbackRate.setTargetAtTime(rate, AC.currentTime, 0.05);
}
// 복도 감독 발소리: 또각또각 구두 소리 (거리·방향에 따라)
let heelT = 0;
function monitorSteps(m) {
  if (!m) { heelT = 0; return; }
  heelT -= 1 / 60; if (heelT > 0) return; heelT = 0.55;
  const d = Math.hypot(m.x - P.x, m.y - P.y), v = Math.max(0.03, Math.min(1.2, 2.2 / (1 + d * 0.3))), pan = panOf(m.x, m.y);
  noise(0.05, v, 3200, pan, 3); noise(0.09, v * 0.7, 260, pan, 2);
}
function panOf(x, y) { const dx = x - P.x, dy = y - P.y; const rx = Math.cos(yaw), ry = -Math.sin(yaw); const d = Math.hypot(dx, dy) || 1; return Math.max(-1, Math.min(1, (dx * rx + dy * ry) / d)); }

// ===== 게임 상태 =====
let P, mons, phase, phaseT, period, runTime, hidden, hideT, alive, started = false, killer = null, deadT = 0, hasKey = false, keyPos, stepPh = 0, eye = 1.6;
let mir = { st: 'normal', t: 0, hist: [], pose: null, cd: 0, chaser: null };
let hasPE = false, throws = 1, thrown = [], peMon = null, gymT = 0, whistled = false, talkT = 0, lastTalk = null;
const wcOk = (x, y) => !solid(x, y) && (rr(x, y) === 2 || (x === 18 && y === 10)); // 도플갱어는 화장실 밖으로 못 나온다
const gymOk = (x, y) => !solid(x, y) && rr(x, y) === 6;
const breakLen = (p) => Math.max(35, 62 - p * 5), CLASS_LEN = 22;
const trailGeo = new THREE.CylinderGeometry(0.2, 0.23, 1, 10, 1, true);
function addMon(kind, x, y) {
  const model = kind === 'doll' ? MD.makeGiantHand() : kind === 'monitor' ? MD.makeTextbookGirl() : kind === 'pe' ? MD.makePE() : kind === 'ball' ? MD.makeBall((Math.random() * 3) | 0) : MD.makeStudent();
  if (kind === 'mirror') MD.setGrin(model, true);
  model.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  scene.add(model);
  const m = { kind, x, y, path: [], pathT: 0, state: 'wander', alertT: 0, target: null, rustleT: 0, model, life: 13, fx: 0, fy: 1 };
  if (kind === 'doll') { // 손 뒤로 길게 끌려오는 팔
    m.trailG = new THREE.Group(); scene.add(m.trailG); m.trail = [];
    for (let i = 0; i < 26; i++) { const c = new THREE.Mesh(trailGeo, model.userData.skin); c.castShadow = true; c.visible = false; m.trailG.add(c); }
  }
  mons.push(m); return m;
}
function removeMon(m) { scene.remove(m.model); if (m.trailG) scene.remove(m.trailG); mons = mons.filter((o) => o !== m); }
function farSpawn() { const c = LV.spawn; let best = c[0], bd = -1; for (let i = 0; i < 40; i++) { const p = c[(Math.random() * c.length) | 0]; const d = Math.hypot(p[0] - P.x, p[1] - P.y); if (d > bd) { bd = d; best = p; } } return best; }
function reset() {
  if (mons) for (const m of mons.slice()) removeMon(m);
  P = { x: LV.start[0], y: LV.start[1] }; yaw = 0; pitch = 0;
  mons = [];
  phase = 'break'; period = 1; phaseT = breakLen(1); hidden = null; hideT = 0; alive = true; killer = null; deadT = 0;
  for (const p of thrown) scene.remove(p.obj); thrown = []; noiseEvents = [];
  if (fold) endFold();
  $('vent').classList.remove('show');
  if (level === 0) {
    runTime = 0;
    addMon('doll', 30.5, 5.5); peMon = addMon('pe', PE_MON[0], PE_MON[1]); peMon.state = 'idle';
    stairsOpen = false; lockDoor.visible = true; lockDoor.position.y = 1.125; hasKey = false; hasPE = false; throws = 1; gymT = 0; whistled = false;
    keyPos = KEY_SPOT; keyObj.visible = true; keyObj.position.set(keyPos[0] * S, 0.008, keyPos[1] * S);
    peItem.visible = true; for (const b of broomObjs) b.visible = true;
    for (const id in noteMeshes) noteMeshes[id].visible = !save.notes.includes(id);
    mir = { st: 'normal', t: 0, hist: [], pose: null, cd: 0, chaser: null }; MD.setGrin(dop, false); crackMesh.visible = false; glass.visible = true;
    buildDrawings();
  } else {
    peMon = null; throws = Math.max(throws, 1 + (level > 2 ? 1 : 0));
    const n = Math.min(3, 1 + Math.floor(level / 2));
    for (let i = 0; i < n; i++) { const p = farSpawn(); addMon('doll', p[0], p[1]); }
  }
  updKey(); monitorSteps(null); playerSteps(0); $('floorChip').textContent = floorName(level);
}
function updKey() {
  $('keyChip').textContent = (hasKey ? '🔑 열쇠' : '🔑 없음') + ' · ' + (hasPE ? '👕 체육복' : '👔 교복');
  $('keyChip').classList.toggle('got', hasKey); $('throwB').innerHTML = '<span>' + (throws ? '📱' : '✋') + '</span>던지기 ' + throws;
  $('throwB').style.opacity = throws ? 1 : 0.4;
}

// ===== 길찾기 =====
function bfs(sx, sy, gx, gy, ok = monsterOk) {
  sx |= 0; sy |= 0; gx |= 0; gy |= 0;
  if (sx === gx && sy === gy) return [];
  const prev = new Int32Array(W * H).fill(-1), q = [ix(sx, sy)]; prev[ix(sx, sy)] = ix(sx, sy);
  for (let qi = 0; qi < q.length; qi++) {
    const c = q[qi], x = c % W, y = (c / W) | 0; if (x === gx && y === gy) break;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const nx = x + dx, ny = y + dy; if (!ok(nx, ny)) continue; const n = ix(nx, ny); if (prev[n] !== -1) continue; prev[n] = c; q.push(n); }
  }
  const g = ix(gx, gy); if (prev[g] === -1) return null;
  const path = []; for (let c = g; c !== ix(sx, sy); c = prev[c]) path.push([c % W + 0.5, ((c / W) | 0) + 0.5]);
  return path.reverse();
}
function randomSpot() { for (let i = 0; i < 200; i++) { const x = (Math.random() * W) | 0, y = (Math.random() * H) | 0; if (monsterOk(x, y) && (rr(x, y) === 0 || Math.random() < 0.5)) return [x, y]; } return [28, 12]; }
function follow(m, speed, dt) {
  if (!m.path || !m.path.length) return true;
  const [tx, ty] = m.path[0]; const dx = tx - m.x, dy = ty - m.y, d = Math.hypot(dx, dy), s = speed * dt;
  if (d <= s) { m.x = tx; m.y = ty; m.path.shift(); } else { m.x += dx / d * s; m.y += dy / d * s; m.fx = dx / d; m.fy = dy / d; }
  return !m.path.length;
}

// ===== 업데이트 =====
const inClass = () => rr(P.x | 0, P.y | 0) === 1;
function spawnMonitor() {
  if (mons.some((m) => m.kind === 'monitor')) return;
  const ends = level ? [farSpawn(), farSpawn()] : [[1.5, 12.5], [56.5, 12.5]].sort((a, b) => Math.hypot(b[0] - P.x, b[1] - P.y) - Math.hypot(a[0] - P.x, a[1] - P.y));
  const m = addMon('monitor', ends[0][0], ends[0][1]); m.state = 'patrol'; m.target = ends[1];
  toast('🔔 수업 시간이다. 복도에서 발소리가 들린다…', 2600);
}
function update(dt) {
  runTime += dt;
  const before = phaseT; phaseT -= dt;
  if (phase === 'break' && before > 10 && phaseT <= 10) { dingSound(); toast('⚠️ 곧 수업 종이 울려요! 교실로 돌아가세요'); }
  if (phaseT <= 0) {
    if (phase === 'break') { phase = 'class'; phaseT = CLASS_LEN; bellSound(); spawnMonitor(); }
    else {
      phase = 'break'; period++; phaseT = breakLen(period); bellSound(1.06);
      for (const m of mons.filter((m) => m.kind === 'monitor')) removeMon(m);
      monitorSteps(null);
      if (period === 3 && mons.filter((m) => m.kind === 'doll').length < 2) { addMon('doll', 20.5, 24.5); toast('🖍️ 복도 어딘가에서 벽이 접히는 소리가 하나 더 들린다…', 3000); }
      else toast(period + '교시 쉬는 시간');
    }
  }
  if (phase === 'class') spawnMonitor();

  // 이동
  let mx = joy.x, my = joy.y;
  if (keys.w || keys.arrowup) my = -1; if (keys.s || keys.arrowdown) my = 1; if (keys.a || keys.arrowleft) mx = -1; if (keys.d || keys.arrowright) mx = 1;
  const ml = Math.hypot(mx, my); let noiseR = 0;
  const running = (runHeld || keys.shift) && !sneak && my < 0.3;
  if (hidden) { hideT += dt; if (hideT > 8) { leaveHide(); toast('숨이 막혀서 뛰쳐나왔다!'); noiseR = 6; } }
  else if (ml > 0.15) {
    const fx = -Math.sin(yaw), fz = -Math.cos(yaw), rx = Math.cos(yaw), rz = -Math.sin(yaw);
    const sp = running ? 3.9 : sneak ? 1.1 : 2.2, k = sp * dt * Math.min(1, ml) / ml;
    moveP((fx * -my + rx * mx) * k, (fz * -my + rz * mx) * k);
    noiseR = running ? 7.5 : sneak ? 0.6 : 3;
    const prev = stepPh; stepPh += dt * (running ? 11 : sneak ? 4.5 : 7.5);
    if (!stepBuf && Math.floor(prev / Math.PI) !== Math.floor(stepPh / Math.PI)) footstep(running ? 0.55 : sneak ? 0.04 : 0.2);
    playerSteps(running ? 2 : sneak ? 0.5 : 1);
  }
  if (hidden || ml <= 0.15) playerSteps(0);
  P.noise = noiseR;

  // 쪽지·열쇠·계단
  if (level === 0) {
  for (const id in NOTE_SPOTS) if (noteMeshes[id].visible) { const [x, y] = NOTE_SPOTS[id]; if (Math.hypot(x - P.x, y - P.y) < 0.75) { noteMeshes[id].visible = false; if (!save.notes.includes(id)) { save.notes.push(id); persist(); } showNote(id); } }
  if (!hasKey && Math.hypot(keyPos[0] - P.x, keyPos[1] - P.y) < 0.75) { hasKey = true; keyObj.visible = false; updKey(); noise(0.4, 0.5, 4000, 0, 3); P.noise = 6; toast('🔑 지하 계단 열쇠를 주웠다! <br>찰랑— 소리가 울렸다…'); }
  if (!hasPE && peItem.visible && Math.hypot(PE_SPOT[0] - P.x, PE_SPOT[1] - P.y) < 0.9) { hasPE = true; peItem.visible = false; updKey(); toast('👕 분실물 상자에서 체육복을 꺼내 갈아입었다'); }
  for (const b of broomObjs) if (b.visible && Math.hypot(b.userData.x - P.x, b.userData.y - P.y) < 0.8) { b.visible = false; throws++; updKey(); toast('🧹 빗자루를 주웠다 (던지기 +1)', 1500); }
  if (!stairsOpen && Math.hypot(52.5 - P.x, 11.5 - P.y) < 1.3) {
    if (hasKey) { stairsOpen = true; noise(0.8, 0.6, 600, 0, 2); toast('철문이 열렸다. 아래로 내려가는 계단이다…'); }
    else toast('🔒 지하 계단 철문이 잠겨 있다. 열쇠가 필요하다', 1200);
  }
  if (stairsOpen && lockDoor.position.y < 3.4) lockDoor.position.y += dt * 1.5; // 문이 위로 들려 사라짐
  if (stairsOpen && lockDoor.position.y >= 3.4) lockDoor.visible = false;
  }
  if (tt(P.x | 0, P.y | 0) === STAIR) return descend();
  if (level && LV.door && Math.hypot(LV.door[0] + 0.5 - P.x, LV.door[1] + 0.45 - P.y) < 0.75) { toast('빨간 문을 열었다…'); return descend(); }

  // 사물함 버튼
  hideB.style.visibility = (hidden || nearLocker()) ? 'visible' : 'hidden';
  hideB.innerHTML = hidden ? '<span>🚪</span>나가기' : '<span>🚪</span>숨기';

  if (level === 0) updateMirror(dt);
  if (!alive) return;
  updateFold(dt);
  if (!alive) return;

  // 괴물
  let nearest = 99, monitor = null;
  for (const m of mons.slice()) {
    m.pathT -= dt;
    const d = Math.hypot(m.x - P.x, m.y - P.y);
    if (m.kind === 'doll') {
      if (fold && fold.m === m) { nearest = Math.min(nearest, d); continue; } // 접는 중에는 멈춰 있다
      const hear = (tx, ty) => { if (m.state !== 'hunt') { noise(0.5, 0.6, 700, panOf(m.x, m.y), 1.5); if (d < 18) speak('데칼코마니?', 0.2, 0.75, Math.max(0.25, 1 - d / 18)); } m.state = 'hunt'; m.alertT = 2.5; m.target = [tx | 0, ty | 0]; m.pathT = Math.min(m.pathT, 0); };
      for (const ev of noiseEvents) if (Math.hypot(ev.x - m.x, ev.y - m.y) < ev.r) hear(ev.x, ev.y);
      if (!hidden && P.noise > 0 && d < P.noise && rr(P.x | 0, P.y | 0) !== 1) hear(P.x, P.y);
      if (m.pathT <= 0 || !m.path || !m.path.length) {
        m.pathT = m.state === 'hunt' ? 0.3 : 3;
        if (m.state === 'wander' && (!m.path || !m.path.length)) m.target = randomSpot();
        if (m.target) m.path = bfs(m.x, m.y, m.target[0], m.target[1]) || [];
      }
      const done = follow(m, m.state === 'hunt' ? 3.3 : 1.0, dt);
      if (m.state === 'hunt') { m.alertT -= dt; if (done && !fold) startFold(m); else if (done && m.alertT <= 0) { m.state = 'wander'; m.path = []; } }
      m.rustleT -= dt; if (m.rustleT <= 0) { m.rustleT = 1.6 + Math.random() * 2; if (d < 14) noise(0.35, 0.3 * (1 - d / 14), 250 + Math.random() * 150, panOf(m.x, m.y), 3); } // 먹물이 끈적하게 번지는 소리
      if (!hidden && d < 0.7 && !fold) { m.target = [P.x, P.y]; startFold(m); }
    } else if (m.kind === 'monitor') { // 국어책 괴물: 수업 시간에 교실 밖에 있는 사람만 노린다
      monitor = m;
      const outside = !inClass();
      if (outside && m.state !== 'chase') { m.state = 'chase'; MD.setGrin(m.model, true); if (d < 30) speak('수업 시간에 돌아다녔어!!', 1.7, 1.1, 1); }
      if (!outside && m.state === 'chase') { m.state = 'patrol'; MD.setGrin(m.model, false); m.path = []; }
      if (m.state === 'chase') { if (m.pathT <= 0) { m.pathT = 0.25; const tx = hidden ? hidden[0] + hidden[2] : P.x, ty = hidden ? hidden[1] + hidden[3] : P.y; m.path = bfs(m.x, m.y, tx, ty) || []; } follow(m, 3.15, dt); }
      else { if (!m.path || !m.path.length) { m.target = level ? farSpawn() : m.x < 28 ? [56, 12] : [1, 12]; m.path = bfs(m.x, m.y, m.target[0], m.target[1]) || []; } follow(m, 1.1, dt); }
      if (m.state === 'chase' && d < (hidden ? 1.2 : 0.65)) return die('bell', m);
    } else if (m.kind === 'mirror') {
      m.life -= dt;
      if (m.pathT <= 0) { m.pathT = 0.2; m.path = hidden ? [] : bfs(m.x, m.y, P.x, P.y, wcOk) || []; if (!m.path.length && !hidden) { m.path = bfs(m.x, m.y, 18, 10, wcOk) || []; } }
      follow(m, 3.6, dt);
      if (m.life <= 0) { removeMon(m); mir.chaser = null; toast('그 애가… 사라졌다', 1800); continue; }
      if (!hidden && d < 0.6) return die('mirror', m);
    }
    else if (m.kind === 'pe') { // 체육 괴물: 체육관 밖으로는 나오지 않는다
      const inGym = rr(P.x | 0, P.y | 0) === 6;
      if (inGym) { m.fx = P.x - m.x; m.fy = P.y - m.y; const l = Math.hypot(m.fx, m.fy) || 1; m.fx /= l; m.fy /= l; }
      if (inGym && !hasPE) { gymT += dt; if (gymT > 1.0 && !whistled) { whistled = true; whistle(); toast('삑— 삐익—!', 1500); for (let i = 0; i < 3; i++) { const b = addMon('ball', 2.5 + i * 0.4, 23.5 + (i % 2)); b.state = 'chase'; } } }
      else if (inGym && hasPE && gymT === 0) { gymT = 0.01; toast('체육 선생님이 체육복을 보더니 고개를 돌렸다…', 2200); }
      if (!inGym) { gymT = 0; whistled = false; }
      continue;
    } else if (m.kind === 'ball') {
      if (rr(P.x | 0, P.y | 0) !== 6) { m.life -= dt * 4; if (m.life <= 0) { removeMon(m); continue; } }
      if (m.pathT <= 0) { m.pathT = 0.2; m.path = bfs(m.x, m.y, P.x, P.y, gymOk) || []; }
      const ox = m.x, oy = m.y; follow(m, 3.7, dt); m.roll = (m.roll || 0) + Math.hypot(m.x - ox, m.y - oy) * S / 0.24;
      m.rustleT -= dt; if (m.rustleT <= 0) { m.rustleT = 0.8 + Math.random(); noise(0.3, 0.4, 900 + Math.random() * 600, panOf(m.x, m.y), 6); }
      if (d < 0.55) return die('gym', peMon);
    }
    nearest = Math.min(nearest, d);
  }
  noiseEvents = noiseEvents.filter((e) => (e.t -= dt) > 0);
  updateThrown(dt);
  if (level === 0) updateTalk(dt);
  monitorSteps(monitor);
  beatT -= dt;
  if (nearest < 8 && beatT <= 0) { heartbeat(); beatT = 0.35 + nearest / 8 * 0.9; }
}
// ===== 소리 이벤트·말하기·던지기·대화 =====
let noiseEvents = [];
let speakT = 0;
function speak(text, pitch, rate, vol) {
  toast('「' + text + '」', 1600);
  if (!window.speechSynthesis || performance.now() - speakT < 1500) return; speakT = performance.now();
  try { const u = new SpeechSynthesisUtterance(text); u.lang = 'ko-KR'; u.pitch = pitch; u.rate = rate; u.volume = vol; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) {}
}
function whistle() { if (!AC) return; const t = AC.currentTime; for (const [a, b] of [[0, 0.35], [0.5, 1.2]]) { const o = AC.createOscillator(), g = AC.createGain(), l = AC.createOscillator(), lg = AC.createGain(); o.frequency.value = 2900; l.frequency.value = 38; lg.gain.value = 180; l.connect(lg); lg.connect(o.frequency); g.gain.setValueAtTime(0, t + a); g.gain.linearRampToValueAtTime(0.35, t + a + 0.03); g.gain.setValueAtTime(0.35, t + b - 0.05); g.gain.linearRampToValueAtTime(0, t + b); o.connect(g); g.connect(master); o.start(t + a); l.start(t + a); o.stop(t + b + 0.05); l.stop(t + b + 0.05); } }
function throwItem() {
  if (!started || !alive || anyModal() || hidden || throws <= 0) return;
  throws--; updKey(); audioInit();
  const fx = -Math.sin(yaw), fy = -Math.cos(yaw); let d = 0.5; while (d < 8) { d += 0.1; if (solid(Math.floor(P.x + fx * d), Math.floor(P.y + fy * d))) { d -= 0.3; break; } }
  const obj = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.015, 0.14), std({ color: 0x222, roughness: 0.3, metalness: 0.4 })); obj.castShadow = true; scene.add(obj);
  thrown.push({ obj, sx: P.x, sy: P.y, ex: P.x + fx * d, ey: P.y + fy * d, t: 0, dur: 0.25 + d * 0.06, landed: false });
  noise(0.15, 0.2, 500, 0, 2);
}
function updateThrown(dt) {
  for (const p of thrown) {
    if (p.landed) continue; p.t += dt; const k = Math.min(1, p.t / p.dur);
    p.obj.position.set((p.sx + (p.ex - p.sx) * k) * S, 1.4 * (1 - k) + Math.sin(k * Math.PI) * 0.8 + 0.01, (p.sy + (p.ey - p.sy) * k) * S); p.obj.rotation.x += dt * 12; p.obj.rotation.y += dt * 7;
    if (k >= 1) { p.landed = true; p.obj.rotation.set(0, Math.random() * 3, 0); p.obj.position.y = 0.01; noise(0.25, 0.9, 1800, panOf(p.ex, p.ey), 1.5); noise(0.2, 0.6, 400, panOf(p.ex, p.ey), 2); noiseEvents.push({ x: p.ex, y: p.ey, r: 14, t: 0.3 }); }
  }
}
let talkHideT = 0;
function updateTalk(dt) {
  talkHideT -= dt; if (talkHideT <= 0) $('talk').classList.remove('show');
  for (const n of npcModels) {
    const d = Math.hypot(n.px - P.x, n.py - P.y);
    const hd = n.model.userData.head, want = d < 3.5 ? Math.max(-1, Math.min(1, Math.atan2(n.px - P.x, n.py - P.y))) : 0; hd.rotation.y += (want - hd.rotation.y) * Math.min(1, dt * 3);
    if (d < 1.4 && lastTalk !== n) { lastTalk = n; const line = n.lines[n.i++ % n.lines.length]; $('talkN').textContent = n.name; $('talkB').textContent = line; $('talk').classList.add('show'); talkHideT = 5; }
  }
  if (lastTalk && Math.hypot(lastTalk.px - P.x, lastTalk.py - P.y) > 2.2) lastTalk = null;
}
// ===== 데칼코마니: 본체는 거대한 손. 바닥을 손가락으로 기어 다니고, 팔은 어둠 속까지 길게 이어진다 =====
const _v = new THREE.Vector3(), _u = new THREE.Vector3(0, 1, 0), _q = new THREE.Quaternion();
function placeDecal(m, md, dt) {
  const u = md.userData;
  if (fold && fold.m === m && fold.grip) { // 스케치북 모서리를 움켜쥔 상태
    md.position.copy(fold.grip); md.lookAt(fold.hingeMid); MD.curlHand(md, tAll, false, Math.min(1, fold.t * 3));
  } else {
    md.position.set(m.x * S, 0.3 + (m.state === 'hunt' ? Math.abs(Math.sin(tAll * 14)) * 0.2 : 0), m.y * S);
    md.rotation.set(0, Math.atan2(m.fx, m.fy), 0); MD.curlHand(md, tAll * (m.state === 'hunt' ? 2.2 : 0.8), true, 0);
  }
  // 팔: 지나온 길을 따라 이어진다
  const wrist = md.localToWorld(_v.set(0, 0.05, -0.8)).clone();
  const tr = m.trail;
  if (!tr.length || tr[0].distanceTo(wrist) > 0.5) { tr.unshift(wrist.clone()); if (tr.length > 27) tr.pop(); } else tr[0].copy(wrist);
  if (tr.length === 1) for (let i = 1; i < 6; i++) tr.push(wrist.clone().add(new THREE.Vector3(-Math.sin(md.rotation.y), 0.05 * i, -Math.cos(md.rotation.y)).multiplyScalar(0.4 * i)));
  m.trailG.children.forEach((c, i) => {
    const a = tr[i], b = tr[i + 1]; if (!a || !b) { c.visible = false; return; }
    const len = a.distanceTo(b); if (len < 0.01) { c.visible = false; return; }
    c.visible = true; c.position.copy(a).add(b).multiplyScalar(0.5); c.position.y = Math.max(c.position.y, 0.42 + i * 0.02);
    c.quaternion.setFromUnitVectors(_u, _v.copy(b).sub(a).normalize()); c.scale.set(1.9 + i * 0.03, len + 0.15, 1.9 + i * 0.03);
  });
}

// ===== 데칼코마니가 바닥을 스케치북처럼 움켜쥐고 접는다 =====
let fold = null;
const paperMat = std({ map: TX.sketchPaperTex(), roughness: 0.9 });
const pageRoot = new THREE.Group(); pageRoot.visible = false; scene.add(pageRoot);
const PAGE_N = 4, pagePivots = [], pageMeshes = [];
{ let parent = pageRoot; for (let i = 0; i < PAGE_N; i++) { const pv = new THREE.Group(); parent.add(pv); const ms = new THREE.Mesh(new THREE.BoxGeometry(1, 0.05, 1), [paperMat, paperMat, paperMat, paperMat, paperMat, paperMat]); ms.castShadow = ms.receiveShadow = true; pv.add(ms); pagePivots.push(pv); pageMeshes.push(ms); parent = pv; } }
const voidMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color: 0x020202 })); voidMesh.rotation.x = -Math.PI / 2; voidMesh.visible = false; scene.add(voidMesh);
function floorMatAt(x, y) { if (level) { const r = rr(x, y); return r === 1 ? floorMats.wood : r === 3 ? floorMats.woodDark : bCarpet; } return floorMats[floorKey(x, y)] || floorMats.vinyl; }
function startFold(m) {
  const tx = Math.floor(m.target ? m.target[0] : m.x), ty = Math.floor(m.target ? m.target[1] : m.y);
  const run = (dx, dy) => { let n = 0; while (n < 6 && !solid(tx + dx * (n + 1), ty + dy * (n + 1))) n++; return n; };
  const axisX = run(1, 0) + run(-1, 0) >= run(0, 1) + run(0, -1); // 복도가 뻗은 방향
  let a0, a1; // 복도 폭 (가로지르는 칸 범위)
  if (axisX) { a0 = ty - run(0, -1); a1 = ty + run(0, 1); } else { a0 = tx - run(-1, 0); a1 = tx + run(1, 0); }
  if (a1 - a0 > 4) { const c = axisX ? ty : tx; a0 = Math.max(a0, c - 2); a1 = Math.min(a1, c + 2); }
  const L = 3.4, c = (axisX ? tx : ty) + 0.5, sgn = Math.random() < 0.5 ? 1 : -1;
  const hinge = c - sgn * L / 2, crossMid = (a0 + a1 + 1) / 2, wd = (a1 - a0 + 1) * S, seg = L * S / PAGE_N;
  // 복도를 가로지르는 선을 축으로, 바닥이 스케치북 한 장처럼 들려 올라와 덮친다
  if (axisX) { pageRoot.position.set(hinge * S, 0.03, crossMid * S); pageRoot.rotation.set(0, sgn * Math.PI / 2, 0); }
  else { pageRoot.position.set(crossMid * S, 0.03, hinge * S); pageRoot.rotation.set(0, sgn > 0 ? 0 : Math.PI, 0); }
  pageRoot.visible = true;
  const top = floorMatAt(tx, ty);
  pagePivots.forEach((pv, i) => { pv.position.set(0, 0, i ? seg : 0); pv.rotation.set(0, 0, 0); });
  pageMeshes.forEach((ms) => { ms.scale.set(wd, 1, seg); ms.position.set(0, 0, seg / 2); ms.material[2] = top; });
  voidMesh.scale.set(axisX ? L * S : wd, axisX ? wd : L * S, 1); voidMesh.visible = false;
  voidMesh.position.set(axisX ? c * S : crossMid * S, 0.004, axisX ? crossMid * S : c * S); voidMesh.rotation.set(-Math.PI / 2, 0, 0);
  const hingeMid = axisX ? new THREE.Vector3(hinge * S, 0.4, crossMid * S) : new THREE.Vector3(crossMid * S, 0.4, hinge * S);
  fold = { m, t: 0, killed: false, axisX, a0, a1, c, L, x: tx + 0.5, y: ty + 0.5, hingeMid, grip: null, start: m.model.position.clone() };
  speak('데칼코마니?', 0.2, 0.75, 1);
}
function endFold() { pageRoot.visible = false; voidMesh.visible = false; if (fold) { const m = fold.m; m.state = 'wander'; m.path = []; m.alertT = 0; m.target = null; } fold = null; }
function updateFold(dt) {
  if (!fold) return;
  const f = fold; f.t += dt; const t = f.t, near = Math.hypot(f.x - P.x, f.y - P.y);
  // 접는 각도: 0.45초까지 손이 모서리를 잡고, 0.45~0.8초에 확 접고, 1.6초부터 펼친다
  const k = t < 0.45 ? 0 : t < 0.8 ? (t - 0.45) / 0.35 : t < 1.6 ? 1 : t < 2.3 ? 1 - (t - 1.6) / 0.7 : 0;
  const e = k * k * (3 - 2 * k), A = e * 2.3, share = [0.42, 0.25, 0.18, 0.15];
  pagePivots.forEach((pv, i) => { pv.rotation.x = -A * share[i] - (t < 0.45 ? Math.sin(t * 60) * 0.015 : 0); });
  voidMesh.visible = A > 0.08;
  const last = pagePivots[PAGE_N - 1]; f.grip = last.localToWorld(new THREE.Vector3(0, 0.12, pageMeshes[0].scale.z));
  if (t < 0.45) { const g0 = f.grip.clone(); f.grip = f.start.clone().lerp(g0, Math.min(1, t / 0.3)); }
  if (t > 0.3 && t - dt <= 0.3) { noise(0.25, 1.3, 140, panOf(f.x, f.y), 1.2); noise(0.15, 0.8, 2200, panOf(f.x, f.y), 1); if (near < 14) { tak(); shakeT = 0.25; } } // 탁!
  if (t > 0.45 && t - dt <= 0.45) { noise(0.7, 0.9, 600, panOf(f.x, f.y), 0.5); noise(0.5, 0.6, 3500, panOf(f.x, f.y), 0.7); }
  if (!f.killed && A > 1.0) {
    f.killed = true; shakeT = near < 10 ? 0.4 : 0;
    const across = f.axisX ? P.y : P.x, alongP = f.axisX ? P.x : P.y;
    if (!hidden && across > f.a0 - 0.2 && across < f.a1 + 1.2 && Math.abs(alongP - f.c) < f.L / 2 + 0.3) { die('run', null); return; }
  }
  if (t > 2.35) endFold();
}
function tak() { const el = $('tak'); el.classList.remove('show'); void el.offsetWidth; el.classList.add('show'); }
let shakeT = 0;
function moveP(dx, dy) {
  const r = 0.28;
  const hit = (x, y) => solid(Math.floor(x - r), Math.floor(y - r)) || solid(Math.floor(x + r), Math.floor(y - r)) || solid(Math.floor(x - r), Math.floor(y + r)) || solid(Math.floor(x + r), Math.floor(y + r)) || (rr(x | 0, y | 0) === 2 && y < 1.75 && x > 15.9 && x < 22.1);
  if (!hit(P.x + dx, P.y)) P.x += dx;
  if (!hit(P.x, P.y + dy)) P.y += dy;
}
function nearLocker() { for (const l of LOCKERS) if (Math.hypot(l[0] + 0.5 + l[2] * 0.6 - P.x, l[1] + 0.5 + l[3] * 0.6 - P.y) < 1.0) return l; return null; }
function hideAct() {
  if (!alive || anyModal() || !started) return;
  if (hidden) return leaveHide();
  const l = nearLocker(); if (!l) return;
  hidden = l; hideT = 0; P.back = [P.x, P.y, yaw]; P.x = l[0] + 0.5 - l[2] * 0.25; P.y = l[1] + 0.5 - l[3] * 0.25; yaw = Math.atan2(-l[2], -l[3]); pitch = 0; noise(0.15, 0.35, 300);
  $('vent').classList.add('show');
}
function leaveHide() { if (!hidden) return; P.x = P.back[0]; P.y = P.back[1]; hidden = null; noise(0.15, 0.35, 300); $('vent').classList.remove('show'); }

// 거울: 처음엔 나를 따라 하다가 → 늦게 따라 하고 → 멈춰서 나를 바라보다가 → 갑자기 웃고 → 깨고 뛰쳐나온다
function updateMirror(dt) {
  const inWC = rr(P.x | 0, P.y | 0) === 2 || (P.x > 15 && P.x < 23 && P.y < 11 && P.y > 9.5);
  const fz = -Math.cos(yaw), looking = rr(P.x | 0, P.y | 0) === 2 && P.y < 7 && fz < -0.6 && Math.abs(pitch) < 0.55 && !hidden;
  mir.hist.push({ x: P.x, y: P.y, yaw, eye }); if (mir.hist.length > 90) mir.hist.shift();
  if (mir.st === 'broken') { mir.cd -= dt; dop.visible = false; if (mir.cd <= 0 && !inWC) { mir.st = 'normal'; mir.t = 0; crackMesh.visible = false; MD.setGrin(dop, false); } return; }
  dop.visible = inWC;
  if (mir.st === 'normal' || mir.st === 'lag') {
    mir.t = looking ? mir.t + dt : Math.max(0, mir.t - dt * 1.5);
    mir.st = mir.t > 1.3 ? 'lag' : 'normal';
    const pose = mir.st === 'lag' ? mir.hist[Math.max(0, mir.hist.length - 1 - 24)] : mir.hist[mir.hist.length - 1];
    mir.pose = pose;
    if (mir.t > 2.7) { mir.st = 'stare'; mir.t = 0; }
  } else { mir.t += dt; }
  const pz = mir.pose;
  dop.position.set(pz.x * S, 0, (2 - pz.y) * S); dop.rotation.y = -pz.yaw;
  const head = dop.userData.head;
  if (mir.st === 'stare' || mir.st === 'grin') {
    const tgt = new THREE.Vector3(); camera.getWorldPosition(tgt);
    head.lookAt(tgt); if (mir.st === 'grin') head.rotateZ(Math.sin(mir.t * 3) * 0.08 + 0.25);
    if (mir.st === 'stare' && mir.t > 0.9) { mir.st = 'grin'; mir.t = 0; MD.setGrin(dop, true); noise(0.6, 0.25, 900, 0, 4); }
    else if (mir.st === 'grin' && mir.t > 0.9) {
      mir.st = 'broken'; mir.cd = 45; crackMesh.visible = true; glassBreak(); dop.visible = false;
      const m = addMon('mirror', Math.min(21.5, Math.max(16.5, pz.x)), 1.9); mir.chaser = m;
      toast('거울이 깨졌다! 도망쳐!', 2200);
    }
  } else head.rotation.set(-pitch * 0.6, 0, 0);
}
function die(rule, m) {
  alive = false; killer = { rule, m }; deadT = 0; $('toast').style.opacity = 0; scream(); if (navigator.vibrate) navigator.vibrate([200, 80, 300]);
  if (hidden) leaveHide(); monitorSteps(null);
  const isNew = !save.rules.includes(rule); if (isNew) save.rules.push(rule); save.deaths++; if (rule === 'run') save.folds = (save.folds || 0) + 1; persist(); playerSteps(0);
  if (rule === 'run') setTimeout(() => { $('drawShow').style.backgroundImage = 'url(' + meDrawURL() + ')'; $('drawShow').classList.add('show'); }, 450);
  setTimeout(() => { $('deadWhy').textContent = RULES[rule].why; $('deadRule').textContent = '📓 ' + RULES[rule].text; $('deadNew').textContent = isNew ? '새 규칙이 수첩에 적혔다.' : '이미 알고 있던 규칙이다…'; modal('dead', true); }, 1500);
}
function win() {
  alive = false; killer = null; save.clears++; const t = Math.round(runTime); if (!save.best || t < save.best) save.best = t; persist(); monitorSteps(null);
  $('winB').innerHTML = '탈출 시간 <b>' + fmt(t) + '</b> · ' + period + '교시까지 버팀<br>지금까지 죽은 횟수 ' + save.deaths + '번';
  modal('win', true);
}
const fmt = (s) => Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
function showNote(id) { $('noteT').textContent = NOTES[id].t; $('noteB').textContent = NOTES[id].b; modal('note', true); }

// ===== 화면 갱신 =====
let tAll = 0, lastT = performance.now(), lowQ = false, qN = 0, qT = 0;
function frame() {
  const nowT = performance.now(), dt = Math.min(0.05, (nowT - lastT) / 1000); lastT = nowT; tAll += dt;
  if (started && alive && !anyModal()) update(dt);
  if (started && !alive) deadT += dt;
  if (P) {
    const targetEye = hidden ? 1.55 : sneak ? 1.12 : 1.6; eye += (targetEye - eye) * Math.min(1, dt * 8);
    const moving = Math.hypot(joy.x, joy.y) > 0.15 || keys.w || keys.a || keys.s || keys.d || keys.arrowup || keys.arrowdown;
    const bob = moving && !hidden ? Math.sin(stepPh * 2) * 0.025 : 0;
    if (shakeT > 0) shakeT -= dt;
    const sh = shakeT > 0 ? (Math.random() - 0.5) * 0.05 : 0;
    camera.position.set(P.x * S + sh, eye + bob + sh, P.y * S);
    camera.rotation.set(0, 0, 0); camera.rotateY(yaw); camera.rotateX(pitch);
    flashModel.position.y = -0.2 + bob * 0.6; flashModel.position.x = 0.12 + (moving ? Math.cos(stepPh) * 0.008 : 0);
    flash.intensity = hidden ? 0 : 30 * (Math.random() < 0.004 ? 0.2 : 1);
    flashModel.visible = !hidden;
    // 괴물 모델 위치·애니메이션
    for (const m of mons) {
      const md = m.model; md.position.set(m.x * S, 0, m.y * S);
      const tr = Math.atan2(m.fx, m.fy); md.rotation.y += (((tr - md.rotation.y + Math.PI * 3) % (Math.PI * 2)) - Math.PI) * Math.min(1, dt * 6);
      if (m.kind === 'doll') placeDecal(m, md, dt);
      else if (m.kind === 'monitor') { MD.animateWalk(md, tAll, m.state === 'chase' ? 11 : 4, m.state === 'chase' ? 0.7 : 0.35); md.userData.head.rotation.z = m.state === 'chase' ? 0.3 : Math.sin(tAll * 1.3) * 0.15; if (m.state === 'chase') for (const a of md.userData.arms) a.rotation.x = -1.2 + Math.sin(tAll * 11) * 0.3; }
      else if (m.kind === 'pe') { md.userData.head.rotation.z = Math.sin(tAll * 0.8) * 0.2; md.userData.arms[1].rotation.x = whistled ? -2.4 : -0.1; }
      else if (m.kind === 'ball') { md.userData.ball.rotation.set(0, 0, 0); md.rotation.y = Math.atan2(m.fx, m.fy); md.userData.ball.rotation.x = m.roll || 0; md.position.y = Math.abs(Math.sin(tAll * 9 + m.x)) * 0.25; }
      else { MD.animateWalk(md, tAll, 13, 0.8); md.userData.head.lookAt(camera.position); }
    }
    const baseFov = innerWidth < innerHeight ? 80 : 70, wantFov = (mir.st === 'stare' || mir.st === 'grin') && alive ? baseFov * 0.55 : baseFov;
    if (Math.abs(camera.fov - wantFov) > 0.1) { camera.fov += (wantFov - camera.fov) * Math.min(1, dt * (wantFov < camera.fov ? 1.2 : 5)); camera.updateProjectionMatrix(); }
    // 수업 중 교실 불
    const cl = phase === 'class' ? 1 : 0; classLight.intensity += (cl * 9 - classLight.intensity) * Math.min(1, dt * 3);
    for (const l of classLamps) l.material = cl ? lampOn : lampOff;
    if (level) for (const f of LV.flick) { f.t -= dt; if (f.t < 0) { f.on = !f.on; f.t = f.on ? 0.6 + Math.random() * 5 : 0.03 + Math.random() * 0.2; } f.p.intensity = f.on === false ? 0.3 : f.base; }
    for (const f of flicker) { f.t -= dt; if (f.t < 0) { f.on = !f.on; f.t = f.on ? 0.5 + Math.random() * 4 : 0.04 + Math.random() * 0.25; } f.p.intensity = f.on === false ? 0.2 : f.base; f.l.material.emissiveIntensity = f.on === false ? 0.1 : 1.4; }
    for (const id in noteMeshes) { const nm = noteMeshes[id]; if (nm.visible) nm.material.emissiveIntensity = 0.6 + Math.sin(tAll * 3) * 0.4; }
    keyObj.rotation.y += dt;
    // 점프스케어: 죽인 괴물이 눈앞으로
    if (killer && killer.m && deadT < 1.4) {
      const md = killer.m.model, f = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
      const fy = md.userData.faceY || 1.7, dist = 0.42 - deadT * 0.08;
      md.position.set(camera.position.x + f.x * dist, camera.position.y - fy + f.y * dist + (Math.random() - 0.5) * 0.02, camera.position.z + f.z * dist);
      md.rotation.set(0, yaw, 0); if (md.userData.head) md.userData.head.rotation.set(0, 0, 0.3);
      if (md.userData.head) { // 얼굴이 정확히 눈앞에 오도록 머리 위치 기준으로 맞춘다
        md.updateMatrixWorld(true); const hp = new THREE.Vector3(); md.userData.head.getWorldPosition(hp);
        const want = camera.position.clone().addScaledVector(f, killer.m.kind === 'monitor' ? 0.4 - deadT * 0.06 : 0.5 - deadT * 0.08);
        md.position.add(want.sub(hp));
      }
      flash.intensity = deadT < 0.1 ? 120 : 30;
    }
    // HUD
    const tot = phase === 'break' ? breakLen(period) : CLASS_LEN;
    $('bellTxt').textContent = period + '교시 · ' + (phase === 'break' ? '쉬는 시간' : '수업 시간');
    $('bell').querySelector('small').textContent = fmt(Math.max(0, phaseT)) + (phase === 'break' && phaseT < 10 ? '  ⚠️ 곧 종이 울려요' : '');
    const bar = $('bar').firstElementChild; bar.style.width = Math.max(0, phaseT / tot * 100) + '%'; bar.style.background = phase === 'class' ? '#c33' : phaseT < 10 ? '#fb3' : '#9ad';
    $('ventTxt').textContent = hidden ? '사물함 안 · 숨 참기 ' + Math.max(0, 8 - hideT).toFixed(1) + '초' : '';
    $('classTxt').style.opacity = phase === 'class' && inClass() && alive ? 1 : 0;
  }
  renderer.render(scene, camera);
  // 자동 화질: 폰이 버거워하면 그림자를 끄고 해상도를 낮춘다
  if (started && !lowQ) { qN++; qT += dt; if (qT > 4) { if (qN / qT < 24) { lowQ = true; renderer.setPixelRatio(1); renderer.shadowMap.enabled = false; flash.castShadow = false; scene.traverse((o) => { if (o.material) [].concat(o.material).forEach((m) => (m.needsUpdate = true)); }); resize(); } qN = 0; qT = 0; } }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

// ===== 메뉴 =====
function openBook() {
  if (!started) return;
  const r = Object.keys(RULES).map((k) => save.rules.includes(k) ? '<div class="rule">' + RULES[k].text + '</div>' : '<div class="rule" style="opacity:.35">??? (아직 모르는 규칙)</div>').join('');
  const n = Object.keys(NOTES).filter((k) => save.notes.includes(k)).map((k) => '<div class="rule n"><b>' + NOTES[k].t + '</b><br>' + NOTES[k].b.replace(/\n/g, '<br>') + '</div>').join('');
  $('bookB').innerHTML = '<p><b>알아낸 규칙</b> <span class="muted">(죽으면서 배운다)</span></p>' + r + '<p><b>주운 쪽지</b> ' + save.notes.length + '/' + Object.keys(NOTES).length + '</p>' + n + '<p class="muted">죽은 횟수 ' + save.deaths + ' · 가장 깊이 내려간 곳: ' + (save.deep ? '지하 ' + save.deep + '층' : '1층') + '</p>';
  $('acctLine').textContent = token ? '로그인: ' + (nick || '계정') + ' · 서버에 저장 중' : '게스트 · 이 기기에만 저장 중';
  $('logoutB').style.display = token ? '' : 'none';
  modal('book', true);
}
$('bookBtn').onclick = openBook;
$('bookOk').onclick = () => modal('book', false);
$('noteOk').onclick = () => modal('note', false);
$('logoutB').onclick = () => { token = ''; nick = ''; localStorage.removeItem('hor_tok'); modal('book', false); toast('로그아웃했어요 (게스트로 계속)'); };
$('retryB').onclick = () => { modal('dead', false); $('drawShow').classList.remove('show'); reset(); };
$('restartB').onclick = () => { modal('dead', false); $('drawShow').classList.remove('show'); applyLevel(LV0); reset(); };
$('againB').onclick = () => { modal('win', false); reset(); };
$('startB').onclick = () => { audioInit(); modal('intro', false); reset(); started = true; bellSound(1.06); };
function goIntro() { modal('login', false); modal('intro', true); }
$('guestB').onclick = () => { audioInit(); goIntro(); };
$('loginB').onclick = async () => {
  audioInit();
  const u = $('lu').value.trim(), p = $('lp').value, m = $('lmsg');
  if (!u || !p) { m.textContent = '아이디와 비밀번호를 넣어 주세요'; return; }
  $('loginB').disabled = true; m.textContent = '서버에 연결 중… (처음엔 1분쯤 걸릴 수 있어요)';
  try { const j = await api('/api/signin', { username: u, password: p }); token = j.session; localStorage.setItem('hor_tok', token); await loadServer(); m.textContent = ''; goIntro(); }
  catch (e) { m.textContent = e.status === 401 ? '아이디 또는 비밀번호가 틀렸어요' : e.status === 429 ? '잠시 후 다시 시도해 주세요' : '서버에 연결하지 못했어요. 게스트로 먼저 해 보세요'; }
  $('loginB').disabled = false;
};
if (token) { $('lmsg').textContent = '저장된 로그인으로 접속 중…'; loadServer().then(goIntro).catch((e) => { if (e.status === 401) { token = ''; localStorage.removeItem('hor_tok'); } $('lmsg').textContent = e.status === 401 ? '다시 로그인해 주세요' : '서버에 연결하지 못했어요. 게스트로 먼저 해 보세요'; }); }
document.title = GAME_TITLE;
// 테스트·디버그용
window.__g = { descend, get level() { return level; }, get LV() { return LV; }, get fold() { return fold; }, get noiseEvents() { return noiseEvents; }, throwItem, get npcs() { return npcModels; }, givePE() { hasPE = true; updKey(); }, get calls() { return renderer.info.render.calls; }, get P() { return P; }, get mons() { return mons; }, get mir() { return mir; }, set yaw(v) { yaw = v; }, set pitch(v) { pitch = v; }, get alive() { return alive; }, get save() { return save; }, setPhaseT(v) { phaseT = v; }, get phase() { return phase; }, get stairsOpen() { return stairsOpen; }, giveKey() { hasKey = true; updKey(); }, get keyPos() { return keyPos; } };
