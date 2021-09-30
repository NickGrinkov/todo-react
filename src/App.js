import './App.scss';
import List from './Components/List/List';
import AddButton from './Components/AddButtton/AddButton';
import TasksButton from './Components/TasksButton/TasksButton';

import DB from './assets/db.json';

function App() {

  return (
    <div className="todo">
      <div className="todo_sidebar">
        <TasksButton/>
        <List items= {[
          {id: 2, color: 'red', name: 'Фронтенд', active: true},
          {id: 3, color: 'green', name: 'Спорт'},
          {id: 4, color: 'blue', name: 'Разное'}]}/>
        <AddButton colors={DB.colors}/>
      </div>
      <div className="todo_main">
        Привет 
      </div>
    </div>
  );
}

export default App;
