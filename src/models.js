// 캐릭터·괴물·가구 모델 (기본 도형을 실제 비율로 조립)
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import * as TX from './tex.js';

const std = (o) => new THREE.MeshStandardMaterial(o);
const cache = {};
const once = (k, f) => cache[k] || (cache[k] = f());
export const M = {
  skin: () => once('skin', () => std({ color: 0xd8b5a2, roughness: 0.5 })),
  hair: () => once('hair', () => std({ color: 0x17110d, roughness: 0.55 })),
  shirt: () => once('shirt', () => std({ color: 0xeef0f2, roughness: 0.75 })),
  knit: () => once('knit', () => std({ map: TX.knitTex(), roughness: 0.95 })),
  pants: () => once('pants', () => std({ map: TX.checkPantsTex(), roughness: 0.85 })),
  shoeBlk: () => once('shoeBlk', () => std({ color: 0x141414, roughness: 0.9 })),
  shoeWht: () => once('shoeWht', () => std({ color: 0xe9e6df, roughness: 0.7 })),
  suit: () => once('suit', () => std({ color: 0x1b1c20, roughness: 0.8 })),
  paleSkin: () => once('pale', () => std({ color: 0xc9c3b8, roughness: 0.4 })),
  steel: () => once('steel', () => std({ color: 0x8b9096, metalness: 0.8, roughness: 0.35 })),
  darkSteel: () => once('dsteel', () => std({ map: TX.metalTex('#55595e'), metalness: 0.6, roughness: 0.5 })),
  laminate: () => once('lam', () => std({ map: TX.laminateTex(), roughness: 0.55 })),
  plywood: () => once('ply', () => std({ color: 0x9c7446, roughness: 0.7 })),
  locker: () => once('locker', () => std({ map: TX.lockerTex(), metalness: 0.5, roughness: 0.55 })),
  lockerSide: () => once('lockerSide', () => std({ map: TX.metalTex('#56626b'), metalness: 0.5, roughness: 0.55 })),
  ceramic: () => once('cer', () => std({ color: 0xe9ebea, roughness: 0.15, metalness: 0.05 })),
  partition: () => once('part', () => std({ color: 0x8c9aa0, roughness: 0.6 })),
  blackTop: () => once('btop', () => std({ color: 0x1a1a1a, roughness: 0.3 })),
  whiteCab: () => once('wcab', () => std({ color: 0xd8d6ce, roughness: 0.6 })),
  shelfWood: () => once('shelf', () => std({ color: 0x6e4a2c, roughness: 0.75 })),
  piano: () => once('piano', () => std({ color: 0x0b0b0b, roughness: 0.15, metalness: 0.1 })),
  plastic: () => once('plas', () => std({ color: 0x3d5a80, roughness: 0.5 })),
  canvas: () => once('canv', () => std({ color: 0xe8e4d8, roughness: 0.9 })),
  monitorBlk: () => once('mon', () => std({ color: 0x151515, roughness: 0.4 })),
  doorWood: () => once('door', () => std({ color: 0x7a5233, roughness: 0.7 })),
  paper: () => once('paper', () => std({ map: TX.paperTex(), roughness: 0.9, side: THREE.DoubleSide })),
  red: () => once('red', () => std({ color: 0xb01a1a, roughness: 0.4, metalness: 0.2 })),
};
const mesh = (geo, mat, x = 0, y = 0, z = 0, shadow = true) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = shadow; m.receiveShadow = true; return m; };
const box = (w, h, d, mat, x, y, z) => mesh(new THREE.BoxGeometry(w, h, d), mat, x, y, z);
const cyl = (rt, rb, h, mat, x, y, z, seg = 12) => mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat, x, y, z);
const capsule = (r, len, mat, x, y, z) => mesh(new THREE.CapsuleGeometry(r, len, 6, 12), mat, x, y, z);

