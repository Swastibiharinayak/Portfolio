// Contact.jsx
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({
      name: "",
      email: "",
      budget: "",
      message: ""
    });
  };

  return (
    <div id="contact-sec">
      <h1 className="contact-title">
        LET&apos;S WORK<br />
        <span className="contact-grey">TOGETHER</span>
      </h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-row">
          <div className="contact-field-block">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="contact-field-block">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your@email.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="contact-field-block">
          <label htmlFor="budget">Budget</label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option>Under $500</option>
            <option>$500 - $2000</option>
            <option>$2000+</option>
          </select>
        </div>
        <div className="contact-field-block">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <button className="contact-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;