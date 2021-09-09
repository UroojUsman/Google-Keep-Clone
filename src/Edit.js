import React from 'react'

function Edit(props) {
    return (
        <div>
            <div className={`popup ${props.showPopUp ? "inputStyle" : "inputStyle1"}`}>
            <p className="text" >
              <span className="edit-title"><input value={props.edited_note.title? props.edited_note.title:''} onChange={(e)=>props.editNoteHandle(e)}/></span>
              <input value={props.edited_note.note} onChange={props.editNoteHandle()} className="edit-input" />
              <button onClick={e=>props.updateNote(props.popUp_id)} className="close">close</button>
              <button onClick={e=>props.removeFromNotes(props.popUp_id)} className="delete">delete</button>
            </p>
        </div>
        </div>
    )
}

export default Edit
