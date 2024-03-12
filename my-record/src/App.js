import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/reset.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element=""></Route> */}
          {/* <Route path="*" element=""></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
