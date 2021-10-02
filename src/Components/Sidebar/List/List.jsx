import React from "react";
import axios from "axios";
import './List.scss';
import Circle from "../Circle/Circle";
import close from '../../../assets/img/remove.svg'

function List({ items, click, isRemovable, onRemove }) {
  
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
        
        <li key={item.id} className={'todo_item'} >
          <i>
              {
                  item.icon ? (item.icon) : <Circle color={item.color.name}/>
              }
          </i>
          <span>{item.name}</span>
          {
            isRemovable &&  <img onClick={() => removeList(item)} className="todo_item_close" src={close} alt="remove-icon" />
          }
        </li>
      ))}
    </ul>
  );
}

export default List;
