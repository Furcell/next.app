import { useState } from "react";

export default () => {
  const [task, setTask] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <div>
      <input type="text" value={task} onChange={onChange} />
      <button>დამატება</button>
    </div>
  );
};
