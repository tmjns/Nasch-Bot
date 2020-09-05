const puppeteer = require('puppeteer');

async function scrapeImageURL(){
  try{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.cafenasch.de');

    const [el] = await page.$x('//*[@id="mittagstischImage"]');
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();

    await browser.close();
    return srcTxt      
  }
  catch(err){
    console.log(err);
  }    
}

module.exports.scrapeImageURL = scrapeImageURL;