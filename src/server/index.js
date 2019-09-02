import http from 'http';
import config from 'config'
import {app} from './app';
import envVar from '../../environment';

const { port } = envVar;
const NODE_ENV = config.get('NODE_ENV');

const server = http.createServer(app());


server.listen(port, () => {
  if(NODE_ENV === 'development') {
    console.log(`running on ${port}`);
  }
});

