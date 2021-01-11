const express = require('express');
const router = express.Router();
const puppeteerManager = require('../puppeteer.manager');

router.get('/', async (req,res)=>{
    if(req.query.url){
        try{
            let html = await puppeteerManager.getPageSource(req.query.url);
            res.status(200).send(html);
        }catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    }else{
        res.status(500).send('Invalid URL');
    }
})
module.exports = router;