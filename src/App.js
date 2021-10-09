import { useState, useEffect } from 'react';
import axios from 'axios';
import {List, AddButton, TasksButton, Header, ListItem} from './Components/index';

import './App.scss';

function App() {
  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);
  const [activeItem, setactiveItem] = useState(0);

  
  
  useEffect(() => {
      axios.get('http://localhost:3001/lists?_expand=color&_embed=tasks').then(({data}) => {
        setLists(data)
      })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:3001/colors').then(({data}) => {
      setColors(data)
    })
  }, [])

function onAddList(obj) {
  const newList = [
    ...lists,
    obj
  ];
  setLists(newList)
}

function omRemove(id) {
   setLists(lists.filter(item => item.id !== id))
}

  return (
    <div className="todo">
      <div className="todo_sidebar">
        <TasksButton/>
        {
          lists ? (
            <List 
              isRemovable 
              items={lists}
              onRemove={omRemove}
              onClickItem={item => setactiveItem(item)}
              activeItem={activeItem}
            />
          ) : ('Идет загрузка...')
        }
          <AddButton onAdd={onAddList} colors={colors}/>
      </div>
      <div className="todo_main">
        {
          lists && <Header list={activeItem}/>
        }
         <hr></hr>
         <ul className="todo_main_list">
          {
            lists && activeItem ? <ListItem tasks={activeItem.tasks}/> : null
          }
         </ul>
      </div>
    </div>
  );
}

export default App;
