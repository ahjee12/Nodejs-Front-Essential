import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Board from "./components/Board";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a href="profile">프로필</a>
          </li>
          <li>
            <a href="board">게시판</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
