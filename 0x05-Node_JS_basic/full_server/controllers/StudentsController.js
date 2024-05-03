// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

export class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = await readDatabase('./database.csv');
      const fields = Object.keys(database).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      let response = 'This is the list of our students\n';
      fields.forEach(field => {
        const students = database[field].join(', ');
        response += `Number of students in ${field}: ${database[field].length}. List: ${students}\n`;
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const database = await readDatabase('./database.csv');
      const students = database[major].join(', ');

      res.status(200).send(`List: ${students}\n`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

