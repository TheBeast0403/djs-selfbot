const AbstractHandler = require('./AbstractHandler');

class MessageReactionRemoveAll extends AbstractHandler {
  handle(packet) {
	  try {
		      const client = this.packetManager.client;
    const data = packet.d;
    client.actions.MessageReactionRemoveAll.handle(data);
	  } catch {}
  }
}

module.exports = MessageReactionRemoveAll;
