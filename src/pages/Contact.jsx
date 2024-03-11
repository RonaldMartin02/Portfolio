import React,{ useState } from 'react';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Message:', message);
        console.log('Full Name:',`${first} ${last}`);
        console.log('Contact Number:', contactNumber);
        setSubmitted('Thank you for your submission');
        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    }
    return (
        <div className="Contact">
      <h1 className="Contact_Title">Contact Me</h1>
      <form className="Contact_Form" onSubmit={handleFormSubmit}>
        <div className='Contact_FullName'>

        <label className="Contact_First">
          <span className="Contact_First_Span">First Name:</span>
          <input type="text" className="Contact_First_Input" value={first} onChange={e => setFirst(e.target.value)} required />
        </label>
        <label className="Contact_Last">
          <span className="Contact_Last_Span">Last Name:</span>
          <input type="text" className="Contact_Last_Input" value={last} onChange={e => setLast(e.target.value)} required />
        </label>
        </div>
        <div className='Contact_Info'>
        <label className="Contact_Email">
          <span className="Contact_Email_Span">Email:</span>
          <input type="email" placeholder='Email@email.com' className="Contact_Email_Input" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label className="Contact_Number">
          <span className="Contact_Number_Span">Contact Number:</span>
          <input placeholder='(999) 999-999' type="tel" className="Contact_Number_Input" value={contactNumber} onChange={e => setContactNumber(e.target.value)} required />
        </label>
        </div>
        <label className="Contact_Message">
          <span className="Contact_Message_Span">Message:</span>
          <textarea className="Contact_Message_Input" value={message} onChange={e => setMessage(e.target.value) } required />
        </label>
        <button className="Contact_Submit" type="submit">Submit</button>
      </form>
      {submitted && <p className="Contact_Submit">{submitted}</p>}
    </div>
    );
  }
  