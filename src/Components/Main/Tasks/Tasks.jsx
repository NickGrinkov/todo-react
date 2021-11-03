import React from "react";
import {Header, TaskItem, NewTask,} from "../../index";

function Tasks({list, onEditTitle, onAddTask, onRemoveTask, onEditTask, onCompleteTask}) {
  console.log(list);
  return (
    <div>
      {
        list && <Header onEditTitle={onEditTitle} list={list} />
      }
       { list && <hr /> }   
      <ul className="main__list">
        {list && list.tasks && (
          <TaskItem
            onRemoveTask={onRemoveTask}
            tasks={list.tasks}
            list={list}
            onEditTask={onEditTask}
            onComplete={onCompleteTask}
          />
        )}
      </ul>
      {list && (
        <NewTask key={list.id} list={list} onAddTask={onAddTask} />
      )}
    </div>
  );
}

export default Tasks;
