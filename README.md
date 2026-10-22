# HAULO 크리에이터 가이드

| 화면 | 주소 |
| --- | --- |
| 크리에이터용 | `https://사이트주소/` |
| 관리자용 | `https://사이트주소/admin/` |
| 비상용 편집기 | `https://사이트주소/admin/cms/` |

관리자 화면에서 게시하면 GitHub에 자동 저장되고, Netlify가 1분 안팎으로 다시 배포해 크리에이터 화면에 반영돼요.

## 폴더 구성

```
index.html             크리에이터 화면 (디자인)
assets/                로고, 메인 배너, 파비콘
content/               가이드 내용 (관리자 화면에서 고치는 파일)
  home.json            메인 홈: 검색 영역 문구, 자주 찾는 검색어, 링크, 하단 카드
  steps.json           참여 단계 (HOW IT WORKS)
  categories.json      카테고리 목록과 순서
  articles/*.json      아티클 (파일 하나가 글 하나)
  updates.json         신규 업데이트
images/                관리자 화면에서 올린 이미지
admin/                 관리자 화면 (admin/cms/ 는 비상용 Decap CMS)
build.js               배포할 때 content/를 guide.json 하나로 합쳐요
netlify.toml           Netlify 배포 설정
```

## 처음 한 번만 하는 설정

1. **GitHub에 올리기**: 새 저장소(Private 추천)를 만들고 이 폴더의 파일을 모두 올려요. 기본 브랜치 이름이 `main`이 아니면 `admin/config.yml`의 `branch`를 같은 이름으로 바꿔요.
2. **Netlify 연결**: Netlify에서 **Add new project → Import an existing project → GitHub**를 고르고 저장소를 선택해요. 빌드 설정은 `netlify.toml`에 있어서 그대로 **Deploy** 하면 돼요.
3. **관리자 로그인 켜기**: 프로젝트 설정에서 **Identity**를 켜고 다음 두 가지를 바꿔요.
   - Registration(가입 방식)을 **Invite only**로 바꿔요. 아무나 가입하지 못하게 막는 설정이에요.
   - Services의 **Git Gateway**를 켜요. 관리자 화면이 GitHub에 저장할 수 있게 해 줘요.
4. **관리자 초대**: Identity 메뉴에서 **Invite users**로 팀원 이메일을 초대해요. 팀원은 메일의 링크로 비밀번호를 정한 뒤 `/admin/`에서 로그인해요. GitHub 계정은 없어도 돼요.
5. (선택) 사이트 이름이나 도메인은 Netlify의 **Domain management**에서 바꿔요. 예: `guide.haulo.kr`

## 관리자 화면 사용법

`/admin/`에 로그인하면 Claude에서 쓰던 것과 같은 관리자 화면이 열려요.

- **화면 구성**: 왼쪽은 편집할 항목 목록(한눈에 보기 → 메인 홈 → 참여 단계 → 신규 업데이트 → 가이드), 가운데는 편집 칸, 오른쪽은 크리에이터 화면 미리보기예요.
- **게시**: 오른쪽 위 **게시하기**를 누르면 바뀐 파일만 GitHub에 저장되고, 1분 안팎으로 크리에이터 화면에 반영돼요. 반영이 끝나면 알림이 떠요.
- **자동 보관**: 게시하지 않은 수정은 브라우저에 보관돼서, 창을 닫았다 열어도 이어서 작업할 수 있어요.
- **이미지**: 본문 편집의 **이미지** 버튼, 끌어다 놓기, 붙여넣기로 넣어요. 큰 사진은 자동으로 줄여져요. 게시할 때 `images/` 폴더에 함께 저장돼요.
- **여러 명이 함께**: 서로 다른 항목을 고쳤다면 둘 다 그대로 게시돼요. 같은 항목을 다른 관리자가 먼저 게시했다면 알림이 뜨고 게시가 멈춰요. 새로고침하면 내 수정과 최신 내용이 합쳐져서 다시 불러와져요.
- **도움말**: 관리자 화면 왼쪽 아래 **도움말**에 사용법이 정리돼 있어요.
- **비상용 편집기**: `/admin/cms/`에서 기본 편집기(Decap CMS)로도 같은 내용을 고칠 수 있어요.
- **브랜치 이름**: GitHub 기본 브랜치가 `main`이 아니면 `admin/index.html`의 `var BRANCH = 'main'`과 `admin/cms/config.yml`의 `branch`를 같이 바꿔요.

## 문제가 생기면

- **게시했는데 반영되지 않아요**: Netlify의 Deploys 화면에서 배포가 실패했는지 확인해요. 실패하면 직전 화면이 그대로 유지돼서 사이트가 깨지지는 않아요.
- **관리자 화면에서 로그인이 안 돼요**: Identity가 켜져 있는지, 초대 메일의 비밀번호 설정을 마쳤는지 확인해요.
- **'Git Gateway 연결을 확인해 주세요'가 떠요**: Identity → Services → Git Gateway가 켜져 있고 GitHub 토큰이 들어 있는지 확인해요. 토큰이 만료됐다면 새로 만들어 넣어요.
- **아티클이 화면에 안 보여요**: 그 아티클의 카테고리가 지워졌거나 ID가 바뀌었는지 확인해요. 배포 기록(Deploy log)에 보이지 않는 아티클 목록이 나와요.
