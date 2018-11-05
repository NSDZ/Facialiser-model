// requiring modules
const Clarifai = require('clarifai');
const imgurUploader = require('imgur-uploader');
const fs = require('fs');

//local

const dataLabels = require('./dataLabels');
//this file is an .gitignore, it contains apiKey, and model id
const configs = require('./configs');



let imgs = [];
dataLabels.happiness.slice(0, 5).forEach(element => {

    //upload element to imgur
    imgurUploader(fs.readFileSync(`./dataset/lfwjpg/${element.path}`), {title: 'Hello!'}).then(data => {
        console.log(data.link);let img64;

        fs.readFile('clarifai-face.js', (err, data) => {
            if(err) throw err;
            img64 = data.toString('base64');
            // console.log(img64);
        })
        
        faceDetector.inputs.create({
            base64: img64,
            concepts: [
                {
                    id: 'smile',
                    value: true
                },
                {
                    id: 'scowl',
                    value: false
                }
            ]
        }).then((res) => {
            console.log("line34");
            console.log(res);
        }, ree => console.log(err));
        imgs.push({
            link: data.link,
            expressioin: element.expression
        });
    });

});




const app = new Clarifai.App({
    apiKey: configs.apiKey
   });



// console.log(dataLabels.anger);