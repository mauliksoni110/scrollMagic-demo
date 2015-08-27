
var masonryBoxes;
$j('html, body').css({ 'overflow': 'hidden', 'height': '100%' });

$j(document).ready(function(){

  /************* Make page not scrollable until it loads  ****************/


  /*******Give MIN-HEIGHT (viewport height) to each section on document load*****/
  sections_MinHeight();

  /*************scroll to Top after Document ready  ****************/
  $j('html, body').animate({'scrollTop':0}, 50);

});

/*******Give MIN-HEIGHT (viewport height) to each section on document load*****/
function sections_MinHeight(){
  $j('.Content-wrapper .section').each(function(){
    $j(this).css('min-height',viewport().height);
  });
}

//MASONRY SETTINGS STARTS

//MASONRY SETTINGS ENDS

$j(window).load(function() {

                              //Dynamic Values
var R_SECTION_1_HEIGHT = parseInt($j('.section-1 .sectionInner.boxes-wrapper').outerHeight()) + 100;
var R_HEADER_HEIGHT = 50;
var R_VIEWPORT = viewport();
var R_SECTION_6_CARDS_HEIGHT = [];
var R_SECTION_6_HEIGHT = parseInt($j('.section.section-6').outerHeight());

var counter_1_done = false;


/************* Make page scrollable again and scroll to Top after page has been loaded  ****************/
$j('html, body').css({ 'overflow': '', 'height': '' });
$j('html, body').animate({'scrollTop':0}, 50);


//HIDE LOADING SCREEN
setTimeout(function(){TweenMax.to('.main-loading-wrapper',0.4,{opacity:0,onComplete:function(){$j('.main-loading-wrapper').hide();}});},300);


var smController = new ScrollMagic.Controller();


/****************SECTION 1 STARTS****************/

//Header Animation starts
var headerTween = new TweenMax.to('.navbar-fixed-top', 0.2, {
"padding-top":0,
"padding-bottom":0,
'background-color':'rgb(55, 188, 155)'
});

var sceneHeader = new ScrollMagic.Scene({offset:1,triggerHook:"onLeave",duration:40
})
.setTween(headerTween)
.addTo(smController);
//Header Animation Ends


//Center text Scene Starts
$j('.section-1-text-wrapper').css('margin-top',-($j('.section-1-text-wrapper').outerHeight())/2+'px');

TweenMax.from('.section-1-main-text-anim-wrap',1.2,{delay:1,'margin-top':-120,ease:Power4.easeOut});
TweenMax.from('.section-1-main-text-anim-wrap .section-1-main-text',1.2,{delay:1,'margin-top':-$j('.section-1-main-text-anim-wrap .section-1-main-text').outerHeight(),ease:Power4.easeOut});
TweenMax.staggerTo('.section-1-sub-text-anim-wrap,.section-1-link-anim-wrap',0.9,{delay:2.5,'top':0,'opacity':1,ease:Power4.easeOut,onComplete:bottomBoxesAnim},0.2);
//Center text Scene Ends

//Bottom Boxes animatin starts Ends
function bottomBoxesAnim() {
  var section1_boxes_timeline = new TimelineMax();
  $j('.section-1-boxes-wrapper .panel').each(function() {
    var $this = $j(this);
    section1_boxes_timeline.to($this,0.3,{'margin-top':-$this.outerHeight()-10+'px',onComplete:function(){$this.addClass('animComplete');}},'-=0.19');
  });
}
//Bottom Boxes animatin Ends

//Background image parallex Starts
var section1_background_tween = TweenMax.to('.section.section-1',0.5,{'background-position':'50% '+R_VIEWPORT.height/2+'px'});

var sceneSection1_background_scene = new ScrollMagic.Scene({triggerHook:"onLeave",duration:"100%"
})
.setTween(section1_background_tween)
.addTo(smController);
//Background image parallex Ends


section1_bottomBoxesPositionSet = function(){
  $j('.section-1-boxes-wrapper .panel.animComplete').each(function() {
    $j(this).css('margin-top',-$j(this).outerHeight()-10+'px');
  });
};
/****************SECTION 1 Ends****************/


/****************SECTION 2 STARTS****************/
//// Section 2 HEADER
var section2header_tween = TweenMax.from('.Content-wrapper .section.section-2 h2',1,{'top':300,'opacity':0});

var sceneSection2header_scene = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section-2',offset:200,duration:200,triggerHook:'onEnter'
})
.setTween(section2header_tween)
.addTo(smController);


//Section-2 Boxs Slide In from LEFT/RIGHT
$j('.section-2 .part').each(function(){
  var partTween;
  if($j(this).hasClass('fromRight'))
    partTween = TweenMax.from($j(this),0.4,{'right':'-120%','opacity':0});
  else
    partTween = TweenMax.from($j(this),0.4,{'left':'-120%','opacity':0});

  var section2part1_scene = new ScrollMagic.Scene({triggerElement:$j(this),offset:-300
  })
  .setTween(partTween)
  .addTo(smController);
});

