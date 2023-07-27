import { useState } from 'react';
import NoteContext from './noteContext';
const NoteState=(props)=>{
    const host = "http://localhost:5000/";

  const [notes, setNotes] = useState([]);

  //Get all notes
  const getNotes= async ()=>{
    //API Call
    const response = await fetch(`${host}api/note/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        }
      });
      const json = await response.json();
      setNotes(json)

    }

  //Add a Note
  const addNote= async (title ,description ,tag)=>{
    //API Call
    const response = await fetch(`${host}api/note/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({title ,description ,tag}),
      });
      const json = await  response.json();
      //Logic to Add Note in client
      setNotes(notes.concat(json))
    }

  //Delete a Note
  const deleteNote= async (id)=>{
    //API Call
    const response = await fetch(`${host}api/note/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
      });
      const json =  response.json();
      console.log(json)

    //Logic to Delete Note in client
    // console.log("deleteing  "+id)
    const newNotes = notes.filter((notes)=>{return notes._id !== id})
    setNotes(newNotes)
  }


  //Edit a Note
  const editNote= async (id,title,description,tag)=>{
    //API Call
    const response = await fetch(`${host}api/note/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({title ,description ,tag}),
      });
      const json =await response.json();
      console.log(json)
    
    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id === id){
            notes[index].title = title;
            notes[index].description = description;
            notes[index].tag = tag;
            break;
        }
    }
    setNotes(notes);
    getNotes();
    console.log(notes);

  }

  return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
  )
}

export default NoteState;