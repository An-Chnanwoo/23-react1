# 23-React1

# 안찬우(201830220)

## 0518(12주차)

## 작성코드
#### 13.3 (실습) Card 컴포넌트 만들기
#### Card.jsx
```js
function Card(props){
  const {title, backgroundColor, children} = props;

  return(
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px grey",
        backgroundColor: backgroundColor || "white",
      }}
    >
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default Card;
```

#### PorfileCard.jsx
```js
import Card from "./Card";

function ProfileCard(props){
  return(
    <Card title="Inje Lee" backgroundColor="#4ea04e">
      <p>안녕하세요, 소플입니다.</p>
      <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
    </Card>
  );
}

export default ProfileCard;
```
## 학습내용

### Chapter 14. 컨텍스트

#### 14.2 언제 컨텍스트를 사용해야 할까?
- 기존의 방식대로 컴포넌트의 props를 통해 넘겨주는 예를 p382에 있음
- 예제처럼 props를 통해 데이터를 전달하는 기존 방식은 컴포넌트가 깊어질 수록 복잡
- 반복적인 코드를 계속해서 작성해야 하기 때문에 비효율적이고 가독성이 떨어짐
- 컨텍스트를 사용하면 이러한 문제점을 깔끔하게 개선 가능   

- React.createContext()함수를 사용해서 ThemeContext라는 이름의 컨텍스트를 생성
- 컨텍스트를 사용하려면 컴포넌트의 상위 컴포넌트에서 Provider로 감싸주어야 함   

p382 ~ p383 예제 코드
```js
function App(props){
  return <Toolbar theme="dark"/>;
}

function Toolbar(props){
  return(
    <div>
      <ThemeButton theme={props.theme}/>
    </div>
  )
}

function ThemeButton(props){
  return <Button theme={props.theme}/>;
}
```
#### 14.1 컨텍스트란 무엇인가?
- 기존의 일반적인 리액트에서는 데이터가 컴포넌트의 props를 통해 부모에서 자식을 단방향 전달
- 컨텍스트는 리액트 컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방식대신
'컴포넌트 트리를 통해 곧바로 컴포넌트에 전달하는 새로운 방식'을 제공
- 이 것을 통해 어떤 컴포넌트랃 쉽게 데이터에 접근
- 컨텍스트를 사용하면 일일이 props로 전달할 필요 없이 데이터를 필요로 하는 컴포넌트에 바로 전달 가능

### Chapter 13. 합성vs.상속
#### 13.2 상속에 대해 알아보가
- 합성과 대비되는 개념으로 상속(Inheritance)이 있다
- 자식 클래스는 부모 클래스가 가진 변수나 함수 등의 속성을 모두 갖게 되는 개념
- 리액트에서는 상속보다는 합성을 통해 새로운 컴포넌트를 생성

