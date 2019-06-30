const router = require("express").Router();
const {logsOfSpecific, statsOfSpecific} = require('../handlers/infos-handlers');


router.get("/logs/:id", logsOfSpecific);

router.get('/stats/:id', statsOfSpecific);

module.exports = router;