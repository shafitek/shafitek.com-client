import React from "react";
import PageTitle from "../components/PageTitle";
import "./Contact.scss";

function Contact() {
  return (
    <div>
      <PageTitle title="Contact" />
      <div className="contact-page">
        For any technical, work, business related inquiries, you can get in touch with me
        at:
      </div>
      <h1 className="contact-email">shafitek [at] gmail.com</h1>
      <div>
        Alternatively, feel free to contact me through{" "}
        <a href="https://www.linkedin.com/in/shafitek/" target="blank">
          LinkedIn
        </a>
        . Thank you.
      </div>
    </div>
  );
}

export default Contact;
