// 디스패스 함수, 액션을 불러옴
// action -> reducer
// reducer-> store변경
import { combineReducers } from "redux";
import todo from "./modules/todo";
import user from "./modules/user";

// sub reducer
export default combineReducers({
  todo,
  user,
});

// root reducer
// const rootReducer = {
//   todo: {
//     list: [
//       {
//         id: 0,
//         text: "척추 펴기",
//         done: true,
//       },
//       {
//         id: 1,
//         text: "물 마시기",
//         done: false,
//       },
//     ],
//   },
//   user: {},
// };
