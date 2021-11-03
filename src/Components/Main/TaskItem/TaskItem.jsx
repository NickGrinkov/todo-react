import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import remove from "../../../assets/img/remove.svg";
import edit from "../../../assets/img/edit.svg";

import './TaskItem.scss';

function TaskItem({list, tasks, onRemoveTask, onEditTask, onComplete}) {
  return (
    list && tasks && tasks.map((task) => (
      <li key={task.id} className="main__list-item">
        <Checkbox listId={list.id} onComplete={onComplete} task={task}/>
        <p>{task.text}</p>
        <img className="close-svg" onClick={() => onRemoveTask(list.id, task.id)} src={remove} alt="close" />
        <img className="edit-svg" onClick={() => onEditTask(list.id, {id: task.id, text: task.text})} src={edit} alt="edit" />
      </li>
    ))
  );
}

export default TaskItem;
