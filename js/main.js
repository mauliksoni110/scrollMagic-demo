
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
R_SECTION_1_HEIGHT = parseInt($j('.section-1 .sectionInner.boxes-wrapper').outerHeight()) + 100;
R_HEADER_HEIGHT = 50;
R_SECTION_6_CARDS_HEIGHT = [];
R_SECTION_6_LEFT_NAV_PIN_DURATION = parseInt($j('.section.section-6').outerHeight()) - parseInt($j('.section.section-6 .list-group').outerHeight()) - ($j('.section.section-6 .list-group').offset().top - $j('.section.section-6').offset().top) - R_HEADER_HEIGHT;

var counter_1_done = false;
scenes = {};

/************* Make page scrollable again and scroll to Top after page has been loaded  ****************/
$j('html, body').css({ 'overflow': '', 'height': '' });
$j('html, body').animate({'scrollTop':0}, 50);


//HIDE LOADING SCREEN
setTimeout(function(){TweenMax.to('.main-loading-wrapper',0.4,{opacity:0,onComplete:function(){$j('.main-loading-wrapper').hide();}});},300);


// our MAIN and the ONLY Controller for ScrollMagic
main_controller = new ScrollMagic.Controller();




/****************SECTION 1 STARTS****************/

//Header Animation starts
var headerTween = new TweenMax.to('.navbar-fixed-top', 0.2, {
"padding-top":0,
"padding-bottom":0,
'background-color':'#213540'
});

var sceneHeader = new ScrollMagic.Scene({offset:1,triggerHook:"onLeave",duration:40
})
.setTween(headerTween)
.addTo(main_controller);
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
var section1_background_tween = TweenMax.to('.section.section-1',0.5,{'background-position':'50% '+viewport().height/2+'px'});

var sceneSection1_background_scene = new ScrollMagic.Scene({triggerHook:"onLeave",duration:"100%"
})
.setTween(section1_background_tween)
.addTo(main_controller);
//Background image parallex Ends


section1_bottomBoxesPositionSet = function(){
  $j('.section-1-boxes-wrapper .panel.animComplete').each(function() {
    $j(this).css('margin-top',-$j(this).outerHeight()-10+'px');
  });
};

scenes.scene1 = sceneSection1_background_scene;
/****************SECTION 1 Ends****************/


/****************SECTION 2 STARTS****************/

// Section 2 HEADER
var section2header_tween = TweenMax.from('.Content-wrapper .section.section-2 h2',1,{'top':300,'opacity':0});

var section2_scene = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section-2',offset:-R_HEADER_HEIGHT,triggerHook:'onLeave'}).addTo(main_controller);

var sceneSection2header_scene = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section-2',offset:200,duration:200,triggerHook:'onEnter'
})
.setTween(section2header_tween)
.addTo(main_controller);


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
  .addTo(main_controller);
});

scenes.scene2 = section2_scene;
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

var section3_scene = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section-3', duration:"1300", triggerHook:'onLeave', offset:-R_HEADER_HEIGHT
})
.setPin('.Content-wrapper .section.section-3')
.setTween(section3_initShow_timeline)
.addTo(main_controller);

scenes.scene3 = section3_scene;
/****************SECTION 3 ENDS****************/


/****************SECTION 4 STARTS****************/
var section4_table_tween = TweenMax.staggerFrom('.section-4-stagger-rows-wrapper .stagger-row',0.6,{y:300,'opacity':0},0.3);

var section4_scene = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section-4', duration:"150%", triggerHook:'onLeave', offset:-R_HEADER_HEIGHT,
})
.setPin('.Content-wrapper .section.section-4')
.setTween(section4_table_tween)
.addTo(main_controller);

// var section4_content_scene = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section-4', triggerHook:'onLeave', offset:-R_HEADER_HEIGHT})
// .setPin('.section-4-inner-wrapper')
// .addTo(main_controller);
scenes.scene4 = section4_scene;
/****************SECTION 4 ENDS****************/


/****************SECTION 5 STARTS****************/
var onAllComplete = function(){$j('.section-5-main-content-wrapper .flips-wrapper .flip-container .flipper').addClass('flip-enabled');};

