let path = require("path");
let rp = require("request-promise");
let fs = require('fs');
let articleArr = [];

let filePath = path.join(__dirname, "popular-articles.json");

rp(" https://reddit.com/r/popular.json")
    .then(res => {
    JSON.parse(res).data.children.forEach(article => {
articleArr.push(JSON.stringify({
    title: article.data.title,
    author: article.data.author,
    url: article.data.url
}))
    });
    fs.writeFileSync(filePath,articleArr,err =>{console.log(err)})
})
