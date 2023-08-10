import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


const Notes=(props)=>{
    const deleteevent=(event)=>{
         props.deleteitem(props.id);     
    }
    return(<>
             <div className="note">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <button className="btn" onClick={deleteevent}><DeleteIcon className="deleteIcon"/></button>
                </div>
    </>)
}
export default Notes;
