const AbstractHandler = require('./AbstractHandler');

class MessageReactionAddHandler extends AbstractHandler {
  handle(packet) {
	  try {
    const client = this.packetManager.client;
    const data = packet.d;
    client.actions.MessageReactionAdd.handle(data);
	  } catch {}
  }
}

module.exports = MessageReactionAddHandler;
