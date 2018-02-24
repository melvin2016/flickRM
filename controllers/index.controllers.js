const auth = require('../auth/flickrAuth');
const request = require('request');
const photoSearch = (req,res)=>{
  request(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${auth.ck}&text=${req.params.text}&format=json&nojsoncallback=1`,(e,resp,body)=>{
    res.send(body);
  });
};

module.exports = {
  photoSearch : photoSearch
};
