import { useState } from 'react';
import NoteContext from './noteContext';
const NoteState=(props)=>{
    const initialNotes = [
        {
            "_id": "644d7ecb92ce78sd939a1fcf88",
            "user": "644cea1783de3166a93ead91",
            "title": "updated title",
            "description": "updated description",
            "tag": "Personal",
            "date": "2023-04-29T20:32:11.564Z",
            "__v": 0
        },
        {
            "_id": "644d7f29d0f1ec05dddb199380",
            "user": "644cea1783de3166a93ead91",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2023-04-29T20:33:45.801Z",
            "__v": 0
        },
        {
            "_id": "645128a802097a454fda380a00",
            "user": "644cea1783de3166a93ead91",
            "title": "Omkar's note",
            "description": "Try to do this daily",
            "tag": "Personal",
            "date": "2023-05-02T15:13:44.017Z",
            "__v": 0
        },
        {
            "_id": "6451290602097a45f4a380a02",
            "user": "644cea1783de3166a93ead91",
            "title": "Prepare well for tommorrow exam",
            "description": "Should study alot for tomorrow try. should try to read all the problems present in the observation book. tomorrow sir is going to be strict there will be less chance to cheat so be prepared for that.",
            "tag": "Exam",
            "date": "2023-05-02T15:15:18.706Z",
            "__v": 0
        }
      
    ]

  const [notes, setNotes] = useState(initialNotes);

  //Add a Note
  const addNote=(title ,description ,tag)=>{
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
  }

  //Delete a Note
  const deleteNote=(id)=>{
    console.log("deleteing  "+id)
    const newNotes = notes.filter((notes)=>{return notes._id !== id})
    setNotes(newNotes)
  }


  //Edit a Note
  const editNote=(id,title,description,tag)=>{
    
  }

  return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
  )
}

export default NoteState;