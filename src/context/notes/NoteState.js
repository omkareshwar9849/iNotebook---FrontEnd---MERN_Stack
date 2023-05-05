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
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0Y2VhMTc4M2RlMzE2NmE5M2VhZDkxIn0sImlhdCI6MTY4Mjc2NjkwNH0.7HzqFeoGJxOsmoG_r00PRQjXEOKOAYDK1WB2cMe8ipA"
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
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0Y2VhMTc4M2RlMzE2NmE5M2VhZDkxIn0sImlhdCI6MTY4Mjc2NjkwNH0.7HzqFeoGJxOsmoG_r00PRQjXEOKOAYDK1WB2cMe8ipA"
        },
        body: JSON.stringify({title ,description ,tag}),
      });
      const json = await  response.json();
      // console.log(json)

    //Logic to Add Note in client
    const note = {
        "_id": "6451hj28a802097a454fda380a00",
        "user": "644cea1783de3166a93ead91",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-05-02T15:13:44.017Z",
        "__v": 0
    };
    setNotes(notes.concat(note))
      // getNotes();
  }

  //Delete a Note
  const deleteNote= async (id)=>{
    //API Call
    const response = await fetch(`${host}api/note/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0Y2VhMTc4M2RlMzE2NmE5M2VhZDkxIn0sImlhdCI6MTY4Mjc2NjkwNH0.7HzqFeoGJxOsmoG_r00PRQjXEOKOAYDK1WB2cMe8ipA"
        },
      });
      const json =  response.json();
      // console.log(json)

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
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0Y2VhMTc4M2RlMzE2NmE5M2VhZDkxIn0sImlhdCI6MTY4Mjc2NjkwNH0.7HzqFeoGJxOsmoG_r00PRQjXEOKOAYDK1WB2cMe8ipA"
        },
        body: JSON.stringify({title ,description ,tag}),
      });
      const json =  response.json();
    
    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id === id){
            element.title = title;
            element.description = description;
            element.tag = tag;
        }
    }
    
  }

  return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
  )
}

export default NoteState;