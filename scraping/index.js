// import React from "react";
// import ReactDom from "react-dom";

function helloWorldButton() {
  // 상태 관리 - 데이터 관리
  // 비구조화 할당
  // es6문법이 자연스럽게 녹아들어가 있음 - destructure, getter, setter
  // set setClickState(value){
  // this.isClick = value }
  // isClick = false로 setted
  const [isClick, setClickState] = React.useState(false); //컴포넌트의 상태를 설정하는 메서드
  // isClick 초기값이 false인 걸 이용해서 text는 ' Hello world'로 설정
  const text = isClick ? "Bye world" : "Hello world";

  // js 확장 문법
  return React.createElement(
    "button",
    {
      onClick: () => {
        setClickState(!isClick);
      },
    },
    text
  );
  // return (
  //     <button onClick={() => setClickState(!isClick)}>
  //   <div>
  //       <span>{text}</span>
  //   </div>
  //     </button>
  // );
}
const rootContainer = document.getElementById("react-root");

ReactDOM.render(React.createElement(helloWorldButton), rootContainer);