// ===== 학생 (나·반 친구들). 참고 이미지: 흰 셔츠, 넥타이, 흰 줄 검정 니트 조끼, 회색 체크 바지, 흰 밑창 검정 운동화 =====
export function makeStudent(o = {}) {
  const g = new THREE.Group();
  const faceN = o.faceTex || TX.faceTex(false), faceG = TX.faceTex(true);
  const hairM = o.hairColor ? std({ color: o.hairColor, roughness: 0.55 }) : M.hair();
  const legs = [], knees = [];
  const lowerMat = o.girl ? once('skirt', () => std({ map: TX.checkPantsTex(), color: 0x7b86a8, roughness: 0.85 })) : M.pants();
  for (const s of [-1, 1]) {
    const hip = new THREE.Group(); hip.position.set(s * 0.1, 0.92, 0); g.add(hip);
    hip.add(capsule(o.girl ? 0.06 : 0.078, 0.3, o.girl ? M.skin() : M.pants(), 0, -0.22, 0));
    const knee = new THREE.Group(); knee.position.set(0, -0.44, 0); hip.add(knee);
    knee.add(capsule(o.girl ? 0.052 : 0.07, 0.3, o.girl ? once('sock', () => std({ color: 0xeeeeee, roughness: 0.8 })) : M.pants(), 0, -0.2, 0));
    const shoe = new THREE.Group(); shoe.position.set(0, -0.42, 0.04); knee.add(shoe);
    shoe.add(box(0.11, 0.035, 0.28, M.shoeWht(), 0, -0.02, 0)); shoe.add(box(0.1, 0.07, 0.24, M.shoeBlk(), 0, 0.03, -0.01)); shoe.add(box(0.1, 0.05, 0.05, M.shoeWht(), 0, 0.01, 0.12));
    legs.push(hip); knees.push(knee);
  }
  if (o.girl) { const sk = mesh(new THREE.CylinderGeometry(0.17, 0.27, 0.42, 20, 1, true), lowerMat, 0, 0.84, 0); sk.material.side = THREE.DoubleSide; g.add(sk); }
  else g.add(mesh(new RoundedBoxGeometry(0.36, 0.14, 0.22, 3, 0.06), M.pants(), 0, 0.95, 0));
  const torsoMats = [M.knit(), M.knit(), M.knit(), M.knit(), once('vestF', () => std({ map: TX.vestFrontTex(), roughness: 0.95 })), M.knit()];
  g.add(mesh(new RoundedBoxGeometry(o.girl ? 0.34 : 0.38, 0.5, 0.21, 4, 0.08), torsoMats, 0, 1.24, 0));
  g.add(mesh(new RoundedBoxGeometry(o.girl ? 0.36 : 0.4, 0.08, 0.2, 3, 0.04), M.shirt(), 0, 1.5, 0));
  const arms = [];
  for (const s of [-1, 1]) {
    const sh = new THREE.Group(); sh.position.set(s * (o.girl ? 0.215 : 0.235), 1.47, 0); sh.rotation.z = s * 0.06; g.add(sh);
    sh.add(capsule(0.052, 0.42, M.shirt(), 0, -0.26, 0)); sh.add(mesh(new THREE.SphereGeometry(0.045, 10, 8), M.skin(), 0, -0.55, 0));
    arms.push(sh);
  }
  g.add(cyl(0.05, 0.055, 0.1, M.skin(), 0, 1.56, 0));
  for (const s of [-1, 1]) { const c = box(0.08, 0.035, 0.06, M.shirt(), s * 0.05, 1.56, 0.04); c.rotation.z = s * -0.5; g.add(c); }
  const head = new THREE.Group(); head.position.set(0, 1.7, 0); g.add(head);
  const skull = mesh(new THREE.SphereGeometry(0.112, 24, 18), M.skin()); skull.scale.set(0.9, 1.12, 1); head.add(skull);
  const faceMat = std({ map: faceN, transparent: true, roughness: 0.6, depthWrite: false });
  const face = mesh(new THREE.SphereGeometry(0.1135, 24, 18, Math.PI / 2 - 0.95, 1.9, 0.62, 1.55), faceMat, 0, 0, 0, false); face.scale.copy(skull.scale); head.add(face);
  for (const s of [-1, 1]) head.add(mesh(new THREE.SphereGeometry(0.025, 8, 8), M.skin(), s * 0.1, -0.01, 0));
  const back = o.girl ? 2.45 : 1.75; // 여학생은 턱선까지 오는 단발
  const hair = mesh(new THREE.SphereGeometry(0.121, 28, 18, Math.PI / 2 + 1.05, Math.PI * 2 - 2.1, 0, back), hairM); hair.scale.set(o.girl ? 1.02 : 0.93, 1.13, 1.06); hair.position.set(0, 0.006, -0.004); head.add(hair);
  const fringe = mesh(new THREE.SphereGeometry(0.1215, 24, 12, Math.PI / 2 - 1.1, 2.2, 0, 1.02), hairM); fringe.scale.copy(hair.scale); fringe.position.set(0, 0.006, -0.002); head.add(fringe);
  if (o.glasses) { const gm = once('glass', () => std({ color: 0x111111, roughness: 0.3, metalness: 0.6 })); for (const sx of [-1, 1]) { const r = mesh(new THREE.TorusGeometry(0.026, 0.004, 6, 16), gm, sx * 0.042, 0.015, 0.108, false); head.add(r); } head.add(box(0.03, 0.004, 0.004, gm, 0, 0.018, 0.112)); }
  if (o.cast) { const cm = std({ color: 0xf2f2ee, roughness: 0.9 }); arms[0].add(capsule(0.07, 0.34, cm, 0, -0.38, 0)); const sl = box(0.06, 0.4, 0.02, std({ color: 0x5577aa, roughness: 0.8 }), 0.06, 1.3, 0.12); sl.rotation.z = 0.6; g.add(sl); }
  if (o.ribbon) { const rm = std({ color: 0xb01828, roughness: 0.5 }); for (const sx of [-1, 1]) { const b = box(0.07, 0.05, 0.02, rm, sx * 0.04, 0.02, -0.125); b.rotation.z = sx * 0.4; head.add(b); } }
  g.userData = { legs, knees, arms, head, faceMat, faceN, faceG, faceY: 1.7 };
  return g;
}
// 앉은 자세
export function sit(st) { const u = st.userData; for (const h of u.legs) h.rotation.x = -Math.PI / 2; for (const k of u.knees) k.rotation.x = Math.PI / 2; for (const a of u.arms) a.rotation.x = -0.9; st.position.y -= 0.44; }