* 복잡한 컴포넌트를 쪼개 여러 개의 컴포넌트로 만들고, 만든 컴포넌트를 조합하여 새로운 컴포넌트로 만들자!
#### 13.1 합성에 대해 알아보기   
- 합성(Composition)은 '여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것'   
- 조합 방법에 따라 합성의 사용 기법은 다음과 같이 나눌 수 있음
  #### 1. Containment(담다, 포합하다, 격리하다), p361
    - 특정 컴포넌트를가 하위 컴포넌트를 포함하는 형태의 합성 방법
    - 컴포넌트에 따라서는 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우 있음
    - 범용적인 '박스'역할을 하는 Sidebar 혹은 Dialog와 같은 컴포넌트에서 자주 볼 수 있음
    - 이런 컴포넌트에서는 children prop을 사용하여 자식 엘리먼트를 출력해 그대로 전달
    - 이때 children prop은 컴포넌트의 props에 기본적으로 들어있는 children속성을 사용   
    - 다음과 같이 props.children을 사용하면 해당 컴포넌트의 하위 컴포넌트가 모두 children으로 들어감
    ```js
    function FancyBorder(props){
      return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
          {props.children}
        </div>
      );
    }
    ```
  #### React.createElement()에 관하여...
  - 교제 150page에서 설명한 것과 같이 jsx를 사용하지 않는 경우의 props 전달 방법

  - JSX를 이용한 간단한 방법
  ```js
  const jsxElement = <h1 className="jsx">JSX Element</h1>
  ```
  - 리액트 기능을 사용한 방법
  ```js
  const reactElement = React.createElement(
    {className : 'obj'}, //props
    'OBJ Element' // child element
  )
  ```
  - FanctBorder 컴포넌트 사용 예제
  - WelconDialog 컴포넌트는 FancyBorder 컴포넌트 사용
  - FancyBorder 컴포넌트는 h1과 p태그에 props전달
  ```js
  function WelcomeDialog(props){
    return(
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          어서오세요
        </h1>
        <p className="Dialog-message">
          우리 사이트에 방문하신 것을 환영합니다
        </p>
      </FancyBorder>
    );
  }
  ```
  #### 2. Specialization(특수화, 전문화), p364
    - 웰컴다이얼로그는 다이얼로그의 특별케이스
    - 범용적인 개념을 구별이 되게 구체화하는 것을 특수화라고 함
    - 객체지향 언어에서는 상속을 사용하여 특수화 구현
    - 리액트에서는 합성을 사용하여 특수화를 구현
    - 다음 예와 같이 특수화는 범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 특수한 목적으로 사용
    ```js
    function Dialog(props){
      return(
        <FancyBorder color="blue">
          <h1 className="Dialog-title">
            {props.title}
          </h1>
          <p className="Dialog-message">
            {props.message}
          </p>
      </FancyBorder>
      )
    }

    function WelcomeDialog(props){
      return(
        <Dialog
          title="어서오세요"
          message="우리 사이트에 방문하신 것을 환영합니다"
        />
      );ㄴ
    }
    ```
  #### 3. Containment와 Specialization을 같이 사용하기
    - Containment를 위해서 props.children을 사용하고, Specialization을을 위해 직접 정의한 props를 사용
    - Dialog컴포넌트는 이전의 것가 비슷한데 Containment를 위해 끝부분에 props.children을 추가
    - p366 코드 예제
  ```js
      function Dialog(props){
        return(
          <FancyBorder color="blue">
            <h1 className="Dialog-title">
              {props.title}
            </h1>
            <p className="Dialog-message">
              {props.message}
            </p>
            {props.children}
        </FancyBorder>
        )
      }

      function SignUpDialog(props){
        const [nickname, setNickname] = useState('');

        const handleChange = (event) => {
          setNickname(event.target.value);
        }

        const handleSigeUp = () =>{
          alert(`어서 오세요, ${nickname}님!`);
        }

        return(
          <Dialog
            title=""
            message="">
            <input
              value={nickname}
              onChange={handleChange}/>
            <button onClick={handleSignUp}>
              가입하기
            </button>
          </Dialog>
        );
      }
    ```
## 0511(11주차)

## 작성코드

#### 12.3 (실습) 섭씨온도와 화씨온도 표시하기
#### TemperatureInput.jsx
```js
const scaleNames = {
  c: "섭씨",
  f: "화씨",
};

function TemperatureInput(props){
  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  };

  return(
    <fieldset>
      <legend>
        온도를 입력해주세요(단위:{scaleNames[props.scale]});
      </legend>
      <input value={props.temperature} onChange={handleChange}/>
    </fieldset>
  );
}

export default TemperatureInput;
```

#### Calculator.jsx
```js
import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props){
  if(props.celsius >= 100){
    return <p>물이 끓습니다.</p>
  }
  return <p>물이 끓지 않습니다.</p>
}

function toCelsius(fahrenheit){
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius){
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert){
  const input = parseInt(temperature);
  if(Number.isNaN(input)){
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Calculator(props){
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("c");
  };
  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("f");
  };

  const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return(
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)}/>
    </div>
  );
}

export default Calculator;
```
## 학습내용

중간고사 점수확인 및 리뷰

## 0504(10주차)  
## 작성코드   

#### 11.8 (실습) 사용자 정보 입력받기
#### SignUp.jsx
```js
import React, {useState} from "react";

function SignUp(props){
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");

  const handleChangeName = (event) =>{
    setName(event.target.value);
  };

  const handleChangeGender = (event) =>{
    setGender(event.target.value);
  }

  const handleSubmit = (event) =>{
    alert(`이름: ${name}, 성별: ${gender}`);
    event.preventDefault();
  };

  return(
    <form onSubmit={handleSubmit}>
      <label>
        이름: 
        <input type={Text} value={name} onChange={handleChangeName}/>
      </label>
      <br/>
      <label>
        성별: 
        <select value={gender} onChange={handleChangeGender}>
          <option value={"남자"}>남자</option>
          <option value={"여자"}>여자</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;
```

