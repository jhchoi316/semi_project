import "./styles.css";
import Styled from "styled-components";
import { Layer_node } from "./Layer_node";

const Node = Styled.div`
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

const Default_layer_node = [
    'Conv2d', 'BatchNorm', 'ReLu', 'MaxPool2d'
];

export default function Show_layer_node() {
   
    return Default_layer_node.map(
        (node) =>
        <>
        <Node top = {Layer_node['Conv2d'].top} background={Layer_node['Conv2d'].background}>
            Conv2d  
        </Node>
        <Node top = {Layer_node['BatchNorm2d'].top} background={Layer_node['BatchNorm2d'].background}>
            BatchNorm2d
        </Node>
        <Node top = {Layer_node['ReLU'].top} background={Layer_node['ReLU'].background}>
            ReLU
        </Node>
        <Node top = {Layer_node['MaxPool2d'].top} background={Layer_node['MaxPool2d'].background}>
            MaxPool2d
        </Node>
        </>
        )
}
