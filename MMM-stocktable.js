"use strict";

Module.register("MMM-Stocktable", {
	result: {},
	defaults: {
		updateInterval: 60000,
		fadeSpeed: 1000,
		companies: ["GOOGL", "YHOO"],
		currency: "usd",
		baseURL: "https://www.alphavantage.co/",
		apikey: "IPWULBT54Y3LHJME", //Replace this with your key from https://www.alphavantage.co/support/#api-key
        header: "Stocktable"
    txtDemo: "Hello, Devin!"
	},
    // Basic override of DOM generator based on sample modeule template at https://github.com/MichMich/MagicMirror/tree/master/modules
    getDom: function() {
      var wrapper = document.createElement("div");
      wrapper.innerHTML = this.config.txtDemo;
      return wrapper;
    },
    //
    getHeader: function() {
        return this.data.header + ' Header';
    }
});
