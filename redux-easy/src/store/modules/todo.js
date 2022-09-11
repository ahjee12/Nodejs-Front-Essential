// 액션 타입 - 문자열!
const CREATE = "todo/CREATE";

const DONE = "todo/DONE";

// (★★action★★) action type 함수 - 생성
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

// action type 함수 - 완료
export function done(id) {
  return {
    type: DONE,
    id,
  };
}

// 초기 상태
const initState = {
  list: [
    {
      id: 0,
      text: "척추 펴기",
      done: true,
    },
    {
      id: 1,
      text: "물 마시기",
      done: false,
    },
  ],
};

// (★★eventListener★★) reducer
// state에 아무것도 들어가지 않을 때 initState을 넣음
// action.type = CREATE / action.payload = {id: 0, text: ''}
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      // state.todo.list
      return {
        ...state,
        // The concat() method can also concatenate values to an array.
        // state.list는 array, concat() 인자는 object(value)
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((item) => {
          return item.id === action.id ? { ...item, done: true } : item;
        }),
      };
    default:
      return state;
  }
}
