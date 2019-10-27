const amqp = require('amqplib');
const EventEmitter = require('events');

class Receiver extends EventEmitter {
  constructor({ connectionString, consumerGroup }) {
    super();
    this.channel = amqp
      .connect(connectionString)
      .then(c => c.createChannel())
      .then(channel => channel.assertQueue(consumerGroup).then(() => channel));
    this.startConsumer(consumerGroup);
  }

  startConsumer(consumerGroup) {
    this.channel.then(channel => {
      channel.consume(
        consumerGroup,
        (message) => {
          this.emit('data', JSON.parse(message.content.toString()));
        },
      );
    });
  }
}

module.exports = Receiver;
