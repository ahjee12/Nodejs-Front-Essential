import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../store/modules/todo";
export default function AllTodoList() {
  // root reducer 상태
  const AllList = useSelector((state) => state.todo.list);
  const OnList = useSelector((state) => state.todo.list).filter(
    (item) => !item.done
  );
  const inputRef = useRef();
  const dispatch = useDispatch();

  // 생성 시 id 초기화
  const createTodoItem = () => {
    return dispatch(
      create({ id: AllList.length, text: inputRef.current.value })
    );
  };
  return (
    <section>
      <h1>할 일 목록</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={createTodoItem}>확인</button>
      </div>
      <ul>
        {OnList.map((item) => {
          return (
            <li key={item.id}>
              {item.text}
              <button
                onClick={() => {
                  dispatch(done(item.id));
                }}
              >
                완료
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
