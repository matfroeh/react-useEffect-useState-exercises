import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.firstName, form.lastName, form.email, form.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange} required
        />
      </label>
      <br />
      <label>
        Last name:
        <input name="lastName" value={form.lastName} onChange={handleChange} required/>
      </label>
      <br />
      <label>
        Email:
        <input name="email" type="email" value={form.email} onChange={handleChange} required/>
      </label>
      <br />
      <textarea name="message" value={form.message} onChange={handleChange} required/>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
