import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import remove from '../../../assets/img/remove.svg';

import './ListItem.scss'

function ListItem() {
    return (
        <li className="todo_list_item">
            <Checkbox/>
             <input type="text" value="Выучить JS"/>
             <img src={remove} alt="" />
        </li>
    )
}

export default ListItem;