// ===== 국어책 괴물: 국어 교과서 표지 속 단발머리 여학생. 팔이 아주 길고 손톱이 날카롭다 =====
export function makeTextbookGirl() {
  const g = makeStudent({ girl: true, ribbon: true, hairColor: 0x0d0a0a, faceTex: TX.textbookFaceTex(false) });
  const u = g.userData; u.faceG = TX.textbookFaceTex(true);
  g.scale.setScalar(1.12);
  for (const a of u.arms) { a.clear(); a.add(capsule(0.045, 1.05, M.shirt(), 0, -0.58, 0)); const hand = new THREE.Group(); hand.position.set(0, -1.18, 0); a.add(hand); hand.add(box(0.06, 0.08, 0.03, M.skin(), 0, 0, 0)); for (let f = 0; f < 4; f++) { hand.add(box(0.01, 0.09, 0.01, M.skin(), -0.022 + f * 0.015, -0.08, 0)); const n = mesh(new THREE.ConeGeometry(0.006, 0.09, 6), once('nail', () => std({ color: 0x2a2020, roughness: 0.3 })), -0.022 + f * 0.015, -0.17, 0); n.rotation.x = Math.PI; hand.add(n); } }
  u.faceY = 1.7 * 1.12;
  return g;
}

// ===== 데칼코마니: 본체는 거대한 손. 복도를 따라 긴 팔을 끌고 기어 다닌다 =====
export function makeGiantHand() {
  const g = new THREE.Group();
  const skin = once('handSkin', () => std({ map: TX.sketchSkinTex(), color: 0xd2dab4, roughness: 0.85 }));
  const palm = mesh(new RoundedBoxGeometry(0.85, 0.2, 0.8, 4, 0.08), skin, 0, 0, 0); g.add(palm);
  const fingers = [];
  const fx = [-0.31, -0.105, 0.105, 0.31], fl = [0.5, 0.62, 0.6, 0.45];
  for (let i = 0; i < 4; i++) {
    let parent = new THREE.Group(); parent.position.set(fx[i], 0, 0.38); g.add(parent); const base = parent;
    const segs = [];
    for (let k = 0; k < 3; k++) {
      const len = fl[i] * [0.45, 0.32, 0.25][k], r = 0.075 - k * 0.012;
      const seg = capsule(r, len, skin, 0, 0, len / 2); seg.rotation.x = Math.PI / 2; parent.add(seg);
      const nx = new THREE.Group(); nx.position.set(0, 0, len + r * 0.6); parent.add(nx); segs.push(parent); parent = nx;
    }
    const nail = mesh(new THREE.BoxGeometry(0.09, 0.02, 0.08), once('handNail', () => std({ color: 0x9a9a80, roughness: 0.4 })), 0, 0.05, -0.02); parent.add(nail);
    fingers.push({ base, segs });
  }
  const th = new THREE.Group(); th.position.set(0.45, 0, 0.02); th.rotation.y = 0.9; g.add(th);
  const t1 = capsule(0.085, 0.26, skin, 0, 0, 0.13); t1.rotation.x = Math.PI / 2; th.add(t1);
  const th2 = new THREE.Group(); th2.position.set(0, 0, 0.3); th.add(th2); const t2 = capsule(0.07, 0.2, skin, 0, 0, 0.1); t2.rotation.x = Math.PI / 2; th2.add(t2);
  const wrist = capsule(0.24, 0.5, skin, 0, 0.02, -0.55); wrist.rotation.x = Math.PI / 2; g.add(wrist);
  g.scale.setScalar(1.9); // 거대한 손
  g.userData = { fingers, thumb: [th, th2], skin, faceY: 0.15 };
  return g;
}
export function curlHand(h, t, walk, grip) { // walk: 손가락으로 걷기, grip: 움켜쥐기(0~1)
  h.userData.fingers.forEach((f, i) => {
    const w = walk ? Math.sin(t * 9 + i * 1.6) * 0.5 : 0;
    f.segs[0].rotation.x = -0.15 + w * 0.6 + grip * 0.9; f.segs[1].rotation.x = 0.2 + Math.max(0, w) * 0.5 + grip * 1.2; f.segs[2].rotation.x = 0.15 + grip * 1.0;
  });
  h.userData.thumb[0].rotation.x = grip * 0.8; h.userData.thumb[1].rotation.x = grip * 0.9;
}

