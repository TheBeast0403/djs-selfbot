const AbstractHandler = require('./AbstractHandler');

class MessageUpdateHandler extends AbstractHandler {
  handle(packet) {
	  try {
		      const client = this.packetManager.client;
    const data = packet.d;
    client.actions.MessageUpdate.handle(data);
	  } catch {}
  }
}

module.exports = MessageUpdateHandler;
