import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote=(props)=>{

       const[expand,setExpand]=useState(false);


    const[text,uptext]=useState({
       title:"",
       content:""
    })
    const upevent=(event)=>{
      const{name,value}=event.target;
      uptext((preval)=>{
       return{
              ...preval,
              [name]:value,
       }
      })
    }

const addevent=(event)=>{
       props.passNote(text);
return(<>
  
   
</>
)
   
}
const expandIt=()=>{
       setExpand(true);
}
const srinkIt=()=>{
       setExpand(false);
}
     return(<>
            <div className="main_div" onDoubleClick={srinkIt}  onClick={expandIt}>
             <form>
             {expand ?( 
                <input type="text"
                       placeholder="Title"
                       name="title"
                       onChange={upevent}
                       value={text.title}
                       />
                     ):(null)}
                <textarea row="" column="" 
                          placeholder="Write the note"
                          name="content"
                          onChange={upevent}
                          value={text.content}
                         
                          />
               {expand?(
             <Button className="MuiButton-root" onClick={addevent}> 
             <AddIcon  className="plus_sing" /> 
             </Button>):null}
             </form>
           
            </div> 
     </>)
}
export default CreateNote;