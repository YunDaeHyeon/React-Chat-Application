import {
  Routes, Route
} from "react-router-dom";

// component
import IndexPage from "./components/IndexPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage/>}/>
    </Routes>
  );
}

export default App;
