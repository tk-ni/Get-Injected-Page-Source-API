const puppeteer = require('puppeteer');

let getPageHTML = async (url) =>{
    return await new Promise(async (resolve, reject)=>{
        try{
            let browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null,
                args: ['--lang=en-US', `--window-size=${1920},${1080}`,  '--no-sandbox']
            });
            let pages = await browser.pages();
            let page;
            if(pages[0]){
                page = pages[0];
            }else{
                page = await browser.newPage();
            }
            await page.setDefaultNavigationTimeout(100000);
            await page.goto(url, {waitUntil: 'networkidle2'});
            let html = await page.evaluate(()=>{
                return document.documentElement.innerHTML;
            });

            await browser.close();
            resolve(html);
        }catch(e){
            reject(e);
        }
    })
}

module.exports = {
    getPageHTML: getPageHTML
}