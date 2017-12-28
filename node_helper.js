/* Magic Mirror
 * Node Helper: MMM-Stocktable
 *
 * By Devin Hedge http://devinhedge.com
 * MIT Licensed.
 */

var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
    // Override start method.
    start: function() {
        var events = [];
        console.log("Starting node helper for: " + this.name);
    },
    // Subclass socketNotificationReceived received.
    socketNotificationReceived: function(notification, payload) {
        switch (notification) {
        case 'ADD_STOCKS':
            this.content = this.name + ': Called stocks SETTER';
            console.log(this.content);
            break;
        default:
            console.error(this.name + ': No Stocks Configure. Please configure them in MagicMirror config.js.');
        }
        return;
    }
});