// ===== 과학실 괴물: 상체는 삼각 플라스크, 하체는 알코올램프, 팔은 시험관, 다리는 삼발이, 실험실 가운 =====
export function makeScience() {
  const g = new THREE.Group();
  const glass = once('glassM', () => new THREE.MeshPhysicalMaterial({ color: 0xcfe6ee, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.35, side: THREE.DoubleSide }));
  const liquid = once('liqM', () => std({ color: 0x1f2a44, roughness: 0.1, transparent: true, opacity: 0.85 })); // 교복 색 액체
  const steel = M.steel();
  for (let i = 0; i < 3; i++) { const a = i / 3 * Math.PI * 2; const l = cyl(0.018, 0.018, 1.05, steel, Math.cos(a) * 0.22, 0.5, Math.sin(a) * 0.22, 8); l.rotation.set(Math.sin(a) * 0.25, 0, -Math.cos(a) * 0.25); g.add(l); }
  const ring = mesh(new THREE.TorusGeometry(0.2, 0.015, 8, 24), steel, 0, 1.0, 0); ring.rotation.x = Math.PI / 2; g.add(ring);
  g.add(mesh(new THREE.SphereGeometry(0.17, 20, 14), glass, 0, 1.15, 0)); g.add(mesh(new THREE.SphereGeometry(0.15, 16, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), std({ color: 0x8ab0d8, transparent: true, opacity: 0.7 }), 0, 1.15, 0)); // 알코올램프
  g.add(cyl(0.03, 0.03, 0.08, std({ color: 0x777 }), 0, 1.33, 0));
  const flame = mesh(new THREE.ConeGeometry(0.05, 0.22, 12), new THREE.MeshBasicMaterial({ color: 0xffa640, transparent: true, opacity: 0.9 }), 0, 1.48, 0, false); g.add(flame);
  const inner = mesh(new THREE.ConeGeometry(0.025, 0.12, 10), new THREE.MeshBasicMaterial({ color: 0x6aa8ff }), 0, 1.43, 0, false); g.add(inner);
  const light = new THREE.PointLight(0xff9a40, 1.6, 4, 2); light.position.set(0, 1.5, 0); g.add(light);
  const coat = mesh(new THREE.CylinderGeometry(0.33, 0.42, 1.05, 24, 1, true, 0.35, Math.PI * 2 - 0.7), std({ color: 0xeeeeea, roughness: 0.8, side: THREE.DoubleSide }), 0, 1.4, 0); g.add(coat);
  g.add(mesh(new THREE.CylinderGeometry(0.36, 0.33, 0.12, 24, 1, true), std({ color: 0xeeeeea, roughness: 0.8, side: THREE.DoubleSide }), 0, 1.95, 0)); // 깃
  const flask = mesh(new THREE.CylinderGeometry(0.07, 0.32, 0.55, 28, 1, true), glass, 0, 2.2, 0); g.add(flask);
  g.add(mesh(new THREE.CylinderGeometry(0.06, 0.27, 0.32, 24), liquid, 0, 2.08, 0));
  g.add(mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.25, 16, 1, true), glass, 0, 2.6, 0));
  const arms = [];
  for (const sx of [-1, 1]) { const sh = new THREE.Group(); sh.position.set(sx * 0.36, 1.85, 0); g.add(sh); const tube = cyl(0.045, 0.045, 0.75, glass, 0, -0.4, 0, 12); sh.add(tube); sh.add(cyl(0.04, 0.04, 0.35, liquid, 0, -0.62, 0, 10)); sh.add(mesh(new THREE.SphereGeometry(0.045, 10, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), glass, 0, -0.77, 0)); arms.push(sh); }
  const pud = mesh(new THREE.CircleGeometry(1.1, 28), std({ color: 0x1a2236, roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.9, depthWrite: false }), 0, 0.006, 0, false); pud.rotation.x = -Math.PI / 2; g.add(pud);
  g.userData = { flame, inner, light, arms, faceY: 2.2 };
  return g;
}

