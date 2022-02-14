## 1. 구현한 방법과 이유
Create React App을 사용하였고 css로 styled-components를 사용하였습니다.<br/>
css-in-js 스타일을 선호하고 styled-components가 적합하다고 생각하여 선택하게 되었습니다.<br/>
6개의 컴포넌트들은 함수형 컴포넌트와 react hooks를 이용하여 만들었습니다.
<br/>
<br/>

## 2. 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
특별히 어려웠던 점은 ClickToEdit 컴포넌트를 구현할 때 컴포넌트 외부를 클릭 시 edit모드를 해제하는 만드는 것이었습니다.<br/>
검색 결과 mousedown이라는 이벤트를 사용하여 해결하게 되었고 자바스크립트 이벤트에 익숙하지 않은 저의 단점을 발견하고 보충학습을 하였습니다.
<br/>
<br/>

## 3. 자세한 실행 방법
1. 이 저장소를 git clone 한다.
2. npm i 명령어로 모듈을 설치한다
3. npm start 명령어로 서버를 실행시켜 localhost:3000 으로 접속하면 컴포넌트들을 바로 확인할 수 있다.
