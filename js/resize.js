$j(window).load(function(){
  resizeCallback();
});

on_resize(function() {
  resizeCallback();
});

resizeCallback = function(){
  R_SECTION_1_HEIGHT = parseInt($j('.section1 .sectionInner.boxes-wrapper').outerHeight()) + 100;
};


function on_resize(c, t) {
  onresize = function() {
    clearTimeout(t);
    t = setTimeout(c, 200);
  };
  return c;
}
