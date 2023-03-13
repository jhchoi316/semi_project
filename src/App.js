import "./styles.css";
import "./DragAndDrop.js";
import Show_layer_node from "./DragAndDrop.js";

function App() {
  return (
    <>
    <div className="layer_info">
      <br></br>
      Layer Information
    </div>
    <div className="graph"></div>
    <div className="sidebar">
      <div className="sidebar_text">
        Layer
      </div>
      <Show_layer_node />
    </div>    
    </>
  );
 
}

export default App;