#### 10.5 (실습) 출석부 출력하기   
#### AttendanceBook.jsx
```js
import React from "react";

const students = [
  {
    id: 1,
    name: "Inje",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Bill",
  },
  {
    id: 4,
    name: "Jeff",
  },
];

function AttendanceBook(props){
  return(
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>
      })}
    </ul>
  );
}

export default AttendanceBook;
```
## 학습내용

### Chapter12. State 끌어올리기

#### 12.2 하위 컴포넌트에서 State 공유하기
1. 물의 끓음 여부를 알려주는 컴포넌트(p338 ~ p339)    
```js
function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>
}
```  

2. 입력 컴포넌트 추출하기   
- 온도를 입력받기 위한 TemperatureInput 컴포넌트(p340)   
```js
function TemperatureInput(props){
    ...
}
```   

3. 온도 변환 함수 작성하기(p341 ~ p342)   
```js
function foCelsius(fahrenheit){
    ...
}
function tryConvert(temperature, convert){
    ...
}
```

```js
    tryConvert('abc', toCelsius) //empty string을 리턴
    tryConvert('10.22', toFahrenheit) //'50.396'을 리턴
 ```

4. Shared State 적용하기(p342)
```js
return(
    ...
        // 변경 전:  <input value={temperature} onChange={handleChange}/>
        <input value={props.temperature} onChange={handleChange}/>
    ...
)
```
5. Calculator 컴포넌트 변경하기(p344)
- 상위 컴포넌트인 Calculator에서 온도 값가 단위를 각각 state를 가지고 있음
- 두 개의 하위 컴포넌트는 섭씨와 화씨로 변환된 온도 값을 업데이트하기 위한 props로 가지고 있음
- 이처럼 공통된 상위 컴포넌트로 올려서 공유하는 방법을 사용하면 더욱 간결하고 효율적
#### 12.1 Shared State
- shared state는 공유된 state를 의미
- 어떤 컴포넌트의 state에 있는 데이터를 여러 개의 하위 컴포넌트에서 공통적으로 사용하는 경우
- 하위 컴포넌트가 공통된 부모 컴포넌트의 state를 공유하여 사용하는 것을 shared state

### Chapter11. 폼
#### 11.7 Input Null Value
- 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값 변경 불가능
- value prop은 넣되 자유롭게 입력할 수 있도록 만들고 싶으면 값이 undefined 또는 null을 넣는다
```js
setTimeout(function(){
        ReactDOM.render(<input value={null} />,rootNode);
    }, 1000);
```
#### 11.6 여러 개의 입력 다루기
- 하나의 컴포넌트에서 여러개의 입력을 다루기 위해서는 여러 개의 state를 선언
```js
const [haveBreakfast, setHaveBreakfast] = useState(true);
const [numberOfGuest, setNumberOfGuest] = useState(2);

const handleSubmit = (event) => {
    alert(`아침 식사여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
}
```
예제 p321 ~ p322

#### 11.5 File input 태그
- File input 태그는 그 값이 읽기 전용이기 때문에 리액트에서는 비제어 컴포넌트
```js
<input type = "file"/>
```
#### 11.4 select 태그
- select태그도 textarea와 동일
- 목록에서 다중으로 선택이 되도록 하려면 miltiple속성 값을 true로 변경
```js
<select multiple={true} value={['B','C']}>
```
#### 11.3 textarea 태그
- HTML에서는 <textarea>의 children으로 텍스트가 들어가는 형태
```js
<textarea>
    안녕하세요, 여기에 이렇게 텍스트가 들어가게 됩니다.
</textarea>
```
- 리액트에서는 state를 통해 value라는 attribute를 변경하여 텍스트를 표시   
```js
<textarea value={value} onChange={handleChange}/>
```

#### 11.2 제어 컴포넌트   
- 제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트
- HTML 폼-> 자체적으로 state를 관리
- 제어 컴포넌트 -> 모든 데이터를 state에서 관리   

- 다음 코드는 사용자의 이름을 입력 받는 HTML폼을 리액트 제어 컴포넌트로 만든 것의 일부 코드
```js
funtion NameForm(props){
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handelSubmit = (event) => {
        alert('입력한 이름: ' + value);
        event.preventDefault();
    }
}
```
#### 11.1 폼이란 무엇인가?   
- 폼은 일반적으로 사용자로부터 입력을 받기위한 양식에서 사용

- 이 코드는 기본적인 HTML코드
```js
<form>
    <label>
        이름:
        <input type="text" name="name"/>
    </label>
    <button type="submit">제출</button>
