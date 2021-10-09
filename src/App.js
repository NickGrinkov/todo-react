import { useState, useEffect } from 'react';
import axios from 'axios';
import {List, AddButton, TasksButton, Header, ListItem} from './Components/index';

import './App.scss';

function App() {
  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);
  
  
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
            />
          ) : ('Идет загрузка...')
        }
          <AddButton onAdd={onAddList} colors={colors}/>
      </div>
      <div className="todo_main">
        {
          lists && <Header list={lists[1]}/>
        }
         <hr></hr>
         <ul className="todo_main_list">
          {
            lists && <ListItem tasks={lists[1].tasks}/>
          }
         </ul>
      </div>
    </div>
  );
}

export default App;
