const router = require("express").Router();
const {logsOfSpecific, statsOfSpecific, getImages} = require('../handlers/infos-handlers');


router.get("/images", getImages);

router.get("/logs/:id", logsOfSpecific);

router.get('/stats/:id', statsOfSpecific);


module.exports = router;