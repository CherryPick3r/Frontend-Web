import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./pages/Game";

function App() {
  return (
    <div className="w-100 justify-content-md-center">
      <h1 className="mb-3 cherry-text-primary">CherryPicker</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Game />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
