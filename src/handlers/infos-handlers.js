const {logs, stats} = require('../core/manage-containers')

const getImages = async (req, res) => res.json(['elixir', 'mysql', 'nginx', 'redis', 'jenkins/jenkins'])

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
        resStream.on('error', err => err)
    } catch (err) {
        res.json(err.message)
    }
}


module.exports = {
    getImages,
    logsOfSpecific,
    statsOfSpecific
}