</form>
```

### Chapter10. 리스트와 키
#### 10.4 리스트의 키에 대해 알아보기   
    - 리스트에서는 키는 "리스트에서 아이템을 구별하기 위한 고유한 문자열"   
    - 이 키는 리스트에서 어떤 아이템을 변경, 추가 또는 제거되었는지 구분하기 위해 사용
    - 키는 같은 리스트에 있는 엘리언트 사이에서만 고유한 값이면 충분

- 키값으로 인덱스를 사용하는 방법도 있음
- 인덱스 값도 고유한 값이기 때문에 기값으로 사용해도 됨
- 하지만 배열에서 아이템의 순서가 바뀔 수 있어 키값을 인덱슬 사용하는 것을 권장하지 않음
- 리액트에서는 키를 명시적으로 넣어 주지 않으면 기본적으로 이 인덱스 값을 키값으로 사용

#### 10.3 기본적인 리스트 컴포넌트   
- 앞서 작성한 코드를 변도의 컴포넌트로 분리
- 이 컴포넌트는 props로 받은 숫자를 numbers를 받아 리스트로 렌더링
```js
function NumberList(props){
    const {numbers} = numbers.map((number) =>
        <li>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers}/>,
    document.getElementById('root')
);
```
- "리스트 아이템에 무조건 키가 있어야 한다"는 경고 문구가 발생
- key에 props가 있어야함
#### 10.2 여러 개의 컴포넌트 렌더링하기   
- 배열에 들어있는 각 변수에 어떤 처리를 한 뒤 리턴하는 것   
- 같은 컴포넌트를 화면에 반복적으로 나타내야 할 경우 배열에 들어 있는 map함수를 이용   
#### map()함수의 사용법   
- 다음은 numbers 배열에 들어있는 각각의 요소를 map()을 이용하여 하나씩 추출 후 2를 곱함   
```js
const doubled = numbers.map((number) => number * 2);
```
- 리액트에서 map()함수 사용 예제
```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li>{number}</li>
);
```
- map함수에서 하나씩 꺼내서 li태그를 붙이고 listItems에 넣음   
```js
ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
);
```

#### 10.1 리스트와 키란 무엇인가?   
- 리스트를 위해 사용하는 자료구조가 바로 배열   
- 배열은 자바스크립트의 변수나 객체를 하나의 변수로 묶어놓은 것   
- 아래는 자바스크립트의 배열을 보여주는 것   
```js
const number = [1,2,3,4,5];
```
- 키는 모두 각자 고유하다는 것
- 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미
- 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링

## 0427(9주차)
## 작성코드

#### 9.5 (실습) 로그인 여부를 나타내는 툴바 만들기
#### Toolbar.jsx   
```js
import React from "react";

const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px silid grey",
  },
  greeting: {
    marginRight: 8,
  },
};

function Toolbar(props){
  const {isLoggedIn, onClickLogin, onClickLogout} = props;

  return(
    <div style={styles.wrapper}>
      {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

      {isLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
}

export default Toolbar;
```
#### LandingPage.jsx   
```js
import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };

  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return(
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div style={{padding: 16}}>소플과 함께하는 리액트 공부!</div>
    </div>
  );
}

export default LandingPage;
```

#### 8.3 (실습) 클릭 이벤트 처리하기
#### ConfirmButton.jsx   
```js
import React from "react";

class ConfirmButton extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isConfirmed: false,
    };
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm(){
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  }

  render(){
    return(
      <button 
        onClick={this.handleConfirm} 
        disabled={this.state.isConfirmed}
      >
        {this.state.isConfirmed ? "확인됨" : "확인하기"}        
      </button>
    );
  }
}

