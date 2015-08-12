var masonryBoxes;
$j(document).ready(function(){

                          //MASONRY SETTINGS STARTS

                          //MASONRY SETTINGS ENDS




$j(window).load(function() {
  masonryBoxes = $j('.sectionInner.boxes-wrapper').masonry({
    itemSelector: '.box-item',
    columnWidth: '.box-sizer',
    percentPosition: true,
    transitionDuration: '0.3s'
  });

                                        //SCROLLMAGIC SETTINGS STARTS

//Dynamic Values
var section_1_Height = parseInt($j('.section1 .sectionInner.boxes-wrapper').outerHeight()) + 100;


var smController = new ScrollMagic.Controller();

                  /****************SECTION 2 STARTS****************/
var boxesTween = new TweenMax.staggerTo('.Content-wrapper .section1 .box-item', 0.4, {
"transform":"translate('0px','0px')",
"opacity":"1"
},0.1,function(){
  $j('.Content-wrapper .section1 .box-item').removeClass('toBeAnimated');
});

var headerTween = new TweenMax.to('.navbar-fixed-top', 0.2, {
"padding-top":0,
"padding-bottom":0
},function(){
  $j('.Content-wrapper .section1 .box-item').removeClass('toBeAnimated');
});


var sceneHeader = new ScrollMagic.Scene({offset:1,triggerHook:"onLeave"
})
.setTween(headerTween)
.addTo(smController);
//.addIndicators();



var sceneSection1 = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section1',offset:section_1_Height,triggerHook:'onEnter'
})
.setPin('.Content-wrapper .section.section1')
.addTo(smController);
//.addIndicators();

                  /****************SECTION 1 STARTS****************/


                  /****************SECTION 2 STARTS****************/
//// Section 2 HEADER
var section2headerTween = TweenMax.to('.Content-wrapper .section.section2 h2',1,{'top':0});

var sceneSection2header = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section2',offset:200,duration:200,triggerHook:'onEnter'
})
.setTween(section2headerTween)
.addTo(smController);
//.addIndicators();


///// PART1
var timeLine1 = new TimelineMax();
var partTween1 = TweenMax.to('.part.part-1 .part-content',0.3,{'left':0});
var partTween1Img = TweenMax.to('.part.part-1 img',0.3,{'right':0});
timeLine1.add([partTween1,partTween1Img]);

var sceneSection2part1 = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section2 .part-1',duration:400,offset:-300
})
.setTween(timeLine1)
.addTo(smController);
//.addIndicators();


///// PART2
var timeLine2 = new TimelineMax();
var partTween2 = TweenMax.to('.part.part-2 .part-content',0.3,{'right':0});
var partTween2Img = TweenMax.to('.part.part-2 img',0.3,{'left':0});
timeLine2.add([partTween2,partTween2Img]);

var sceneSection2part2 = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section2 .part-2',duration:400,offset:-300
})
.setTween(timeLine2)
.addTo(smController);
//.addIndicators();

////PART3

var timeLine3 = new TimelineMax();
var partTween3 = TweenMax.to('.part.part-3 .part-content',0.3,{'left':0});
var partTween3Img = TweenMax.to('.part.part-3 img',0.3,{'right':0});
timeLine3.add([partTween3,partTween3Img]);

var sceneSection2part3 = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section2 .part-3',duration:400,offset:-300
})
.setTween(timeLine3)
.addTo(smController);
//.addIndicators();
                        /****************SECTION 2 ENDS****************/

                        /****************SECTION 3 STARTS****************/




                        /****************SECTION 3 ENDS****************/

                                            //SCROLLMAGIC SETTINGS ENDS


});



});
