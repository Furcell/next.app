import { useState } from "react";

export default () => {
  const [showMenu, setShowMenu] = useState(false);

  const onChange = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div onClick={onChange}>{showMenu ? "Hide Menu" : "Show Menu"}</div>
      {showMenu && (
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
      )}
    </>
  );
};
