import React from "react";
import { useDrag } from "react-dnd";
import { Node_component } from "./DragAndDrop";

function Node({ name, background, top }) {
  return <Node_component name={name} background={background} top={top} />;
}

export default Node;
