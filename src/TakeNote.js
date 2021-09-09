import React, { useState, useEffect } from "react";
import Notelist from "./Notelist";
import Edit from "./Edit";

function TakeNote() {
  const [visible, setvisible] = useState(false);
  const [Notes, setNotes] = useState({
    title: "",
    note: "",
  });
  const [NoteList, setNoteList] = useState([]);
  const [trashList, settrashList] = useState([]);
  const [editedNote, seteditedNote] = useState({
    title: "",
    note: "",
  });
  const [Popup, setPopup] = useState(false);
  const [popupId, setpopupId] = useState();

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setNotes((oldItem) => {
      return {
        ...oldItem,
        [name]: value,
      };
    });
  };
  const EditInputHandle = (e) => {
    console.log(e);
    const { name, value } = e.target;
    seteditedNote((oldItem) => {
      return {
        ...oldItem,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    const list_string = localStorage.getItem("list");
    const notelist = JSON.parse(list_string);
    const trash_string = localStorage.getItem("trash");
    const trash_list = JSON.parse(trash_string);
    if (notelist) {
      setNoteList(notelist);
    }
    if (trash_list) {
      settrashList(trash_list);
    }
  }, []);

  console.log(Notes);
  console.log(NoteList);
  console.log(trashList);

  const addToNotes = () => {
    const notes_list = NoteList;
    if (Notes.note.length > 0 || Notes.title.length > 0) {
      notes_list.unshift({
        id: Date.now(),
        ...Notes,
      });

      setNoteList(notes_list);
      setNotes((oldItem) => {
        return {
          ...oldItem,
          title: "",
          note: "",
        };
      });
      setvisible(false);
      localStorage.setItem("list", JSON.stringify(notes_list));
    } else {
      setvisible(false);
    }
  };

  const removeFromNotes = (i, id) => {
    let deleted_note = NoteList.filter((item) => {
      return item.id === id;
    })[0];
    const trash_list = trashList;
    trash_list.unshift(deleted_note);
    settrashList(trash_list);
    const notes_list = NoteList.filter((note, index) => {
      return index !== i;
    });
    setNoteList(notes_list);

    localStorage.setItem("list", JSON.stringify(notes_list));
    localStorage.setItem("trash", JSON.stringify(trash_list));
  };

  const showNote = (id) => {
    let edited_note = NoteList.filter((item) => {
      return item.id === id;
    })[0];

    seteditedNote(edited_note);
    setPopup(true);
    setpopupId(id);
  };

  const updateNote = (id) => {
    let note = editedNote;
    let containsOnlyOneElement = NoteList.length === 1;
    if (containsOnlyOneElement) {
      setNoteList({ id, ...note });
    } else {
      setNoteList((oldItem) => {
        return {
          id,
          ...note,
          ...NoteList.filter((item) => item.id !== id),
        };
      });
    }
    seteditedNote({ title: "", note: "" });
    setPopup(false);
    setpopupId(null);
  };

  return (
    <div>
      {visible === false ? (
        <div className="take-notes1">
          <input
            type="text"
            placeholder="Take a note..."
            onClick={() => setvisible(true)}
            className="initial"
            value={Notes.title}
            onChange={() => null}
          />
        </div>
      ) : (
        <div>
          <div className="take-notes2">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="title"
              onChange={InputEvent}
            />
            <br></br>
            <input
              type="text"
              name="note"
              placeholder="Take a note..."
              onChange={InputEvent}
              className="take-note"
              autoFocus="autofocus "
            />

            <button onClick={addToNotes}>close</button>
          </div>
        </div>
      )}

      <Notelist notes_list={NoteList} deleteNote={removeFromNotes} EditNote={showNote} />
    {/*  <Edit
        showPopUp={Popup}
        edited_note={editedNote}
        editNoteHandle={EditInputHandle}
        updateNote={updateNote}
        removeFromNotes={removeFromNotes}
      />
      */}
    </div>
  );
}

export default TakeNote;
