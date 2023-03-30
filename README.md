# 23-React1

# 안찬우(201830220)

## 0323(4주차)
### 작성코드

(Book.jsx)<br>

    import React from "react";

    function Book(props){
        return(
             <div>
                <h1>{`이 책의 이름은 ${props.name}입니다. `} <h1>
                <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}<h2>
             <div>
             )
    }

(Library.jsx)<br>

    import React from "react";
    import Book from "./Book";

    function Library(props){
    return(
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300}/>
            <Book name="처음 만난 AWS" numOfPage={400}/>
            <Book name="처음 만난 리액트" numOfPage={500}/>
        </div>
     )
}

(index.js)<br>

    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';
    import Library from './chapter3/Library';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <Library />
    </React.StrictMode>,
    document.getElementById('root')
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();

export default Library;

export default Book;

### 학습내용

JSX 역할
- JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환한다
- React가 createElement함수를 사용하여 자동으로 자바스크립트로 변환해 준다
- 만일 JS작업할 경우 직접 createElement합수를 사용해야 한다

JSX의 장점
- 코드가 간결해 진다
- 가독성이 향상된다
- Injection Attack이라 불리는 해킹 방법을 방어함으로서 보안에 강하다

JSX 사용법
- 모든자바스크립트 문법을 지원
- 자바스크립트 문법에 XML과 HTML을 섞어서 사용
- 아래 코드의 2번 라인 처럼 섞어서 사용

    const element = 안녕{name}
- 만일 html이란 xml에 자바스크립트 코드를 사용하고 싶으면 {}괄호를 사용

Bable 호출 React.createlement();

A syntax extenstion to JavaScript = 자바스크립트의 확장문법 <br>

JavaScript + XML/HTML을 합친 것

JSX의 코드예제

    const element = h1 Hello, world! h1

내려받기

    Code -> https복사 -> openforder -> 터미널 -> git clone https주소

프로젝트 생성

    npx create-react-app 이름 

1. README.md 백업

2. local에 있는 저장소 이름 바꾸기/삭제

3. 새 프로젝트 생성(이름)

4. README.md 덮어쓰기

5. GitHub 저장소 삭제

6. 로컬에서 이름 push

7. GitHub 저장소 확인

npm start

ctrl + ` 터미널

## 0316(3주차)
### 학습내용

실습4 create-react-app // local에 react를 개발하는데 필요한 모든 패키지를 설치하고 프로젝트를 생성

cd my-app

npm start

crossorigin 속성이 필요한 이유

    CDN을 통해 React를 사용한다면, crossorigin 어트리뷰트(attribute)와 함께 사용하는 것을 권장합니다.

        //<script crossorigin src="..."></script>

CDN 링크

    //<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

    //<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

실습1 HTML만으로 간단한 웹사이트 만들기

실습2 CSS를 사용하여 웹사이트 스타일링하기

실습3 웹사이트에 React.js 추가하기 ////

리액트의 정의 : 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리 

리액트의 개념 : 복잡한 사이트를 쉽게 빠르게 만들고 관리하기 위해 만들어진 것이 리액트

리액트의 장점

    1.빠른 업데이트와 렌더링 속도 - DOM(동기식), Virtual DOM(비동기식)

        DOM - XML, HTML 문서의 각 항목을 계층을 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스

        Virtual DOM - DOM조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법

    2.컴포넌트 기반 구조

        하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있다

        리액트로 개발 하다 보면 레고 블록을 조립나는 것처럼 컴포넌트를 조합해서 웹사이트를 개발하게 된다

        재사용성이 뛰어나다

    3.재사용성

        반복적인 작업을 줄여주기 때문에 생산성을 높여 준다

        유지보수가 용이하다

        재사용이 가능 하려면 해당 모듈의 의존성이 없어야 한다

    4.든든한 지원군

        오픈소스 프로젝틀 관리하고 있어 계속 발전중

    5.활발한 지식 공유와 커뮤니티

    6.모바일 앱 개발 가능

        리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼(cross-platform) 모바일 앱을 개발 가능

리액트의 단점

    1.방대한 학습량

        자바스크립트를 공부한 경우 빠르게 학습 가능

    2.높은 상태 관리 복잡도

        state, component file cycle 등의 개념이 있지만 그리 어렵지 않음

다양한 자바스크립트 UI 프레임워크 : Stack Overflow trends

버전확인

node -v, node --version

npx- npm에서 나온것 1회성으로 실행시키기 위한것

## 0309(2주차) 

push방법과 버전확인
깃허브등록방법
HTML, CSS란 무엇인지

자바스크립트

1. ES6(ECMAScript6) 표준-ECMA-262

2.  var: 중복 선언 가능 , 재할당가능 

    let: 중복 선언 불가능. 재할당가능 

    const: 중복 선언 불가능, 재할당불가능

3. 연산자
    ex/ a=a++; , a=++a;

    let a = 1;

    let b = '1';

    a==b : true

    a===b : false

*함수*

Function statement형: 일반적 함수의 형태

Arrow function expression형: 화살표 함수

JSON = key(id)와 k-v(key-value)가 있음

html5test.com 

https://www.toptal.com/developers/gitignore //형태구성 다양함

http://bit.ly/3KHObfW //깃허브등록

https://github.com/An-Chnanwoo/23-React1.git //본인 깃허브 푸쉬파일