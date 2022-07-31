import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("moqbaeow");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className="contactContainer">
      <h2 className="contactHeader">Contact Me</h2>
      <p className="contactText">I am currently looking for a role as a developer. If you have a question, an other, or just want to chat, shoot me a message!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default ContactForm