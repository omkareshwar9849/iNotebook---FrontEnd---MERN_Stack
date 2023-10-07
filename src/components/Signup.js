import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  const [otp, setOtp] = useState('');
  const [showOtpBox, setShowOtpBox] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json)
    if (json.success) {
      const res = await fetch(`http://localhost:5000/api/email/otp/${otp}`);
      console.log(res.status)
      if (res.status === 200) {
        //save the auth token and redirect
        localStorage.setItem('token', json.authtoken);
        props.showAlert("Account Created Successfully", "success");
        navigate("/");
      }
      else {
        props.showAlert("Invalid OTP", "danger");
      }
    }
    else {
      props.showAlert("Unable to Sign Up", "danger");
    }
  }

  const handleSendOtp = async () => {
    console.log("otp")
    // fetch("http://localhost:5000/api/email/sendotp", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({ email: credentials.email })
    // }).then((response) => {
    //   console.log(response)
    //   if (response.ok) {
    //     props.showAlert("OTP Sent to your email successfully", "success");
        setShowOtpBox(true);
    //   }
    // })
    //   .catch((error) => {
    //     console.error("Network error:", error);
    //   });

  };

  const onChange = (e) => {
    if (e.target.name === "otp") {
      setOtp(e.target.value);
    }
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <h2>Create an account to use iNotebook:</h2><br />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" value={credentials.name} onChange={onChange} className="form-control" id="name" name="name" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" value={credentials.email} onChange={onChange} className="form-control" id="email" name="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" value={credentials.password} onChange={onChange} className="form-control" id="password" name="password" minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" onChange={onChange} className="form-control" id="cpassword" name="cpassword" minLength={5} required />
        </div>
        {!showOtpBox ? (
          <button type="button" onClick={handleSendOtp} className="btn btn-primary">Send OTP</button>
        ) : (
          <>
            <div className="mb-3">
              <label htmlFor="otp" autoComplete="false" className="form-label">Enter OTP</label>
              <input type="text" value={otp} maxLength={4} onChange={onChange} className="form-control" id="otp" name="otp" required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </>
        )}
      </form>
    </div>
  )
}

export default Signup
