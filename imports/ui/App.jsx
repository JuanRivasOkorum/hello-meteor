import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';

//Contact:  name, email, imageURL
export const App = () => (
  <div>
    <h1>Meteor Wallet</h1>
    <ContactForm />
    <ContactList />
  </div>
);
