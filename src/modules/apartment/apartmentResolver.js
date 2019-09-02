// import cloudinary from 'cloudinary';
const cloudinary = require('cloudinary').v2;
import Apartment from '../../database/models/apartment';



export class ApartmentResolver {
  static async addApartment (req, res) {
    const {body: {
      buildingName, location, numberOfRooms, apartmentImage}
    } = req;

    try{
      const cloudinary_response = await cloudinary.uploader.upload(__dirname+"/mock/dummyHouse1.jpg");
      const apartment = {
        buildingName,
        location,
        numberOfRooms,
        apartmentImage: cloudinary_response.secure_url
      };
      const response = await new Apartment({...apartment}).save();
      return res.status(201).json({
        success: true,
        message: 'Successfully created',
        apartment: response,
      })
    } catch (e) {
      return res.status(400).json({
        success: false,
        message: 'Something went wrong'
      })
    }
  };
}