export default ConfirmButton;
```

## 학습내용

### Chapter9. 조건부 렌더링
#### 9.4 컴포넌트 렌더링 막기    
- 컴포넌트를 렌더링하고 싶지 않을 때에는 null을 리턴

```js
function WarningBanner(props){
    if(!props.warning){
        return null;
    }
    return(
        <div>경고!</div>
    );
}
```
#### 9.3 인라인 조건

- 필요한 곳에 조건문을 직접 넣어 사용하는 방법

1. 인라인 if
    - if문을 직접 사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자 사용
    - && 는 and 연자로 모든 조건이 참일 때 참
    - 첫 조건이 거짓이면 두번째 조건은 판단할 필요 없음(단축평가)
    - 판단만 하지 않는 것이고 결과 값은 그대로 리턴
2. 인라인 if-Else
    - 삼항 연산자를 사용 (조건문 ? 참일경우 : 거짓일경우)
    - 문자열이나 엘리먼트를 넣어서 사용할 수도 있음
#### 9.2 엘리먼트 변수

- 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수
- 272p 코드 처럼 state에 따라 button 변수에 컴포넌트 객체를 저장하여 return문에서 사용

```js
let button;
if(isLoggedIn){
    button = <LogoutButton onClick={handleLogoutClick}/>;
} else {
    button = <LoginButton onClick={handleLoginClick}/>;
}
return (
    <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
    </div>
)
```
#### 9.1 조건부 렌더링이란?

```js
functing Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn){
        return <UserGreeting/>;
    }
    return <UserGreeting/>;
}
```

    - props로 전달 받은 isLoggedIn이 true면 <UserGreeting/>을,   
      false면 <GuestGreeting/>을 return   
    - 이와 같은 렌더링을 조건부 렌더링
### Chapter8. 이벤트 핸들링

#### 8.2 Arguments 전달하기

- 함수를 정의할 때는 파라미터(Parameter) 혹은 매개변수
- 함수를 사용할 때는 아귀먼트(Argument) 혹은 인자
- 이벤트 핸들러에 매개변수를 전달해야 하는 경우도 많음   

```js
<button onClick={(event) => this.deleteItem(id, event)}> 삭제하기</button>
<button onClick={this.deleteItem.bind(this, id)}> 삭제하기</button>
```

- 위 코드는 모두 동일한 역할을 하지만 하나는 화살표 함수를 다른 하나는 bind를 이용
- event라는 매개변수는 리액트의 이벤트 객체를 의미
- 두 방법 모두 첫 번째 매개변수는 id이고 두 번째 매개변수로 event 전달
- 첫 번째코드는 명시적으로 event를 매개변수로 넣어줌
- 두 번째코드는 id 이후 두번째 매개변수로 event가 자동 전달


#### 8.1.2 이벤트 핸들러 추가 방법

    - 버튼을 클릭하면 handleCick() 함수 호출하도록 되어 있음   
    - bind를 사용하지 않으면 this.handleCick은 글로벌 스코프에서 호출되어, undefined로 사용 못 함   
    - bind를 사용하지 않으려면 화살표함수를 사용해도 됨
    - 하지만 클래스 컴포넌트는 이제 거의 사용하지 않음

- 함수형에서 이벤트 핸들러를 정화하는 방법은 2가지
    1. 방법 1. 함수 안에 함수로 정의
    ```js
        function handleCick(){
            setIsToggleOn((isToggleOn) => !isToggleOn);
        }
    ```
    2. 방법 2. arrow function을 사용하여 정의
    ```js
        const handleClick = () => {
            setIsToggleOn((isToggleOn) => !isToggleOn);
        }
- 함수형에서는 tHis를 사용하지 않고 onClick에서 바로 HandleClick을 넘김
#### 8.1.1 이벤트 처리하기   

- DOM에서 클릭 이벤트를 처리하는 예제 코드
```js
    <button onClick="activate()">
        Activate
    </button>
 ```

- React에서 클릭이벤트 처리하는 예제 코드   
 ```js
    <button onClick={activate}>
        Activate
    </button>
 ```

- 둘의 차이점은
        1. 이벤트 이름이 onClick에서 onClick으로 변경   
        2. 전달하려는 함수는 함수열에서 함수 그대로 전달
    
 - 이벤트가 발생 했을 때 해당 이벤트를 처리하는 함수를 "이벤트 핸들러" 라고 함
 - 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 "이벤트 리스너" 라고도 함

## 0420(8주차) 중간

