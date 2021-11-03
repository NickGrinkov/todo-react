import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import './Header.scss';
import edit from '../../../assets/img/edit.svg';

function Header({list, onEditTitle}) {

  const editTitle = () => {
    const newTitle = window.prompt('Введите название списка', list.name)
    if(newTitle) {
      onEditTitle(list.id, newTitle)
      axios.patch('http://localhost:3001/lists/' + list.id, {
        name: newTitle
      })
      .catch(() => alert('Не удалось обновить название списка'))
    }
  }

  return (
    <Link to={`/lists/${list.id}`}>
      <div className="header_wrapper">
      <h2 style={{ color: list.color.name }} className="header">{list.name}</h2>
      <img onClick={editTitle} src={edit} alt="close-icon" />
    </div>
    </Link>
  );
}

export default Header;
