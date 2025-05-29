import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js'; // Припустимо, що ця функція є

export const generateContacts = async (count) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = [];
    for (let i = 0; i < count; i++) {
      newContacts.push(createFakeContact());
    }
    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(
      `Успішно додано ${count} контактів. Всього тепер: ${updatedContacts.length}`,
    );
  } catch (error) {
    console.error('Помилка при генерації контактів:', error);
  }
};

generateContacts(5);
