const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

let getPageSource = async (url) =>{
    return await new Promise(async (resolve, reject)=>{
        try{
            //Use StealthPlugin
            puppeteer.use(StealthPlugin());

            //Launch Browser
            let browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null,
                args: ['--lang=en-US', `--window-size=${1920},${1080}`,  '--no-sandbox']
            });

            //Get first page or launch new page
            let pages = await browser.pages();
            let page;
            pages[0] ? page = pages[0] : page = await browser.newPage();
            
            //Set default navigation time
            await page.setDefaultNavigationTimeout(100000);

            //Go to target URL
            await page.goto(url, {waitUntil: 'networkidle2'});

            //Get page source
            let html = await page.evaluate(()=>{
                return document.documentElement.innerHTML;
            });

            //Close browser & resolve promise
            await browser.close();
            resolve(html);
        }catch(e){
            reject(e);
        }
    })
}

module.exports = {
    getPageSource: getPageSource
}