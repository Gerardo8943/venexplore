const https = require('https');
const fs = require('fs');

const url = "https://en.wikipedia.org/w/api.php?action=query&titles=File:Venezuela_blank.svg&prop=imageinfo&iiprop=url&format=json";

https.get(url, { headers: { 'User-Agent': 'Nodejs/1.0' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            const pages = json.query.pages;
            const page = Object.values(pages)[0];
            if (!page.imageinfo) {
                console.error("Image info not found", page);
                return;
            }
            const imageUrl = page.imageinfo[0].url;
            console.log("Found URL:", imageUrl);
            
            https.get(imageUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (imgRes) => {
                const file = fs.createWriteStream('public/img/venezuela.svg');
                imgRes.pipe(file);
                file.on('finish', () => console.log('Downloaded SVG successfully!'));
            });
        } catch(e) {
            console.error("Error parsing JSON", e);
        }
    });
}).on("error", console.error);
