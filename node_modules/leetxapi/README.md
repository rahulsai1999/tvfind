# 1337x.to API

Very crude and volatile parser for 1337x.to.

## Api

### Series page
Grabs series titles and slugs for a specific letter (pagination included).

```
var xtorrents = require('leetxapi');
xtorrents
  .series("a")
    .then(function(series) {
      // Series is now an array of objects with the structure:
      // { title: '', slug: '' }
    })
    .catch(function(err) {
      // Handle error
    });
```

### Grab torrents for an episode
Grabs torrent titles and slugs for a specific episode.

```
var xtorrents = require('leetxapi');
xtorrents
  .episodeTorrents("episode-slug", season, episode)
    .then(function(torrents) {
      // Torrents is now an array of objects with the structure:
      // { title: '', link: 'absolute link!' }
    })
    .catch(function(err) {
      // Handle error
    });
```

### Grab data for torrent link
Grab the actual torrent data from a 1337x torrent link.

```
var xtorrents = require('leetxapi');
xtorrents
  .info("http://...link")
    .then(function(torrent) {
      // Torrent is now an object with information about the torrent
      // {
      //    magnetLink: '',
      //    hash: '',
      //    size: 0 /*bytes*/,
      //    seeds: 0,
      //    leechs: 0,
      //    peers: 0,
      //    pubDate: '',
      //    files: [ { title: '', size: 0 /*bytes*/ } ]
      // }
    })
    .catch(function(err) {
      // Handle error
    });
```

### Search
Uses the 1337x.to search and returns partial torrents, use info for full torrents.

```
var xtorrents = require('leetxapi');
xtorrents
  .search("blacklist")
    .then(function(torrents) {
      // Torrents is now an array of objects
      // {
      //    title: '',
      //    link: 'absolute link!',
      //    seeds: 0,
      //    leechs: 0,
      //    peers: 0,
      //    size: 0/*bytes*/,
      // }
    })
    .catch(function(err) {
      // Handle error
    });
```

## License

The MIT License (MIT)

Copyright (c) 2015 Patrick Engström

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
