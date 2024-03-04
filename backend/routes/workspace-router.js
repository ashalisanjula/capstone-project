const express = require('express')
const router = express.Router();
const workSpaceController = require('../controllers/workspace-controller');

router.post('/create', (req, res, next) => {
    let userId = req.body.userId;
    let name = req.body.name;
    
    if (!name) {
        res.status(400).json({sts: -1, error: 'Workspace name is required'});
    } else {
        workSpaceController.create(req, res);
    }
});



module.exports = router;