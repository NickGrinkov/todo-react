import React from "react";
import axios from "axios";
import edit from '../../../assets/img/edit.svg';
import './Header.scss';

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
    <div className="header_wrapper">
      <h2 className="header">{list.name}</h2>
      <img onClick={editTitle} src={edit} alt="Close icon" />
    </div>
  );
}

export default Header;
