const router = require("express").Router();

router.get("/logs/:id", HANDLER1); // todo

router.get('/stats/:id', HANDLER2); // todo

module.exports = router;