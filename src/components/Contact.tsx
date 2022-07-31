import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("moqbaeow");
  if (state.succeeded) {
    return (
      <div className="contactContainer">
        <h1 className="contactHeader">Thanks for the Email, I will be touch soon!</h1>
        
      </div>
    )
  }
  return (
    <div className="contactContainer">
      <h2 className="contactHeader">Contact Me</h2>
      <p className="contactText">I am currently looking for a role as a developer. If you have a question, an other, or just want to chat, shoot me a message!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="Email Address"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button className="formSubmit" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default ContactForm