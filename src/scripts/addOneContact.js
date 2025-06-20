import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts} from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = await createFakeContact();
    contacts.push(newContact);
    await writeContacts(contacts);
    console.log(`Успішно додано 1 контакт.`);
  } catch (error) {
    console.error('Помилка при генерації контакта:', error);
  }
};

addOneContact();
