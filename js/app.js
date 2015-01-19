/* ==|== primary styles =====================================================
   Author: Aleksandar Perisic for MediaNovak.com  2012 - 2013
   ========================================================================== */
   
jQuery(document).ready(function ($) {
	
	/* frst one in nav */
	
	$("#top-nav li:nth-child(2)").addClass('nomargine');
	
	/* isnt this one magician world */
 
		  $('#headerHolder').hover(function(){
				$('#headerHolder').find('.logo').animate({opacity:'1'},{queue:false,duration:500});
			}, function(){
				$('#headerHolder').find('.logo').animate({opacity:'0.8'},{queue:false,duration:500});
		 });
		 
		 
		

	/* Use this js doc for all application specific JS */

	/* TABS --------------------------------- */
	/* Remove if you don't need :) */

	function activateTab($tab) {
		var $activeTab = $tab.closest('dl').find('a.active'),
				contentLocation = $tab.attr("href") + 'Tab';
				
		// Strip off the current url that IE adds
		contentLocation = contentLocation.replace(/^.+#/, '#');

		//Make Tab Active
		$activeTab.removeClass('active');
		$tab.addClass('active');

    //Show Tab Content
		$(contentLocation).closest('.tabs-content').children('li').hide();
		$(contentLocation).css('display', 'block');
	}

	$('dl.tabs').each(function () {
		//Get all tabs
		var tabs = $(this).children('dd').children('a');
		tabs.click(function (e) {
			activateTab($(this));
		});
	});

	if (window.location.hash) {
		activateTab($('a[href="' + window.location.hash + '"]'));
		$.foundation.customForms.appendCustomMarkup();
	}

	/* ALERT BOXES ------------ */
	$(".alert-box").delegate("a.close", "click", function(event) {
    event.preventDefault();
	  $(this).closest(".alert-box").fadeOut(function(event){
	    $(this).remove();
	  });
	});


	/* PLACEHOLDER FOR FORMS ------------- */
	/* Remove this and jquery.placeholder.min.js if you don't need :) */

	$('input, textarea').placeholder();

	/* TOOLTIPS ------------ */
	$('#divname').tooltips();



	/* UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE6/7/8 SUPPORT AND ARE USING .block-grids */
//	$('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
//	$('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
//	$('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
//	$('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});



	/* DROPDOWN NAV ------------- */

	var lockNavBar = false;
	$('.nav-bar a.flyout-toggle').live('click', function(e) {
		e.preventDefault();
		var flyout = $(this).siblings('.flyout');
		if (lockNavBar === false) {
			$('.nav-bar .flyout').not(flyout).slideUp(500);
			flyout.slideToggle(500, function(){
				lockNavBar = false;
			});
		}
		lockNavBar = true;
	});
  if (Modernizr.touch) {
    $('.nav-bar>li.has-flyout>a.main').css({
      'padding-right' : '75px'
    });
    $('.nav-bar>li.has-flyout>a.flyout-toggle').css({
      'border-left' : '1px dashed #eee'
    });
  } else {
    $('.nav-bar>li.has-flyout').hover(function() {
      $(this).children('.flyout').show();
    }, function() {
      $(this).children('.flyout').hide();
    })
  }


	/* DISABLED BUTTONS ------------- */
	/* Gives elements with a class of 'disabled' a return: false; */
	
	
// Alex fix for Read more button with black background 
$(function() {
			$('.featured-image').hover(function(){
				$(this).find('.readmorebt').fadeTo(1300, 1).animate({display:'block'},
				{queue:false,duration:400});
			}, function(){
				$(this).find('.readmorebt').fadeTo(1000, 0.02).animate({display:'block'},
				{queue:false,duration:400});
			});
});

  
});


// Alex fix for f

$(document).ready(function() {
function positionFooter() {
    var mFoo = $("#footer");
    if ((($(document.body).height() + mFoo.height()) < $(window).height() && mFoo.css("position") == "fixed") || ($(document.body).height() < $(window).height() && mFoo.css("position") != "fixed")) {
        mFoo.css({
            position: "fixed",
            bottom: "10px"
        });
    } else {
        mFoo.css({
            position: "static",
			 margin: "0 15px 10px 0",
			float: "right "
        });
    }
}
$(document).ready(function () {
    positionFooter();
    $(window).scroll(positionFooter);
    $(window).resize(positionFooter);
    $(window).load(positionFooter);
});
});



/*! Setup Two for IOS and Android */
/*
  * Normalized hide address bar for iOS & Android
  * (c) Scott Jehl, scottjehl.com
  * MIT License
*/
(function( win ){
	var doc = win.document;
	
	// If there's a hash, or addEventListener is undefined, stop here
	if( !location.hash && win.addEventListener ){
		
		//scroll to 1
		window.scrollTo( 0, 1 );
		var scrollTop = 1,
			getScrollTop = function(){
				return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
			},
		
			//reset to 0 on bodyready, if needed
			bodycheck = setInterval(function(){
				if( doc.body ){
					clearInterval( bodycheck );
					scrollTop = getScrollTop();
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}	
			}, 15 );
		
		win.addEventListener( "load", function(){
			setTimeout(function(){
				//at load, if user hasn't scrolled more than 20 or so...
				if( getScrollTop() < 20 ){
					//reset to hide addr bar at onload
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}
			}, 0);
		} );
	}
})( this );





/*
 * MBP - Mobile boilerplate helper functions
 */

(function(document){

window.MBP = window.MBP || {}; 


/* 
  * Fix for iPhone viewport scale bug 
  * http://www.blog.highub.com/mobile-2/a-fix-for-iphone-viewport-scale-bug/
*/

MBP.viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]');
MBP.ua = navigator.userAgent;

MBP.scaleFix = function () {
  if (MBP.viewportmeta && /iPhone|iPad|iPod/.test(MBP.ua) && !/Opera Mini/.test(MBP.ua)) {
    MBP.viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    document.addEventListener("gesturestart", MBP.gestureStart, false);
  }
};
MBP.gestureStart = function () {
  MBP.viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1";
};


/*
  * Normalized hide address bar for iOS & Android
  * (c) Scott Jehl, scottjehl.com
  * MIT License
*/

// If we split this up into two functions we can reuse
// this function if we aren't doing full page reloads.

// If we cache this we don't need to re-calibrate everytime we call
// the hide url bar
MBP.BODY_SCROLL_TOP = false;

// So we don't redefine this function everytime we
// we call hideUrlBar
MBP.getScrollTop = function(){
  var win = window,
      doc = document;

  return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
};

// It should be up to the mobile
MBP.hideUrlBar = function(){
    var win = window;

    // if there is a hash, or MBP.BODY_SCROLL_TOP hasn't been set yet, wait till that happens
    if( !location.hash && MBP.BODY_SCROLL_TOP !== false){
        win.scrollTo( 0, MBP.BODY_SCROLL_TOP === 1 ? 0 : 1 );
    }
};

MBP.hideUrlBarOnLoad = function () {
  var win = window,
      doc = win.document,
      bodycheck;

  // If there's a hash, or addEventListener is undefined, stop here
  if( !location.hash && win.addEventListener ) {

    //scroll to 1
    window.scrollTo( 0, 1 );
    MBP.BODY_SCROLL_TOP = 1;

    //reset to 0 on bodyready, if needed
    bodycheck = setInterval(function() {
      if( doc.body ) {
        clearInterval( bodycheck );
        MBP.BODY_SCROLL_TOP = MBP.getScrollTop();
        MBP.hideUrlBar();
      }
    }, 15 );

    win.addEventListener( "load", function() {
      setTimeout(function() {
        //at load, if user hasn't scrolled more than 20 or so...
        if( MBP.getScrollTop() < 20 ) {
          //reset to hide addr bar at onload
          MBP.hideUrlBar();
        }
      }, 0);
    } );
  }
};


/* 
   * Fast Buttons - read wiki below before using
   * https://github.com/h5bp/mobile-boilerplate/wiki/JavaScript-Helper
*/

MBP.fastButton = function (element, handler) {
  this.handler = handler;
	
	if (element.length && element.length > 1) {
    for (var singleElIdx in element) {
      this.addClickEvent(element[singleElIdx]);
    }
  } else {
    this.addClickEvent(element);
  }
};
 
MBP.fastButton.prototype.handleEvent = function(event) {
	event = event || window.event;
  switch (event.type) {
    case 'touchstart': this.onTouchStart(event); break;
    case 'touchmove': this.onTouchMove(event); break;
    case 'touchend': this.onClick(event); break;
    case 'click': this.onClick(event); break;
  }
};

MBP.fastButton.prototype.onTouchStart = function(event) {
  var element = event.srcElement;
  event.stopPropagation();
  element.addEventListener('touchend', this, false);
  document.body.addEventListener('touchmove', this, false);
  this.startX = event.touches[0].clientX;
  this.startY = event.touches[0].clientY;
  element.style.backgroundColor = "rgba(0,0,0,.7)";
};

MBP.fastButton.prototype.onTouchMove = function(event) {
  if(Math.abs(event.touches[0].clientX - this.startX) > 10 || 
    Math.abs(event.touches[0].clientY - this.startY) > 10    ) {
    this.reset(element);
  }
};

MBP.fastButton.prototype.onClick = function(event) {
	event = event || window.event;
  var element = event.srcElement;
  if (event.stopPropagation) { event.stopPropagation(); }
  this.reset(event);
  this.handler.apply(event.currentTarget, [event]);
  if(event.type == 'touchend') {
    MBP.preventGhostClick(this.startX, this.startY);
  }
  element.style.backgroundColor = "";
};

MBP.fastButton.prototype.reset = function(event) {
  var element = event.srcElement;
	rmEvt(element, "touchend", this, false);
	rmEvt(document.body, "touchmove", this, false);
  element.style.backgroundColor = "";
};

MBP.fastButton.prototype.addClickEvent = function(element) {
  addEvt(element, "touchstart", this, false);
  addEvt(element, "click", this, false);
};

MBP.preventGhostClick = function (x, y) {
  MBP.coords.push(x, y);
  window.setTimeout(function (){
    MBP.coords.splice(0, 2);
  }, 2500);
};

MBP.ghostClickHandler = function (event) {
  if (!MBP.hadTouchEvent && 'ontouchstart' in window) {
    // This is a bit of fun for Android 2.3...
    // If you change window.location via fastButton, a click event will fire
    // on the new page, as if the events are continuing from the previous page.
    // We pick that event up here, but MBP.coords is empty, because it's a new page,
    // so we don't prevent it. Here's we're assuming that click events on touch devices
    // that occur without a preceding touchStart are to be ignored. 
    event.stopPropagation();
    event.preventDefault();
    return;
  }
  for(var i = 0, len = MBP.coords.length; i < len; i += 2) {
    var x = MBP.coords[i];
    var y = MBP.coords[i + 1];
    if(Math.abs(event.clientX - x) < 25 && Math.abs(event.clientY - y) < 25) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
};

if (document.addEventListener) {
  document.addEventListener('click', MBP.ghostClickHandler, true);
}

addEvt( document.documentElement, 'touchstart', function() {
  MBP.hadTouchEvent = true;
}, false);
                            
MBP.coords = [];

// fn arg can be an object or a function, thanks to handleEvent
// read more about the explanation at: http://www.thecssninja.com/javascript/handleevent
function addEvt(el, evt, fn, bubble) {
  if("addEventListener" in el) {
    // BBOS6 doesn't support handleEvent, catch and polyfill
    try {
      el.addEventListener(evt, fn, bubble);
    } catch(e) {
      if(typeof fn == "object" && fn.handleEvent) {
        el.addEventListener(evt, function(e){
        // Bind fn as this and set first arg as event object
        fn.handleEvent.call(fn,e);
        }, bubble);
      } else {
        throw e;
      }
    }
  } else if("attachEvent" in el) {
    // check if the callback is an object and contains handleEvent
    if(typeof fn == "object" && fn.handleEvent) {
      el.attachEvent("on" + evt, function(){
        // Bind fn as this
        fn.handleEvent.call(fn);
      });
    } else {
      el.attachEvent("on" + evt, fn);
    }
  }
}

function rmEvt(el, evt, fn, bubble) {

  if("removeEventListener" in el) {
    // BBOS6 doesn't support handleEvent, catch and polyfill
    try {
      el.removeEventListener(evt, fn, bubble);
    } catch(e) {
      if(typeof fn == "object" && fn.handleEvent) {
        el.removeEventListener(evt, function(e){
          // Bind fn as this and set first arg as event object
          fn.handleEvent.call(fn,e);
        }, bubble);
      } else {
        throw e;
      }
    }
  } else if("detachEvent" in el) {
    // check if the callback is an object and contains handleEvent
    if(typeof fn == "object" && fn.handleEvent) {
      el.detachEvent("on" + evt, function(){
        // Bind fn as this
        fn.handleEvent.call(fn);
      });
    } else {
      el.detachEvent("on" + evt, fn);
    }
  }
}


/* 
  * Autogrow
  * http://googlecode.blogspot.com/2009/07/gmail-for-mobile-html5-series.html
*/

MBP.autogrow = function (element, lh) {
  function handler(e){
    var newHeight = this.scrollHeight,
        currentHeight = this.clientHeight;
    if (newHeight > currentHeight) {
      this.style.height = newHeight + 3 * textLineHeight + "px";
    }
  }

  var setLineHeight = (lh) ? lh : 12,
      textLineHeight = element.currentStyle ? element.currentStyle.lineHeight : 
                       getComputedStyle(element, null).lineHeight;

  textLineHeight = (textLineHeight.indexOf("px") == -1) ? setLineHeight :
                   parseInt(textLineHeight, 10);

  element.style.overflow = "hidden";
  element.addEventListener ? element.addEventListener('keyup', handler, false) :
                             element.attachEvent('onkeyup', handler);
};


/* 
  * Enable active
  * Enable CSS active pseudo styles in Mobile Safari
  * http://miniapps.co.uk/blog/post/enable-css-active-pseudo-styles-in-mobile-safari/
*/

MBP.enableActive = function () {
  document.addEventListener("touchstart", function() {}, false);
};


/* 
  * Prevent iOS from zooming onfocus
  * https://github.com/h5bp/mobile-boilerplate/pull/108
*/

MBP.preventZoom = function () {
  var formFields = document.querySelectorAll('input, select, textarea'),
  	  contentString = 'width=device-width,initial-scale=1,maximum-scale=',
  	  i = 0;
  for(i = 0; i < formFields.length; i++) {
    formFields[i].onfocus = function() {
      MBP.viewportmeta.content = contentString + '1';
    };
    formFields[i].onblur = function() {
      MBP.viewportmeta.content = contentString + '10';
    };
  }
};

/*
  * iOS Startup Image helper
*/
MBP.startupImage = function () {

	var portrait, landscape, pixelRatio, head, link1, link2;

	pixelRatio = window.devicePixelRatio;
	head = document.getElementsByTagName('head')[0];

	if (navigator.platform === 'iPad') {

		portrait = pixelRatio === 2 ? "img/startup/startup-tablet-portrait-retina.png" : "img/startup/startup-tablet-portrait.png";
		landscape = pixelRatio === 2 ? "img/startup/startup-tablet-landscape-retina.png" : "img/startup/startup-tablet-landscape.png";

		link1 = document.createElement('link');
		link1.setAttribute('rel', 'apple-touch-startup-image');
		link1.setAttribute('media', 'screen and (orientation: portrait)');
		link1.setAttribute('href', portrait);
		head.appendChild(link1);

		link2 = document.createElement('link');
		link2.setAttribute('rel', 'apple-touch-startup-image');
		link2.setAttribute('media', 'screen and (orientation: landscape)');
		link2.setAttribute('href', landscape);
		head.appendChild(link2);

	} else {

		portrait = pixelRatio === 2 ? "img/startup/startup-retina.png" : "img/startup/startup.png";

		link1 = document.createElement('link');
		link1.setAttribute('rel', 'apple-touch-startup-image');
		link1.setAttribute('href', portrait);
		head.appendChild(link1);
	}
};


/* 
  * Original jQuery snippet for Prevent iOS from zooming onfocus
  *  http://nerd.vasilis.nl/prevent-ios-from-zooming-onfocus/
*/
// $('input, select, textarea').bind('focus blur', function(event) {	  	
//	MBP.viewportmeta.content = 'width=device-width,initial-scale=1,maximum-scale=' + (event.type == 'blur' ? 10 : 1);  	
// });


})(document);


