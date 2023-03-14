import { Show_layer_node } from "./DragAndDrop";

// DragDrop()
export default function Sidebar() {
  return (
    <>
      {/* Picture 부분 */}
      <Show_layer_node />
      {/* Board 부분 */}
      <div className="graph"></div>
    </>
  );
}
