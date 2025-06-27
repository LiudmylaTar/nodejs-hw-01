import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const existingContact = await readContacts();
  const newContact = Array.from({ length: number }, () => createFakeContact());
  const updatedContacts = [...existingContact, ...newContact];
  await writeContacts(updatedContacts);
  console.log(
    `✅ Added ${number} contacts. Total now: ${updatedContacts.length}`,
  );
};

generateContacts(5);
