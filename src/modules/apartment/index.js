import express from 'express';
import { ApartmentResolver } from './apartmentResolver'
import {validate} from '../../middleware'

const router = express.Router();

router.post(
  '/addApartment',
  validate('addApartment'),
  ApartmentResolver.addApartment
);

export default router
