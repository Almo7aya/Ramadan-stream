const express    = require('express');
const app        = express();
const router     = express.Router();



router.get('/', (req, res) => {
    'use strict';

    res.render('index');
    
});


module.exports = router;
