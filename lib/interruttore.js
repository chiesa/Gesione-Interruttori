var Gpio = require('onoff').Gpio
//var PIN = new Gpio(27,'out')
var stato = ["off","on","off","off","off"]
var v1 = "off"
var response = {
   status: false
}

function statoInterruttore(){
   return response
}

function gestisciInteruttore(stanza){
   switch(stanza){
      case "corridoio":
	 return changeStatus(0,25)
      case "sala":
         return changeStatus(1,27)
      case "camera":
         return changeStatus(2,6)
      case "bagno":
         return changeStatus(3,17)
      case "cucina":
         return changeStatus(4,26)
      default:
         return 405
   }
}

function changeStatus(num, pin){
   var PIN = new Gpio(pin,'out')
   switch(stato[num]){
      case "on":
         PIN.setDirection('low')
	 stato[num] = "off"
         //response["status"] = true
         return 200
      case "off":
	 PIN.setDirection('high')
	 stato[num] = "on"
         //response["status"] = false
         return 200
      default:
         return 405
   }
}

module.exports = {
   gestisciInteruttore,
   statoInterruttore
}