/****************SECTION 2 ENDS****************/



/****************SECTION 3 STARTS****************/
var section3_initShow_timeline = new TimelineMax();
var section3_initShow_title_tween = TweenMax.to('.init-show-title',2,{"delay":"1","transform":"translateY(-300px)"});
var section3_initShow_img_tween = TweenMax.to('.init-show-image',2,{"delay":"1","transform":"translateY(2000px)"});
var section3_main_content_tween = TweenMax.to('.section-3-main-content',0.8,{"delay":"1","opacity":"1"});
var section3_main_content_header_tween = TweenMax.from('.section-3-main-content .section-3-main-content-header',0.6,{"delay":"2","top":"-40",
onComplete:onComplete_section3_main_content_tween_header,
onReverseComplete:onReverseComplete_section3_main_content_tween_header
});

function onComplete_section3_main_content_tween_header(){
  TweenMax.staggerTo('.section-3-main-content .panel',0.6,{"top":"0px","opacity":"1"},0.1);
  TweenMax.to('.section-3-counters-wrapper',0.6,{"opacity":"1"});
  if(!counter_1_done){
    $j('.counter-number').counterUp({time: 1500});
    counter_1_done = true;
  }
}
function onReverseComplete_section3_main_content_tween_header(){
  TweenMax.staggerTo('.section-3-main-content .panel',0.2,{"top":"70px","opacity":"0"},0.1);
  TweenMax.to('.section-3-counters-wrapper',0.2,{"opacity":"0"});
}


section3_initShow_timeline.add([section3_initShow_title_tween,section3_initShow_img_tween,section3_main_content_tween,section3_main_content_header_tween]);

var sceneSection3 = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section-3', duration:"1300", triggerHook:'onLeave', offset:-R_HEADER_HEIGHT
})
.setPin('.Content-wrapper .section.section-3')
.setTween(section3_initShow_timeline)
.addTo(smController);
/****************SECTION 3 ENDS****************/


/****************SECTION 4 STARTS****************/

var section4_table_tween = TweenMax.staggerFrom('.section-4-stagger-rows-wrapper .stagger-row',0.6,{y:300,'opacity':0},0.3);

var section4_scene = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section-4', duration:"150%", triggerHook:'onLeave', offset:-R_HEADER_HEIGHT,
})
.setPin('.Content-wrapper .section.section-4')
.setTween(section4_table_tween)
.addTo(smController);
// var section4_content_scene = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section-4', triggerHook:'onLeave', offset:-R_HEADER_HEIGHT})
// .setPin('.section-4-inner-wrapper')
// .addTo(smController);
/****************SECTION 4 ENDS****************/


/****************SECTION 5 STARTS****************/
var onAllComplete = function(){$j('.section-5-main-content-wrapper .flips-wrapper .flip-container .flipper').addClass('flip-enabled');};

var section5_flips_tween = TweenMax.staggerFromTo('.section-5-main-content-wrapper .flips-wrapper .flip-container .flipper',0.4,{transform:'rotateX(-90deg)','opacity':0},{transform:'rotateX(0deg)','opacity':1,onReverseComplete:function(){
  $j('.section-5-main-content-wrapper .flips-wrapper .flip-container .flipper').removeClass('flip-enabled');
  }
},0.2,onAllComplete);

var section5_content_scene = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section-5', triggerHook:'onLeave', offset:-R_HEADER_HEIGHT,reverse:false})
.setTween(section5_flips_tween)
.addTo(smController);

// section5_content_scene.on('start',function(e){
//   if(e.scrollDirection == "REVERSE"){
//     section5_content_scene.reverse();
//   }
// });
/****************SECTION 5 ENDS****************/




/****************SECTION 6 STARTS****************/
update_Section_6_CardsHeight = function(){
$j('.section-6-cards-container .cards').each(function(i){
    R_SECTION_6_CARDS_HEIGHT[i]=$j(this).outerHeight();
  });
};

update_Section_6_CardsHeight();

$j('.section-6-cards-container .cards').each(function(i){
  i +=1;
  var scene = new ScrollMagic.Scene({ triggerElement:'.section-6-cards-container .card-'+i,duration:R_SECTION_6_CARDS_HEIGHT[i-1]})
								.setClassToggle('.list-group-item.item'+i, 'active')
								.addTo(smController)
                .addIndicators();
});

var section6_left_nav_scene = new ScrollMagic.Scene({triggerElement:'.section.section-6',triggerHook:'onLeave',offset:-R_HEADER_HEIGHT,duration:R_SECTION_6_HEIGHT})
.setPin('.section-6 .list-group')
.addTo(smController);
/****************SECTION 6 ENDS****************/

//SCROLLMAGIC SETTINGS ENDS
});


function viewport() {var e = window, a = 'inner';if (!('innerWidth' in window )) {a = 'client';e = document.documentElement || document.body;}return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };}
