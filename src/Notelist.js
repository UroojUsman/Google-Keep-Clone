import React from 'react';
import Masonry from 'react-masonry-css';

function NoteList(props) {
    return (
        <div>
         <ul>
          <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {props.notes_list.map((item,index)=>
              <li key={index} className="list-item" >
                <span className="span2">{item.note}</span> 
                <button className="list-button" onClick={()=>{props.EditNote(item.id)}} >Edit</button>
                <button className="list-button" >Archive</button>
                <button className="list-button" onClick={()=>{props.deleteNote(index,item.id)}}>Delete</button></li>)}
          </Masonry>
        </ul>
        
      
        </div>
    )
}

export default NoteList
