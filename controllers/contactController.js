import fs from 'fs/promises';
import path from 'path';

const DB_FILE = path.join(process.cwd(), 'db.json');

export async function storeContactSubmission({ name, email, message }) {
  try {
    let db = {};
    try {
      const data = await fs.readFile(DB_FILE, 'utf-8');
      db = JSON.parse(data);
    } catch (readError) {}
    if (!db.contactSubmissions) {
      db.contactSubmissions = [];
    }
     const submission = {
      id: Date.now(),
      name,
      email,
      message,
    };
   console.log('eees',submission);
    db.contactSubmissions.push(submission);
    await fs.writeFile(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
     return submission;
  } catch (error) {
    throw error;
  }
}
