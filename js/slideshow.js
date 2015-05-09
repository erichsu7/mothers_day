(function () {
  if (typeof Slideshow === "undefined") {
    window.Slideshow = {};
  }

  var View = Slideshow.View = function ($el) {
    this.$el = $el;
    this.currentPicIdx = 0;
  }

  View.PICTURE_URLS = [
    "/img/01.jpg",
    "/img/02.jpg",
    "/img/03.jpg"
  ];

  View.prototype.start = function () {
    window.setInterval(this.swapPictures, 3000);
  };

  View.prototype.swapPictures = function () {
    console.log("hi")
  }
})();
