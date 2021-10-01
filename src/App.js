import { useState } from 'react';
import List from './Components/List/List';
import AddButton from './Components/AddButtton/AddButton';
import TasksButton from './Components/TasksButton/TasksButton';

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
        <List isRemovable items={lists}/>
        <AddButton onAdd={onAddList} colors={DB.colors}/>
      </div>
      <div className="todo_main">
        Привет
      </div>
    </div>
  );
}

export default App;
