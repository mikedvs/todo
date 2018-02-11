var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' + 
        configValues.uname + ':' +
        configValues.pwd + 
        '@ds225038.mlab.com:25038/maliniaknodetodo';
    }
}