on_resize(function(){

  R_SECTION_1_HEIGHT = parseInt($j('.section1 .sectionInner.boxes-wrapper').outerHeight()) + 100;
  R_HEADER_HEIGHT = 100;
  R_VIEWPORT = viewport();
  R_SECTION_6_LEFT_NAV_PIN_DURATION = parseInt($j('.section.section-6').outerHeight()) - parseInt($j('.section.section-6 .list-group').outerHeight()) - ($j('.section.section-6 .list-group').offset().top - $j('.section.section-6').offset().top) - R_HEADER_HEIGHT;


  /**** Section 1 Center text Vertical align Center*****/
  $j('.section-1-text-wrapper').css('margin-top',-($j('.section-1-text-wrapper').outerHeight())/2+'px');

  /**** Section 1 Bottom Boxes*****/
  section1_bottomBoxesPositionSet();

  /*******Give MIN-HEIGHT (viewport height) to each section on document load*****/
  sections_MinHeight();

  /*****Update duratio of SECTION 6 Cards Scene Duration ***********/
  update_Section_6_CardsHeight();
});


function on_resize(c, t) {
  onresize = function() {
    clearTimeout(t);
    t = setTimeout(c, 140);
  };
  return c;
}
