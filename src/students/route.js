const {Router} = require('express')
const router = Router()
const { 
    getAllStudents,
    getStudentById ,
    addStudent,
    deleteStudentByID,
    updateStudent,
} = require('./controller')

router.get('/',getAllStudents)
router.post('/',addStudent)
router.get('/:id',getStudentById)
router.delete('/:id',deleteStudentByID)
router.put('/:id',updateStudent)




module.exports = router 