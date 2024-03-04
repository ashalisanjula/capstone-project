const Workspace = require('../models/workspace');
const appConfig = require('../app-configs');

exports.create = async (req, res) => {
    let ws = new Workspace({
        name: req.body.name,
        userId: req.body.userId,
    });

    let savedDoc = await ws.save();

    if (savedDoc) {
        res.status(200).json({sts: 1});
    } else {
        console.log(error);
    res.status(500).json({sts: -1, error: 'Internal Server Error'})
    }
}