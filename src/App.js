import { useState } from 'react';
import List from './Components/Sidebar/List/List';
import AddButton from './Components/Sidebar/AddButtton/AddButton';
import TasksButton from './Components/Sidebar/TasksButton/TasksButton';
import Header from './Components/Main/Header/Header';
import ListItem from './Components/Main/ListItem/ListItem';

import './App.scss';

import DB from './assets/db.json';

function App() {

const [lists, setLists] = useState(
  DB.lists.map(item => {
    item.color = DB.colors.filter(color => color.id === item.colorId)[0].name;
    return item
}))

function onAddList(obj) {
  const newList = [
    ...lists,
    obj
  ];
  setLists(newList)
}

  return (
    <div className="todo">
      <div className="todo_sidebar">
        <TasksButton/>
        <List 
          isRemovable 
          items={lists}
          onRemove={item => console.log(item)}
        />
        <AddButton onAdd={onAddList} colors={DB.colors}/>
      </div>
      <div className="todo_main">
        <Header/>
         <hr></hr>
         <ul className="todo_main_list">
          <ListItem/>
          <ListItem/>
         </ul>
      </div>
    </div>
  );
}

export default App;
