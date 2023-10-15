const {Router} = require('express')
const router = Router()
const { getAllStudents,getStudentById ,addStudent} = require('./controller')

router.get('/',getAllStudents)
router.post('/',addStudent)
router.get('/:id',getStudentById)


module.exports = router 