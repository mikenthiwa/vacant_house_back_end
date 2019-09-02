import {check, validationResult} from 'express-validator';
import _ from 'lodash'

const rules = (field) => {
  switch(field){
    case 'numberOfRooms':
      return [
        check(field)
          .exists().withMessage(`${_.upperFirst(field)} field is required`)
          .not().isEmpty().withMessage(`${_.upperFirst(field)} is missing`)
          .isNumeric().withMessage(`${_.upperFirst(field)} requires a number`)
          .trim()
      ];
    default:
      return [
        check(field)
          .exists().withMessage(`${_.upperFirst(field)} field is required`)
          .not().isEmpty().withMessage(`${_.upperFirst(field)} is missing`)
          .trim()
      ]
  }

};

const body = {
  addApartment: [
    rules('buildingName'),
    rules('location'),
    rules('numberOfRooms'),
    rules('apartmentImage')
  ]
};

export const validate = (bodyType) => {
  return [
    body[bodyType],
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      next()
    }
  ]
};
