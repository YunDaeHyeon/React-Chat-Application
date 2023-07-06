import {
  Routes, Route
} from "react-router-dom";

// component
import IndexPage from "./components/IndexPage";
import SignUpPage from "./components/SignUp/SignUpPage";
import SetWorkspace from "./components/SignUp/SetWorkspace";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<IndexPage/>}/>
      <Route path="/sign-up" element={<SignUpPage/>}/>
      <Route path="/set-work" element={<SetWorkspace/>}/>
    </Routes>
  );
}

export default App;
