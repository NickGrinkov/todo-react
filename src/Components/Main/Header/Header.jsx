import React from "react";
import edit from '../../../assets/img/edit.svg';
import './Header.scss';

function Header({list}) {
  return (
    <div className="header_wrapper">
      <h2 className="header">{list.name}</h2>
      <img src={edit} alt="close" />
    </div>
  );
}

export default Header;
