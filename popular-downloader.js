let path = require('path');
let fs = require('fs');
let rp = require('request-promise');

rp('https://reddit.com/r/popular.json')
    .then(res => {
        let filtRes = [];
        JSON.parse(res).data.children.forEach(article => {
            if (path.extname(article.data.url) == '.jpg' ||
                path.extname(article.data.url) == '.png' ||
                path.extname(article.data.url) == '.gif') {

                filtRes.push(JSON.stringify(article));
                let articlePath = path.join(__dirname, article.data.id)
                fs.writeFile(articlePath, JSON.stringify(article), err => { console.log(err) })
            }
        })
    })
