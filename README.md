flickrset-to-html
=================

This module grabs links to images from a specified Flickr set, generates a html that links to those images, and writes that html to stdout.

Installation
------------

    npm install flickrset-to-html

Usage
-----

First, create an apikey.js and put it in the root directory of this module. It should contain the your Flickr API credentials. If you don't have them, [you can get them here](https://www.flickr.com/services/apps/create/apply/).

    module.exports = {
      api_key: 'Your Flickr API key',
      secret: 'Your Flickr API secret'
    };

Then, run this command:

    node flickrset-to-html <set id> <size>

The size corresponds to the various [Flickr sizes](https://www.flickr.com/services/api/misc.urls.html) and can be one of the following strings:

  - s small square 75x75
  - q large square 150x150
  - t thumbnail, 100 on longest side
  - m small, 240 on longest side
  - n small, 320 on longest side
  - - medium, 500 on longest side
  - z medium 640, 640 on longest side
  - c medium 800, 800 on longest side†
  - b large, 1024 on longest side*
  - o original image, either a jpg, gif or png, depending on source format

For example, running 

    node flickrset-to-html.js 72157635574850276 z

Puts the following output on the console:

    fetching method signatures [=============================================================================================================================================================================================================] 100%
    <a href="https://www.flickr.com/photos/ignignokt/9779829623/in/set-72157635574850276"><img src="https://farm3.staticflickr.com/2814/9779829623_ed1077d083_z.jpg" alt=""></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779578392/in/set-72157635574850276"><img src="https://farm8.staticflickr.com/7299/9779578392_771d9ffa51_z.jpg" alt="The Oxford Rat! He had a crowd going. Was probably a very erudite talk."></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779770984/in/set-72157635574850276"><img src="https://farm3.staticflickr.com/2881/9779770984_6e8942478d_z.jpg" alt="The Oxford Death Star, keeping the peace."></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779783945/in/set-72157635574850276"><img src="https://farm8.staticflickr.com/7319/9779783945_829623b3b0_z.jpg" alt=""></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779804416/in/set-72157635574850276"><img src="https://farm8.staticflickr.com/7457/9779804416_ec42ee505f_z.jpg" alt="Serious messages about tragedies require serious fonts!"></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779834196/in/set-72157635574850276"><img src="https://farm8.staticflickr.com/7350/9779834196_8f0d08310a_z.jpg" alt=""></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779827164/in/set-72157635574850276"><img src="https://farm6.staticflickr.com/5515/9779827164_99935f1d74_z.jpg" alt="The candle collection at the University Church of St. Mary the Virgin"></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779652512/in/set-72157635574850276"><img src="https://farm8.staticflickr.com/7368/9779652512_f5a0685791_z.jpg" alt="One of the views from the top of the rooftop hangout at Corpus Christi College."></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779634741/in/set-72157635574850276"><img src="https://farm8.staticflickr.com/7386/9779634741_a616db04be_z.jpg" alt="I think they were keeping bees on the roof at Corpus Christi."></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779893466/in/set-72157635574850276"><img src="https://farm4.staticflickr.com/3689/9779893466_be2a2d0157_z.jpg" alt="Stained Glass Blast go! (At the Christ Church Cathedral.)"></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779729572/in/set-72157635574850276"><img src="https://farm4.staticflickr.com/3765/9779729572_d0f3fe8166_z.jpg" alt="The Bodlean Library, from the inner courtyard."></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779730262/in/set-72157635574850276"><img src="https://farm8.staticflickr.com/7405/9779730262_1f94d843f2_z.jpg" alt="People were pretty excited to see the Hogwarts dining hall."></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779913244/in/set-72157635574850276"><img src="https://farm4.staticflickr.com/3760/9779913244_3016c05bd3_z.jpg" alt="Even the plates were fascinating."></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779732212/in/set-72157635574850276"><img src="https://farm4.staticflickr.com/3763/9779732212_bf266b27fd_z.jpg" alt="Some former headmasters of Hogwarts watching over the sparkling water."></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779923916/in/set-72157635574850276"><img src="https://farm8.staticflickr.com/7447/9779923916_b271e84a59_z.jpg" alt="PUDDINGs"></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779924606/in/set-72157635574850276"><img src="https://farm8.staticflickr.com/7368/9779924606_4a5cd3350c_z.jpg" alt="This Christ Church staircase was Abbey Roaded by Harry Potter."></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779734752/in/set-72157635574850276"><img src="https://farm4.staticflickr.com/3773/9779734752_ba3e425a6c_z.jpg" alt="Christ Church courtyard. Or quadrangle?"></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779926456/in/set-72157635574850276"><img src="https://farm4.staticflickr.com/3709/9779926456_6cbd253568_z.jpg" alt="Skull ivy"></a>

    <a href="https://www.flickr.com/photos/ignignokt/9780037273/in/set-72157635574850276"><img src="https://farm8.staticflickr.com/7408/9780037273_8847dd7955_z.jpg" alt="Osiris retains his hat even in bird form."></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779778382/in/set-72157635574850276"><img src="https://farm6.staticflickr.com/5531/9779778382_8b9fb55349_z.jpg" alt="Some donko"></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779779042/in/set-72157635574850276"><img src="https://farm8.staticflickr.com/7313/9779779042_1a743622be_z.jpg" alt="Wrestlers, from India AD 650-750."></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779779872/in/set-72157635574850276"><img src="https://farm4.staticflickr.com/3725/9779779872_8bc799d8f8_z.jpg" alt="Bass viol. Six strings, frets, f-holes, contoured bridge!"></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779763181/in/set-72157635574850276"><img src="https://farm4.staticflickr.com/3779/9779763181_61f3fa60b4_z.jpg" alt=""></a>

    <a href="https://www.flickr.com/photos/ignignokt/9779578351/in/set-72157635574850276"><img src="https://farm4.staticflickr.com/3669/9779578351_0ac5f0ba14_z.jpg" alt="Each side of this tower in Oxford paid tribute to a guy in Zeppelin. Zoso, the feather, you name it—all the guys!"></a>      

License
-------

MIT.
