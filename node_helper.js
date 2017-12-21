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
    }
});
