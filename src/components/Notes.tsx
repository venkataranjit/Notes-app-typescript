import React, { FC } from "react";
import Note from "./Note";
import { notesData } from "../data/note";

const Notes: FC = () => {
  return (
    <>
      <h5>Notes</h5>
      <div className="row">
        {notesData.map((note) => (
          <div className="col-sm-3" key={note.id}>
            <Note
              id={note.id}
              title={note.title}
              desc={note.desc}
              priority={note.priority}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Notes;
