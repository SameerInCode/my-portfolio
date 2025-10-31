import {useRef} from "react";
import emailjs from "@emailjs/browser"; 

function Contact(){

  const form=useRef();

  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm(
      "service_gppa9mq",
      "template_156e2xw",
      form.current,
      "-SdV385KssMng6NFA",
    )
    .then(
      ()=>{
        alert("Message sent successfully!");
      },
      (error)=>{
        alert("Failed to send:"+error.text)
      }
    );
  }

  return(
    <section id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>

      </form>
    </section>
  );
}

export default Contact;



