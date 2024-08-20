import { useState } from "react";

export default () => {
  const [text, setText] = useState("Misha");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      {text && <h1>სალამი {text}!</h1>}

      <input
        type="text"
        value={text}
        onChange={onChange}
        placeholder="ჩაწერე შენი სახელი"
      />
    </>
  );
};
