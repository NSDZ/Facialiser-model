/*
Upload data set to imgur and save a file at ./dataset/live/live500pics.json
*/

// requiring modules
const imgurUploader = require("imgur-uploader");
const fs = require("fs");

//local

const dataLabels = require("./dataLabels");

//function to upload data

let imgs = [];
const upload = () => {
  return new Promise((resolve, reject) => {
    //array to store the URLs and expressions of data after uploading
    dataLabels.happiness.slice(5, 10).forEach(element => {
      //upload element to imgur
      imgurUploader(fs.readFileSync(`./dataset/lfwjpg/${element.path}`), {
        title: element.path
      }).then(data => {
        // console.log(data.link);
        imgs.push({
          link: data.link,
          expressioin: element.expression
        });
      });
    });

    resolve(imgs);
  });
};


upload().then((data) => {
    console.log(data);
    console.log(imgs);
})
// setTimeout(() => {
//     console.log(data);
// }, 10000);

// console.log(imgs);

//writing data
