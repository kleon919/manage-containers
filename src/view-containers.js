const {exec}    = require("child_process");
const {Docker}  = require('node-docker-api');
const docker    = new Docker({socketPath: '/var/run/docker.sock'});

const list = opts => docker.container.list(opts);

const one = (id) => list({all:true})
    .then(containers =>
        containers.filter(container => container['data']['Id'] === id));

const idle = () => list({all: true})
    .then(containers =>
        containers.filter(container => container['data']['State'] !== 'running'));

const view = command =>
    new Promise((resolve, reject) =>
        exec(command, (err, stdout, stderr) =>
            err ? reject(stderr) : resolve(stdout)));


module.exports = {
    viewAll   : view.bind(null, 'sudo docker ps -a'),
    viewRun   : view.bind(null, 'sudo docker ps'),
    fetchAll  : list.bind(null, {all: true}),
    fetchRun  : list.bind(null, {}),
    fetchIdle : idle,
    fetchOne  : one
};


