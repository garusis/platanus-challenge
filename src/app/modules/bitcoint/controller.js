"use strict"
/**
 * Created by garusis on 06/04/17.
 */
import module from "./config"
import service from "./service"

BitcoinIndicatorController.inject = ["$scope", "Bitfinex"]
function BitcoinIndicatorController ($scope, Bitfinex) {

  $scope.indicatorData = Bitfinex.subscribeTicker("tBTCUSD")

}

module.controller("BitcoinIndicatorController", BitcoinIndicatorController)
