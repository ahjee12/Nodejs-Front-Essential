import { useSelector } from "react-redux";

export default function DoneList() {
  const DoneList = useSelector((state) => state.todo.list).filter(
    (item) => item.done === true
  );
  return (
    <section>
      {DoneList.length > 0 && <h1>완료된 목록</h1>}
      <ul>
        {DoneList.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
}
