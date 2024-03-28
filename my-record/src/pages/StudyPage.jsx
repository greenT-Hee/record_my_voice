import { useEffect, useState } from "react";
import { parsing } from "../lectureData.js"
import styled from "styled-components";
import searchIcon from "../assets/ico-search.svg"

const js_courses = await parsing("html css");
function StudyPage() {

  return (
    <Section>
      <H1>👩‍💻 인프런 강의 듣고 레벨업</H1>
      <SearchArea>
        <SearchInput type="text" />
        <SearchButton>
          <img src={searchIcon} alt="검색하기" />
          <span>검색</span>
        </SearchButton>
      </SearchArea>
      <article>
        <H2>💡 HTML/CSS</H2>
        {/* card */}
        <CardList>
          {js_courses.map((ele, idx) => {
            return (
              <Card key={idx}>
                <a href="#none" style={{textDecoration: "none"}}>
                  <CardThumbnail src={ele.thumbnail} alt="썸네일" />
                  <ContArea>
                    <CourseTitle>{ele?.title}</CourseTitle>
                    <CourseDesc>{ele?.instructor}</CourseDesc>
                    <CourseDesc>가격<CoursePrice>{ele.price ? "₩" + ele.price + "원" : "무료"}</CoursePrice></CourseDesc>
                  </ContArea>
                </a>
              </Card>
            )
          })
          }
        </CardList>
      </article>
    </Section>
  )
};
export default StudyPage

const ContArea = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 16px 12px;
`
const CourseTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  padding-bottom: 12px;
`

const CourseDesc = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #555;
  padding-bottom: 5px;
`

const CoursePrice = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: #fb5454;
    padding-bottom: 5px;
  `

const Section = styled.section`
  padding: 80px 20px;
`

const H1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  text-align: center;
`
const SearchArea = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 60px auto;
  position: relative;
`
const SearchInput = styled.input`
  width: calc(100% - 24px);
  padding: 12px;
  border-radius: 32px;
  border: none;
  outline: 1px solid #838383;

  &:focus {
    outline: 2px solid #c88cfd;
  }
`
const SearchButton = styled.button`
  position: absolute;
  right: 16px;
  top: 9px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  border: none;
  background: #fff;
  cursor: pointer;
`

const H2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0 0 24px;
  line-height: 1;
`

const CardList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;

  overflow-y: hidden;
  overflow-x: scroll;
`
const Card = styled.li`
  flex-shrink: 0;
  width: 400px;
  box-sizing: border-box;
  border: 1px solid #cdcdcd;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
`

const CardThumbnail = styled.img`
  width: 400px;
  height: 220px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
`