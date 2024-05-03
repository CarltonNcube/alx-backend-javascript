// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils';

export class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase('./database.csv');
      const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      res.status(200).send('This is the list of our students\n');
      fields.forEach(field => {
        const students = data[field].join(', ');
        res.write(`Number of students in ${field}: ${data[field].length}. List: ${students}\n`);
      });
      res.end();
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
      const data = await readDatabase('./database.csv');
      const students = data[major].join(', ');

      res.status(200).send(`List: ${students}\n`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
