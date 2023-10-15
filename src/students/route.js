const {Router} = require('express')
const router = Router()

router.get('/',(req,res) => {
  res.send('hello from students route')
})

module.exports = router 