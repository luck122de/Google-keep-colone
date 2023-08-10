import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Createnote from "./Createnote";
import Notes from "./Notes";



const App=()=>{

   const[textnote,upnote]=useState([]);

    const addNote=(text)=>{
        upnote((preval)=>{
          return[...preval,text];
        })
    }

    const deletenotes=(id)=>{
      
     upnote((olddata)=>{
      
      return olddata.filter((val,indx)=>{
        return indx!==id;
      })
     })
     
    }
  return(<>
    <Header/>
    <Createnote passNote={addNote}/>

    {textnote.map((currval, index)=>{
      return(<Notes title={currval.title}
             content={currval.content}
             key={index}
             id={index}
             deleteitem={deletenotes}
             />)
    })
    }
    <Footer/>

  </>)
  
}
export default App;