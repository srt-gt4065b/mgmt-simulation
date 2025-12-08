# ⚡ Campus CEO - 5분 빠른 시작 가이드

교수님, 5분 안에 앱을 실행할 수 있습니다! 🚀

---

## 📋 준비물

- [ ] 구글 계정
- [ ] 웹 브라우저 (Chrome, Firefox, Safari 등)
- [ ] 다운로드한 `campus-ceo-app.html` 파일

---

## 🎯 Step 1: Firebase 프로젝트 생성 (2분)

### 1-1. Firebase Console 접속
👉 https://console.firebase.google.com/

### 1-2. 프로젝트 만들기
```
1. "프로젝트 추가" 클릭
2. 프로젝트 이름 입력: campus-ceo
3. Google Analytics: 끄기 (선택사항)
4. "프로젝트 만들기" 클릭
```

### 1-3. 웹 앱 추가
```
1. 프로젝트 개요 화면에서 </> 아이콘 클릭
2. 앱 닉네임: Campus CEO
3. Firebase Hosting: 체크 안 함
4. "앱 등록" 클릭
```

### 1-4. 구성 정보 복사
다음과 같은 코드가 나타납니다:
```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "campus-ceo.firebaseapp.com",
  projectId: "campus-ceo",
  storageBucket: "campus-ceo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```
**이 정보를 복사하세요!** 📋

---

## 🔥 Step 2: Firebase 서비스 활성화 (1분)

### 2-1. Authentication 설정
```
1. 왼쪽 메뉴 → Authentication 클릭
2. "시작하기" 클릭
3. "익명" 제공업체 찾아서 활성화
4. "저장" 클릭
```

### 2-2. Firestore Database 생성
```
1. 왼쪽 메뉴 → Firestore Database 클릭
2. "데이터베이스 만들기" 클릭
3. "테스트 모드로 시작" 선택
4. 위치: asia-northeast3 (서울)
5. "사용 설정" 클릭
```

---

## 💻 Step 3: 앱 설정 (1분)

### 3-1. HTML 파일 열기
- 다운로드한 `campus-ceo-app.html` 파일을 텍스트 에디터로 엽니다
- VS Code, 메모장, Sublime Text 등 사용

### 3-2. Firebase 구성 정보 입력
파일에서 이 부분을 찾습니다:
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",              // ← 수정
    authDomain: "YOUR_PROJECT.firebaseapp.com",  // ← 수정
    projectId: "YOUR_PROJECT_ID",         // ← 수정
    storageBucket: "YOUR_PROJECT.appspot.com",  // ← 수정
    messagingSenderId: "YOUR_SENDER_ID",  // ← 수정
    appId: "YOUR_APP_ID"                  // ← 수정
};
```

Step 1-4에서 복사한 정보로 교체합니다!

### 3-3. 저장
파일을 저장합니다 (Ctrl+S 또는 Cmd+S)

---

## 🎉 Step 4: 앱 실행 (1분)

### 4-1. 파일 열기
`campus-ceo-app.html` 파일을 더블클릭하여 웹 브라우저에서 엽니다

### 4-2. 앱 확인
✅ 홈 화면이 나타나면 성공!
✅ Team Alpha의 정보가 보이면 정상 작동!

---

## 🐛 문제 해결

### ❌ "Firebase configuration not found" 에러
**해결**: Step 3의 Firebase 구성 정보를 다시 확인하세요

### ❌ 화면이 비어있음
**해결**: 
1. F12를 눌러 개발자 도구 열기
2. Console 탭에서 에러 메시지 확인
3. 빨간 에러가 보이면 스크린샷 찍어서 공유

### ❌ 데이터가 로드되지 않음
**해결**: 
1. Firebase Console → Firestore Database 확인
2. "테스트 모드"로 설정되어 있는지 확인
3. 규칙 탭에서 다음과 같이 되어있는지 확인:
```
allow read, write: if true;
```

---

## 🎮 테스트해보기

### 테스트 1: 화면 전환
- 하단 네비게이션 바의 아이콘들을 클릭해보세요
- 5개 화면(홈, 팀경영, 순위판, 의사결정, 내정보)이 모두 작동하나요? ✅

### 테스트 2: 의사결정 제출
1. "의사결정" 탭 클릭
2. 생산량 슬라이더 조절
3. "의사결정 제출하기" 버튼 클릭
4. "+20 XP" 토스트 알림이 나타나나요? ✅

### 테스트 3: XP 증가 확인
1. 홈 화면으로 돌아가기
2. 레벨 카드의 XP가 480으로 증가했나요? ✅

---

## 📱 모바일에서 테스트

### 방법 1: 같은 WiFi에서
1. PC에서 `ipconfig` (Windows) 또는 `ifconfig` (Mac) 실행
2. IP 주소 확인 (예: 192.168.0.10)
3. 모바일에서 `http://192.168.0.10:8000` 접속

### 방법 2: Firebase Hosting (5분 추가)
```bash
# Firebase CLI 설치
npm install -g firebase-tools

# 로그인
firebase login

# 프로젝트 초기화
firebase init hosting

# 배포
firebase deploy
```

제공된 URL을 모바일에서 접속!

---

## 🎓 다음 단계

### ✅ 완료한 것
- [x] Firebase 프로젝트 생성
- [x] 앱 실행 및 테스트
- [x] 기본 기능 확인

### 📚 추가로 할 것
- [ ] 샘플 데이터 추가 (`init-data.js` 참조)
- [ ] 팀 및 학생 정보 커스터마이즈
- [ ] 프로덕션 보안 규칙 적용 (`firestore.rules` 참조)
- [ ] 게임 시뮬레이션 엔진 개발 (Phase 2)

---

## 💡 꿀팁

### 개발자 도구 활용
```
F12 → Console 탭
```
여기서 캐시 상태, API 호출, 에러 등을 확인할 수 있습니다!

### 캐시 초기화
Console에 입력:
```javascript
clearCache()
```

### 데이터 새로고침
```
F5 또는 Ctrl+R
```

---

## 🎊 축하합니다!

**교수님의 Campus CEO 앱이 성공적으로 실행되었습니다!** 🎉

이제 학생들과 함께 재미있는 경영 시뮬레이션 게임을 즐기실 수 있습니다.

---

## 📞 도움이 필요하신가요?

### 체크리스트
- [ ] Firebase 프로젝트가 생성되었나요?
- [ ] Authentication (익명)이 활성화되었나요?
- [ ] Firestore Database가 테스트 모드로 생성되었나요?
- [ ] HTML 파일에 Firebase 구성이 입력되었나요?
- [ ] 브라우저에서 파일이 열리나요?
- [ ] 개발자 도구 Console에 에러가 없나요?

모든 항목에 체크하셨는데도 문제가 있다면,
개발자 도구의 Console 스크린샷을 찍어주세요!

---

## 🚀 성공 사례

```
✅ "5분 만에 앱이 실행되었어요!"
✅ "학생들이 너무 좋아합니다!"
✅ "삼성헬스 같은 디자인이 맘에 들어요!"
✅ "무료로 운영할 수 있어서 좋습니다!"
```

**교수님도 곧 이 리스트에 추가될 거예요!** 💪

---

## 📖 더 알아보기

- [전체 README](README.md) - 상세한 기능 설명
- [Firebase 문서](https://firebase.google.com/docs) - Firebase 공식 문서
- [Firestore 규칙](firestore.rules) - 프로덕션 보안 설정
- [초기 데이터](init-data.js) - 샘플 데이터 구조

---

**Happy Coding! 즐거운 개발 되세요!** 🎮🎓