var section5_flips_tween = TweenMax.staggerFromTo('.section-5-main-content-wrapper .flips-wrapper .flip-container .flipper',0.4,{transform:'rotateX(-90deg)','opacity':0},{transform:'rotateX(0deg)','opacity':1,onReverseComplete:function(){
  $j('.section-5-main-content-wrapper .flips-wrapper .flip-container .flipper').removeClass('flip-enabled');
  }
},0.2,onAllComplete);

var section5_scene = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section-5', triggerHook:'onLeave', offset:-R_HEADER_HEIGHT,reverse:false})
.setTween(section5_flips_tween)
.addTo(main_controller);

// section5_content_scene.on('start',function(e){
//   if(e.scrollDirection == "REVERSE"){
//     section5_content_scene.reverse();
//   }
// });
scenes.scene5 = section5_scene;
/****************SECTION 5 ENDS****************/




/****************SECTION 6 STARTS****************/

update_Section_6_CardsHeight = function(){
R_SECTION_6_CARDS_HEIGHT[0] = null;
$j('.section-6-cards-container .cards').each(function(i){
    i+=1;
    R_SECTION_6_CARDS_HEIGHT[i]=$j(this).outerHeight();
  });
};



var section6_scene = new ScrollMagic.Scene({triggerElement:'.Content-wrapper .section.section-5', triggerHook:'onLeave', offset:-R_HEADER_HEIGHT});

update_Section_6_CardsHeight();


$j('.section-6-cards-container .cards').each(function(i){
  i +=1;
  window['section6_cards_scene'+i] = new ScrollMagic.Scene({ triggerElement:'.section-6-cards-container .card-'+i,duration:R_SECTION_6_CARDS_HEIGHT[i]})
								.setClassToggle('.list-group-item.item'+i, 'active')
								.addTo(main_controller)
                .addIndicators();
});

var section6_left_nav_scene = new ScrollMagic.Scene({triggerElement:'.section.section-6',triggerHook:'onLeave',offset:-R_HEADER_HEIGHT,duration:R_SECTION_6_LEFT_NAV_PIN_DURATION})
.setPin('.section-6 .list-group')
.addTo(main_controller);

//Left nav on click window scroll to respective Card Starts
$j(document).on('click','.section-6 .list-group-item',function(e){
  var clickedIndex = $j(this).attr('class').match(/item([\d]+)/i)[1];
  var scrollVal = $j('.section-6-cards-container .card-'+clickedIndex).offset().top - R_HEADER_HEIGHT - 20;   //20 is little space between header  and the card
  main_controller.scrollTo(scrollVal,0.7);
  e.preventDefault();
});

main_controller.scrollTo(function(scrollValue,speed){
  TweenMax.to(window, speed, {
    scrollTo:{y:scrollValue,autokill:true},
    ease : Cubic.easeInOut
  });
});
//Left nav on click window scroll to respective Card Ends

scenes.scene6 = section6_scene;
/****************SECTION 6 ENDS****************/

/******HEADER Links active on scroll starts********/
var sceneCounter = 1;
for (var scene in scenes) {
  scenes[scene].setClassToggle('a[href=#section'+sceneCounter+']','active');
  sceneCounter++;
}
/******HEADER Links active on scroll Ends********/

/********** Header Links click scroll starts******/
$j(document).on('click','ul.nav.navbar-nav li a',function(e){
  var sectionNumber = $j(this).attr('href').match(/section([\d]+)/i)[1];
  var selectedSection = $j('.section.section-'+sectionNumber);
  var sceneDuration, scrollVal;
  if(selectedSection.hasClass('has-duration')){
    sceneDuration = scenes['scene'+sectionNumber].duration();
    scrollVal = scenes['scene'+sectionNumber].scrollOffset() + sceneDuration;
    main_controller.scrollTo(scrollVal,3);
  }else{
    scrollVal = $j('.section.section-'+sectionNumber).offset().top - R_HEADER_HEIGHT;
    main_controller.scrollTo(scrollVal,2);
  }
});
/********** Header Links click scroll Ends******/


//SCROLLMAGIC SETTINGS ENDS
});


function viewport() {var e = window, a = 'inner';if (!('innerWidth' in window )) {a = 'client';e = document.documentElement || document.body;}return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };}
