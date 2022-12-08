import './App.css';
import {useState} from 'react';

function App() {
  const [email, setEmail] = useState(null)

  
  const sendEmail = () => {
    window.electronAPI.sendEmail(email)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  return (
    <div className="container mt-3">
      <h2>Send Email and SMS to your customers</h2>
      <div className="mb-3 mt-3">
        <label for="email">Email:</label>
        <input type="email" className="form-control"placeholder="Enter email" onChange={handleEmailChange}/>
      </div>
      <button onClick={sendEmail} className="btn btn-primary">Send Email</button>
      <div className="mb-3 mt-3">
        <label for="Phone">Phone:</label>
        <input type="text" className="form-control"placeholder="Enter phone number" />
      </div>
      <button  className="btn btn-primary">Send SMS</button>
   
    </div>
  );
}

export default App;
