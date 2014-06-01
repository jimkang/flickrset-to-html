var photosetgetter = require('./photosetgetter');

var photosetOpts = {
  photosetId: process.argv[2],
  size: process.argv[3]
};

if (!photosetOpts.photosetId || !photosetOpts.size) {
  process.stdout.write('Usage: node flickrset-to-html <username> <set id> <size>\nSee README for sizes.\n');
  return;
}

photosetgetter.getFragmentsForPhotos(photosetOpts, 
  function done(error, fragments) {
    if (error) {
      process.stderr.write(error);
    }
    else {
      fragments.forEach(function printFragment(fragment) {
        process.stderr.write(fragment + '\n');
      });
    }
  }
);
