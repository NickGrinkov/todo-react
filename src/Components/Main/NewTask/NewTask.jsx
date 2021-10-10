import React from "react";
import addImg from "../../../assets/img/add.svg";
import "./NewTask.scss";

function NewTask() {
  return (
    <div>
      <div className="main__new-task">
        <img src={addImg} alt="Add icon" />
        <span>Новая задача</span>
      </div>
      <div className="main__new-field">
      <input className="input" type="text" placeholder="Текст задачи"/>
          <div className="main__wrapper">
            <button className="button">Добавить</button>
            <button className="button button--grey">Отмена</button>
          </div>
      </div>
    </div>
  );
}

export default NewTask;
