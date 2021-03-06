import React from "react";
import Circle from "../Circle/Circle";
import axios from "axios";
import classNames from "classnames";

import './List.scss';
import close from '../../../assets/img/remove.svg';

function List({ items, click, isRemovable, onRemove, onClickItem, activeItem}) {
  const removeList = (item) => {
    if(window.confirm('Вы действительно хотите удалить список')) {
      axios.delete('http://localhost:3001/lists/' + item.id).then(() => {
          onRemove(item.id)
      })
    }
  };
    
  return (
    <ul onClick={click} className="todo_list">
      {items.map((item) => (
        <li onClick={onClickItem ? () => onClickItem(item) : null} key={item.id} className={classNames(item.className, {
            active: item.active
              ? item.active
              : activeItem && activeItem.id === item.id
          })}>
          <i>
              {
                  item.icon ? (item.icon) : <Circle color={item.color.name}/>
              }
          </i>
          <span>
          {item.name}
            {
              item.tasks && item.tasks.length >= 0 &&  `(${item.tasks.length})`
            }
          </span>
          {
            isRemovable &&  <img onClick={() => removeList(item)} className="close" src={close} alt="remove-icon" />
          }
        </li>
      ))}
    </ul>
  );
}

export default List;
