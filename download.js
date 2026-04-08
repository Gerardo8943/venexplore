const https = require('https');
const fs = require('fs');

const url = 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Venezuela_blank.svg';
const file = fs.createWriteStream("public/img/venezuela-map.svg");

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
}, (response) => {
  response.pipe(file);
  file.on("finish", () => {
    file.close();
    console.log("Download Completed");
  });
}).on("error", (err) => {
  fs.unlink("public/img/venezuela-map.svg");
  console.log("Error:", err.message);
});
