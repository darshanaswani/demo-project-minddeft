import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage.component";
import SearchTransaction from "./routes/SearchTransaction.component";
import SearchBox from "./components/SearchBox/SearchBox.component";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchBox />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchTransaction />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
