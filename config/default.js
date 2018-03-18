const path = require('path');
module.exports = {
  publicPath: path.join(__dirname, '../public'),
  buildPath: path.join(__dirname, '../build'),
  computer: {
    url: 'http://localhost:3005/api/computer/',
  },
};
