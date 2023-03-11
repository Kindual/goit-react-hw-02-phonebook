import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm'
import Section from './Section/Section'

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  addContact = (obj) => {
    this.setState((state) =>
      ({ ...state, contacts: [...state.contacts, obj] })
    );
  };

  render() {
    return (
      <div>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm addContact={this.addContact} />
        </Section>

        <Section>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(contact => 
              <li key={contact.id}>
                <p>{contact.name}: {contact.number}</p>
              </li>
            )}
          </ul>
        </Section>
      </div>
    )
  }
}
