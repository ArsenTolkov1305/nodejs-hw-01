import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contact = await createFakeContact();
    writeContacts(contact);
    console.log(`Успішно додано 1 контакт.`);
  } catch (error) {
    console.error('Помилка при генерації контакта:', error);
  }
};

addOneContact();
