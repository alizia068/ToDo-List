import React from "react";
import "./style.css";
function ShowTodo(props) {
  return (
    <div className="my-tab">
      {props.value}
      <button
        className="btn btn-danger"
        onClick={() => props.onSelect(props.value)}
      >
        x
      </button>
      {/* {props.value} */}
    </div>
  );
}
export default ShowTodo;
