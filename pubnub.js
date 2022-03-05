const PubNub = require('pubnub')

const credentials = {
  publishKey: 'pub-c-8fb1d292-8fc4-4490-b418-04928753e06a',
  subscribeKey: 'sub-c-b68f0696-9ca6-11ec-879a-86a1e6519840',
  secretKey: 'sec-c-OGUzZmEyYjAtMDQyMi00ZTVhLTkwY2YtMDVmY2MzYjk5NWY4',
}

const CHANNELS = {
  TEST: 'TEST',
}

class PubSub {
  constructor() {
    this.pubnub = new PubNub(credentials)

    this.pubnub.subscribe({ channels: [Object.values(CHANNELS)] })

    this.pubnub.addListener(this.listener())
  }

  listener() {
    return {
      message: (messageObject) => {
        const { channel, message } = messageObject

        console.log(
          `Message received. Channel: ${channel}. Message: ${message}`,
        )
      },
    }
  }

  publish({ channel, message }) {
    this.pubnub.publish({ channel, message })
  }
}

const testPubSub = new PubSub()

testPubSub.publish({ channel: CHANNELS.TEST, message: 'hello pornhub pubsub' })

module.exports = PubSub
