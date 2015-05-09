(function () {
  if (typeof Slideshow === "undefined") {
    window.Slideshow = {};
  }

  var View = Slideshow.View = function ($el) {
    this.$el = $el;
    this.currentPicIdx = 0;
  }

  View.PICTURE_URLS = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg"
  ];

  View.prototype.start = function () {
    var $topImg = $("<img>");
    $topImg.attr("src", View.PICTURE_URLS[this.currentPicIdx]);
    var nextPicIdx = (this.currentPicIdx + 1) % View.PICTURE_URLS.length;
    var $bottomImg = $("<img>");
    $bottomImg.attr("src", View.PICTURE_URLS[nextPicIdx]);
    this.$el.append($topImg);
    this.$el.append($bottomImg);

    window.setInterval(this.swapPictures.bind(this), 3000);
  };

  View.prototype.swapPictures = function () {


  }
})();
