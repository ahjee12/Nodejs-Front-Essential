// import MainHeader from "./components/MainHeader";
import MainContent from "./components/MainContent";
import CustomList from "./components/CustomList";
import Button from "./components/Button";
import "./App.css";
import { useState, useRef } from "react";

function App() {
  const array1 = ["apple", "banana", "kiwi"];
  const [text, setText] = useState("Hello");
  const [name, setName] = useState({
    first: "별별",
    last: "금",
  });
  const { first, last } = name;
  const [tasks, setTask] = useState([]);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const inputRef = useRef();

  const onChange = (e) => {
    // console.log(e);
    const inputText = e.target.value;
    setText(inputText);
  };

  const firstChange = (e) => {
    const first = e.target.value;
    setName({
      ...name,
      first,
    });
  };
  const lastChange = (e) => {
    const last = e.target.value;
    setName({
      ...name,
      last,
    });
  };

  const confirm = () => {
    // console.log(firstNameRef);
    console.log(firstNameRef.current.value);

    setName({
      first: firstNameRef.current.value,
      last: lastNameRef.current.value,
    });
  };

  const confirmArray = () => {
    const text = inputRef.current.value;
    setTask([
      ...tasks,
      {
        id: tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1,
        text,
      },
    ]);
  };

  return (
    <div className="App">
      {/* <MainHeader></MainHeader> */}
      <MainContent text="World" href="/world"></MainContent>
      <div className="List">
        <ul>
          {array1.map((e, i) => {
            return <CustomList key={i} text={`${e}번호는 ${i}`}></CustomList>;
          })}
        </ul>
        <Button></Button>
      </div>
      <div className="Add">
        <h1>
          {/* getter필요 */}
          {/* {name.last} {name.first} */}
          {last} {first}
        </h1>
        {/* setter필요 */}
        <input name="성" placeholder="성" onChange={lastChange}></input>
        <input name="이름" placeholder="이름" onChange={firstChange}></input>
        {/* last, first 동시에 ref */}
        <input name="성" placeholder="성" ref={lastNameRef}></input>
        <input name="이름" placeholder="이름" ref={firstNameRef}></input>
        {/* last, first 동시에 ref */}
        <button onClick={confirm}>추가</button>
      </div>
      <div className="Array">
        <input placeholder="aim" ref={inputRef}></input>
        <button onClick={confirmArray}>확인</button>
        <ul>
          {tasks.map((v) => (
            <li key={v.id}>{v.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
