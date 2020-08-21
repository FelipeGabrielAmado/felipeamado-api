const { Router } = require('express');
const router = Router();

const { getMessage, createMessage } = require('../controllers/index.controller');

router.get('/message', getMessage);
router.post('/message', createMessage);


module.exports = router;