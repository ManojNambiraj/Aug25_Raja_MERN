import React from "react";

function NewBtn(props) {
  return (
    <div>
      <button
        style={{ backgroundColor: props.btnColor }}
        onClick={() => props.handleBtn(props.userName)}
      >
        {props.userName}
      </button>
    </div>
  );
}

export default NewBtn;
