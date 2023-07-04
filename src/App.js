import {
  Routes, Route
} from "react-router-dom";

// component
import IndexPage from "./components/IndexPage";
import SignUpPage from "./components/SignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage/>}/>
      <Route path="/sign-up" element={<SignUpPage/>}/>
    </Routes>
  );
}

export default App;
