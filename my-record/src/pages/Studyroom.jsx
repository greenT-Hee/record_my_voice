import { useCallback, useState } from "react";
import styled from "styled-components"


function Studyroom() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [onRec, setOnRec] = useState(false);
  const [media, setMedia] = useState("");
  const [stream, setStream] = useState("");
  const [source, setSource] = useState("");
  const [analyser, setAnalyser] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const [openCategory, setOpenCategory] = useState(false);
  const chunks = [];
  const buttonText = currentIndex >= 3 ? "끝" : "다음 문제";
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

  const handlePopup = (msg) => {
    setOpenPopup(true);
    setPopupMsg(msg);
  };


  const onRecVoice = () => {
    console.log('onRecVoice')
    const audioCtx = new window.AudioContext();

    // 1. 스크립트를 통해 음원 진행 상태에 직접 접근
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    // 2. 마이크 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
    function makeSound (stream) {
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    };

    navigator.mediaDevices.getUserMedia({audio : true}).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.addEventListener('dataavailable', (e) => {
        chunks.push(e.data);
      });

      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);
      analyser.onaudioprocess =  function (e) {
        setOnRec(true);
      };
    }).catch((err) => {
      handlePopup("😓\n마이크 사용 권한을 허용해야\n녹음을 진행할 수 있습니다.");
    })
  };

  const offRecVoice = () => {
    // Blob 데이터에 대한 응답 받기
    media.ondataavailable = function (e) {
      console.log(e.data);
      chunks.push(e.data);
      setAudioUrl(e.data);
      setOnRec(false);
    };

    // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    stream.getAudioTracks().forEach((ele) => {
      ele.stop();
    });

    // 미디어 캡처 중지 
    media.stop();
    
    // 메서드가 호출된 노드 연결 해제
    analyser.disconnect();
    source.disconnect();
  };

  const checkRecVoice = useCallback(() => {
    if(audioUrl) {
      const audio = new Audio(URL.createObjectURL(audioUrl));
      audio.play();
      // audio.pause();
      console.log(audio)
    }
  }, [audioUrl]); 

  
  

  return (
    <Section>
      <H1>🎙️ 질문에 대답해주세요</H1>
      <CateogryArea>
        <CategoryInput type="text" readOnly value={"전체"} onClick={() => setOpenCategory(true ? false : true)}/>
        {openCategory && 
          <MenuUl>
            <MenuList style={{borderRadius: "8px 8px 0 0"}}>전체</MenuList>
            <MenuList>브라우저/API</MenuList>
            <MenuList>HTML/CSS</MenuList>
            <MenuList>JavaScript</MenuList>
            <MenuList style={{borderRadius: "0 0 8px 8px", borderBottom: "none"}}>React</MenuList>
          </MenuUl>
        }
      </CateogryArea>

      {/* question */}
      <QuestionBox>
        <Question>{scriptText}</Question>
      </QuestionBox>

      {/* 버튼 */}
      <BtnUl>
        <BtnLi><Btn type="button" onClick={ onRec ? offRecVoice : onRecVoice }>{onRec ? "녹음 중지" : "녹음 시작"}</Btn></BtnLi>
        <BtnLi><Btn type="button" onClick={ checkRecVoice }>결과 확인</Btn></BtnLi>
        <BtnLi><Btn type="button" onClick={ handleClickNext }>{buttonText}</Btn></BtnLi>
      </BtnUl>

    {openPopup && 
      <PopupArticle>
        <PopupBox>
          <TextArea>{popupMsg}</TextArea>
          <PopupBtn onClick={() => setOpenPopup(false)}>닫기</PopupBtn>
        </PopupBox>
      </PopupArticle>
    }
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
const CateogryArea = styled.div`
  width: 200px;
  position: relative;
`

const CategoryInput = styled.input`
  width: 100%;
  border: 1px solid #b6b6b6;
  border-radius:  8px;
  padding: 12px;
  box-sizing: border-box;
  color: #7d7d7d;
  font-size: 12px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
`

const MenuUl = styled.ul`
  position: absolute;
  left: 0;
  top: 45px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0;
  border: 1px solid #adadad;
  border-radius: 8px;
`
const MenuList = styled.li`
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  background: #fff;
  color: #7c7c7c;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  cursor: pointer;
  border-bottom: 1px solid #adadad;
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


// 팝업
const PopupArticle = styled.article`
  width: 100%;
  background: rgba(0,0,0, 0.5);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
`

const PopupBox = styled.div`
  max-width: 320px;
  width: calc(100% - 20px);
  background: #fff;
  position: absolute;
  left: 50%;
  right: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
`

const TextArea = styled.p`
  box-sizing: border-box;
  padding: 30px 20px;
  text-align: center;
  color: #333;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  white-space: pre-wrap;
`

const PopupBtn = styled.button`
  width: 100%;
  border-radius: 0 0 8px 8px;
  border: none;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 600;
  background: #c396f7;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`