import { useState } from "react";
import styled from "styled-components"


function Studyroom() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const buttonText = currentIndex >= 3 ? "끝" : "다음";
  const progressIndex  = currentIndex >= 3 ? 3 : `${currentIndex + 1}}`;
  const texts = [
    '1. 브라우저 렌더링 순서를 설명해주세요.',
    '2. 리액트를 왜 사용하는가',
    '3. 타입스크립트 사용 여부',
    '수고하셨습니다. 🙌'
  ];
  const scriptText = texts[currentIndex];

  const handleClickNext = (e) => {
    console.log(currentIndex)
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= 4) return 0;
      return newIndex;
    })
  }

  return (
    <Section>
        <H1>🎙️ 질문에 대답해주세요</H1>
        <MenuUl>
          <MenuList>브라우저/API</MenuList>
          <MenuList>HTML/CSS</MenuList>
          <MenuList>JavaScript</MenuList>
          <MenuList>React</MenuList>
          <MenuList>TypeScript</MenuList>
        </MenuUl>

        {/* question */}
        <QuestionBox>
          <Question>{scriptText}</Question>
        </QuestionBox>

        {/* 버튼 */}
        <BtnUl>
          <BtnLi><Btn type="button">녹음 시작</Btn></BtnLi>
          <BtnLi><Btn type="button">결과 확인</Btn></BtnLi>
          <BtnLi><Btn type="button" onClick={handleClickNext}>저장 후 다음</Btn></BtnLi>
        </BtnUl>
    </Section>
  )
}

export default Studyroom

const Section = styled.section`
  max-width: 850px;
  margin: 120px auto;
  box-sizing: border-box;
  `
const H1 = styled.h1`
  font-size: 18px;
  color: #333; 
  font-weight: 700;
  text-align: center;
  padding: 0 0 30px;
`

const MenuUl = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`
const MenuList = styled.li`
  width: 150px;
  box-sizing: border-box;
  padding: 12px 16px;
  background: #d59aff;
  border-radius: 60px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  cursor: pointer;
`

const QuestionBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background: #f0f0f0;
  color: #333;
  margin: 24px 0;
  height: 250px;
`

const BtnUl =  styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`
const BtnLi =  styled.li`
  width: 120px;
`
const Btn =  styled.button`
  width: 100%;
  border: 2px solid #a5a5a5;
  background: #fff;
  color: #a5a5a5;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 0;
  cursor: pointer;
  
  &:hover {
    border: 2px solid #d59aff;
    color: #d59aff;
  }
`

const Question = styled.p`
  vertical-align: middle;
`