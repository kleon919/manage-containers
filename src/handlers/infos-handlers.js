const {logs, stats} = require('../core/manage-containers')


const logsOfSpecific = async (req, res) => {
    try{
        let resStream = await logs(req.params.id)
        resStream.pipe(res)
    } catch (err) {
        res.json(err.message)
    }
}

const statsOfSpecific = async (req, res) => {
    try{
        let resStream = await stats(req.params.id)
        resStream.once('data', stat => res.json(JSON.parse(stat)))
    } catch (err) {
        res.json(err.message)
    }
}


module.exports = {
    logsOfSpecific,
    statsOfSpecific
}