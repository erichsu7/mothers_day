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
    var $topImg = $("<img class=\"top\">");
    $topImg.attr("src", View.PICTURE_URLS[this.currentPicIdx]);
    this.$el.append($topImg);

    window.setInterval(this.swapPictures.bind(this), 3000);
  };

  View.prototype.swapPictures = function () {
    var $topImg = $(".top");
    var nextPicIdx = (this.currentPicIdx + 1) % View.PICTURE_URLS.length;
    var $bottomImg = $("<img class=\"bottom\">");
    $bottomImg.attr("src", View.PICTURE_URLS[nextPicIdx]);
    this.$el.append($bottomImg);
    $bottomImg.removeClass("bottom");
    $bottomImg.addClass("top");
    $topImg.removeClass("top");
    $topImg.addClass("bottom");
    $topImg.remove();

    this.currentPicIdx = nextPicIdx;
  }
})();
