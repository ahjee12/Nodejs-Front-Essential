import React, { useState } from "react";
import MainHeader from "./MainHeader";
import "./Button.scss";

// import styled from "styled-components";

// styled. 뒤에 html tag
// const MyButton = styled.button``;

function Button() {
  const [text, setText] = useState("보이기");

  const buttonClick = () => {
    text === "보이기" ? setText("감추기") : setText("보이기");
  };

  const conditionRendering = () => {
    // 삼항 연산
    text === "World" ? (
      <MainHeader text="World"></MainHeader>
    ) : (
      <MainHeader text="Hello"></MainHeader>
    );
  };

  return (
    <div>
      {conditionRendering}
      {text === "감추기" && <MainHeader text="Hello"></MainHeader>}
      <button onClick={buttonClick}>{text}</button>
    </div>
  );
}

export default Button;