## 0413(7주차)

## 작성코드

#### 7.9 (실습) 훅을 사용한 컴포넌트 개발

#### index.js
```js
import Accommodate from './chapter7/Accommodate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Accommodate/>
  </React.StrictMode>
);
```
#### Accommodate.jsx
```js
import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props){
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log("=====================");
    console.log("useEffect() is called.");
    console.log(`isFull: ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]);
  
  return(
    <div style={{padding:16}}>
      <p>{`총 ${count}명 수용했습니다.`}</p>

      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>
        퇴장
      </button>

      {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accommodate;
```

#### useCounter.jsx
```js
import React, {useState} from "react";

function useCounter(initialValue){
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

  return [count, increaseCount, decreaseCount];
}

export default useCounter;
```
#### 생명주기 함수 사용해보기 
notifications 비우기   
```js
this.setState({
    notifications: []//notifications,
});
```

NotificationList.jsx에 추가
```js 
 key={notification.id}
 id={notification.id}
```

Notification.jsx에 추가  
```js
  componentDidMount(){
    console.log("componentDidMount() called.");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate() called.");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount() called.");
  }
```
## 학습내용
소스와 인덱스  
노드 모듈제외 보내기  
동작여부
#### 7.10 마치며 (p243 ~ 245)
요약 정리된것 확인하기

1. 훅
    - 훅이란?
    - useState
    - useEffect
    - useMemo
    - useCallback
    - useRef
2. 훅의 규칙
    - 최상위 레벨에서만 호출
    - 리액트 함수 컴포넌트에서만 훅을 호출
3. 커스텀 훅

p231 ~ p232 NOTE설명 확인하기
#### 7.8 나만의 훅 만들기 (p226 ~ p232)
    1. 커스텀 훅을 만들어야 하는 상황
    2. 커스텀 훅 추출하기
```js
    const[isOnline, setIsOnline] = useState(null);
```
    3. 커스텀 훅 사용하기
```js
    const isOnline = useUserStatus(props.user.id);
```
#### 7.7 훅의 규칙 (p224)
    - 첫 번째 규칙은 무조건 '최상위 레벨에서만 호출'해야만 한다는 것
    - 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안됨
    - 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야함
    - p224의 코드는 조건에 따라 호출됨으로 잘못된 코드
    - 두 번째 규칙은 리액트 함수 컴포넌트에서만 훅을 호출 해야함
    - 일반 자바스크립트 함수에서 호출하면 안됨
    - 훅은 리액트 함수형 컴포넌트 훅은 직접 만든 커스텀 훅에서만 호출 가능

#### 7.6 useRef (p221)
    - useRef()훅은 레퍼런스를 사용하기 위한 훅
    - 레퍼런스란 '특정 컴포넌트에 접근할 수 있는 객체'를 의미
    - useRef() 훅은 바로 이 레퍼런스 객체를 반환
    - 레퍼런스 객체에는 .current라는 속성이 있는데 이것은 현재 참조하고 있는 엘리먼트를 의미   
```js
    const refContainer = useRef(초기값);
```
#### 7.5 useCallback (p219)
    - useCallback()은 useMemo()와 유사한 역할
    - 차이점은 '값이 아닌 함수를 반환'하는 점
    - 의존성 배열을 파라미터롤 받는 것은 useMemo와 동일
    - 파라미터로 받은 함수를 콜백이라고 부름
    - useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백함수를 반환   
```js
    const memoizedCallback = useCallback(
        () => {
            doSomething(의존성 변수1, 의존성 변수2);
        },
        [의존성 변수1, 의존성 변수2]
    );
```

#### 7.4 useMemo (p217)
    - useMemo() 훅은 Memoizde value를 리턴하는 훅
    - 이전 계산값을 갖고 있기 때문에 연산량이 많은 작업의 반복을 피할 수 있음
    - 렌더링이 일어나는 동안 실행
    - 렌더링이 일어나는 동안 실행되어서는 안될 작업을 넣으면 안됨
    - ex> useEffect 사이드 이펙트 같은 것   
```js
    const memoizedValue = useMemo(
        () => {
            //연산량이 높은 작업을 수행하여 결과를 반한
            return computeExpensiveValue(의존성 변수1, 의존성 변수2);
        },
        [의존성 변수1, 의존성 변수2]
    );
```

- 다음 코드와 같이 의존성 배열을 넣지 않을 경우, 렌더링이 일어날 때마다 매번 함수가 실행   
- 따라서 의존성 배열을 넣지 않은 것은 의미가 없음   
- 빈 배열을 넣을 시 컴ㅍ넌트 마운트 시에만 함수가 실행   
#### 7.3 useEffect (p212)
    - useState와 함께 가장 많이 사용하는 Hook
    - 사이드 이펙트를 수행하기 위한 것
    - 영어로 부작용을 의미, '개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것'
    - 리액트에서는 효과 혹은 영향을 뜻하는 effect의 의미
    - 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업
    - 다른 컴포넌트에 영향을 미칠 수 있으며, '렌더링 중에는 작업이 완료될 수 없기 때문'에 렌더링이 끝난 후 실행되야 함
    - '클래스 컴포넌트의 생명주기와 같은 기능을 하나로 통합한 기능을 제공'
    - useEffect가 effect에 가깝다고 설명하지만 오해에 불과함
    - Side effet는 본래의 목적보다 부수적으로 다른효과가 있는것을 의미   

    useEffect 사용법
        - 첫 번째 파라미터는 '이펙트 함수'가 들어가고, 두 번째 파라미터로는 '의존성 배열'이 들어감
        - useEffect(이펙트함수, 의존성 배열);

        - 의존성 배열은 이펙트가 의존하고 있는 배열로, '배열 안에 있는 변수 중에 하나라도 변하면 이펙트 함수가 실행

```js
useEffect(() => {
    // 컴포넌트가 마운트 된 이후,
    // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
    // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
    //의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
    ...
    
    return () => {
        //컴포넌트가 마운트 해제 되기 전에 실행됨
        }
    } [의존성 변수1, 의존성 변수2]
);
```
#### 7.2.1 useState()함수 사용법
```js
    import React, {useState} from "react"

    function Counter(props){
        const [count, setCount] = useState(0);

        return(
            <div>
                <p> 총 {count}번 클릭</p>
                <button onClick={() => setCount(count +1)}>
                    클릭
                </button>
            </div>
        );
    }
```
#### 7.2 useState (p209)
    - useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook
    - 버튼을 클릭할 때마다 카운트가 증가하는 함수형 컴포넌트

#### 7.1 훅 (p208)
    - 클래스형 컴포넌트에서는 생성자에서 state를 정의하고 setState()함수를 통해 state를 업데이트
    - 이전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없다
    - 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 훅(Hook)
    - 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현
    - Hook이란 'state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수'
    - 훅의 이름은 모두 'use'로 시작
    - 사용자 정의 훅(custom hook)을 만들 수 있으며 이 경우에 이름은 자유롭게 할 수 있으나 'use'로 반드시 시작해야함.

React Developer Tools
-  리액트를 위해서 별도로 개발된 React Developer Tools라는 도구를 이용하는 것이 좋음

## 0406(6주차)

## 작성코드
#### 6.3.1(실습) state와 생명주기 함수 사용하기

#### index.js
```js
    import NotificationList from './chaptet6/NotificationList';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <NotificationList/>
    </React.StrictMode>
    );
