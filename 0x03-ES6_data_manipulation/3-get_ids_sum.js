// Function that calculates the sum of all student ids
const getStudentIdsSum = (students) => {
    return students.reduce((sum, student) => sum + student.id, 0);
};

export default getStudentIdsSum;
