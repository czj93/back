var currentPositionY = function() {
  if (__containerElement) {
        return __containerElement.scrollTop;
	} else {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ?
           document.documentElement.scrollTop : document.body.scrollTop;
   }
};

var scrollContainerHeight = function() {
  if(__containerElement) {
    return Math.max(
      __containerElement.scrollHeight,
      __containerElement.offsetHeight,
      __containerElement.clientHeight
    );
  } else {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  }
};