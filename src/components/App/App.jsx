import React, {useState, useEffect } from 'react';
import {
  ContactsTitle,
  ContactContainer,
  PhonebookTitle,
  PhonebookContainer,
  WrapperTask,
} from './Styled.App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';

const myContacts = [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]

const savedContacts = localStorage.getItem('contacts');

export const App = () => {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(savedContacts) ?? myContacts
  });
  const [filter, setFilter] = useState('')

  useEffect(() => {
   localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts])



  const addContact = addedContact => {
    contacts.find(contact =>
      contact.name.toLowerCase().includes(addedContact.name.toLowerCase())
    )
      ? toast.warn(`${addedContact.name} is already in contacts`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      : setContacts(prevState => [
          {
            id: addedContact.id,
            name: addedContact.name,
            number: addedContact.number,
          },
          ...prevState,
        ]);
  };

  const deleteContact = contactId => {
    setContacts(prevState => (prevState.filter(contact => contact.id !== contactId)))
  };

  const filterValue = e => {
    setFilter(e.target.value.toLowerCase())
  };

  const contactFilter = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

    return (
      <WrapperTask>
        <PhonebookContainer>
          <PhonebookTitle>Phonebook</PhonebookTitle>
          <ContactForm onSubmit={addContact} />
        </PhonebookContainer>
        <ContactContainer>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter onChange={filterValue} value={filter} />
          <ContactList contacts={contactFilter()} onDelete={deleteContact} />
        </ContactContainer>
        <ToastContainer />
      </WrapperTask>
    );
  }

