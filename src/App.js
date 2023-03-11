import styled from "styled-components";

// 전체 화면(실행용)
const Background_main = styled.div`
`;

// 사이드바 보이는 부분 (피그마: Subtract)
const Background_side = styled.div`
position: absolute;
width: 91px;
height: 452px;
background: #4E5058;
`;

// layer_info가 있는 부분 (피그마: Rectangle2)
const Background_modal = styled.div`
box-sizing: border-box;
position: absolute;
width: 372px;
border:0;
height: 290px;
top: 460px;
background: #4E5058;
`;

// Layer Information 문구
const Modal_text = styled.text`
position: absolute;
width: 193.99px;
left: 91.06px;
top: 10px;
color: white;
font-weight: bold;
font-size: 1.4rem;
border: 0;
margin: 0;
`;

// Layer Node들이 있는 부분
const Background_layer_node = styled.div`
position: absolute;
width: 282px;
height: 452px;
left: 98px;
background: white;
border: 0;
margin: 0;
`;

// Layer 문구
const Layer_node_text = styled.text`
position: absolute;
width: 55.22px;
height: 26.5px;
left: 20px;
top: 70px;
background: white;
position: absolute;
font-size: 1.4rem;
font-weight: bold;
color: black:
border: 0;
margin: 0;
`;

// Layer Node들을 위한 div 컴포넌트
const Layer_node = styled.div`
position: absolute;
background: ${(props) => props.background};
width: 167px;
height: 55px;
left: 149px;
top: ${(props) => props.top};
draggable
`;

// 그래프가 보여지는 부분 (피그마: Rectangle1)
const Background_graph = styled.div`
position: absolute;
width: 1080px;
height: 720px;
left: 380px;
background: #EEEEEE;
`;

// Inspect와 Generate를 위한 button 컴포넌트
const Background_button = styled.button`
position: absolute;
width: 125px;
height: 36px;
left: ${(props) => props.left};
top: 690px;
background: #4E5058;
border-radius: 10px;
margin: 0;
border: 0;
`;

// Inspect와 Generate를 위한 text 컴포넌트
const Button_text = styled.text`
position: absolute;
width: 50px;
left: ${(props) => props.left};
top: 5px;
color: white;
font-size: 1.3rem;
`;

function App(event) {
  return (
    <Background_main>

      <Background_side>

      </Background_side>
      
      <Background_modal>
        <Modal_text>
          Layer Information
        </Modal_text>
      </Background_modal>

      <Background_layer_node>
        <Layer_node_text>
            Layer
        </Layer_node_text>
      </Background_layer_node>
      
      <Background_graph>

      </Background_graph>

      <Background_button left="1150px">
        <Button_text left="28px">
          Inspect
        </Button_text>
      </Background_button>

      <Background_button left="1300px">          
        <Button_text left="19px">
          Generate
        </Button_text>
      </Background_button>

    </Background_main>
    
  );
}
export default App;
