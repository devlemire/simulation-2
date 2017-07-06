const express = require('express');
const router = express.Router();
const property_controller = require(`${__dirname}/../controllers/property_controller`);

router.post('/', property_controller.create);
router.get('/', property_controller.readAll);
router.delete('/:id', property_controller.delete);

module.exports = router;
