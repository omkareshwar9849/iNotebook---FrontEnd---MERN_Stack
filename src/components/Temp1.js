// import React, { useState } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const MyComponent = () => {
//   const [textArea1, setTextArea1] = useState('');
//   const [displayText, setDisplayText] = useState(''); // New state for displaying text
//   const { transcript, listening, resetTranscript } = useSpeechRecognition();

//   const handleTextArea1Submit = () => {
//     setDisplayText(textArea1);
//   };

//   const handleStartSpeaking = () => {
//     SpeechRecognition.startListening();
//   };

//   const handleStopSpeaking = () => {
//     SpeechRecognition.stopListening();
//   };

//   const handleOkayButton = () => {
//     setTextArea1((prevText) => `${prevText} ${transcript}`);
//     resetTranscript();
//   };

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-md-6">
//           <textarea
//             value={textArea1}
//             onChange={(e) => setTextArea1(e.target.value)}
//             className="form-control"
//             rows={4}
//           />
//           <button onClick={handleTextArea1Submit} className="btn btn-primary mt-2">
//             Submit
//           </button>
//         </div>
//         <div className="col-md-6">
//           <textarea
//             value={transcript}
//             readOnly
//             className="form-control"
//             rows={4}
//           />
//           <div className="mt-2">
//             <button onClick={handleStartSpeaking} className="btn btn-success" disabled={listening}>
//               Start Speaking
//             </button>
//             <button onClick={handleStopSpeaking} className="btn btn-danger ml-2" disabled={!listening}>
//               Stop Speaking
//             </button>
//             <button onClick={handleOkayButton} className="btn btn-primary ml-2">
//               Okay
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="row mt-3">
//         <div className="col">
//           {displayText && <h1>{displayText}</h1>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyComponent;
