const pool = require('../../db')
const {
  getAllStudentsQuery,
  getStudentByIdQuery,
  addStudentQuery,
  checkEmailExists,
  deleteStudentQuery,
  updateStudentQuery,
} = require('./queries')

/**
 * @desc  get all students 
 * @method get
 * @route api/v1/students
 */
const getAllStudents = (req,res) => {
    pool.query(getAllStudentsQuery,(error,results) => {
      if (error) throw error ;

        res.status(200).json({length:results.rows.length,data:results.rows})
    })
 }

 /**
 * @desc  get student by id
 * @method get
 * @route api/v1/students/id
 */
const getStudentById = (req,res) => {
  const id = +req.params.id
  pool.query(getStudentByIdQuery,[id],(error,results) => {
    if (error) throw error
    res.status(200).json({data:results.rows})
  })
}

/**
 * @desc  add a new student
 * @method post
 * @route api/v1/students/
 */
const addStudent = (req,res) => {
const {name,email,age,dob}= req.body;

  pool.query(checkEmailExists,[email],(error,results) => {
    if (error) throw error
    if (results.rows.length) return res.send("email allready exists ")
    
    // add student 
    pool.query(addStudentQuery,[name,email,age,dob],(error,results) => {
      if (error) throw error
      res.status(200).json('a new student created successfully')
    })

  })
}

/**
 * @desc  delete a student
 * @method delete
 * @route api/v1/students/id
 */
const deleteStudentByID = (req,res) => {

  const {id} = req.params
        pool.query(getStudentByIdQuery,[id],(error,results) => {
        if (error) throw error
        if (!results.rows.length) {
          return res.send("there is no students for this id")
        }
        pool.query(deleteStudentQuery,[id],(error,results) => {
        res.status(200).json('A student Deleted')
        })
      })
  
    }
  
/**
 * @desc  update a student
 * @method put
 * @route api/v1/students/id
 */
const updateStudent = (req, res) => {
    const id = parseInt(req.params.id)
    const {name} = req.body
    
    pool.query(getStudentByIdQuery,[id],(error,results) => {
      if (!results.rows.length) {
        res.status(400).json(`there is no students for this id`)
      }
      pool.query(updateStudentQuery,[name,id],(error,results) => {
        if(error) throw error;
        res.status(200).json(`the student for id ${id} updated success`)
      })
    })
}

 
  module.exports={
    getAllStudents,
    getStudentById,
    addStudent,
    deleteStudentByID,
    updateStudent,

}

