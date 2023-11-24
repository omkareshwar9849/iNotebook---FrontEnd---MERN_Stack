import React from 'react'

const About = () => {
  return (
      <div class="container">
        <div class="jumbotron">
          <h1 class="display-4">About iNotebook</h1>
          <p class="lead">Welcome to iNotebook, your ultimate solution for secure and efficient note-taking.</p>
          <hr class="my-4"/>
            <p>
              The iNotebook web application is a cutting-edge platform crafted to address the evolving needs of users in the digital age. Developed on the robust MERN (MongoDB, Express.js, React.js, Node.js) stack, iNotebook stands out for its commitment to security, cross-platform accessibility, and user-centric features.
            </p>
            <p>
              <strong>Security First:</strong> Your data's safety is our top priority. iNotebook employs state-of-the-art security measures, including salt and pepper hashing techniques in the backend and JWT (JSON Web Token) for secure user authentication. Rest assured, your notes are in safe hands.
            </p>
            <p>
              <strong>Cross-Platform Accessibility:</strong> Access your notes seamlessly from any device, be it a desktop, laptop, tablet, or smartphone. iNotebook breaks down the barriers of platform dependency, ensuring you can manage your notes wherever you are.
            </p>
            <p>
              <strong>Voice Input Revolution:</strong> Dictate your thoughts effortlessly with our voice input functionality. No matter the device or operating system, iNotebook ensures you can add and edit notes with the power of your voice.
            </p>
            <p>
              <strong>Grammar Correction:</strong> Enhancing your note-taking experience, iNotebook includes grammar correction for voice input, guaranteeing accurate and polished notes every time.
            </p>
        </div>

    </div>
  )
}

export default About

