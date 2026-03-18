# JoongHyuk-Kim.github.io

김중혁 백엔드 엔지니어 포트폴리오/이력서 웹사이트입니다.

## Tech
- HTML
- CSS
- JavaScript
- Vitest (테스트/커버리지)

## Run
정적 페이지라 브라우저에서 `index.html`을 열면 바로 확인할 수 있습니다.

테스트는 Node.js 환경에서 실행합니다.

```bash
npm install
npm test
```

## Project Structure
```text
.
├── index.html
├── assets
│   ├── css
│   │   └── style.css
│   ├── js
│   │   └── script.js
│   └── images
│       ├── profile.jpg
│       ├── profile.webp
│       ├── profile-source.JPG
│       └── atamama-dad.webp
├── docs
│   ├── PROJECT_TEMPLATE_NOTION.md
│   └── RESUME_NOTION.md
├── tests
│   └── script.test.js
├── package.json
└── vitest.config.js
```

## Deploy
`main` 브랜치에 푸시하면 GitHub Pages로 배포됩니다.

## Notes
- 프로필 이미지는 `assets/images/profile.jpg`를 사용합니다.
- 이력서 본문은 `index.html`에서 직접 관리합니다.
