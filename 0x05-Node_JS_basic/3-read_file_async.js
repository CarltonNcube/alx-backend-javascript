const fs = require('fs').promises;

async function countStudents(path) {
    let data;
    try {
        data = await fs.readFile(path, 'utf8');
    } catch (err) {
        throw new Error('Cannot load the database');
    }

    data = data.split('\n').filter((line) => line.length > 0 && !line.includes('firstname,lastname,age,field'));
    console.log(`Number of students: ${data.length}`);

    const fields = {};
    for (const line of data) {
        const field = line.split(',')[3];
        if (!fields[field]) {
            fields[field] = [];
        }
        fields[field].push(line.split(',')[0]);
    }

    for (const field in fields) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
}

module.exports = countStudents;
