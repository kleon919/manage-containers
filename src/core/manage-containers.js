const {Docker}  = require('node-docker-api');
const docker    = new Docker({ socketPath: '/var/run/docker.sock' });

const {fetchRun, fetchIdle, fetchOne} = require('./view-containers');


const parallel = tasks => Promise.all(tasks.map(task => task()))

const startOne = id => fetchOne(id)
    .then(container => container[0].start())

const stopOne = id => fetchOne(id)
    .then(container => container[0].stop())

const create = input => Promise.resolve(input)
    .then(arr => arr.map(opts => () => docker.container.create(opts)))
    .then(tasks => parallel(tasks))
    .catch(err => err)

const start = () => fetchIdle()
    .then(containers => containers.map(container => () => container.start()))
    .then(tasks => parallel(tasks))
    .catch(err => err)

const stop = () => fetchRun()
    .then(containers => containers.filter(container => container['data']['Image'] !== 'kleon919/manage-containers'))
    .then(containers => containers.map(container => () => container.stop()))
    .then(tasks => parallel(tasks))
    .catch(err => err)

const remove = () => fetchIdle()
    .then(containers => containers.map(container => () => container.delete({ force: true })))
    .then(tasks => parallel(tasks))
    .catch(err => err)

const logs = id => fetchOne(id)
    .then(container => container[0].logs({ follow: true, stdout: true, stderr: true }))
    .then(stream => {
        stream.on('data', info => console.log(info.toString()))
        stream.on('error', err => console.log(err))
        return stream;
    })
    .catch(err => err)

const stats = id => fetchOne(id)
    .then(container => container[0].status())
    .then(container => container.stats())
    .catch(err => err)


module.exports = {
    startOne,
    stopOne,
    create,
    remove,
    start,
    stop,
    logs,
    stats
};




