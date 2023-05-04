import { useState } from 'react';
import NoteContext from './noteContext';
const NoteState=(props)=>{
    const initialNotes = [
        {
            "_id": "644d7ecb92ce78939a1fcf88",
            "user": "644cea1783de3166a93ead91",
            "title": "updated title",
            "description": "updated description",
            "tag": "Personal",
            "date": "2023-04-29T20:32:11.564Z",
            "__v": 0
        },
        {
            "_id": "644d7f29d0f1ec05db199380",
            "user": "644cea1783de3166a93ead91",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2023-04-29T20:33:45.801Z",
            "__v": 0
        },
        {
            "_id": "645128a802097a454a380a00",
            "user": "644cea1783de3166a93ead91",
            "title": "Omkar's note",
            "description": "Try to do this daily",
            "tag": "Personal",
            "date": "2023-05-02T15:13:44.017Z",
            "__v": 0
        },
        {
            "_id": "6451290602097a454a380a02",
            "user": "644cea1783de3166a93ead91",
            "title": "Prepare well for tommorrow exam",
            "description": "Should study alot for tomorrow try. should try to read all the problems present in the observation book. tomorrow sir is going to be strict there will be less chance to cheat so be prepared for that.",
            "tag": "Exam",
            "date": "2023-05-02T15:15:18.706Z",
            "__v": 0
        }
      
    ]

  const [notes, setNotes] = useState(initialNotes);

  return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
  )
}

export default NoteState;