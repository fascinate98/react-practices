ex01 : Property

01. props(property)
    1) 컴포넌트의 데이터
    2) 부모에서 자식으로 전달된다.
      - Component Communication(컴포넌트간의 통신), Data Flow
      - Top -> Down
    3) 자식 컴포넌트에서 변경 불가
    4) 부모가 소유한다.
      
02. FoodList src/01 : 클래스 컴포넌트
03. FoodList src/02 : Data Flow(Top-Down) : 클래스 컴포넌트
04. FoodList src/03 : Data Flow(Top-Down) : 함수 컴포넌트
05. FoodList src/04 : Validation

1. 설치
  $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loader
  $ npm i react react-dom

2. 설정
    babel.config.json
   webpack.config.js

3. npm 스크립팅
 "scripts": {
    "start": "npx webpack serve --progress --mode development --env",
    "build": "npx webpack "
  },

4. 실행
  $ npm run debug src={01|02|03|04|05}