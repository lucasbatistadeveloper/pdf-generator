const puppeteer = require('puppeteer');
const fs = require ('fs-extra');

(async function(){
    try {

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent('<html><head><tittle>My PDF</tittle><head><body><h1>Teste</h1></body></html>');
        await page.emulateMedia('screen');
        await page.pdf({
            path: 'mypdf.pdf',
            format: 'A4',
            printBackground: true
        })

        console.log('PDF gerado com sucesso.');
        await browser.close();
        process.exit();
    }
    catch (e){
        console.log('our error', e);
    }
    
})();