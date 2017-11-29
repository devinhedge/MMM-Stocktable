var NodeHelper = require('node_helper')
var request = require('request')

module.exports = NodeHelper.create({
    start: function () {
      console.log('Stocktable module loaded!')
    //},
  }

    //socketNotificationReceived: function (notification, payload) {
    //  if (notification === 'get_stocktable_positions') {
    //    this.getTickers(payload)
    //  }
    //},

    //getStocktablePositions: function (url) {
    //  var self = this
    //  request({url: url, method: 'GET'}, function (error, response, body) {
    //    if (!error && response.statusCode == 200) {
    //      self.sendSocketNotification('got_result', JSON.parse(body))
    //    }
    //  })
    //},
})
