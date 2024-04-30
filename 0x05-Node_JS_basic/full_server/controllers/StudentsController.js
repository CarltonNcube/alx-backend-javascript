const utils = require('../utils');

class StudentsController {
    static getAllStudents(req, res) {
        try {
            const data = utils.readDatabase();
            res.status(200);
            console.log('This is the list of our students');
            // process data...
        } catch (err) {
            res.status(500);
            throw new Error('Cannot load the database');
        }
    }

    static getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        if (!['CS', 'SWE'].includes(major)) {
            res.status(500);
            throw new Error('Major parameter must be CS or SWE');
        }
        try {
            const data = utils.readDatabase();
            res.status(200);
            // process data...
        } catch (err) {
            res.status(500);
            throw new Error('Cannot load the database');
        }
    }
}

module.exports = StudentsController;
