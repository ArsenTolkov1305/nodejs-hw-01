import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(JSON.stringify(contacts));
  } catch (error) {
    console.error(error);
  }
};


getAllContacts();
