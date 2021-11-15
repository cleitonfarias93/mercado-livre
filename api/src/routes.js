const router = require('express').Router();

require('./app/item/item.controller')(router);

module.exports = router;
