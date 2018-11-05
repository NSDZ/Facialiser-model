const dataLabels = require('./data/500pics.json');

//a const to hold filtred data by labels
const filtredDataLabels = {
    fear: [],
    happiness: [],
    anger: [],
    sad: [],
    neutral: [] 
};

//filtring data
dataLabels.forEach(element => {
    filtredDataLabels[element.expression].push(element);
});


// exporting filtred data
module.exports = filtredDataLabels;