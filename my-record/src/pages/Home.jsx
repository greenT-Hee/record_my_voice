import styled from "styled-components"
import bg from '../assets/bg.png'
import { useNavigate } from "react-router-dom"

const BgStyle = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  max-width: 100vw;
  height: 100vh;
`
const WrapCont = styled.section`
  position: absolute;
  min-width: 5000px;
  left: 50%;
  right: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
const Title = styled.h1`
  text-align: center;
  margin-bottom: 28px;
  font-size: 38px;
  font-weight: 700;
  color: #414141;
`
const BtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
`

const Btn = styled.button`
  min-width: 280px;
  border: none;
  background: #fff;
  box-sizing: border-box;
  border-radius: 32px;
  padding: 14px 0;
  font-size: 20px;
  color: #414141;
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
      <WrapCont>
        <Title>SMART VOICE RECORDER</Title>
        <BtnDiv>
          <Btn type="button" onClick={() => navigate('/studyroom')}>공부하러가기</Btn>
          <Btn type="button" onClick={() => navigate('/playground')}>놀러나가기</Btn>
        </BtnDiv>
      </WrapCont>
    </BgStyle>
  )
}

export default Home