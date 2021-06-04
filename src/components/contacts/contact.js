import { useState } from "react";
import s from "./contact.module.css";
import Contact from "../../images/contact.jpg";

export default function FormRequest() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirthd, setDateOfBirthd] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.currentTarget.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };
  const handleDateChange = (e) => {
    setDateOfBirthd(e.currentTarget.value);
  };
  const handleEMessageChange = (e) => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `name: ${name},`,
      `email: ${email},`,
      `dateOfBirthd: ${dateOfBirthd},`,
      `message: ${message}`
    );
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setDateOfBirthd("");
    setMessage("");
  };

  return (
    <div className={s.requestSection} id="formsubmit">
      <div className={s.formSection}>
        <img className={s.formIcon} src={Contact} alt="contact"></img>
        <h2 className={s.formTitle}>Request info</h2>
        <p className={s.formInformation}>
          Got a question? Need to see a demo? Want to start your free trial
          subscription? We'd love to hear from you! Contact us and we will get
          back to you shortly.
        </p>
      </div>
      <form className={s.formContainer} onSubmit={handleSubmit}>
        <label className={s.formLabel}>
          <input
            className={s.formInput}
            type="text"
            placeholder="Name*"
            name="name"
            value={name}
            onChange={handleNameChange}
          ></input>
        </label>
        <label className={s.formLabel}>
          <input
            className={s.formInput}
            type="email"
            placeholder="Email*"
            name="email"
            value={email}
            onChange={handleEmailChange}
          ></input>
        </label>
        <label className={s.formLabel}>
          <input
            className={s.formInput}
            type="date"
            placeholder="Date of Birth*"
            name="dateOfBirthd"
            value={dateOfBirthd}
            onChange={handleDateChange}
          ></input>
        </label>
        <label className={s.formLabel}>
          <input
            className={s.formInput}
            type="text"
            placeholder="Message*"
            name="message"
            value={message}
            onChange={handleEMessageChange}
          ></input>
        </label>
        <button className={s.formButton} type="submit">
          Request Info
        </button>
      </form>
    </div>
  );
}
