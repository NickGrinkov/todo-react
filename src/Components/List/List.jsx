import React from "react";
import {useState} from 'react'
import './List.scss';
import Circle from "../Circle/Circle";
import close from '../../assets/img/remove.svg'

function List({ items, click, isRemovable }) {
  const [closeBtn, setCloseBtn] = useState(true)

  function removeItem() {
    setCloseBtn(!closeBtn)
  }

    
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
          {
            isRemovable &&  <img onClick={() => removeItem} className="todo_item_close" src={close} alt="close" />
          }
        </li>
      ))}
    </ul>
  );
}

export default List;
