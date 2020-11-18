import React from "react";
import HelmetComponent from "../components/HelmetComponent";
import PageTitle from "../components/PageTitle";
import "./Contact.scss";

function Contact() {

  let meta = {
    title: "Contact",
    desc:
      "For any technical, work, business related inquiries, feel free to get in touch with me.",
  };

  return (
    <div>
      <PageTitle title="Contact" />
      <HelmetComponent meta={meta} />
      <div className="card box contact-page">
        For any technical, work, business related inquiries, you can get in
        touch with me at:
        <h1 className="contact-email">shafitek [at] gmail.com</h1>
        <div>
          Alternatively, feel free to contact me through{" "}
          <a href="https://www.linkedin.com/in/shafitek/" target="blank">
            LinkedIn
          </a>
          . Thank you.
        </div>
      </div>
    </div>
  );
}

export default Contact;