// ===== 체육 괴물: 아주 큰 키, 긴 팔다리, 그림자 진 얼굴에 큰 눈과 찢어진 입, 빨간 호루라기 =====
export function makePE() {
  const g = new THREE.Group(); const suit = once('track', () => std({ map: TX.tracksuitTex(), roughness: 0.8 }));
  const legs = [];
  for (const s of [-1, 1]) { const hip = new THREE.Group(); hip.position.set(s * 0.13, 1.15, 0); g.add(hip); hip.add(capsule(0.08, 0.95, suit, 0, -0.52, 0)); hip.add(box(0.12, 0.08, 0.32, M.shoeWht(), 0, -1.1, 0.06)); legs.push(hip); }
  g.add(mesh(new RoundedBoxGeometry(0.52, 0.8, 0.28, 4, 0.1), suit, 0, 1.55, 0));
  const arms = [];
  for (const s of [-1, 1]) { const sh = new THREE.Group(); sh.position.set(s * 0.3, 1.88, 0); g.add(sh); sh.add(capsule(0.065, 1.05, suit, 0, -0.58, 0)); sh.add(mesh(new RoundedBoxGeometry(0.13, 0.18, 0.06, 2, 0.02), M.skin(), 0, -1.2, 0)); arms.push(sh); }
  g.add(cyl(0.05, 0.06, 0.12, M.skin(), 0, 2.0, 0));
  const head = new THREE.Group(); head.position.set(0, 2.17, 0); g.add(head);
  head.add(mesh(new THREE.SphereGeometry(0.13, 24, 18), std({ color: 0x0a0a0b, roughness: 0.8 })));
  const face = mesh(new THREE.SphereGeometry(0.1315, 24, 18, Math.PI / 2 - 0.95, 1.9, 0.6, 1.6), new THREE.MeshBasicMaterial({ map: TX.shadowFaceTex(), transparent: true }), 0, 0, 0, false); head.add(face);
  head.add(box(0.05, 0.025, 0.05, std({ color: 0xd01818, roughness: 0.3 }), 0, -0.05, 0.14));
  g.userData = { legs, arms, head, faceY: 2.17 };
  return g;
}
export function makeBall(seed) {
  const g = new THREE.Group();
  const b = mesh(new THREE.SphereGeometry(0.24, 24, 16), std({ map: TX.ballFaceTex(seed), roughness: 0.6 }), 0, 0.24, 0); g.add(b);
  g.userData = { ball: b, faceY: 0.24 };
  return g;
}
export function hoop() {
  const g = new THREE.Group();
  g.add(box(1.8, 1.05, 0.04, std({ color: 0xeeeeee, roughness: 0.3, transparent: true, opacity: 0.85 }), 0, 3.0 - 0.6, 0));
  g.add(box(0.6, 0.45, 0.045, std({ color: 0xffffff, roughness: 0.3 }), 0, 2.35, 0.005));
  const rim = mesh(new THREE.TorusGeometry(0.23, 0.012, 8, 24), std({ color: 0xd2501a, metalness: 0.5, roughness: 0.4 }), 0, 2.05, 0.28); rim.rotation.x = Math.PI / 2; g.add(rim);
  return g;
}
export function ballCart() {
  const g = new THREE.Group();
  g.add(box(0.9, 0.6, 0.6, std({ map: TX.metalTex('#555c62'), metalness: 0.6, roughness: 0.5, wireframe: false }), 0, 0.5, 0));
  for (let i = 0; i < 6; i++) g.add(mesh(new THREE.SphereGeometry(0.12, 14, 10), std({ map: TX.ballFaceTex(i), roughness: 0.6 }), -0.3 + (i % 3) * 0.3, 0.88, -0.12 + Math.floor(i / 3) * 0.24));
  return g;
}
export function lostBox() {
  const g = new THREE.Group();
  g.add(box(0.6, 0.4, 0.45, std({ color: 0x9c7a4c, roughness: 0.9 }), 0, 0.2, 0));
  const pe = box(0.5, 0.08, 0.38, once('track', () => std({ map: TX.tracksuitTex(), roughness: 0.8 })), 0, 0.42, 0); pe.rotation.y = 0.2; g.add(pe);
  return g;
}
export function broom() {
  const g = new THREE.Group();
  const st = cyl(0.014, 0.014, 1.2, std({ color: 0x8a6a3a, roughness: 0.7 }), 0, 0.03, 0); st.rotation.z = Math.PI / 2; g.add(st);
  g.add(box(0.06, 0.1, 0.32, std({ color: 0xb79a5a, roughness: 0.95 }), 0.62, 0.05, 0));
  return g;
}

export function setGrin(st, on) { const u = st.userData; u.faceMat.map = on ? u.faceG : u.faceN; u.faceMat.needsUpdate = true; }

// ===== 종이인형: 가운데가 접힌 커다란 종이 사람 =====
export function makeDoll() {
  const g = new THREE.Group();
  const pts = [[0, 2.05], [-0.12, 2.02], [-0.16, 1.92], [-0.14, 1.8], [-0.07, 1.73], [-0.07, 1.66], [-0.31, 1.6], [-0.38, 1.25], [-0.4, 0.66], [-0.39, 0.5], [-0.35, 0.44], [-0.3, 0.5], [-0.29, 0.95], [-0.25, 1.34], [-0.21, 1.33], [-0.2, 1.0], [-0.21, 0.92], [-0.19, 0.1], [-0.24, 0.0], [-0.06, 0.0], [-0.05, 0.86], [0, 0.9]];
  const tex = TX.dollTex();
  const mat = std({ map: tex, roughness: 0.92, side: THREE.DoubleSide });
  const halves = [];
  for (const s of [-1, 1]) {
    const shape = new THREE.Shape(); pts.forEach(([x, y], i) => (i ? shape.lineTo(x * s, y) : shape.moveTo(x * s, y)));
    const geo = new THREE.ShapeGeometry(shape, 6);
    const p = geo.attributes.position, uv = geo.attributes.uv;
    for (let i = 0; i < p.count; i++) uv.setXY(i, 0.5 + p.getX(i) / 0.84, p.getY(i) / 2.05);
    const piv = new THREE.Group(); g.add(piv);
    const m = new THREE.Mesh(geo, mat); m.castShadow = true; piv.add(m);
    halves.push(piv);
  }
  g.userData = { halves, faceY: 1.9 };
  return g;
}

// ===== 데칼코마니: 바닥을 기어 다니는 대칭 먹물 얼룩 =====
export function makeBlot() {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ map: TX.inkBlotTex(), transparent: true, roughness: 0.2, metalness: 0.1, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 2.2), mat); m.rotation.x = -Math.PI / 2; m.position.y = 0.012; m.receiveShadow = true; g.add(m);
  g.userData = { decal: m, faceY: 0 };
  return g;
}

