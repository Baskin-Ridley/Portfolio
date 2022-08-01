import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import github from "../assets/socials/github-icon.svg"
import linkedin from "../assets/socials/linkedin-icon.svg"
function ContactForm() {
  const [state, handleSubmit] = useForm("moqbaeow");
  if (state.succeeded) {
    return (
      <div className="contactContainer">
        <h1 className="contactHeader">Thanks for the Email, I will be in touch soon!</h1>
        <div className="socialContainer">
        <a href="https://github.com/Baskin-Ridley" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" className="socialIcon" />
        </a>
        <a href="https://linkedin.com/in/gabriel-edward-baskin-ridley-0732671a0" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="linkedin" className="socialIcon" />
        </a>
        </div>
      </div>
    )
  }
  return (
    <div className="contactContainer">
      <h1 className="contactHeader">Contact Me</h1>
      <p className="contactText">I am currently looking for a role as a developer. If you have a question, an offer, or just want to chat, shoot me a message!</p>
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
      <div className="socialContainer">
        <a href="https://github.com/Baskin-Ridley" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" className="socialIcon" />
        </a>
        <a href="https://linkedin.com/in/gabriel-edward-baskin-ridley-0732671a0" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="linkedin" className="socialIcon" />
        </a>
      </div>
    </div>
  );
}
export default ContactForm