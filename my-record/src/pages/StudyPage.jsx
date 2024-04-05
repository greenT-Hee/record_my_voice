import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import searchIcon from "../assets/ico-search.svg"
import Courses from "../component/courses/Courses.jsx";
import { TopbarBtn, BackBtn } from "../component/CommonBtns.jsx";

function StudyPage() {  
  const [isSearch, setIsSearch] = useState(false);
  const [keyword, setKeyword] = useState(false);
  const inputRef = useRef(null)

  const handleSearch = (e) => {
    e.preventDefault();
    const searchVal = inputRef.current.value;
    setKeyword(searchVal)
    searchVal === "" ? setIsSearch(false) : setIsSearch(true);
    console.log(inputRef.current.value)
  }

 

  return (
    <Section>
      <H1>인프런 강의 듣고 레벨업</H1>
      <SearchArea>
        <SearchInput type="text" ref={inputRef}  placeholder="원하는 주제를 검색하세요" />
        <SearchButton type="button" onClick={handleSearch}>
          <img src={searchIcon} alt="검색하기" />
          <span>검색</span>
        </SearchButton>
      </SearchArea>
      {/* 강의 목록 */}
      {!isSearch && 
        <>
          <Courses title={"HTML/CSS"}/>
          <Courses title={"JavaScript"}/>
          <Courses title={"React"}/>
          <Courses title={"API/브라우저"}/>
        </>
      }
      {isSearch && <Courses title={keyword}/>}

      {/* 뒤로가기 버튼 */}
      <BackBtn />
      {/* 인프런 바로가기 버튼 */}
      <GoInflearnBtn href="https://www.inflearn.com/" target="_blank">인프런 바로가기</GoInflearnBtn>
      {/* 탑바 */}
      <TopbarBtn />
    </Section>
  )
};
export default StudyPage


const Section = styled.section`
  padding: 120px 80px;
  background: #fdfaff;
`

const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #43a77a;
  text-align: center;
`
const SearchArea = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 40px auto 100px;
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

const GoInflearnBtn = styled.a`
  padding: 12px 16px;
  position: absolute;
  top: 40px;
  right: 20px;
  border-radius: 32px;
  z-index: 1000;
  line-height: 1;
  cursor: pointer;
  border: none;
  background: #fff;
  color: #43a77a;
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  text-decoration: none;
`