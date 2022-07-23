import React from 'react'

const Contact = () => {
  return (
    <div className="contactContainer">
        <h2 className="contactHeader">Contact</h2>
        <p className="contactText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet lorem ante. Curabitur tristique fringilla eros. Duis consectetur mauris mi, id congue nisi egestas at. Nunc blandit posuere lectus, nec pulvinar ipsum. Sed felis augue, rutrum a mi nec, sagittis pulvinar dui. Nam et mollis nisi. Nam rutrum, urna in aliquam lacinia, erat sapien dapibus turpis, nec luctus ante lectus eu urna. Donec mattis quis nisl quis pellentesque. Donec sodales euismod lorem eget luctus.
        </p>
        <form className="contactForm">
            <input className="contactInput" type="text" placeholder="Name"/>
            <input className="contactInput" type="text" placeholder="Email"/>
            <textarea className="contactTextarea" placeholder="Message"></textarea>
            <button className="contactButton">Send</button>
        </form>
    </div>

  )
}

export default Contact