const request =require('request')
const newsHeadlines = (callback) => {
    const url= 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=54e07f067f1f4e619663c9bfdbfa62b8'
    request({url,json:true},(error,response) => {
        if(error) {
            callback('Unable to connect news service!', undefined)
        } else if (response.body.error){
            callback(response.body.error.message,undefined)
        } else {
            callback(undefined,response.body.articles)
        }
    })
}
module.exports = newsHeadlines