```
#### NotificationList.jsx
```js
    import React from "react";
    import Notification from "./Notification";

    const reservedNotifications = [
    {
        messge: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        messge: "점심 식사 시간입니다.",
    },
    {
        messge: "이제 곧 미팅이 시작됩니다.",
    },
    ];

    var timer;

    class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
        Notifications: [],
        };
    }
    componentDidMount(){    //JS의 setInterval()함수를 사용해서 1초마다 작업을 수행중
        const {notifications} = this.state;
        timer = setInterval(() => {     //Line4 에서 설정해 놓은 배열 reservedNotification로 부터 데이터를 하나씩 가져아 state에 있는 notification 배열에 넣고 업데이트
        if(notifications.length < reservedNotifications.length){
            const index = notifications.length;
            notifications.push(reservedNotifications[index]);
            this.setState({
            notifications: notifications,
            });
        } else {
            clearInterval(timer);
        }
        }, 1000);
    }
    render(){
        return(
        <div>
            {this.state.notifications.map((notification) => {
            return <Notification messge={notification.messge}/>;
            })}
        </div>
        );
    }
    }
    export default NotificationList;
```
#### Notification.jsx  
```js
    import React from "react";

    const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText:{
        color: "black",
        fontSize: 16,
    },
    };

    class Notification extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {};
    }
    render(){
        return(
        <div style={styles.wrapper}>
            <span style={styles.messageText}>
            {this.props.message}
            </span>
        </div>
        );
    }
    }

    export default Notification;
