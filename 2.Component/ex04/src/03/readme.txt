 : ex04: Component - State

01. 기본 개념
  
  1. State
      - 컴포넌트 내부의 현재 상태를 나타내는 쓰기 가능한 데이터
      - 컴포넌트는 this.state 안에 에러 데이터(상태) 가질 수 있다.
      - this.state은 특정 컴포넌트 전용이다.
      - 상태가 업데이트가 되면 컴포넌트의 반응형(Reactive) Rendering이 트리거되고 컴포넌트와 자식 컴포넌트가 다시 렌더링 된다.
      - 컴포넌트의 동작(event)과 상호작용을 수행할 수 있는 매커니즘을 제공한다.
      - 클래스 컴포넌트에서는 constructor에서 초기화를 한다.
      - 클래스 컴포넌트의 상태 변경을 위해서는 setState 함수를 사용한다.
      - 함수 컴포넌트에서는 useState 후크 함수를 사용해서 초기화 한다.
      - 함수 컴포넌트의 상태 변경을 위해서는 useState 후크 함수를 사용하고 반환된 배열의 두번째 배열요소를 사용한다.
      
  2. 예제 : src/01

02. 제어 컴포넌트
  1. input, textarea, option과 같은 폼 컴포넌트 중에 사용자 입력에 따라서 state값이 
      변경되고 렌더링하는 컴포넌트를 제어(controlled) 컴포넌트라 한다.
  2. 폼 컴포넌트를 제어 컴포넌트로 만드는 것은 조금 복잡해보이지만 다음과 같은 장점이 있다.
    - 컴포넌트의 인터페이스를 외부에서 변경할 수 없고 내부의 상태 변경으로 가능하다는 것은
      리액트 컴포넌트의 작성원칙을 준수할 수 있다.
    - 사용자 입력값에 대한 Validation을 할 수 있다.
  3. 폼 컴포넌트를 반드시 제어 컴포넌트로 작성해야 하는 것은 아니다. 상태를 제어하지 않는 
     비제어(Uncontrolled) 컴포넌트로 만들 수 있다.
  4. 예제
      - src/02 제어 컴포넌트
      - src/03 비제어 컴포넌트

03. 상태 컴포넌트 vs 순수(Pure, Dumb) 컴포넌트
  1. 상태 컴포넌트
    - 상태를 관리하는 컴포넌트
    - 보통 상태 컴포넌트는 컴포넌트 계층에서 상위에 있다,
    - 상태 컴포넌트는 순수 컴포넌트를 하나 이상 래핑할 수 있다.
  2. 순수 컴포넌트
    - 상태관리 없이 속성(props)로 화면만 렌더링하는 컴포넌트
    - 재사용성이 좋다. 테스트하기도 좋다.
  3. 애플리케이션의 컴포넌트들은 상태 컴포넌트와 순수 컴포넌트로 분리하여 만드는것이 좋다.
  4. 어떤 컴포넌트가 상태 컴포넌트인가?
  

04. Data Flow(Bottom -> Up)
  emaillist


1. 설치
  $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loader
  $ npm i react react-dom

2. 설정
  config/babel.config.json
  config/webpack.config.js

3. npm 스크립팅
"scripts": {
    "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
    "build": "npx webpack"
  },

4. 실행
  $ npm run debug src={01|02|03|04|05}