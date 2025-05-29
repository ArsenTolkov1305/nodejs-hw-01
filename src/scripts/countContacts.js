import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('Контакти:', contacts.length);
    return `Кількість контактів - ${contacts.length}`;
  } catch (error) {
    console.error('Помилка при отриманні контактів:', error);
  }
};

console.log(await countContacts());
