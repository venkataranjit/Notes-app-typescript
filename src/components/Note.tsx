import React, { FC } from "react";
import { NOTETYPE } from "../models/NOTETYPE";
const Note: FC<NOTETYPE> = (props) => {
  return (
    <>
      <div className="card">
        <div
          className={`card-heading text-white ${
            props.priority === "high"
              ? "bg-danger"
              : props.priority === "medium"
              ? "bg-warning"
              : props.priority == "low" && "bg-success"
          } `}
        >
          <h6>{props.title}</h6>
        </div>
        <div className="card-body">
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
};

export default Note;
