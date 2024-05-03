// full_server/utils.js
import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n');
        const database = {};

        lines.forEach(line => {
          const [field, firstName] = line.split(',');
          if (!database[field]) {
            database[field] = [];
          }
          database[field].push(firstName);
        });

        resolve(database);
      }
    });
  });
}
