class Client {
  static fromConnectionString(connectionString) {
    return new Client({ connectionString });
  }

  constructor({ connectionString, queue = '' }) {
    this.channel = new Promise((resolve, reject) => {
      // create amqplib connection
      // create channel
      // assert queue
      // resolve with channel
    });
  }

  // possibly use RabbitMQ RPC
  invokeDeviceMethod(deviceId, methodParams, callback) {
    callback(null, {'hello': 'world'});
  }
}

class Registry {
  static fromConnectionString(connectionString) {
    return new Registry({ connectionString });
  }

  constructor({ connectionString, queue = '' }) {
    this.channel = new Promise((resolve, reject) => {
      // create amqplib connection
      // create channel
      // assert queue
      // resolve with channel
    });
  }

  // possibly use of an exchange to get a list of active devices back
  list(callback) {
    callback(null, [{deviceId: 'tessel-climate'}]);
  }
}

module.exports = {
  Client, 
  Registry,
};
