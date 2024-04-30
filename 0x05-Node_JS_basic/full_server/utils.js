// full_server/utils.js

import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const students = {};
        lines.forEach(line => {
          const [name, field] = line.split(',');
          if (!students[field]) students[field] = [];
          students[field].push(name);
        });
        resolve(students);
      }
    });
  });
};

export { readDatabase };
