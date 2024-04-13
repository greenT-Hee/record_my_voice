import styled from "styled-components"
import emptyThumbnail from "../../assets/img-empty-thumbnail.png"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useCallback, useEffect, useState } from "react";


export default function Courses({title}) {
  const [data, setData] = useState([]);
  const getHTML = async (keyword) => {
    try {
      const res = await axios.get("https://www.inflearn.com/courses?s=" + encodeURI(keyword), {headers : {
        "Access-Control-Allow-Origin" : "*",
        "User-Agent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
        "Accept-Language" : "ko,en;q=0.9,en-US;q=0.8,ko-KR;q=0.7",
        "Refer": "https://www.inflearn.com/course",
        "Origin" : 'xhttps://www.inflearn.com/courses'
      }});
      return res;
    } catch (err) {
      console.log(err);
    }
  }
  
  const parsing = useCallback( async (keyword) => {
    const cheerio = require('cheerio');
    const html = await getHTML(keyword);
    const $ = cheerio.load(html.data);
    const $cousreList = $(".course_card_item");
    let courses = [];
    $cousreList.each((idx, node) => {
      courses.push({
        title: $(node).find('.course_card_item .course_title:eq(0)').text(),
        instructor: $(node).find('.course_card_item .instructor').text(),
        price: $(node).find('.course_card_item .card-content .price').text().split("₩")[1],
        thumbnail: $(node).find('.course_card_item .card-image .is_thumbnail > img').attr("src"),
        link: $(node).find('.course_card_item .e_course_click').attr("href"),
      })
    })
    setData(courses);
  }, [title])

  useEffect(() => {
    parsing(title);
  }, [parsing]);

  return (
    <article>
      <WrapTop>
        <H2>💡 {title}</H2>
        <MoreBtn href={"https://www.inflearn.com/courses?s=" + encodeURI(title)} target="_blank">다른 강의 찾아보기 👉</MoreBtn>
      </WrapTop>
      {data.length <=0 && <Loading>준비중, 조금만 기다려주세요 (👉ﾟヮﾟ)👉</Loading>}
      {/* card */}
      {data.length > 0 && 
        <CardList>
          {data.map((ele, idx) => {
            return (
              <Card key={idx}>
                <a href={"https://www.inflearn.com" + encodeURI(ele.link)} target="_blank" style={{textDecoration: "none"}}>
                  <CardThumbnail src={ele.thumbnail ? ele.thumbnail : emptyThumbnail}  alt="썸네일" loading="lazy"/>
                  <ContArea>
                    <CourseTitle>{ele?.title}</CourseTitle>
                    <CourseDesc>{ele?.instructor}</CourseDesc>
                    <CourseDesc>가격 <CoursePrice>{ele.price ? "₩" + ele.price + "원" : "무료"}</CoursePrice></CourseDesc>
                  </ContArea>
                </a>
              </Card>
            )
          })
          }
        </CardList>
      }
    </article>
  )
}

const Loading = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #994bec;
  padding: 80px 0;
  text-align: center;
`

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