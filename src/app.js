const express = require("express");
const path = require('path')
const hbs = require('hbs')
const app = express();
const port = process.env.PORT || 3000;
const publicDirectory = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../templates/partials')
const viewsPath = path.join(__dirname, '../templates/views')

app.use(express.static(publicDirectory))
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath)
app.set('views', viewsPath)

//  newsHeadlines 
const newsHeadlines = require('../tools/newsHeadlines')
app.get('/', (req, res) => {
    newsHeadlines((error, data) => {
        if (error) {
            return res.send(error)
        }
        else {
            res.render('index', {
                title: data,
                description: data,
                urlToImage: data
            })
        }
    })
})

app.listen(port, () => {
    console.log("Server is running ", port);
});