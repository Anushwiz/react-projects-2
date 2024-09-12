/* eslint-disable react/prop-types */
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { Formik, Form, Field } from 'formik';
import { db } from '../config/contactBase';

function FormAddContacts({ isUpdate, selectedContact, onClose }) {
  async function addOrUpdateContact(contact) {
    onClose();
    try {
      if (isUpdate && selectedContact) {
        const contactRef = doc(db, '23082024', selectedContact.id);
        await updateDoc(contactRef, contact);
      } else {
        const contactRef = collection(db, '23082024');
        await addDoc(contactRef, contact);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Formik
      initialValues={{
        name: isUpdate ? selectedContact.name : '',
        email: isUpdate ? selectedContact.email : '',
      }}
      onSubmit={values => {
        if (!values.name || !values.email) {
          alert(`Please fill the fields before submitting`);
          onClose();
          return;
        }
        addOrUpdateContact(values);
      }}
    >
      <Form>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xl font-bold">
            Name
          </label>
          <Field
            name="name"
            type="text"
            className="border-2 border-black p-1 text-lg font-semibold"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xl font-bold">
            Email
          </label>
          <Field
            name="email"
            type="email"
            className="border-2 border-black p-1 text-lg font-semibold"
          />
        </div>
        <div className="flex flex-row-reverse">
          <button className="mt-2 rounded-md bg-blue-400 p-1 px-2 font-bold">
            {isUpdate ? `Update ` : `Add `} Contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default FormAddContacts;
