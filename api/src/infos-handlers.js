const {logs, stats} = require('../../src/manage-containers')


const logsOfSpecific = async (req, res) => {
    try{
        res.json(await logs(req.params.id))
    } catch (err) {
        res.json(err.message)
    }
}

const statsOfSpecific = async (req, res) => {
    try{
        res.json(await stats(req.params.id))
    } catch (err) {
        res.json(err.message)
    }
}


module.exports = {
    logsOfSpecific,
    statsOfSpecific
}