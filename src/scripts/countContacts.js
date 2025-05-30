import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('Контакти:', contacts.length);
  } catch (error) {
    console.error('Помилка при отриманні контактів:', error);
  }
};

countContacts();
