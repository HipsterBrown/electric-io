const iothub = require('./rabbitHub');

module.exports = function(connectionString) {
  return {
    registry: iothub.Registry.fromConnectionString(connectionString),
    client: iothub.Client.fromConnectionString(connectionString),
    Receiver: require('./rabbitHub/Receiver'),
  };
};
