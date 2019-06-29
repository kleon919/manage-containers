const router = require("express").Router();
const manage = require('../src/containers-handlers');

router.get('/', manage.getContainers)

router.get('/:id', manage.getSpecific)

router.put('/start', manage.startContainers)

router.put('/:id/start', manage.startSpecific)

router.put('/stop', manage.stopContainers)

router.put('/:id/stop', manage.stopSpecific)

module.exports = router;