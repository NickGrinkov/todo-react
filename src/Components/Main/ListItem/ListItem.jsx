import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import remove from "../../../assets/img/remove.svg";

import './ListItem.scss';

function ListItem({ tasks }) {
  return (
    tasks && tasks.length === 0 ? <div className='empty_tasks' >Задачи отсутствуют</div> :
    tasks && tasks.map((task) => (
      <li key={task.id} className="todo_list_item">
        <Checkbox task={task}/>
        <input type="text" value={task.text} readOnly/>
        <img src={remove} alt="close" />
      </li>
    ))
  );
}

export default ListItem;