```
#### 5.6(실습) 댓글 컴포넌트 만들기

#### Comment.jsx  
```js
    import React from "react";

    function Comment(props){
    return (
        <div style={styles.wrapper}>
        <div style={styles.imageContainer}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="프로필 이미지" style={styles.image}/>
        </div>
        <div style={styles.contentContainer}>
            <span style={styles.nameText}>이인재</span>
            <span style={styles.commentText}>제가 만든 첫 컴포넌트 입니다.</span>
        </div>
        </div>
    )
    }
    export default Comment;
```

#### CommentList.jsx  
```jsx
    import React from "react";
    import Comment from "./Comment";

    function CommentList(props) {

    return (
        <div>
        <Comment/>
        </div>
    );
    }
    export default CommentList;
```
#### index.js
```js
import CommentList from './chapter5/CommentList';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
  <React.StrictMode>
    <CommentList/>
  </React.StrictMode>,
);
```

## 학습내용
#### 6.3.2 React Developer Tools 설치하기

React Developer Tools검색

#### 6.2 생명주기 알아보기
    -생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것
    -constructor가 실행되면서 컴포넌트가 생성
    -생성 직후 conponentDidMount()함수가 호출됨
    -컴포넌트가 소멸하기 전까지 여러번 렌더링
    -렌더링은 porps, setState(), forceUpdate()에 의해 상태가 변경되면 이루어짐
    -렌더링이 끝나면 conponentDinUpdate()함수가 호출
    -컴포넌트가 언마운트 되면 conponentWillUnmount()함수가 호출

#### component

#### element

#### instance
#### 6.2 state의 특징  
    -리액트 만의 특별한 형태가 아님 단지 자바스크립트 객체일 뿐이다

    -Like는 class컴포넌트
    -constructor는 생성자익 그 안에 있는 this.state가 현 컴포넌트의 state
    -함수형에서는 useState()라는 함수를 사용
```js
    class LikeButton extends React.Component{
        constructor(props){
            super(props);
        }
    }
```
#### 6.1 state  
    -state는 리액트 컴포넌트의 상태를 의미
    -상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미
    -정확히는 변경가능한 데이터를 의미
    -state가 변하면 다시 렌더링이 되기 때문에 렌더링가 관련된 값만 state에 포합시켜야 함

#### 5.5 컴포넌트 추출 (p157~160)
    - 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있다
    - 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것
    - 실무에서는 처음부터 1개의 컴포넌트에 하나의 가능만 사요하도록 설계한는 것이 좋다

 ```js
    <div>className="user-info">
        <img className="avatar" 
            src={props.author.avatarUrl} 
            alt = {props.author.name}/>
    </div>
```
위의 결과가 아래의 결과로
```js
    function Avatar(props){
        return(
            <img className="avatar" 
                src={props.author.avatarUrl} 
                alt = {props.author.name}/>
        )
    }
```
추출 후 다시 결합한 UesrInfo를 Comment 컴포넌트 반영하면 다음과 같은 모습이 된다
```js
    <Avatar user={props.aughor}/>
```


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
```js
            function Welcome(props){
                return <h1> 안녕, {props.name}</h1>;
            }
```
    3. 클래스형 컴포넌트

    4. 컴포넌트 이름 짓기
        - 이름은 항상 대문자로 시작
        - 리액트는 소문자로 시작하는 컴포넌트를 DOM으로 인식하기 때문
        - 컴포넌트 파일과 컴포넌트 이름은 동일하게 해야함

    5. 컴포넌트의 렌더링

```js
        function Welcome(props){
            return <h1> 안녕, {props.name}</h1>;
        }
        const element = <Welcome name = "안제"/>;
        ReactDOM.render(
            element,
            document.getElementById('root');
        );
```
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
```js
            function App(props){
                return(
                    <Profile
                        name = "소플"
                        introduction="안녕하세요, 소플입니다."
                        viewCount={1500}
                    />
                );
            } 
```
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