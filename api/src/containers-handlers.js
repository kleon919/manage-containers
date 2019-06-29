const {fetchAll, fetchIdle, fetchRun, fetchOne} = require('../../src/view-containers')
const {createOne, startOne, stopOne, create, start, stop } = require('../../src/manage-containers')

const mapObj = {
    all: fetchAll,
    idle: fetchIdle,
    run: fetchRun
}

const getContainers = async (req, res) => {
    try {
        if (!(req.query.state in mapObj)){
            throw new Error('Invalid input')
        }
        res.json(mapObj[req.query.state]());
    } catch (err) {
        res.json(err.message)
    }
};

const getSpecific = async (req, res) => {
    try{
        let response = await fetchOne(req.params.id)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
};

const startContainers = async (req, res) => {
    try{
        await start()
        res.json('All idle containers have been started with success')
    } catch (err) {
        res.json(err.message)
    }
};

const stopContainers = async (req, res) => {
    try{
        await stop()
        res.json('All running containers have been stopped with success')
    } catch (err) {
        res.json(err.message)
    }
};

const startSpecific = async (req, res) => {
    try{
        let response = await startOne(req.params.id)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
}

const stopSpecific = async (req, res) => {
    try{
        let response = await stopOne(req.params.id)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
}


module.exports = {
    getContainers,
    getSpecific,
    startContainers,
    startSpecific,
    stopContainers,
    stopSpecific
}