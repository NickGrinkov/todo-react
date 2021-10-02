import React from "react";
import edit from '../../../assets/img/edit.svg';
import './Header.scss';

function Header() {
  return (
    <div className="header_wrapper">
      <h2 className="header">Фронтенд</h2>
      <img src={edit} alt="" />
    </div>
  );
}

export default Header;
