const AbstractHandler = require('./AbstractHandler');
const Constants = require('../../../../util/Constants');

class MessageDeleteHandler extends AbstractHandler {
  handle(packet) {
	  try {
		      const client = this.packetManager.client;
    const data = packet.d;
    const response = client.actions.MessageDelete.handle(data);
    if (response.message) client.emit(Constants.Events.MESSAGE_DELETE, response.message);
	  } catch {}
  }
}

/**
 * Emitted whenever a message is deleted.
 * @event Client#messageDelete
 * @param {Message} message The deleted message
 */

module.exports = MessageDeleteHandler;
