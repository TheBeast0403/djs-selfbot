const AbstractHandler = require('./AbstractHandler');

class MessageDeleteBulkHandler extends AbstractHandler {
  handle(packet) {
	  try {
		      const client = this.packetManager.client;
    const data = packet.d;
    client.actions.MessageDeleteBulk.handle(data);
	  } catch {}
  }
}

/**
 * Emitted whenever messages are deleted in bulk.
 * @event Client#messageDeleteBulk
 * @param {Collection<Snowflake, Message>} messages The deleted messages, mapped by their ID
 */

module.exports = MessageDeleteBulkHandler;
