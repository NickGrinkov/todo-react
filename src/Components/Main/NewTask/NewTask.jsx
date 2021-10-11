import React, {useState} from "react";
import axios from "axios";
import addImg from "../../../assets/img/add.svg";
import "./NewTask.scss";

function NewTask({list, onAddTask}) {
  const [visibleForm, setvisibleForm] = useState(false);
  const [inputValue, setinputValue] = useState('');
  const [isSending, setIsSending] = useState(false);


  function toggleVisibleForm() {
    setvisibleForm(visibleForm => !visibleForm)
    setinputValue('')
  }


  const addNewTask = () => {
    const taskObj = {
      "listId": list.id,
      "text": inputValue,
      "completed": false
    }
    setIsSending(true)
    axios.post('http://localhost:3001/tasks', taskObj).then(() => {
      onAddTask(list.id, taskObj)
      toggleVisibleForm()
    }).catch(() => {
       alert('Ошибка при добавлении задачи')
    }).finally(() => {
      setIsSending(false)
    })
  };

  return (
    <div>
    {
      visibleForm ? (<div className="main__new-field">
      <input className="input" 
              value={inputValue} 
              onChange={e => setinputValue(e.target.value)} 
              type="text" placeholder="Текст задачи"/>
          <div className="main__wrapper">
            <button disabled={!inputValue} className="button" onClick={addNewTask}>{isSending ? 'Добавление...' : 'Добавить'}</button>
            <button className="button button--grey" onClick={toggleVisibleForm}>Отмена</button>
          </div>
      </div>) : 
      (<div onClick={toggleVisibleForm} className="main__new-task">
        <img src={addImg} alt="Add icon" />
        <span>Новая задача</span>
      </div>)
    }
    </div>
  );
}

export default NewTask;
