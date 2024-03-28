import { useEffect, useState } from "react";
import styled from "styled-components";
import searchIcon from "../assets/ico-search.svg"
import Courses from "../component/courses/Courses.jsx";
import {parsing} from '../lectureData.js'

const html_courses = await parsing("html css");
const js_courses = await parsing("JavaScript");
const react_courses = await parsing("React");
const cs_courses = await parsing("api 브라우저");

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
      <Courses data={html_courses} title={"HTML/CSS"}/>
      <Courses data={js_courses} title={"JavaScript"}/>
      <Courses data={react_courses} title={"React"}/>
      <Courses data={cs_courses} title={"API/브라우저"}/>
    </Section>
  )
};
export default StudyPage


const Section = styled.section`
  padding: 80px 40px;
  background: #fdfaff;
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

