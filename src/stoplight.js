import React from "react";
import classnames from "classnames";

export function Stoplight(props) {
  return (
    <div className="Stoplight">
      <div className="Cord" />
      <div className="Lights">
        <div
          onClick={() => props.onClick("Red")}
          className={classnames("Red", { ison: props.light === "Red" })}
        />
        <div
          onClick={() => props.onClick("Yellow")}
          className={classnames("Yellow", { ison: props.light === "Yellow" })}
        />
        <div
          onClick={() => props.onClick("Green")}
          className={classnames("Green", { ison: props.light === "Green" })}
        />
      </div>
    </div>
  );
}
