ex08: JSX TUtorials

01. 특징1: HTML과 차이점
02. 특징2: Single Root Node
03. 함수 컴포넌트 만들기
04. Pure React(React API)로 컴포넌트 작성하기
05. 클래스 컴포넌트 만들기
06. 특징3: JSX 표현식 표기법 ({js expression}) < 구문은 안들어감. 포문 이프문 이런거 안댐.
07. 특징4: 공백
08. Dynamic HTML Rednering
09. Comment


1.  설치
    $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
    $ npm i react react-dom

2. 설정
    babel.config.json 설정
    webpack.config.js 설정

3. npm 스크립팅
  "scripts": {
    "debug": "npx webpack serve --progress --mode development --env",
    "build": "npx webpack"
  },

4. 실행
$ npm run debug src=01..

npx webpack serve --progress --mode development --env  src=01