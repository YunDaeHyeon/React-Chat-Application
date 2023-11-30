import {
  Routes, Route
} from "react-router-dom";

// component
import IndexPage from "./components/IndexPage";
import SignUpPage from "./components/SignUp/SignUpPage";
import SetWorkspace from "./components/SignUp/SetWorkspace";
import SetTeammates from "./components/SignUp/SetTeammates";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<IndexPage/>}/>
      <Route path="/sign-up" element={<SignUpPage/>}/>
      <Route path="/create-company" element={<SetWorkspace/>}/>
      <Route path="/create-team" element={<SetTeammates/>}/>
      <Route path="/main" element={<MainPage/>}/>
    </Routes>
  );
}

export default App;
