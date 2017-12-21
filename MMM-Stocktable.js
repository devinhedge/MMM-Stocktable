// MMM-Stocktable.js

Module.register("MMM-Stocktable",{
    // Default module config.
    defaults: {
        updateInterval: 60000,
        fadeSpeed: 3000,
        stocks: ["GOOGL","YHOO"],
        currency: "usd",
        baseURL: "https://www.alphavantage.co/",
        apikey: "", //Get an API Key and override in the MagicMirror config.js
                    //Get your key from https://www.alphavantage.co/support/#api-key
        view: "stocks", // Override in the MagicMirror config.js 
                        // Valid values are: ["stocks","bonds","currency","index","gainloss","volume"]
        header: "Market Pulse",
        text: "Hello, Devin! This isn't working."
    },

    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = this.config.text;
        return wrapper;
    }
    // Override header generator
//    getHeader: function() {
//        return this.data.header + ' - ' + this.data.view;
//    }
});
