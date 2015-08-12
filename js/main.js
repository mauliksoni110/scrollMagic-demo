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
var R_SECTION_1_HEIGHT = parseInt($j('.section1 .sectionInner.boxes-wrapper').outerHeight()) + 100;
var R_HEADER_HEIGHT = 50;


var smController = new ScrollMagic.Controller();


                  /****************SECTION 1 STARTS****************/
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


var sceneHeader = new ScrollMagic.Scene({offset:1,triggerHook:"onLeave",duration:40
})
.setTween(headerTween)
.addTo(smController);
//.addIndicators();



var sceneSection1 = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section1',offset:R_SECTION_1_HEIGHT,triggerHook:'onEnter'
})
.setPin('.Content-wrapper .section.section1')
.addTo(smController);
//.addIndicators();

                  /****************SECTION 1 Ends****************/


                  /****************SECTION 2 STARTS****************/
//// Section 2 HEADER
var section2headerTween = TweenMax.to('.Content-wrapper .section.section2 h2',1,{'top':0});

var sceneSection2header = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section2',offset:200,duration:200,triggerHook:'onEnter'
})
.setTween(section2headerTween)
.addTo(smController);
//.addIndicators();


///// PART1
var timeLinePart1 = new TimelineMax();
var partTween1 = TweenMax.to('.part.part-1 .part-content',0.3,{'left':0});
var partTween1Img = TweenMax.to('.part.part-1 img',0.3,{'right':0});
timeLinePart1.add([partTween1,partTween1Img]);

var sceneSection2part1 = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section2 .part-1',duration:400,offset:-300
})
.setTween(timeLinePart1)
.addTo(smController);
//.addIndicators();


///// PART2
var timeLinePart2 = new TimelineMax();
var partTween2 = TweenMax.to('.part.part-2 .part-content',0.3,{'right':0});
var partTween2Img = TweenMax.to('.part.part-2 img',0.3,{'left':0});
timeLinePart2.add([partTween2,partTween2Img]);

var sceneSection2part2 = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section2 .part-2',duration:400,offset:-400
})
.setTween(timeLinePart2)
.addTo(smController);
//.addIndicators();

////PART3

var timeLinePart3 = new TimelineMax();
var partTween3 = TweenMax.to('.part.part-3 .part-content',0.3,{'left':0});
var partTween3Img = TweenMax.to('.part.part-3 img',0.3,{'right':0});
timeLinePart3.add([partTween3,partTween3Img]);

var sceneSection2part3 = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section2 .part-3',duration:400,offset:-300
})
.setTween(timeLinePart3)
.addTo(smController);
//.addIndicators();
                        /****************SECTION 2 ENDS****************/




                        /****************SECTION 3 STARTS****************/
var timeLineSection3_initShow = new TimelineMax();
var sceneSection3_initShow_title = TweenMax.to('.init-show-title',0.6,{"delay":"0.1","transform":"translateY(-300px)"});
var sceneSection3_initShow_img = TweenMax.to('.init-show-image',0.6,{"delay":"0.1","transform":"translateY(2000px)"});
var sceneSection3_main_content = TweenMax.to('.section-3-main-content',0.8,{"delay":"0.2","opacity":"1"});

//var sceneSection3_main_content_panel = new TweenMax.staggerTo('.section-3-main-content .panel',0.8,{"top":"0px","opacity":"1"},0.3);

var sceneSection3_main_content_header = TweenMax.to('.section-3-main-content .section-3-main-content-header',0.2,{"delay":"0.2","top":"0",
onComplete:function(){TweenMax.staggerTo('.section-3-main-content .panel',0.8,{"top":"0px","opacity":"1"},0.3);},
onReverseComplete:function(){TweenMax.staggerTo('.section-3-main-content .panel',0.2,{"top":"70px","opacity":"0"},0.1);}
});



timeLineSection3_initShow.add([sceneSection3_initShow_title,sceneSection3_initShow_img,sceneSection3_main_content,sceneSection3_main_content_header]);

var sceneSection3 = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section3',duration:"150%",triggerHook:'onLeave',offset:-R_HEADER_HEIGHT
})
.setPin('.Content-wrapper .section.section3')
.setTween(timeLineSection3_initShow)
.addTo(smController)
.addIndicators();





                        /****************SECTION 3 ENDS****************/

                                            //SCROLLMAGIC SETTINGS ENDS


});



});
