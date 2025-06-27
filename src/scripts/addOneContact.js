import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    contacts.push(createFakeContact());
    await writeContacts(contacts);
  } catch {
    console.error('Error reading contacts for adding a new one');
  }
};

addOneContact();
