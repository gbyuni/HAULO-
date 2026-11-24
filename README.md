# HAULO 크리에이터 가이드

| 구분 | 주소 |
| --- | --- |
| 크리에이터용 | https://haulocreators.netlify.app/ |
| 관리자용 | https://haulocreators.netlify.app/admin/ |
| 원본(GitHub Pages) | https://gbyuni.github.io/HAULO-/ |

## 구조
- 가이드 원본은 이 저장소의 `index.html` 하나예요. 내용과 이미지가 모두 이 파일에 들어 있어요.
- GitHub Pages가 이 저장소를 배포하고, Netlify 주소는 GitHub Pages 화면을 그대로 보여줘요(프록시).
- 그래서 관리자 화면에서 게시해도 **Netlify 배포가 일어나지 않아요.** Netlify 크레딧이 들지 않아요.
- `admin/index.html`은 관리자 화면(`#admin`)으로 이동시키는 바로가기예요.

## 가이드 수정하는 방법
1. `https://haulocreators.netlify.app/admin/`에 들어가요.
2. GitHub 토큰으로 로그인해요. (처음 한 번: 저장소 공동 작업자 초대 수락 → 토큰 만들기. 방법은 로그인 화면에 있어요.)
3. 내용을 고치고 **게시하기**를 누르면 이 저장소의 `index.html`이 바로 바뀌어요.
4. GitHub Pages 배포 후 몇 분 안에 크리에이터 화면에 반영돼요. Netlify 쪽은 캐시 때문에 최대 10분 정도 늦게 보일 수 있어요.

## 주의할 점
- Claude 관리자 화면에서 **공개 사이트로 내보내기**로 만든 `index.html`을 더 이상 올리지 마세요. 그 파일은 관리자 기능이 꺼진 버전이라, 올리면 관리자 화면이 막혀요.
- 파일 이름은 꼭 `index.html`이어야 하고, 저장소 첫 화면에 있어야 해요.
- 이 저장소는 공개 상태예요. 내부 자료나 개인정보는 올리지 마세요.
- Netlify는 **빌드 중지(Stopped builds)** 상태로 두세요. 저장소와 연결된 자동 배포를 다시 켜면 게시할 때마다 크레딧이 들어요.
