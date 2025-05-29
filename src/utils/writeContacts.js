import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const json = JSON.stringify(updatedContacts);
    await fs.writeFile(PATH_DB, json, 'utf-8');
    console.log('Contacts/contact were successfully writen to the file');
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
};
