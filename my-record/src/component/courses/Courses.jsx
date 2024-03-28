import styled from "styled-components"
import emptyThumbnail from "../../assets/img-empty-thumbnail.png"
import { useNavigate } from "react-router-dom"

export default function Courses({title, data}) {
  return (
    <article>
      <WrapTop>
        <H2>💡 {title}</H2>
        <MoreBtn href={"https://www.inflearn.com/courses?s=" + encodeURI(title)} target="_blank">다른 강의 찾아보기 👉 </MoreBtn>
      </WrapTop>
      {/* card */}
      <CardList>
        {data.map((ele, idx) => {
          return (
            <Card key={idx}>
              <a href={"https://www.inflearn.com" + encodeURI(ele.link)} target="_blank" style={{textDecoration: "none"}}>
                <CardThumbnail src={ele.thumbnail ? ele.thumbnail : emptyThumbnail}  alt="썸네일" />
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
  )
}

const WrapTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 24px;
`
const H2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  line-height: 1;
  `
 const MoreBtn = styled.a`
  color: #fff;
  background: #994bec;
  border: 2px solid #994bec;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 32px;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    opacity: 0.8;
  }
 `

const CardList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 80px;
  overflow-y: hidden;
  overflow-x: scroll;
  padding-bottom: 12px;

  &::-webkit-scrollbar {
    height: 16px;
  }

  &::-webkit-scrollbar-thumb {
    background: #994bec;
    border: 4px solid#ead6ff;
    border-radius: 14px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ead6ff;
    border-radius: 16px;
  }
`
const Card = styled.li`
  flex-shrink: 0;
  width: 400px;
  min-height: 400px;
  box-sizing: border-box;
  border: 1px solid #cdcdcd;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  background: #fff;
`

const CardThumbnail = styled.img`
  width: 400px;
  height: 260px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
`

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
  line-height: 1.2;
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