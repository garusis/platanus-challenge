/**
 * Created by garusis on 06/04/17.
 */
import io from "socket.io-client"
import module from "./config"

BitfinexService.inject = ["$rootScope"]
function BitfinexService ($rootScope) {

  let socket = io('wss://api.bitfinex.com/ws/v2')

  socket.on('message', (msg) => console.log(msg))

  var msg = JSON.stringify({
    event: 'subscribe',
    channel: 'ticker',
    symbol: 'tBTCUSD'
  })

  socket.on('open', () => socket.send(msg))

}

module.service("BitfinexService", BitfinexService)
