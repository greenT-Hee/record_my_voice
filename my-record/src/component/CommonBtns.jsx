import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export function BackBtn() {
  const nav = useNavigate()
  return <BackStyle type="button" onClick={() => {nav("/")}}>◀ 뒤로가기</BackStyle>
}

export function TopbarBtn() {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left:0,
      behavior: 'smooth'
    })
  };

  return <Topbar type="button" onClick={handleScrollTop}>▲<br/>TOP</Topbar>
};



const BackStyle = styled.button`
  padding: 12px 16px;
  position: absolute;
  top: 40px;
  left: 80px;
  border-radius: 32px;
  z-index: 1000;
  line-height: 1;
  cursor: pointer;
  border: none;
  background: #ead6ff;
  color: #994bec;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
`
const Topbar = styled.button`
  width: 45px;
  height: 45px;
  position: fixed;
  bottom: 40px;
  right: 80px;
  border-radius: 50%;
  z-index: 1000;
  line-height: 1;
  cursor: pointer;
  border: none;
  background: #ead6ff;
  color: #994bec;
  font-weight: 900;
  box-shadow: 0 4px 10px rgba(0,0,0,0.18);
`