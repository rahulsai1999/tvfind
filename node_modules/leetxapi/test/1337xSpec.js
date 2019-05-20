var expect = require("chai").expect;
var xtorrents = require("../1337x.js");

describe("leetxapi", function(){

  it("should deliver all series starting with the letter a", function(done) {
    xtorrents.series("a")
      .then(function(series) {
        for(var i in series) {
          if (series[i].title[0] != 'a' && series[i].title[0] != 'A') {
            return done(new Error("Series without an A"));
          }
        }
        if (series.length > 0) done();
        else done(new Error("No series"));
      })
      .catch(done);
  });

  it("should deliver torrents for The Blacklist S03E03", function(done) {
    xtorrents.episodeTorrents("the-blacklist", 3, 3)
      .then(function(torrents) {
        if (torrents.length > 0) done();
        else done(new Error("No torrents"));
      })
      .catch(done);
  });

  it("should deliver search results", function(done) {
    xtorrents.search("avengers")
      .then(function(torrents) {
        if (torrents.length > 0) done();
        else done(new Error("No torrents"));
      })
      .catch(done);
  });

  it("should deliver torrent information", function(done) {
    xtorrents.episodeTorrents("the-blacklist", 3, 3)
      .then(function(torrents) {
        if (torrents.length == 0) return done(new Error("No torrents"));
        xtorrents.info(torrents[0])
          .then(function(info) {
            if (info['hash']) done();
            else done(new Error("no hash in info, is there any info?"));
            /* TODO: Deeper tests? */
          })
          .catch(done);
      })
      .catch(done);
  });

});
