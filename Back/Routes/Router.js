const express = require('express');
const router = express.Router();
const AllocationController = require('../Controller/AllocationController');
const ConcessionariaController = require('../Controller/ConcessionariaController');
const ClientController = require('../Controller/ClientController');
const QuantityController = require('../Controller/QuantityController');

router.get('/alocacao', AllocationController.getAllocation);
router.get('/alocacao/:area', AllocationController.getAllocationInnerAuto);
router.get('/concessionaria/:id/:area', ConcessionariaController.getConcessionaire);
router.get('/clientes', ClientController.getClients);
router.get('/quantidade/:id',  QuantityController.updateQuantity);




module.exports = router;
