# HAULO 크리에이터 가이드

| 화면 | 주소 |
| --- | --- |
| 크리에이터용 | https://gbyuni.github.io/HAULO-/ |
| 관리자용 | https://gbyuni.github.io/HAULO-/admin/ |

관리자 화면에서 **게시하기**를 누르면 이 저장소의 `index.html`(과 새 이미지)이 바로 저장되고,
GitHub Pages가 1~2분 안에 크리에이터 화면에 반영해요. 비용은 들지 않아요.

## 폴더 구성
- `index.html` : 크리에이터 화면 + 관리자 화면 (가이드 내용이 이 파일 안에 들어 있어요)
- `admin/index.html` : 관리자 주소(/admin/)로 들어오면 관리자 화면으로 보내 주는 파일
- `images/` : 관리자 화면에서 올린 이미지
- `.nojekyll` : GitHub Pages가 파일을 그대로 올리도록 하는 설정 파일

## 관리자 추가
1. 저장소 주인(gbyuni)이 **Settings → Collaborators → Add people**에서 팀원의 GitHub 계정을 초대해요.
2. 팀원은 메일로 온 초대를 수락해요.
3. 관리자 주소에 들어가 화면 안내대로 토큰(Classic, `public_repo` 체크)을 만들어 붙여넣어요.

## 주의
- `index.html`을 직접 수정하지 마세요. 내용은 관리자 화면에서만 고쳐 주세요.
- 토큰은 비밀번호와 같아요. 공유하지 말고, 기간이 지나면 새로 만들어 다시 로그인해요.
