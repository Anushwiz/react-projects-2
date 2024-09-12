import Logo from './components/Logo';
import Input from './components/Input';

import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './config/contactBase';
import { useEffect, useState } from 'react';

import Modal from './components/Modal';

import ContactList from './components/ContactList';
import FormAddUpdateContacts from './components/FormAddUpdateContacts';

function App() {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  function onOpen(contact = null) {
    setIsOpen(true);
    if (contact) {
      setSelectedContact(contact);
      setIsUpdate(true);
    }
  }
  function onClose() {
    setIsOpen(false);
    setIsUpdate(false);
    setSelectedContact(null);
  }
  function onUpdate() {
    setIsUpdate(true);
  }
  function filterContacts(e) {
    const value = e.target.value.toLowerCase();
    const contactsRef = collection(db, '23082024');
    onSnapshot(contactsRef, snapshot => {
      const contactList = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredContacts = contactList.filter(contact =>
        contact.name.toLowerCase().includes(value),
      );
      setContacts(filteredContacts);
    });
  }

  useEffect(() => {
    const getContacts = async function () {
      try {
        const contactsRef = collection(db, '23082024');
        onSnapshot(contactsRef, snapshot => {
          const contactList = snapshot.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <Logo />
      <Input onOpen={onOpen} filterContacts={filterContacts} />
      <ContactList contacts={contacts} onOpen={onOpen} onUpdate={onUpdate} />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
      >
        <FormAddUpdateContacts
          isUpdate={isUpdate}
          selectedContact={selectedContact}
          onClose={onClose}
        />
      </Modal>
    </>
  );
}

export default App;
