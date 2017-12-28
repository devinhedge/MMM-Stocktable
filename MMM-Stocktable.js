// MMM-Stocktable.js

Module.register("MMM-Stocktable", {
    // Default module config.
    defaults: {
        updateInterval: 60000,
        fadeSpeed: 3000,
        stocks: ["GOOGL", "YHOO"],
        currency: "usd",
        baseURL: "https://www.alphavantage.co/",
        apikey: "", //Get an API Key and override in the MagicMirror config.js
                    //Get your key from https://www.alphavantage.co/support/#api-key
        view: "stocks", // Override in the MagicMirror config.js
                        // Valid values are: ["stocks","bonds","currency","index","gainloss","volume"]
        header: "Market Pulse",
        content: "Hello, Devin! This isn't working."
    },

    // Define start sequence.
    start: function() {
        Log.info(this.name + ' Start function called.');

        this.loaded = false;

        switch (this.config.view) {
        case "stocks":
            Log.info(this.name + ': Starting stocks node_helper.');
            if (this.config.stocks) {
                this.stocks = this.config.stocks;
            }
            this.sendSocketNotification("ADD_STOCKS", this.stocks);
            break;
        default:
            Log.info('The module: ' + this.name + ' is missing configuration information.');
            this.config.content = 'Check your configuration!';
            return;
        }
    },
    generateStocksView: function() {
        Log.log(this.name + ': generateStocksView called.');
        var contentStocks = 'Dummy Stock data from generateStocksView().';
        return contentStocks;
    },
    //    generateBondsView function() {
    //        return this.content;
    //    },
    //    generateCurrencyView function() {
    //        return this.content;
    //    },
    //    generateIndexView function() {
    //        return this.content;
    //    },
    //    generateGainlossView function() {
    //        return this.content;
    //    },
    //    generateVolumeView function() {
    //        return this.content;
    //    }
    // Override dom generator.
    getDom: function() {
        this.content = this.config.content;
        //Call the correct view based on the 'view' module property.
        switch (this.config.view) {
        case "stocks":
            console.info(this.name + ': Calling stocks view.');
            this.content = this.generateStocksView();
            break;
        case "bonds":
            this.content = 'Calling bonds view.';
            console.info(this.name + ': ' + this.content);
            break;
        case "currency":
            this.content = 'Calliing currency view.';
            console.info(this.content);
            break;
        case "index":
            this.content = 'Calling index view.';
            console.info(this.content);
            break;
        case "gainloss":
            this.content = 'Calling gainloss view.';
            console.info(this.content);
            break;
        case "volume":
            this.content = 'Calling volume view.';
            console.log(this.content);
            break;
        default:
            this.content = 'Sorry, That view, ' + this.config.view + ', is invalid.';
            console.error(this.content);
        }
        // Wrap the view content in an html div statement.
        var wrapper = document.createElement("div");
        wrapper.innerHTML = this.content;
        return wrapper;
    },
    // Override header generator
    getHeader: function() {
        return this.data.header + ' - ' + this.config.view;
    }
});
