const fs = require('fs');
const csv =  require('fast-csv');

var stream = fs.createReadStream('dataset/csv/500_picts_satz.csv');

var csvStream = csv()
    .on('data', (data) => {
        console.log(data);
    })
    .on('end', () => {
        console.log("finished reading !!");
    })

stream.pipe(csvStream);