import mongoose from 'mongoose';
import envVar from '../../../environment';

const {database: {dbName}} = envVar;

export default () => (
  mongoose.connect(
    `mongodb://localhost/${dbName}`, {useNewUrlParser: true}
  ).then(() => console.log('Database has successfully connected'))
    .catch(error => console.log(error))
);
