import React, { useContext, useState, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "General" })
    const { transcript, listening, resetTranscript } = useSpeechRecognition();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleStartSpeaking = () => {
        SpeechRecognition.startListening({ continuous: true });
    };

    const handleStopSpeaking = () => {
        SpeechRecognition.stopListening();
    };

    const handleClear = () =>{
        resetTranscript();
    }

    const handleOkay = () => {
        const updatedDescription = `${note.description} ${transcript}`;
        setNote({ ...note, description: updatedDescription });
        resetTranscript();
    };

    const handleclick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "General" })
        resetTranscript(); // Clear the transcript after processing
        props.showAlert("Added Successfully", "success");
    }


    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="container my-3">
                <h2>Add a Note :- </h2>
                <div className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type='text' className="form-control" id="title" name='title' value={note.title} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                    </div>
                    <label htmlFor="description" className="form-label">Description</label>
                    <div className="row">
                        <div className="col-md-6">
                            <textarea
                                className="form-control mb-1"
                                id="description"
                                name='description'
                                value={note.description}
                                onChange={onChange}
                                minLength={5}
                                rows={5}
                                required
                            />
                        </div>
                        {!isMobile && (
                            <div className="col-md-6">
                                <textarea
                                    id="text2"
                                    name='text2'
                                    value={transcript}
                                    readOnly
                                    className="form-control"
                                    rows={3}
                                />
                                <div className="mt-2">
                                    <button onClick={handleStartSpeaking} className="btn btn-success " disabled={listening}>
                                        Start Speaking
                                    </button>
                                    <button onClick={handleStopSpeaking} className="btn btn-primary mx-2" disabled={!listening}>
                                        Stop Speaking
                                    </button>
                                    <button onClick={handleOkay} className="btn btn-secondary" disabled={listening}>
                                        Okay
                                    </button>
                                    <button onClick={handleClear} className="btn btn-danger mx-2" disabled={listening}>
                                        Clear
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} />
                    </div>

                    <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleclick}>Add Note</button>
                </div>
            </div>
        </div>
    )
}

export default AddNote
