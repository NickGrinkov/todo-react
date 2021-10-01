import React from "react";
import List from "../List/List";
import Circle from '../Circle/Circle';
import {useState} from 'react'
import './AddButton.scss';
import closeSvg from '../../assets/img/close.svg'


function AddButton({colors, onAdd}) {
  const [visiblePopup, setvisiblePopup] = useState(false);
  let [inputValue, setInputValue] = useState('');
  const [selectedColor, setSelectedColor] = useState(colors[0].id)

  const addList = () => {
    if(inputValue === '') {
      alert('Введите название списка')
    } else {
      const color = colors.filter(color => color.id === selectedColor)[0].name
        onAdd({id: Math.random(), name: inputValue, color: color})
    }
    closePopup()
  }

  function closePopup() {
    setvisiblePopup(!visiblePopup)
    setInputValue('')
    setSelectedColor(colors[0].id)
  }
  
  return (
    <div className="add_list_item">
      <List
        click={closePopup}
        items={[
          {
            id: 5,
            icon: (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1V15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8H15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: "Добавить задачу",
          },
        ]}
     />
     {
      visiblePopup && 
      <div className="add_popup">
        <img onClick={closePopup} className="add_popup_close" src={closeSvg} alt="close" />
        <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} className="input" type="text" placeholder="Название списка"/>
        <div className="add_popup_colors">
          <ul className="add_popup_list">
            {
              colors.map(color => <Circle 
                onClick={() => setSelectedColor(color.id)}
                className={selectedColor === color.id ? 'active' : ''} 
                key={color.id} 
                color={color.name}/>)
            }
          </ul>
        </div>
        <button onClick={addList} className="button">Добавить</button>
      </div>
     }
    </div>
  );
}

export default AddButton;
