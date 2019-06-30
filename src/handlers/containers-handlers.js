const {fetchAll, fetchIdle, fetchRun, fetchOne} = require('../core/view-containers')
const {createOne, startOne, stopOne, create, start, stop } = require('../core/manage-containers')


const getSpecific = async (req, res) => {
    try{
        let response = await fetchOne(req.params.id)
        res.json(response)
    } catch (err) {
        res.json(err.message)
    }
};

const getContainers = async (req, res) => {

    const mapObj = {
        all: fetchAll,
        idle: fetchIdle,
        run: fetchRun
    }

    try {
        if (!(req.query.state in mapObj)){
            throw new Error('Invalid input')
        }
        let response = await mapObj[req.query.state]()
        res.json(response.map(item => item.data))
    } catch (err) {
        res.json(err.message)
    }
};

const startSpecific = async (req, res) => {
    try{
        await startOne(req.params.id)
        res.json('Container has been started with success.')
    } catch (err) {
        res.json(err.message)
    }
}

const startContainers = async (req, res) => {
    try{
        await start()
        res.json('All idle containers have been started with success.')
    } catch (err) {
        res.json(err.message)
    }
};

const stopSpecific = async (req, res) => {
    try{
        await stopOne(req.params.id)
        res.json('Container has been stopped with success.')
    } catch (err) {
        res.json(err.message)
    }
}

const stopContainers = async (req, res) => {
    try{
        await stop()
        res.json('All running containers have been stopped with success.')
    } catch (err) {
        res.json(err.message)
    }
};


module.exports = {
    getSpecific,
    getContainers,
    startSpecific,
    startContainers,
    stopSpecific,
    stopContainers
}