import React, { Component } from 'react';
import shortid from 'shortid';
import SearchForm from '../components/SearchForm/SearchForm';
import ContactsList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';
import styles from './style.module.css';

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const findContact = (contacts, contact) =>
  contacts.find(item => item.name.toLowerCase() === contact.name.toLowerCase());

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermion Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSignUp = contact => {
    const contactFind = findContact(this.state.contacts, contact);
    const contactToAdd = {
      ...contact,
      id: shortid.generate(),
    };

    if (contact.name) {
      contactFind
        ? alert(`${contactFind.name} is already in contacts`)
        : this.setState(state => ({
            contacts: [...state.contacts, contactToAdd],
          }));
    } else {
      alert('Input name please!');
    }
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContacts(contacts, filter);
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>PhoneBook</h2>
        <SearchForm onChangeSubmit={this.handleSignUp} />
        {contacts.length > 0 && <h2 className={styles.title}>Contacts</h2>}
        {contacts.length > 1 && (
          <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
        )}
        <ContactsList items={filteredContacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}
