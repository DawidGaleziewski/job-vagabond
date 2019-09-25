
const rp = require('request-promise');
const $ = require('cheerio');
const puppeteer = require('puppeteer');

const offerParsePuppeteer = function(offerUrl){
    console.log('Puppet')
    puppeteer.launch()
        .then(function(browser){
            return browser.newPage()
        })
        .then(function(page){
            return page.goto(url)
                .then(function(){
                    return page.content()
                })
        })
        .then(function(html){
            console.log($('h1' , html).text())
            // return {
            //     jobTitle: $('h1' , html).text(),	  
            // }
        })
	  
}

module.exports = offerParsePuppeteer;