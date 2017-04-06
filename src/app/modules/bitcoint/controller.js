"use strict"
/**
 * Created by garusis on 06/04/17.
 */
import module from "./config"
import service from "./service"

BitcoinIndicator.inject = ["$scope", "BitfinexService"]
function BitcoinIndicator ($scope, BitfinexService) {

}

module.controller("BitcoinIndicator", BitcoinIndicator)
