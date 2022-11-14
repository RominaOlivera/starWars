const { Router } = require('express');

const charactersRoute = require("./characters");


const router = Router();


router.use("/", charactersRoute);


module.exports = router;

