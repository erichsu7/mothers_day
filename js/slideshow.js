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
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
    "img/06.jpg",
    "img/07.jpg",
    "img/08.jpg",
    "img/09.jpg",

  ];

  View.prototype.start = function () {
    var that = this;
    this.preloadImages(View.PICTURE_URLS);
    var $topImg = $("<img class=\"top img-responsive\">");
    $topImg.attr("src", View.PICTURE_URLS[this.currentPicIdx]);
    this.$el.append($topImg);
    $topImg.load(function (event) {
      var picHeight = $topImg.height();
      that.$el.height(picHeight);
    });
    this.listenForResize();

    window.setInterval(this.swapPictures.bind(this), 7000);
  };

  View.prototype.swapPictures = function () {
    var that = this;
    var $topImg = $(".top");
    var nextPicIdx = (this.currentPicIdx + 1) % View.PICTURE_URLS.length;
    var $bottomImg = $("<img class=\"bottom img-responsive\">");
    $bottomImg.attr("src", View.PICTURE_URLS[nextPicIdx]);
    this.$el.append($bottomImg);
    $bottomImg.addClass("top").removeClass("bottom", 1000, "swing");
    $topImg.removeClass("top").addClass("bottom", 1000, "swing", function () {
      $topImg.remove();
    });

    this.currentPicIdx = nextPicIdx;
  }

  View.prototype.listenForResize = function () {
    var that = this;
    $(window).resize(function (event) {
      var picHeight = $("img.top").height();
      that.$el.height(picHeight);
    })
  }

  View.prototype.preloadImages = function (array) {
    for (var i = 0; i < array.length; i++) {
      $("<img>").attr("src", array[i]);
    }
  }
})();