// ===== 복도 감독: 2m 넘는 키, 긴 팔, 작은 머리, 붉은 눈, 출석부 =====
export function makeMonitor() {
  const g = new THREE.Group();
  const legs = [];
  for (const s of [-1, 1]) {
    const hip = new THREE.Group(); hip.position.set(s * 0.11, 1.12, 0); g.add(hip);
    hip.add(capsule(0.07, 0.92, M.suit(), 0, -0.5, 0));
    hip.add(box(0.1, 0.06, 0.3, M.shoeBlk(), 0, -1.08, 0.06));
    legs.push(hip);
  }
  const body = new THREE.Group(); body.position.y = 1.12; body.rotation.x = 0.18; g.add(body);
  const torsoMats = [M.suit(), M.suit(), M.suit(), M.suit(), std({ map: TX.suitFrontTex(), roughness: 0.8 }), M.suit()];
  body.add(mesh(new RoundedBoxGeometry(0.44, 0.78, 0.24, 4, 0.08), torsoMats, 0, 0.4, 0));
  const arms = [];
  for (const s of [-1, 1]) {
    const sh = new THREE.Group(); sh.position.set(s * 0.26, 0.74, 0); body.add(sh);
    sh.add(capsule(0.058, 0.95, M.suit(), 0, -0.52, 0));
    const hand = new THREE.Group(); hand.position.set(0, -1.06, 0); sh.add(hand);
    hand.add(box(0.07, 0.11, 0.035, M.paleSkin(), 0, 0, 0));
    for (let f = 0; f < 4; f++) hand.add(box(0.012, 0.13, 0.012, M.paleSkin(), -0.027 + f * 0.018, -0.11, 0));
    if (s > 0) { const cb = mesh(new THREE.BoxGeometry(0.24, 0.32, 0.012), [M.plywood(), M.plywood(), M.plywood(), M.plywood(), std({ map: TX.clipboardTex(), roughness: 0.8 }), M.plywood()], 0.02, -0.12, 0.06); cb.rotation.set(0.2, -0.3, 0); hand.add(cb); }
    arms.push(sh);
  }
  const neck = cyl(0.035, 0.04, 0.2, M.paleSkin(), 0, 0.86, 0.02); body.add(neck);
  const head = new THREE.Group(); head.position.set(0, 1.04, 0.03); head.rotation.z = 0.35; body.add(head);
  const skull = mesh(new THREE.SphereGeometry(0.1, 20, 16), M.paleSkin()); skull.scale.set(0.85, 1.35, 0.95); head.add(skull);
  const cap = mesh(new THREE.SphereGeometry(0.104, 20, 10, 0, Math.PI * 2, 0, 1.2), std({ color: 0x0d0d0d, roughness: 0.7 })); cap.scale.set(0.86, 1.36, 0.97); head.add(cap);
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff1a10 });
  for (const s of [-1, 1]) {
    const sock = mesh(new THREE.SphereGeometry(0.026, 10, 8), std({ color: 0x050505, roughness: 1 }), s * 0.034, 0.015, 0.078); sock.scale.set(1.2, 0.8, 0.5); head.add(sock);
    head.add(mesh(new THREE.SphereGeometry(0.008, 8, 6), eyeMat, s * 0.034, 0.015, 0.09, false));
  }
  const glow = new THREE.PointLight(0xff2010, 0.6, 1.2, 2); glow.position.set(0, 0.02, 0.15); head.add(glow);
  g.userData = { legs, arms, head, body, faceY: 2.18 };
  return g;
}

// 걷기 애니메이션 (다리 스윙)
export function animateWalk(model, t, speed, amp = 0.5) {
  const u = model.userData; if (!u.legs) return;
  const a = Math.sin(t * speed) * amp;
  u.legs[0].rotation.x = a; u.legs[1].rotation.x = -a;
  if (u.arms) { u.arms[0].rotation.x = -a * 0.3; u.arms[1].rotation.x = a * 0.3; }
}

