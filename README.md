# 별빛재 (Byeolbitjae)

따뜻한 동양적 분위기의 운세 서비스 UX를 독립적으로 재해석한 풀스택 프로토타입입니다. 원본 사이트의 모바일 중심 정보 구조와 카드형 탐색 경험만 참고했으며, 브랜드·문구·그래픽은 새로 만들었습니다.

## 구성

- `frontend`: Next.js 15, TypeScript, App Router
- `backend`: Spring Boot 3.4, Java 17, Gradle
- PostgreSQL 16
- Docker Compose: 웹/API/DB 일괄 실행

```text
.
├─ frontend/               # Next.js 프런트엔드
├─ backend/                # Spring Boot REST API
│  ├─ src/main/java/       # 애플리케이션 코드
│  └─ src/main/resources/  # 설정 및 DB 초기화 SQL
├─ docker-compose.yml      # frontend + backend + PostgreSQL
├─ package.json            # npm 워크스페이스 및 공통 명령
└─ .env.example            # 환경변수 예시
```

## 가장 빠른 실행

1. `.env.example`을 `.env`로 복사합니다.
2. Docker Desktop을 실행합니다.
3. 저장소 루트에서 프런트엔드 개발 서버를 실행합니다.

```bash
npm install
npm run dev
```

프런트엔드, 백엔드, PostgreSQL을 함께 실행하려면 Docker Desktop을 실행한 뒤 `npm run dev:full`을 사용합니다. 백그라운드 배포는 `npm run deploy`, 종료는 `npm run stop`, 로그 확인은 `npm run logs`를 사용합니다.

- 웹: http://localhost:3000
- API 상태: http://localhost:8080/api/health
- 추천 운세 API: http://localhost:8080/api/fortunes/recommended

DB 데이터까지 초기화하려면 `docker compose down -v`를 사용합니다.

## 로컬 개발

프런트엔드는 Node.js 24 LTS에서 실행합니다.

```bash
npm install
npm run dev
```

백엔드와 PostgreSQL만 실행하려면 다음 명령을 사용합니다.

```bash
npm run dev:backend
```

백엔드를 Docker 없이 직접 실행하려면 JDK 17과 Gradle 8.12 이상이 필요합니다. 별도 Gradle 설치 없이 실행하려면 `npm run dev:backend`를 사용하세요.

### 백엔드 DB 설정

`backend/.env.example`을 `backend/.env`로 복사한 뒤 실제 PostgreSQL 접속 정보를 입력합니다. Spring Boot는 실행 시 이 파일을 자동으로 읽습니다.

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=byeolbit
DB_USERNAME=byeolbit
DB_PASSWORD=local-secret
```

Docker Compose에서는 `DB_HOST`를 자동으로 `db`로 덮어쓰므로 같은 `.env` 파일을 로컬 실행과 컨테이너 실행에 함께 사용할 수 있습니다.

## 환경변수

| 변수 | 기본값 | 용도 |
|---|---|---|
| `POSTGRES_DB` | `byeolbit` | 데이터베이스 이름 |
| `POSTGRES_USER` | `byeolbit` | DB 사용자 |
| `POSTGRES_PASSWORD` | `local-secret` | DB 비밀번호 |
| `DB_HOST` | `localhost` | PostgreSQL 호스트 |
| `DB_PORT` | `5432` | PostgreSQL 포트 |
| `DB_NAME` | `byeolbit` | 데이터베이스 이름 |
| `DB_USERNAME` | `byeolbit` | 데이터베이스 사용자 |
| `DB_PASSWORD` | `local-secret` | 데이터베이스 비밀번호 |
메인페이지의 콘텐츠는 `frontend/data/homeStories.ts`에서 관리하며 백엔드나 DB를 호출하지 않습니다. 백엔드 API와 PostgreSQL은 이후 별도 기능에서 독립적으로 사용할 수 있습니다.
