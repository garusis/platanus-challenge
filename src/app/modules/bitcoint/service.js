/**
 * Created by garusis on 06/04/17.
 */
import _ from "lodash"
import module from "./config"

BitfinexFactory.inject = ["$rootScope"]
function BitfinexFactory ($rootScope) {

  return {
    subscribeTicker: function (symbol) {

      const lastData = []

      const wss = new WebSocket('wss://api.bitfinex.com/ws/')
      wss.onmessage = function (msg) {
        let data = JSON.parse(msg.data)
        if (_.isArray(data) && data[1] !== "hb") {
          data = {BID: data[1], BID_SIZE: data[2], ASK: data[3], ASK_SIZE: data[4]}

          $rootScope.$apply(function () {
            lastData.unshift(data)
            if (lastData.length > 5) {
              lastData.pop()
            }
          })
        }
      }

      wss.onopen = function () {
        wss.send(JSON.stringify({
          event: 'subscribe',
          channel: 'ticker',
          symbol: symbol
        }))
      }

      return lastData

    }
  }

}

module.factory("Bitfinex", BitfinexFactory)
