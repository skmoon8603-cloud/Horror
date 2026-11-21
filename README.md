# 뒤틀린 학교 (프로토타입)

밤의 학교에 갇혀 규칙을 알아내며 옥상으로 탈출하는 1인칭 모바일 웹 공포 게임 (Three.js).

- 플레이: https://skmoon8603-cloud.github.io/Horror/
- 로그인·저장: RANDOM FOOTBALL 서버(`/api/horror/save`)를 같이 사용 (계정 공유)
- 게임 화면·소리는 이 저장소(GitHub Pages)에서 받으므로 Render 전송량을 거의 쓰지 않음
- `src/` 가 원본 코드, `game.js` 는 그걸 하나로 묶은 파일 (esbuild)
  - 다시 묶기: `npm i three esbuild && npx esbuild src/main.js --bundle --minify --format=esm --outfile=game.js`
- 제목·규칙·쪽지 문구는 `src/main.js` 맨 위 설정에서 바꿀 수 있음
- `steps.mp3`: 내(플레이어) 발소리
