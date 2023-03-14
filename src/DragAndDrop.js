import "./styles.css";
import Styled from "styled-components";
import { Layer_node } from "./Layer_node";
import Node from "./Node";

export const Node_component = Styled.div`
position: absolute;
height: 7%;
width: 43%;
left: 15%;
top: ${(props) => props.top};
background: ${(props) => props.background};
border-radius: 10px;
text-align: center;
font-size: 1.0rem;
line-height: 220%;
border: 0px;
margin: 0px;
`;
const NodeList = [
  {
    id: 1,
    name: "Conv2d",
    top: Layer_node["Conv2d"].top,
    background: Layer_node["Conv2d"].background,
  },
  {
    id: 2,
    name: "BatchNorm2d",
    top: Layer_node["BatchNorm2d"].top,
    background: Layer_node["BatchNorm2d"].background,
  },
  {
    id: 3,
    name: "ReLU",
    top: Layer_node["ReLU"].top,
    background: Layer_node["ReLU"].background,
  },
  {
    id: 4,
    name: "MaxPool2d",
    top: Layer_node["MaxPool2d"].top,
    background: Layer_node["MaxPool2d"].background,
  },
];

export function Show_layer_node() {
  return (
    <>
      <div className="sidebar">
        {NodeList.map((node) => {
          return (
            <Node
              name={node.name}
              background={node.background}
              id={node.id}
              top={node.top}
            />
          );
        })}
      </div>
    </>
  );
}
