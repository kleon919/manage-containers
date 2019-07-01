const router = require("express").Router();
const manage = require('../handlers/containers-handlers');


router.get('/', manage.getContainers);

router.get('/:id', manage.getSpecific);

router.post('/', manage.createContainers);

router.put('/start', manage.startContainers);

router.put('/:id/start', manage.startSpecific);

router.put('/stop', manage.stopContainers);

router.put('/:id/stop', manage.stopSpecific);


module.exports = router;
