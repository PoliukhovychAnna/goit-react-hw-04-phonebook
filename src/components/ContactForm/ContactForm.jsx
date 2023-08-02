import React, { useState } from "react";
import PropTypes from 'prop-types'; 
import { ContactFormContainer } from "./Styled.ContactForm";
import { nanoid } from 'nanoid';




export const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  console.log(name);
  console.log(number);

 const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    onSubmit(newContact);
   setName('')
   setNumber('')
  };

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } 
    if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

    return (
      <ContactFormContainer onSubmit={handleSubmit}>
        <label>
          <h4>Name</h4>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <h4>Number</h4>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </ContactFormContainer>
    );
  }

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};