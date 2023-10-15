const getAllStudentsQuery = "SELECT * FROM students";
const getStudentByIdQuery =  "SELECT * FROM students WHERE id = $1";
const checkEmailExists =  "SELECT s FROM students s WHERE s.email = $1";
const addStudentQuery = "INSERT INTO students (name,email,age,dob) VALUES ($1,$2,$3,$4)";
module.exports={
    getAllStudentsQuery,
    getStudentByIdQuery,
    addStudentQuery,
    checkEmailExists,
}