import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactAsync,
  deleteContactAsync,
  fetchContactsAsync,
} from 'redux/actions';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Register from '../Navigation/Register';
import Login from '../Navigation/Login';
import Contacts from '../Navigation/Contacts';

import '../App/App.css';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const addContactHandler = contact => {
    dispatch(addContactAsync(contact));
  };

  const deleteContactHandler = contactId => {
    dispatch(deleteContactAsync(contactId));
  };

  const handleFilterChange = filterValue => {
    dispatch(fetchContactsAsync(filterValue));
  };

  return (
    <div className="container">
      <div className="phonebook-wrapper">
        <h1 className="phonebook-title">Phonebook</h1>
        <h6 className="phonebook-subtitle">by Arleta Janysz</h6>

        <ContactForm onAddContact={addContactHandler} contacts={contacts} />
        <h2 className="phonebook-contacts">Contacts</h2>
      </div>
      <Filter filter={filter} onChangeFilter={handleFilterChange} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={deleteContactHandler}
      />
    </div>
  );
}
