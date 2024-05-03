// full_server/utils.js
import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n');
        const result = {};

        lines.forEach(line => {
          const [field, firstName] = line.split(',');
          if (!result[field]) {
            result[field] = [];
          }
          result[field].push(firstName);
        });

        resolve(result);
      }
    });
  });
}
