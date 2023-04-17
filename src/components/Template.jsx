// import { DateSwitcher } from "./DateSwitcher"
import { ToDoListItem } from './ToDoListItem'

export const Template = (props) => {
  const { taskList,editTask, removeTask, toggleComplete, changeTime } = props

  return (
    <div className="bg-white w-96 m-auto rounded-tl-lg h-[32rem] overflow-scroll">
      {/* <DateSwitcher /> */}
      <div>
        {taskList?.map((task) => (
          <ToDoListItem
            key={task.id}
            editTask={editTask}
            removeTask={() => removeTask(task.id)}
            toggleComplete={toggleComplete}
            changeTime={changeTime}
            task={task}
          />
        ))}
      </div>
    </div>
  )
}