// ===== 가구 =====
export function studentDesk() {
  const g = new THREE.Group();
  g.add(box(0.62, 0.025, 0.44, M.laminate(), 0, 0.72, 0));
  g.add(box(0.58, 0.12, 0.38, M.darkSteel(), 0, 0.64, -0.02)); // 서랍칸
  for (const [x, z] of [[-0.28, -0.18], [0.28, -0.18], [-0.28, 0.18], [0.28, 0.18]]) g.add(cyl(0.012, 0.012, 0.7, M.steel(), x, 0.35, z, 8));
  g.add(box(0.56, 0.015, 0.015, M.steel(), 0, 0.12, -0.18));
  // 의자
  const c = new THREE.Group(); c.position.set(0, 0, 0.42); c.rotation.y = (Math.random() - 0.5) * 0.4; g.add(c);
  c.add(box(0.4, 0.02, 0.38, M.plywood(), 0, 0.44, 0));
  const back = box(0.38, 0.22, 0.015, M.plywood(), 0, 0.68, 0.2); back.rotation.x = -0.1; c.add(back);
  for (const [x, z] of [[-0.18, -0.17], [0.18, -0.17], [-0.18, 0.17], [0.18, 0.17]]) c.add(cyl(0.011, 0.011, 0.44, M.steel(), x, 0.22, z, 8));
  c.add(cyl(0.011, 0.011, 0.32, M.steel(), -0.18, 0.6, 0.19, 8)); c.add(cyl(0.011, 0.011, 0.32, M.steel(), 0.18, 0.6, 0.19, 8));
  if (Math.random() < 0.4) { const b = box(0.21, 0.03, 0.28, std({ color: [0x7a2a2a, 0x2a4a7a, 0x3a6a3a][(Math.random() * 3) | 0], roughness: 0.7 }), (Math.random() - 0.5) * 0.3, 0.75, 0); b.rotation.y = Math.random(); g.add(b); }
  return g;
}
export function teacherDesk() {
  const g = new THREE.Group();
  g.add(box(1.8, 0.04, 0.75, M.laminate(), 0, 0.78, 0));
  g.add(box(1.76, 0.74, 0.04, M.plywood(), 0, 0.38, 0.33));
  g.add(box(0.5, 0.74, 0.7, M.plywood(), -0.62, 0.38, 0)); g.add(box(0.5, 0.74, 0.7, M.plywood(), 0.62, 0.38, 0));
  g.add(box(0.3, 0.04, 0.22, std({ color: 0x334, roughness: 0.6 }), 0.3, 0.82, -0.05)); // 출석부
  return g;
}
export function locker() {
  const g = new THREE.Group();
  for (const s of [-1, 1]) g.add(mesh(new THREE.BoxGeometry(0.56, 1.85, 0.5), [M.lockerSide(), M.lockerSide(), M.lockerSide(), M.lockerSide(), M.locker(), M.lockerSide()], s * 0.29, 0.925, 0));
  return g;
}
export function easel() {
  const g = new THREE.Group();
  for (const s of [-1, 1]) { const l = cyl(0.015, 0.015, 1.7, M.plywood(), s * 0.25, 0.83, 0); l.rotation.z = s * 0.12; g.add(l); }
  const bl = cyl(0.015, 0.015, 1.7, M.plywood(), 0, 0.8, -0.3); bl.rotation.x = -0.25; g.add(bl);
  const cv = box(0.6, 0.75, 0.03, M.canvas(), 0, 1.15, 0.04); cv.rotation.x = -0.08; g.add(cv);
  g.add(box(0.6, 0.03, 0.08, M.plywood(), 0, 0.76, 0.05));
  return g;
}
export function officeDesk() {
  const g = new THREE.Group();
  g.add(box(1.1, 0.04, 0.7, std({ color: 0x8b8c88, roughness: 0.5 }), 0, 0.74, 0));
  g.add(box(0.4, 0.7, 0.65, std({ color: 0x6f716e, roughness: 0.5 }), 0.33, 0.36, 0));
  g.add(box(0.5, 0.32, 0.03, M.monitorBlk(), -0.1, 1.0, -0.2)); g.add(box(0.06, 0.12, 0.06, M.monitorBlk(), -0.1, 0.81, -0.2));
  g.add(box(0.42, 0.02, 0.14, M.monitorBlk(), -0.1, 0.77, 0.05));
  for (let i = 0; i < 4; i++) { const p = box(0.21, 0.004, 0.29, std({ color: 0xeeeae0, roughness: 0.9 }), -0.3 + Math.random() * 0.2, 0.765 + i * 0.004, 0.15); p.rotation.y = Math.random() - 0.5; g.add(p); }
  const ch = new THREE.Group(); ch.position.set(-0.1, 0, 0.55); g.add(ch);
  ch.add(cyl(0.22, 0.22, 0.07, std({ color: 0x222, roughness: 0.8 }), 0, 0.48, 0, 16)); ch.add(cyl(0.02, 0.02, 0.4, M.steel(), 0, 0.25, 0));
  ch.add(box(0.42, 0.5, 0.06, std({ color: 0x222, roughness: 0.8 }), 0, 0.82, 0.22));
  return g;
}
export function labBench() {
  const g = new THREE.Group();
  g.add(box(1.2, 0.04, 0.9, M.blackTop(), 0, 0.88, 0));
  g.add(box(1.14, 0.84, 0.84, M.whiteCab(), 0, 0.43, 0));
  for (let i = -1; i <= 1; i++) { g.add(box(0.005, 0.7, 0.8, std({ color: 0x999, roughness: 0.6 }), i * 0.38, 0.43, 0.425)); }
  if (Math.random() < 0.5) { g.add(cyl(0.05, 0.07, 0.15, std({ color: 0xcfe8ef, transparent: true, opacity: 0.5, roughness: 0.05 }), 0.2, 0.98, 0.1)); g.add(cyl(0.012, 0.012, 0.3, M.steel(), -0.4, 1.05, -0.35)); }
  return g;
}
export function shelf() {
  const g = new THREE.Group();
  g.add(box(1.2, 2.1, 0.03, M.shelfWood(), 0, 1.05, 0));
  for (const s of [-1, 1]) g.add(box(0.03, 2.1, 0.62, M.shelfWood(), s * 0.585, 1.05, 0));
  for (let i = 0; i < 5; i++) g.add(box(1.17, 0.025, 0.62, M.shelfWood(), 0, 0.08 + i * 0.48, 0));
  return g;
}
export function piano() {
  const g = new THREE.Group();
  g.add(box(1.5, 1.25, 0.55, M.piano(), 0, 0.63, -0.1));
  g.add(box(1.5, 0.06, 0.25, M.piano(), 0, 0.74, 0.26));
  g.add(box(1.36, 0.02, 0.15, std({ color: 0xf2f0e8, roughness: 0.3 }), 0, 0.775, 0.3));
  for (let i = 0; i < 26; i++) g.add(box(0.025, 0.02, 0.08, M.piano(), -0.64 + i * 0.052, 0.79, 0.27));
  g.add(box(0.8, 0.45, 0.35, M.piano(), 0, 0.23, 0.75)); // 의자
  return g;
}
export function plasticChair() {
  const g = new THREE.Group(); g.rotation.y = (Math.random() - 0.5) * 1.2;
  g.add(box(0.42, 0.03, 0.4, M.plastic(), 0, 0.45, 0)); const b = box(0.42, 0.35, 0.03, M.plastic(), 0, 0.68, -0.2); b.rotation.x = 0.1; g.add(b);
  for (const [x, z] of [[-0.19, -0.17], [0.19, -0.17], [-0.19, 0.17], [0.19, 0.17]]) g.add(cyl(0.012, 0.012, 0.45, M.steel(), x, 0.22, z, 8));
  if (Math.random() < 0.3) { g.rotation.z = Math.PI / 2; g.position.y = 0.2; }
  return g;
}
export function sinkCounter(width) {
  const g = new THREE.Group();
  g.add(box(width, 0.06, 0.5, std({ color: 0x5b5e60, roughness: 0.3 }), 0, 0.82, 0.25));
  g.add(box(width, 0.78, 0.04, std({ color: 0x4a4d50, roughness: 0.5 }), 0, 0.4, 0.48));
  for (let i = 0; i < 3; i++) {
    const x = -width / 2 + width * (i + 0.5) / 3;
    const bowl = mesh(new THREE.CylinderGeometry(0.2, 0.14, 0.12, 20, 1, true), M.ceramic(), x, 0.8, 0.25); bowl.material.side = THREE.DoubleSide; g.add(bowl);
    g.add(cyl(0.015, 0.015, 0.18, M.steel(), x, 0.94, 0.05)); const sp = cyl(0.012, 0.012, 0.14, M.steel(), x, 1.02, 0.11); sp.rotation.x = Math.PI / 2; g.add(sp);
  }
  return g;
}
export function stall() {
  const g = new THREE.Group();
  g.add(box(0.03, 2.0, 1.4, M.partition(), -0.6, 1.1, 0));
  const door = box(0.75, 1.8, 0.03, M.partition(), -0.15, 1.05, 0.7); door.rotation.y = -0.6; door.position.x = 0.05; g.add(door);
  g.add(box(0.38, 0.4, 0.5, M.ceramic(), 0.2, 0.2, -0.35)); g.add(box(0.4, 0.05, 0.55, M.ceramic(), 0.2, 0.42, -0.33)); g.add(box(0.42, 0.35, 0.18, M.ceramic(), 0.2, 0.62, -0.62));
  return g;
}
export function extinguisher() {
  const g = new THREE.Group();
  g.add(cyl(0.08, 0.08, 0.48, M.red(), 0, 0.26, 0, 16)); g.add(cyl(0.03, 0.05, 0.08, M.monitorBlk(), 0, 0.54, 0)); g.add(box(0.12, 0.03, 0.03, M.monitorBlk(), 0.04, 0.6, 0));
  return g;
}
export function flashlightModel() {
  const g = new THREE.Group();
  const body = cyl(0.018, 0.016, 0.16, std({ color: 0x222, roughness: 0.4, metalness: 0.5 }), 0, 0, 0); body.rotation.x = Math.PI / 2; g.add(body);
  const head = cyl(0.026, 0.019, 0.04, std({ color: 0x333, roughness: 0.3, metalness: 0.7 }), 0, 0, -0.09); head.rotation.x = Math.PI / 2; g.add(head);
  const lens = mesh(new THREE.CircleGeometry(0.023, 16), new THREE.MeshBasicMaterial({ color: 0xfff6dd }), 0, 0, -0.111, false); lens.rotation.y = Math.PI; g.add(lens);
  const hand = mesh(new RoundedBoxGeometry(0.05, 0.045, 0.08, 3, 0.018), std({ color: 0x8a6a58, roughness: 0.7 }), 0.004, -0.014, 0.04, false); g.add(hand);
  g.traverse((o) => { o.castShadow = false; });
  return g;
}
export function keyModel() {
  const g = new THREE.Group(); const brass = std({ color: 0xc9a227, metalness: 0.9, roughness: 0.3 });
  const ring = mesh(new THREE.TorusGeometry(0.03, 0.007, 8, 16), brass); ring.rotation.x = Math.PI / 2; g.add(ring);
  g.add(box(0.09, 0.006, 0.012, brass, 0.07, 0, 0)); g.add(box(0.012, 0.006, 0.025, brass, 0.1, 0, 0.012));
  const tag = box(0.05, 0.004, 0.08, std({ color: 0xa01818, roughness: 0.6 }), -0.06, 0, 0.03); tag.rotation.y = 0.4; g.add(tag);
  return g;
}
