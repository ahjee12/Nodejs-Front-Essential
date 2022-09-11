import React from "react";

function MainContent({ text, href }) {
  // const {text, href, key, id, userId} = props
  return (
    <div>
      {/* <h1>{props.text}</h1> */}
      <a href={href}>{text}</a>
    </div>
  );
}

export default MainContent;
