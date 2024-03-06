import React,{ useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        message: false,
    });
    const [formSubmit, setFormSubmit] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let errors = false;
        let newFormErrors = { ...formErrors };
        for (const key in formData) {
            if (formData[key] === "") {
                errors = true;
                newFormErrors[key] = true;
            } else {
                newFormErrors[key] = false;
            }
        }
        if (errors) {
            setFormErrors(newFormErrors);
        } else {
            setFormSubmit(true);
        }
    }
    if (formSubmit) {
        return (
            <div>
                <h1>Thank you for your message!</h1>
                <p>I will get back to you as soon as possible.</p>
            </div>
        );
    }
    return (
        <div>
            <h1>Contact</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={handleInputChange} value={formData.name} />
                    {formErrors.name && <p className="error">Name is required</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={handleInputChange} value={formData.email} />
                    {formErrors.email && <p className="error">Email is required</p>}
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" onChange={handleInputChange} value={formData.message} />
                    {formErrors.message && <p className="error">Message is required</p>}
                </div>
                <button type="submit">Send</button>
            </form>       
        </div>
    );
  }
  