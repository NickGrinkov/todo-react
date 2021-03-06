import React from "react";
import './Checkbox.scss';

function Checkbox({listId, taskId, completed, onComplete}) {
  const onChangeCheckbox = e => {
    onComplete(listId, taskId, e.target.checked);
  }
  return (
    <div className="checkbox">
      <input checked={completed} onChange={onChangeCheckbox} id={`check-${taskId}`} type="checkbox" />
      <label htmlFor={`check-${taskId}`}>
        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </label>
    </div>
  );
}

export default Checkbox;
