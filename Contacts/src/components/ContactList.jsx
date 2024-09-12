/* eslint-disable react/prop-types */

import Contact from './Contact';

function ContactList({ contacts, onOpen, onUpdate }) {
  return (
    <>
      {contacts.map(contact => (
        <Contact
          contact={contact}
          onUpdate={onUpdate}
          onOpen={onOpen}
          key={contact.id}
        />
      ))}
    </>
  );
}

export default ContactList;
