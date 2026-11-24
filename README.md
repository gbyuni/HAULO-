# HAULO 크리에이터 가이드

| 구분 | 주소 |
| --- | --- |
| 크리에이터용 | https://haulocreators.netlify.app/ |
| 관리자용 | https://haulocreators.netlify.app/admin/ (팀 이메일 계정으로 로그인) |
| 원본(GitHub Pages) | https://gbyuni.github.io/HAULO-/ |

## 구조
- 가이드 원본은 이 저장소의 `index.html` 하나예요. 내용과 이미지가 모두 들어 있어요.
- GitHub Pages가 이 저장소를 배포하고, Netlify 주소는 GitHub Pages 화면을 그대로 보여줘요(`_redirects` 프록시).
- 관리자 화면은 Netlify Identity(이메일 로그인)로 들어가고, 게시하면 Git Gateway를 통해 이 저장소의 `index.html`이 바뀌어요.
- Netlify는 배포하지 않아서, 게시해도 Netlify 크레딧이 들지 않아요.

## 관리자
- 로그인: `https://haulocreators.netlify.app/admin/` → **이메일로 로그인**
- 새 관리자 추가: Netlify → Identity → **Invite users**
- 비밀번호 분실: 로그인 창의 **Forgot password?**

## 주의할 점
- Netlify의 **Activate builds**는 누르지 마세요. 게시할 때마다 배포가 일어나 크레딧이 들어요.
- `index.html`을 직접 고치거나, Claude에서 내보낸 공개용 파일로 덮어쓰지 마세요. 관리자 기능이 꺼질 수 있어요.
- `_redirects`는 Netlify 주소를 GitHub Pages로 연결하는 파일이에요. 지우지 마세요.
- 이 저장소는 공개 상태예요. 내부 자료나 개인정보는 올리지 마세요.
