import { useEffect, useState } from "react";
import { parsing } from "../lectureData.js"
import styled from "styled-components";
import searchIcon from "../assets/ico-search.svg"

// const js_courses = await parsing("javascript");
function StudyPage() {

  return (
    <Section>
      <H1>👩‍💻 강의 듣고 레벨업하기</H1>
      <SearchArea>
        <SearchInput type="text" />
        <SearchButton>
          <img src={searchIcon} alt="검색하기" />
          <span>검색</span>
        </SearchButton>
      </SearchArea>
      <article>
        <H2>HTML/CSS</H2>
        {/* card */}
        <CardList>
          <Card>
            <a href="#none">
              <CardThumbnail src="https://file.miricanvas.com/template_thumb/2020/04/23/6087-1587631276040/394a9de1-35a8-4f5f-956b-b71a315652fe/thumb.jpg" alt="" />
              <div>
                <h3>강의 제목1</h3>
                <p>강의 설명</p>
                <p>강사이름</p>
                <p>가격 <span>1000</span>원</p>
              </div>
            </a>
          </Card>
          <Card>
            <a href="#none">
              <CardThumbnail src="https://file.miricanvas.com/template_thumb/2020/04/23/6087-1587631276040/394a9de1-35a8-4f5f-956b-b71a315652fe/thumb.jpg" alt="" />
              <div>
                <h3>강의 제목1</h3>
                <p>강의 설명</p>
                <p>강사이름</p>
                <p>가격 <span>1000</span>원</p>
              </div>
            </a>
          </Card>
          <Card>
            <a href="#none">
              <CardThumbnail src="https://file.miricanvas.com/template_thumb/2020/04/23/6087-1587631276040/394a9de1-35a8-4f5f-956b-b71a315652fe/thumb.jpg" alt="" />
              <div>
                <h3>강의 제목1</h3>
                <p>강의 설명</p>
                <p>강사이름</p>
                <p>가격 <span>1000</span>원</p>
              </div>
            </a>
          </Card>
          <Card>
            <a href="#none">
              <CardThumbnail src="https://file.miricanvas.com/template_thumb/2020/04/23/6087-1587631276040/394a9de1-35a8-4f5f-956b-b71a315652fe/thumb.jpg" alt="" />
              <div>
                <h3>강의 제목1</h3>
                <p>강의 설명</p>
                <p>강사이름</p>
                <p>가격 <span>1000</span>원</p>
              </div>
            </a>
          </Card>
          <Card>
            <a href="#none">
              <CardThumbnail src="https://file.miricanvas.com/template_thumb/2020/04/23/6087-1587631276040/394a9de1-35a8-4f5f-956b-b71a315652fe/thumb.jpg" alt="" />
              <div>
                <h3>강의 제목1</h3>
                <p>강의 설명</p>
                <p>강사이름</p>
                <p>가격 <span>1000</span>원</p>
              </div>
            </a>
          </Card>
          <Card>
            <a href="#none">
              <CardThumbnail src="https://file.miricanvas.com/template_thumb/2020/04/23/6087-1587631276040/394a9de1-35a8-4f5f-956b-b71a315652fe/thumb.jpg" alt="" />
              <div>
                <h3>강의 제목1</h3>
                <p>강의 설명</p>
                <p>강사이름</p>
                <p>가격 <span>1000</span>원</p>
              </div>
            </a>
          </Card>
        </CardList>
      </article>
    </Section>
  )
};

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
  outline: none;
  border: 1px solid #838383;

  &:focus {
    outline: 1px solid #c88cfd;
    border: none;
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
  font-size: 18px;
  font-weight: 600;
  color: #333;
  padding: 0 0 24px;
`

const CardList = styled.ul`
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;

  overflow-x: scroll;
`
const Card = styled.li`
  width: 400px;
  box-sizing: border-box;
  border: 1px solid #cdcdcd;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
`

const CardThumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
`
export default StudyPage