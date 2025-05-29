import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('Контакти:', contacts);
  } catch (error) {
    console.error('Помилка при отриманні контактів:', error);
  }
};

console.log(getAllContacts());
