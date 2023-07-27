import React, { Component } from 'react';
import {
  ContactsTitle,
  ContactContainer,
  PhonebookTitle,
  PhonebookContainer,
  WrapperTask,
} from './Styled.App';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
      console.log(this.state.contacts);
      return;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = addedContact => {
    const { contacts } = this.state;
    contacts.find(contact =>
      contact.name.toLowerCase().includes(addedContact.name.toLowerCase())
    )
      ? alert(`${addedContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [
            {
              id: addedContact.id,
              name: addedContact.name,
              number: addedContact.number,
            },
            ...prevState.contacts,
          ],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterValue = e => {
    this.setState({
      filter: e.target.value.toLowerCase(),
    });
  };

  contactFilter = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    console.log(contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredSearch = this.contactFilter();
    console.log(this.state.contacts);
    return (
      <WrapperTask>
        <PhonebookContainer>
          <PhonebookTitle>Phonebook</PhonebookTitle>
          <ContactForm onSubmit={this.addContact} />
        </PhonebookContainer>
        <ContactContainer>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter onChange={this.filterValue} value={this.state.filter} />
          <ContactList
            contacts={filteredSearch}
            onDelete={this.deleteContact}
          />
        </ContactContainer>
      </WrapperTask>
    );
  }
}
