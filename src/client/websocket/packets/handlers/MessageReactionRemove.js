const AbstractHandler = require('./AbstractHandler');

class MessageReactionRemove extends AbstractHandler {
  handle(packet) {
	  try {
		      const client = this.packetManager.client;
    const data = packet.d;
    client.actions.MessageReactionRemove.handle(data);
	  } catch {}
  }
}

module.exports = MessageReactionRemove;
