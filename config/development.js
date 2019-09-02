import envVar from '../environment';

const {node_env} = envVar;

module.exports = {
  NODE_ENV: node_env
};
