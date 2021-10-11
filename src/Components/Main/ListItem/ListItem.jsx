import React from "react";
import axios from "axios";
import Checkbox from "../Checkbox/Checkbox";
import remove from "../../../assets/img/remove.svg";

import './ListItem.scss';

function ListItem({ tasks, omRemoveTask }) {
  const onRemove = (task) => {
    if(window.confirm('Вы действительно хотите удалить задачу ?')) {
      axios.delete('http://localhost:3001/tasks' + task.id).then(() => {
        omRemoveTask(task.id)
      })
    }
  }


  return (
    tasks && tasks.map((task) => (
      <li key={task.id} className="main__list-item">
        <Checkbox task={task}/>
        <input type="text" value={task.text} readOnly/>
        <img onClick={() => onRemove(task.id)} src={remove} alt="close" />
      </li>
    ))
  );
}

export default ListItem;
