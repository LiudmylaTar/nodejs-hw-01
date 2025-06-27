import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  console.log(' Writing to:', PATH_DB);
  await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
};
