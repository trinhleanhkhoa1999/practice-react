import { Button } from "react-bootstrap";
import "./style.scss";
import { useState } from "react";
import NoteCards from "./NoteCards";
const Note = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const [listNotes, setListNotes] = useState([]);

  const handleSubmit = () => {
    setListNotes([
      ...listNotes,
      {
        title: title,
        note: note,
      },
    ]);
    setTitle("");
    setNote("");
  };
  console.log("listNotes: ", listNotes);
  return (
    <>
      <form>
        <div className="note-form">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Take a note..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <Button
            className="float-end"
            variant="warning"
            type="button"
            onClick={handleSubmit}
          >
            Add
          </Button>
        </div>
      </form>
      <NoteCards listNotes={listNotes} />
    </>
  );
};
export default Note;
