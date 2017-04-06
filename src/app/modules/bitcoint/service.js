/**
 * Created by garusis on 06/04/17.
 */
import ws from "ws"
import module from "./config"

BitfinexService.inject = ["$rootScope"]
function BitfinexService ($rootScope) {

  console.log("here")

  const wss = new WebSocket('wss://api.bitfinex.com/ws/')
  wss.onmessage = (msg) => console.log(msg.data)
  wss.onopen = () => {
    var msg = JSON.stringify({
      event: 'subscribe',
      channel: 'ticker',
      symbol: 'tBTCUSD'
    })

    wss.send(msg)
  }
}

module.service("BitfinexService", BitfinexService)
