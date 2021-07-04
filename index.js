const express = require("express");
const router = express.Router();
const csvParser = require("./api/csvParser")
router.use('/', express.static('public'))
router
    .route("/ContentParser")
    .post(csvParser)
    

 
module.exports = router;
© 2021 GitHub, Inc.
