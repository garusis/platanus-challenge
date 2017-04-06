/**
 * Created by garusis on 06/04/17.
 */
import ws from "ws"
import module from "./config"

BitfinexService.inject = ["$rootScope"]
function BitfinexService ($rootScope) {

  const w = new ws('wss://api.bitfinex.com/ws/v2')

  w.on('message', (msg) => console.log(msg))

  var msg = JSON.stringify({
    event: 'subscribe',
    channel: 'ticker',
    symbol: 'tBTCUSD'
  })

  w.on('open', () => w.send(msg))
}

module.service("BitfinexService", BitfinexService)
