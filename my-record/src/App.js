import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from 'styled-components'
import "./style/reset.css"
import Home from "./pages/Home";
import RecordPage from "./pages/RecordPage";
import StudyPage from "./pages/StudyPage";

function App() {
  return (
    <BrowserRouter basename="record_my_voice">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/record" element={<RecordPage />}></Route>
        <Route path="/study" element={<StudyPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
