import { useState } from "react";

export default () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(["task1", "task2"]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const onAdd = () =>{
    setTasks([...tasks,task])
    setTask(" ");
  }

  return (
    <div>
      <input type="text" value={task} onChange={onChange} />
      <button onClick={onAdd}>დამატება</button>
      <ul>
        {tasks.map(task => <li>{task}</li>)}
      </ul>
    </div>
  );
};
