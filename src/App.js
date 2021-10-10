import { useState, useEffect } from 'react';
import axios from 'axios';
import {List, AddButton, TasksButton, Header, ListItem, NewTask} from './Components/index';


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

function onEditTitle(id, title) {
  const newTitle = lists.map((list) => {
    if(list.id === id) {
      list.name = title
    }
    return list
  })
  setLists(newTitle)
}

  return (
    <div className="todo">
      <div className="sidebar">
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
      <div className="main">
        {
          lists && <Header onEditTitle={onEditTitle} list={activeItem}/>
        }
         <hr></hr>
         <ul className="main__list">
          {
            lists && activeItem ? <ListItem tasks={activeItem.tasks}/> : null
          }
         </ul>
         <NewTask/>
      </div>
    </div>
  );
}

export default App;
