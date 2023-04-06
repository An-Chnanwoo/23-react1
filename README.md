# 23-React1

# 안찬우(201830220)

## 0406(6주차)

## 작성코드 

## 학습내용





## 0330(5주차)
## 작성코드

#### 실습 4.4 시계 만들기  
#### Clock.jsx
```js
    import React from "react";

    function Clock(props){
    return(
        <div>
        <h1>안녕, 리액트!</h1>
        <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    }
    export default Clock;
```

#### index.jsx  
```js
    import Library from './chapter3/Library';
    import Clock from './chapter4/Clock';

    const root = ReactDOM.createRoot(document.getElementById('root'));

    setInterval(() => {
    root.render(
        <React.StrictMode>
        <Clock/>
        </React.StrictMode>,
        document.getElementById('root')
    );
    }, 1000);

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
```

#### 4.3 렌더링된 엘리먼트 업데이트하기 (교제 130p)  

```js
    <!DOCTYPE html>
    <html lang="ko">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>안녕, 리액트!</title>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    </head>
    <body>
    <script type="text/babel">
        function tick(){
        const element = (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
            </div>
        );
        ReactDOM.render(element, document.getElementById('root'));
        }
        setInterval(tick,1000);
    </script>
    <div id="root"></div>
    </body>
    </html>
``` 
## 학습내용
#### 5.5 컴포넌트 추출
    - 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있다
    - 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것
    - 실무에서는 처음부터 1개의 컴포넌트에 하나의 가능만 사요하도록 설계한는 것이 좋다

#### 5.4컴포넌트 합성  
    - 컴포넌트 합성은 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것
    - 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 
      복잡한 화면을 여러 개의 컴포넌트로 나누어 구현 가능
#### 5.3 컴포넌트 만들기  
    1. 컴포넌트의 종류
    - 리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용
    - 이후 Hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용
    - 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에 
    클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해야 함
        
    2. 함수형 컴포넌트
        -Welcome컴포넌트는 props를 맏아 받은 props중 name키의 값을 "안녕" 뒤에 넣어 반환한다
            function Welcome(props){
                return <h1> 안녕, {props.name}</h1>;
            }

    3. 클래스형 컴포넌트

    4. 컴포넌트 이름 짓기
        - 이름은 항상 대문자로 시작
        - 리액트는 소문자로 시작하는 컴포넌트를 DOM으로 인식하기 때문
        - 컴포넌트 파일과 컴포넌트 이름은 동일하게 해야함

    5. 컴포넌트의 렌더링
        - function Welcome(props){
            return <h1> 안녕, {props.name}</h1>;
        }
        const element = <Welcome name = "안제"/>;
        ReactDOM.render(
            element,
            document.getElementById('root');
        );
#### 5.2 props에 대해 알아보기
    1. props의 개념
        - props는 prop(property : 속성)의 준말
        - 이 props가 바로 컴포넌트 속성
        - 컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력
        - props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체
        - ex)에어비엔비  
    2. props의 특징
        - 읽기전용, 변경할 수 없다는 의미
        - 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달
    3. props 사용법
        - JSX에서는 key-value쌍으로 props를 구성  

            function App(props){
                return(
                    <Profile
                        name = "소플"
                        introduction="안녕하세요, 소플입니다."
                        viewCount={1500}
                    />
                );
            }  
#### 5.1 컴포넌트에 대해 알아보기
 - 리액트는 컴포넌트 기반의 구조를 같는다
 - 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성하는 것을 의미
 - 컴포넌트 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 줄일 수 있다
 - 컴포넌트는 자바스크립트 함수와 입력과 출력이 있다는 면에서는 유사
 - 다만 입력가 출력은 props가 담당, 출력은 리액트 엘리먼트 형태로 출력
 - 엘리먼트를 필요한 만큼 만들어 사용한다는 면에서는 객체 지향의 개념과 비슷

#### 엘리먼트 렌더링하기
#### Root DOM node  
다음 html 코드는 id값이 root인 div태그로 단순하지만 리액트에 필수로 들어가는 중요한 코드  
이 div태그안에 리액트 엘리먼트가 렌더링 되며 이 것을 DOM node라고 한다  

    <div id = "root"></div>  

#### 엘리먼트의 정의  
 - 엘리먼트는 리액트 앱을 구성하는 요소를 의미
 - 공식페이지에는 "엘리먼트는 리액트의 가장 작은 빌딩 블록들" 이라고 설명
 - 웹사이트의 경우는 DOM 엘리먼트이며 HTML요소를 의미

   #### 리액트 엘리먼트와 DOM엘리먼트의 차이점
    - 리액트 엘리먼트는 Virtual DOM 형태를 취하고 있다
    - DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무겁다
    - 반면 리액트 엘리먼트는 변화한 부분만 가지고 있다

#### 엘리먼트의 생김새  
 - 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재
 - 컴포넌트, 속성, 및 내부의 모든 자식에 대한 정보를 포합하고 있는 일반적인 자바스크립트
 - 이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있다.

    내부적으로 자바스크립트 객체를 만드는 함수 => createElement()  
    - 첫 번째 매개변수가 type. 태그가 들어가면 그대로 표현, 리액트 컴포넌트가 들어가면 결국 태그로 만든다

#### 엘리먼트의 특징  
 - 가장 큰 특징은 불변성
 - 즉, 한번 생성된 엘리먼트의 children이나 속성(attributes)을 바꿀 수 없다

    만일 내용이 바뀌면?
    - 이 때는 컴포넌트를 통해 새로운 엘리먼트를 생성
    - 그 다음 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꾼다
    - 이렇게 교체하는 작업을 위해 Virtual DOM을 사용

Clone

의존성  
package-lock.json  
pakage.json


## 0323(4주차)
## 작성코드

#### (Book.jsx)<br>

    import React from "react";

    function Book(props){
        return(
             <div>
                <h1>{`이 책의 이름은 ${props.name}입니다. `} <h1>
                <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}<h2>
             <div>
             )
    }

#### (Library.jsx)<br>

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

#### (index.js)<br>

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
## 학습내용

#### JSX 역할
- JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환한다
- React가 createElement함수를 사용하여 자동으로 자바스크립트로 변환해 준다
- 만일 JS작업할 경우 직접 createElement합수를 사용해야 한다

#### JSX의 장점
- 코드가 간결해 진다
- 가독성이 향상된다
- Injection Attack이라 불리는 해킹 방법을 방어함으로서 보안에 강하다

#### JSX 사용법
- 모든자바스크립트 문법을 지원
- 자바스크립트 문법에 XML과 HTML을 섞어서 사용
- 아래 코드의 2번 라인 처럼 섞어서 사용

    const element = 안녕{name}
- 만일 html이란 xml에 자바스크립트 코드를 사용하고 싶으면 {}괄호를 사용

Bable 호출 React.createlement();  
A syntax extenstion to JavaScript = 자바스크립트의 확장문법  
JavaScript + XML/HTML을 합친 것  
 #### JSX의 코드예제  
    const element = h1 Hello, world! h1
#### 내려받기  
    Code -> https복사 -> openforder -> 터미널 -> git clone https주소
#### 프로젝트 생성  
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
## 학습내용

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

#### 리액트의 정의  
    사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리 

#### 리액트의 개념  
    복잡한 사이트를 쉽게 빠르게 만들고 관리하기 위해 만들어진 것이 리액트

#### 리액트의 장점  

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
## 학습내용

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