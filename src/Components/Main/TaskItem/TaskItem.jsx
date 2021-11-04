import React from "react";
import Checkbox from "../Checkbox/Checkbox";

import './TaskItem.scss';
import edit from "../../../assets/img/edit.svg";
import remove from "../../../assets/img/remove.svg";

function TaskItem({list, id, text, completed, onRemoveTask, onEditTask, onComplete}) {
  return (
      <li key={id} className="main__list-item">
        <Checkbox listId={list.id} onComplete={onComplete} taskId={id} completed={completed} />
        <p>{text}</p>
        <img className="close-svg" onClick={() => onRemoveTask(list.id, id)} src={remove} alt="close" />
        <img className="edit-svg" onClick={() => onEditTask(list.id, {id, text})} src={edit} alt="edit" />
      </li>
  );
}

export default TaskItem;
