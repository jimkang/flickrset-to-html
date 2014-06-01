var apikey = require('./apikey');
var flickr = require('flickrapi');
var _ = require('lodash');

function getFragmentsForPhotos(opts, done) {
  flickr.tokenOnly(apikey, function(error, flickr) {
    if (error) {
      done(error);
    }
    else {
      var respondToGetPhotos =  _.curry(extractPhotoLinks)(done, opts.size);
      flickr.photosets.getPhotos({
          photoset_id: opts.photosetId
        }, 
        respondToGetPhotos
      );
    }
  });
}

function extractPhotoLinks(done, size, error, photosetResponse) {
  debugger;
  if (error) {
    done(error);
  }
  else {
    var photoset = photosetResponse.photoset;
    var fragForPhoto = _.curry(htmlFragmentForPhotoData)(
      photoset.ownername, photoset.id, size
    );
    // photosetResponse.photoset.photo is an array of photo data.
    done(null, photoset.photo.map(fragForPhoto));
  }
}

function htmlFragmentForPhotoData(ownername, setId, sizeCode, photoData) {
  debugger;
  var href = 'https://www.flickr.com/photos/' + ownername + '/' + photoData.id +
    '/in/set-' + setId;
  var src = 'https://farm' + photoData.farm + '.staticflickr.com/' + 
    photoData.server + '/' + photoData.id + '_' + photoData.secret;
  if (sizeCode !== '-') {
     src += ('_' + sizeCode);
  }

  src += '.jpg';

  return '<a href="' + href + '"><img src="' + src + '" alt="' + 
    photoData.title + '"></a>\n';
}

module.exports = {
  getFragmentsForPhotos: getFragmentsForPhotos
};

