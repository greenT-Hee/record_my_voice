import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from 'styled-components'
import "./style/reset.css"
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import Studyroom from "./pages/Studyroom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/studyroom" element={<Studyroom />}></Route>
        <Route path="/playground" element={<Playground />}></Route>
        {/* <Route path="*" element=""></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
