"use strict"
/**
 * Created by garusis on 06/04/17.
 */
import module from "./config"
import service from "./service"

BitcoinIndicatorController.inject = ["$scope", "BitfinexService"]
function BitcoinIndicatorController ($scope, BitfinexService) {

}

module.controller("BitcoinIndicatorController", BitcoinIndicatorController)
