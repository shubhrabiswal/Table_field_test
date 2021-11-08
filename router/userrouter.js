const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/usercontroller')

router.post('/signup',usercontroller.adduser)
router.post('/addcol',usercontroller.addcolumn)
router.post('/update/:id',usercontroller.updateuser)
router.delete('/:id',usercontroller.remove)
router.post('/updatefield',usercontroller.updatefield)
router.put('/removefield',usercontroller.removefield)


module.exports = router;