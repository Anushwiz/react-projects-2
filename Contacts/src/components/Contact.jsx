/* eslint-disable react/prop-types */
import { IoMdContact } from 'react-icons/io';
import { FaUserEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/contactBase';

function Contact({ contact, onOpen, onUpdate }) {
  function handleEdit() {
    onOpen(contact);
    onUpdate();
  }
  async function deleteContact(id) {
    try {
      await deleteDoc(doc(db, '23082024', id));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex items-center justify-center text-zinc-900">
      <div className="mt-2 flex min-w-[30rem] justify-between rounded-lg bg-blue-400 p-2">
        <div className="flex items-center justify-between">
          <IoMdContact className="h-[3.5rem] w-[3.5rem]" />
          <div>
            <h3 className="text-xl font-bold">{contact.name}</h3>
            <p className="text-lg font-semibold leading-tight">
              {contact.email}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <FaUserEdit
            onClick={handleEdit}
            className="h-[3rem] w-[3rem] cursor-pointer"
          />
          <RiDeleteBin5Fill
            onClick={() => deleteContact(contact.id)}
            className="h-[3rem] w-[3rem] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
