import styled from "styled-components";
import bg from '../assets/bg.png';
import { useNavigate } from "react-router-dom";

const BgStyle = styled.section`
 background: #fff5de;
 width: 100%;
 height: 100vh;
`

const Snoopy = styled.img`
  width: 36%;
  position: absolute;
  bottom: 0;
  left: 0;
`
const WrapCont = styled.div`
  position: absolute;
  min-width: 100%;
  left: 50%;
  right: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 38px;
  font-weight: 800;
  color: #933BEF;
`
const BtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  align-items: center;
`

const Btn = styled.button`
  min-width: 240px;
  border: none;
  background: #933BEF;
  box-sizing: border-box;
  border-radius: 32px;
  padding: 12px 0;
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;

 &:hover {
  transform: scale(1.1);
 }
`

function Home() {
  const navigate = useNavigate();
  
  
  return (
    <BgStyle>
      <Snoopy src={bg} alt="" />
      <WrapCont>
        <Title>STUDY WITH MY VOICE</Title>
        <BtnDiv>
          <Btn type="button" onClick={() => navigate('/record')}>녹음하러 가기</Btn>
          <Btn type="button" onClick={() => navigate('/study')}>공부하러 가기</Btn>
        </BtnDiv>
      </WrapCont>
    </BgStyle>
  )
}

export default Home