import React, { useState } from "react";

function MainHeader() {
  const [text, setClick] = useState("Hello");
  return (
    <h1
      onClick={() => {
        setClick("Bye");
      }}
    >
      {text}
    </h1>
  );
}

/**
    class MainHeader extends React.Component{
        constructor(){}

        render(){
            return ()
        }
    }
    
 */
export default MainHeader;
