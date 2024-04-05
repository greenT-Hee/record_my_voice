import axios from "axios";

  const getHTML = async (keyword) => {
    try {
      const res = await axios.get("https://www.inflearn.com/courses?s=" + encodeURI(keyword), {headers : {
        "Access-Control-Allow-Origin" : "*"
      }});
      return res;
    } catch (err) {
      console.log(err);
    }
  }
  
  export const parsing = async (keyword) => {
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
    console.log(courses);
    return courses;
  }