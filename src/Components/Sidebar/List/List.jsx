import React from "react";
import axios from "axios";
import './List.scss';
import Circle from "../Circle/Circle";
import close from '../../../assets/img/remove.svg'

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
        <li onClick={onClickItem ? () => onClickItem(item) : null} key={item.id} className={activeItem && activeItem.id === item.id ? 'todo_item active' : 'todo_item'} >
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
            isRemovable &&  <img onClick={() => removeList(item)} className="todo_item_close" src={close} alt="remove-icon" />
          }
        </li>
      ))}
    </ul>
  );
}

export default List;
