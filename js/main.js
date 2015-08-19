var masonryBoxes;
$j(document).ready(function(){

});
                          //MASONRY SETTINGS STARTS

                          //MASONRY SETTINGS ENDS




$j(window).load(function() {

                              //Dynamic Values
var R_SECTION_1_HEIGHT = parseInt($j('.section-1 .sectionInner.boxes-wrapper').outerHeight()) + 100;
var R_HEADER_HEIGHT = 50;



var counter_1_done = false;

$j('.section-1-main-text-anim-wrap .section-1-main-text').css('margin-top',-$j('.section-1-main-text-anim-wrap .section-1-main-text').outerHeight());

TweenMax.to('.section-1-main-text-anim-wrap .section-1-main-text',1.2,{delay:1,'margin-top':0,ease:Power4.easeOut});
TweenMax.to('.section-1-main-text-anim-wrap',1.2,{delay:1,'margin-top':0,ease:Power4.easeOut});
TweenMax.staggerTo('.section-1-sub-text-anim-wrap,.section-1-link-anim-wrap',0.9,{delay:2.5,'top':0,'opacity':1,ease:Power4.easeOut},0.2);
      //HIDE LOADING SCREEN
setTimeout(function(){TweenMax.to('.main-loading-wrapper',0.4,{opacity:0,onComplete:function(){$j('.main-loading-wrapper').hide();}});},300);


var smController = new ScrollMagic.Controller();

                  /****************SECTION 1 STARTS****************/



var headerTween = new TweenMax.to('.navbar-fixed-top', 0.2, {
"padding-top":0,
"padding-bottom":0,
'background-color':'rgb(55, 188, 155)'
},function(){
$j('.Content-wrapper .section-1 .box-item').removeClass('toBeAnimated');
});


var sceneHeader = new ScrollMagic.Scene({offset:1,triggerHook:"onLeave",duration:40
})
.setTween(headerTween)
.addTo(smController);
//.addIndicators();
//
//
// startTl = new TimelineMax();
// startTl.add(TweenMax.staggerTo('.Content-wrapper .section-1 .box-item', 0.4, {
// y:0,
// "opacity":"1",
// delay:0.3
// },0.1,function(){
//   $j('.Content-wrapper .section-1 .box-item').removeClass('toBeAnimated');
// }));
// startTl.play();
//
// var sceneSection1 = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section-1',offset:R_SECTION_1_HEIGHT,triggerHook:'onEnter'
// })
// .setPin('.Content-wrapper .section.section-1')
// .addTo(smController);
// //.addIndicators();

                  /****************SECTION 1 Ends****************/


                  /****************SECTION 2 STARTS****************/
//// Section 2 HEADER
var section2headerTween = TweenMax.to('.Content-wrapper .section.section-2 h2',1,{'top':0});

var sceneSection2header = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section-2',offset:200,duration:200,triggerHook:'onEnter'
})
.setTween(section2headerTween)
.addTo(smController);
//.addIndicators();


//Section-2 Boxs Slide In from LEFT/RIGHT
$j('.section-2 .part').each(function(){
  var partTween;
  if($j(this).hasClass('fromRight'))
    partTween = TweenMax.to($j(this),0.3,{'right':0});
  else
    partTween = TweenMax.to($j(this),0.3,{'left':0});

  var sceneSection2part1 = new ScrollMagic.Scene({triggerElement:$j(this),duration:400,offset:-300
  })
  .setTween(partTween)
  .addTo(smController);
});

                        /****************SECTION 2 ENDS****************/




                        /****************SECTION 3 STARTS****************/
var timeLineSection3_initShow = new TimelineMax();
var tweenSection3_initShow_title = TweenMax.to('.init-show-title',2,{"delay":"1","transform":"translateY(-300px)"});
var tweenSection3_initShow_img = TweenMax.to('.init-show-image',2,{"delay":"1","transform":"translateY(2000px)"});
var tweenSection3_main_content = TweenMax.to('.section-3-main-content',2,{"delay":"1","opacity":"1"});

var tweenSection3_main_content_header = TweenMax.to('.section-3-main-content .section-3-main-content-header',0.6,{"delay":"2","top":"0",
onComplete:onComplete_tweenSection3_main_content_header,
onReverseComplete:onReverseComplete_tweenSection3_main_content_header
});

function onComplete_tweenSection3_main_content_header(){
  TweenMax.staggerTo('.section-3-main-content .panel',0.6,{"top":"0px","opacity":"1"},0.1);
  TweenMax.to('.section-3-counters-wrapper',0.6,{"opacity":"1"});
  if(!counter_1_done){
    $j('.counter-number').counterUp({time: 1500});
    counter_1_done = true;
  }
}
function onReverseComplete_tweenSection3_main_content_header(){
  TweenMax.staggerTo('.section-3-main-content .panel',0.2,{"top":"70px","opacity":"0"},0.1);
  TweenMax.to('.section-3-counters-wrapper',0.2,{"opacity":"0"});
}


timeLineSection3_initShow.add([tweenSection3_initShow_title,tweenSection3_initShow_img,tweenSection3_main_content,tweenSection3_main_content_header]);

var sceneSection3 = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section-3', duration:"1300", triggerHook:'onLeave', offset:-R_HEADER_HEIGHT
})
.setPin('.Content-wrapper .section.section-3')
.setTween(timeLineSection3_initShow)
.addTo(smController)
.addIndicators();

                        /****************SECTION 3 ENDS****************/

                                            //SCROLLMAGIC SETTINGS ENDS



});
