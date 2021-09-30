import React from "react";
import './List.scss';
import Circle from "../Circle/Circle";

function List({ items, click }) {
    
  return (
    <ul onClick={click} className="todo_list">
      {items.map((item) => (
        <li key={item.id} className={item.active ? 'active todo_item': 'todo_item'}>
          <i>
              {
                  item.icon ? (item.icon) : <Circle color={item.color}/>
              }
          </i>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default List;
