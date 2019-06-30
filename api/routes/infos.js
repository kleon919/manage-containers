const router = require("express").Router();
const {logsOfSpecific, statsOfSpecific} = require('../src/infos-handlers');


router.get("/logs/:id", logsOfSpecific);

router.get('/stats/:id', statsOfSpecific);

module.exports = router;