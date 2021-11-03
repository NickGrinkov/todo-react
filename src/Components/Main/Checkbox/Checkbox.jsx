import React from "react";
import './Checkbox.scss';

function Checkbox({listId, task, onComplete}) {
  const onChangeCheckbox = e => {
    onComplete(listId, task.id, e.target.checked);
  }
  return (
    <div className="checkbox">
      <input checked={task.completed} onChange={onChangeCheckbox} id={`check-${task.id}`} type="checkbox" />
      <label htmlFor={`check-${task.id}`}>
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
