import React from "react";
import Note from "./Note";

const Notes = () => {
  return (
    <>
      <h5>Notes</h5>
      <div className="row">
        <div className="col-sm-3">
          <Note />
        </div>
      </div>
    </>
  );
};

export default Notes;
