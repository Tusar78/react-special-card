import React, { useContext } from "react";
import ToggleContext from "../Context/ToggleContext";

const Toggle = () => {
  const { toggle, setToggle } = useContext(ToggleContext);
  return (
    <div className="toggle__content">
      <label className="toggle__label">
        <input
          type="checkbox"
          className="toggle__check"
          onClick={() => setToggle(!toggle)}
        />

        <div className="toggle__rail">
          <span className="toggle__circle"></span>
          <span className="toggle__border"></span>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
