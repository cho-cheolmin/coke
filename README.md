# LIVINGON

프리미엄 생활가전 쇼핑몰을 주제로 만든 풀스택 프로젝트입니다. 쿠쿠몰의 넓은 프로모션 영역, 빠른 카테고리 탐색, 혜택·랭킹·렌탈 중심 정보 구조를 참고했으며 브랜드, 문구, 상품, 그래픽은 독립적으로 제작했습니다.

## 기술 구성

- Frontend: Next.js 16, React 19, TypeScript, App Router
- Backend: Spring Boot 3.4, Java 21, Gradle
- Database: PostgreSQL 16
- Runtime: Docker Compose

## 실행

전체 서비스를 한 번에 실행하려면 Docker Desktop을 켠 뒤 저장소 루트에서 실행합니다.

```bash
npm run dev:full
```

- 웹: http://localhost:3000
- 상품 API: http://localhost:8080/api/products

프론트엔드만 빠르게 확인하려면 다음 명령을 사용합니다. 백엔드가 꺼져 있어도 화면은 내장 샘플 상품 데이터로 동작합니다.

```bash
npm install
npm run dev
```

## 주요 기능

- 데스크톱·태블릿·모바일 반응형 홈
- 검색, 상품 카테고리 필터, 찜, 장바구니 피드백
- Spring Boot 상품 목록 REST API
- PostgreSQL 스키마와 초기 상품 데이터 자동 구성
- Docker 기반 프론트엔드·API·DB 통합 실행

백엔드 접속 값은 `backend/.env`에서 관리하며 새 환경에서는 `backend/.env.example`을 복사해 사용할 수 있습니다.
