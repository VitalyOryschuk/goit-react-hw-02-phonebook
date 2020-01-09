import React from 'react';
import T from 'prop-types';
import Contact from './Contact';
import styles from './ContactsList.module.css';

const ContactsList = ({ items, onDeleteContact }) => (
  <ul className={styles.contactList}>
    {items.map(contact => (
      <li key={contact.id} className={styles.ContactsListItem}>
        <Contact contact={contact} onDeleteContact={() => onDeleteContact(contact.id)} />
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  items: T.arrayOf(T.shape({})).isRequired,
  onDeleteContact: T.func.isRequired,
};

export default ContactsList;
