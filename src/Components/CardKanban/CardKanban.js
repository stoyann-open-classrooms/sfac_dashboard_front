import React from "react";
import "./CardKanban.css";
export default function CardKanban(props) {
  return <div className="card-kanban">{props.children}</div>;
}
