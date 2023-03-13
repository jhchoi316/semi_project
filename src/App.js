import "./styles.css";
import Sidebar from "./Sidebar.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="layer_info">
        <br></br>
        Layer Information
      </div>
      <Sidebar />
    </DndProvider>
  );
}

export default App;
