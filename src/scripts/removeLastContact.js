import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = data ? JSON.parse(data) : [];

    if (contacts.length === 0) {
      console.log('Контактів немає для видалення');
      return;
    }

    contacts.pop();

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log('Останній контакт видалений');
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error);
  }
};
removeLastContact();
