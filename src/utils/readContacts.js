import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export async function readContacts() {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error('❌ Failed to read contacts:', error.message);
    return [];
  }
}
