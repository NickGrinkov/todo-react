import React from "react";
import {Header, TaskItem, NewTask,} from "../../index";

function Tasks({list, onEditTitle, onAddTask, onRemoveTask, onEditTask, onCompleteTask}) {
  return (
    <div>
      {
        list && <Header onEditTitle={onEditTitle} list={list} />
      }
       { list && <hr /> }   
      <ul className="main__list">
        {list && list.tasks.map((task) => (
          <TaskItem
            {...task}
            onRemoveTask={onRemoveTask}
            list={list}
            key={task.id}
            onEditTask={onEditTask}
            onComplete={onCompleteTask}
          />
        ))}
      </ul>
      {list && (
        <NewTask list={list} onAddTask={onAddTask} />
      )}
    </div>
  );
}

export default Tasks;
