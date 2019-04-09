let path = require("path");
let fs = require("fs");

let chirps = [
    {
        name: "Oscar",
        text: "hey!"
    },
    {
        name: "Kyle",
        text: "How's it going."
    },
    {
        name: "Audrina",
        text: "Can't wait for Friday"
    },
    {
        name: "Destinee",
        text: "Stuck in traffic"
    },
    {
        name: "Yasmin",
        text: "Finally finished!"
    }
]

let filePath = path.join(__dirname, '../chirps.json')

fs.writeFileSync(filePath, JSON.stringify(chirps), err => {
    if (err) {
        console.log(err)
    }
})

fs.readFile(filePath,function (err, data) {
    if (err) console.log(err);
    console.log(JSON.parse(data))
})


