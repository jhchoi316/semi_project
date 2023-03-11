import styled from "styled-components";

// 전체 화면(실행용)
const Background_main = styled.div`
width: 100;
height: 100vh;
background: white;
`;

// layer_info가 있는 부분 (피그마: Rectangle2)
const Background_modal = styled.div`
box-sizing: border-box;
position: absolute;
width: 370px;
border:0;
height: 290px;
top: 460px;
background: #4E5058;
`;

//  layer information 문구
const Modal_text= styled.text`
position: absolute;
width: 193.99px;
left: 91.06px;
top: 10px;
color: white;
font-weight: bold;
font-size: 1.4rem;
`;

// 사이드바 보이는 부분 (피그마: Subtract)
const Background_side = styled.div`
position: absolute;
width: 91px;
height: 600px;
background: #4E5058;
`;

// 그래프가 보여지는 부분 (피그마: Rectangle1)
const Background_graph = styled.div`
position: absolute;
width: 1080px;
height: 720px;
left: 380px;
background: #EEEEEE;
`;

// Inspect 부분 (피그마: Group 63)
const Background_inspect = styled.button`
position: absolute;
width: 125px;
height: 36px;
left: 1150px;
top: 690px;
background: #4E5058;
margin: 0;
border-radius: 10px;
border: 0;
`;

// Inspect 문구
const Inspect_text = styled.text`
position: absolute;
width: 50px;
left: 28px;
top: 5px;
color: white;
font-size: 1.3rem;
`;

// Generate 부분 (피그마: Group 54)
const Background_generate = styled.button`
position: absolute;
width: 125px;
height: 36px;
left: 1300px;
top: 690px;
background: #4E5058;
margin: 0;
border-radius: 10px;
border: 0;
`;

// Generate 문구
const Generate_text = styled.text`
position: absolute;
width: 50px;
left: 19px;
top: 5px;
color: white;
font-size: 1.3rem;
`;

function App(event) {
  return (
    <Background_main>
      <Background_modal>
        <Modal_text>
          Layer Information
        </Modal_text>
      </Background_modal>
      <Background_side></Background_side>
      <Background_graph></Background_graph>
      <Background_inspect>
        <Inspect_text>
          Inspect
        </Inspect_text>
      </Background_inspect>
      <Background_generate>
        <Generate_text>
          Generate
        </Generate_text>
      </Background_generate>
    </Background_main>
    
  );
}
export default App;
