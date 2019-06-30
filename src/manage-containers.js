const {Docker}  = require('node-docker-api');
const docker    = new Docker({ socketPath: '/var/run/docker.sock' });

const {fetchRun, fetchIdle, fetchOne} = require('./view-containers');

let inputParams = [
    {
        name: 'test-elixir',
        Image: 'elixir'
    },
    {
        name: 'test-mysql',
        Image: 'mysql',
        AttachStdin: false,
        AttachStdout: true,
        AttachStderr: true,
        Env: [
            'MYSQL_ROOT_PASSWORD=administrator' // todo
        ]
    },
    {
        name: 'test-hello',
        Image: 'hello-world'
    }
];

const parallel = tasks => Promise.all(tasks.map(task => task()))

const createOne = obj => docker.container.create(obj)

const startOne = id => fetchOne(id)
    .then(container => container.start())

const stopOne = id => fetchOne(id)
    .then(container => container.stop())

const create = input => Promise.resolve(input)
    .then(arr => arr.map(opts => () => docker.container.create(opts)))
    .then(tasks => parallel(tasks))
    .catch(err => console.log(err))

const start = () => fetchIdle()
    .then(containers => containers.map(container => () => container.start()))
    .then(tasks => parallel(tasks))
    .catch(err => console.log(err))

const stop = () => fetchRun()
    .then(containers => containers.map(container => () => container.stop()))
    .then(tasks => parallel(tasks))
    .catch(err => console.log(err))

const logs = id => fetchOne(id)
    .then(container => container.logs({ follow: true, stdout: true, stderr: true }))
    .then(stream => {
        stream.on('data', info => console.log(info.toString()))
        stream.on('error', err => console.log(err))
    })
    .catch(err => console.log(err));

const stats = id => fetchOne(id)
    .then(container => container.status())
    .then(container => container.stats())
    .then(stats => {
        stats.on('data', stat => console.log('Stats: ', JSON.parse(stat)))
        stats.on('error', err => console.log('Error: ', err))
    })
    .catch(error => console.log(error));


module.exports = {
    create: create.bind(null, inputParams),
    createOne,
    startOne,
    stopOne,
    start,
    stop,
    logs,
    stats
};




