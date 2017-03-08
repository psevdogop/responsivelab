$(document).ready(function($) {
    "use strict";

    $(window).scroll(function () {
        if ($(document).scrollTop() > 10) {
            $(".lightnav .navbar-inner").addClass("lightnav-alt");
            $(".darknav .navbar-inner").addClass("darknav-alt");
        } else {
            $(".lightnav .navbar-inner").removeClass("lightnav-alt");
            $(".darknav .navbar-inner").removeClass("darknav-alt");
        }
    });

	$(document).ready(function($) {

		// Slidebars off-canvas menu
		$.slidebars();

		// Popovers [Hover]
		$("[data-toggle=popover]")
			.popover({
				html:true
			}
		);

		//$("html").niceScroll({
		//	smoothscroll: true, // scroll with ease movement
		//	autohidemode: false,
		//	zindex: "100", // change z-index for scrollbar div
        //	scrollspeed: 60, // scrolling speed
        //	mousescrollstep: 40,
        //	gesturezoom: false,
        //	horizrailenabled: false,
        //	cursorcolor: "#151515",
	    //    boxzoom: false,
	    //    cursorborder: "0 solid #202020",
	    //    cursorborderradius: "5px",
	     //   cursorwidth: 9,
	    //    enablemousewheel: true,
	    //    background: "rgba(255,255,255,0.7)",
	//	});

		// Page transitions
		$(".animsition").animsition({

			inClass               :   'fade-in',
			outClass              :   'fade-out-down-sm',
			inDuration            :    900,
			outDuration           :    800,
			linkElement           :   '.animsition-link', 
			//e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
			loading               :    true,
			loadingParentElement  :   'body', //animsition wrapper element
			loadingClass          :   'animsition-loading',
			unSupportCss          : [ 'animation-duration',
			                          '-webkit-animation-duration',
			                          '-o-animation-duration'
			                        ],
			//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. 
			//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

			overlay               :   false,

			overlayClass          :   'animsition-overlay-slide',
			overlayParentElement  :   'body'
		});

		// WOW plugin settings
        var wow = new WOW(
          { animateClass: 'animated', // set our global css classT (default is animated)
            offset: 400, // set distance to content until it triggers (default is 0)
            mobile: false, // remove animations for mobiles/tablets (default is true)
            live: true }); // act on asynchronously loaded content (default is true)
        new WOW().init();

		// Functionailty constraints for mobile
		if (!Modernizr.touch) {
		    jQuery(function ($) {
		        // Hero & page-header fade-in effect
		        var divs = $('.herofade');
		        $(window).on('scroll', function () {
		            var st = $(this).scrollTop();
		            divs.css({
		                'margin-top': -(st / 0) + "px",
		                'opacity': 0.9 - st / 1600
		            });
		        });
		    });

		    jQuery(function ($) {
		        // Hero & page-header fade-in effect
		        var divs = $('.videofade');
		        $(window).on('scroll', function () {
		            var st = $(this).scrollTop();
		            divs.css({
		                'margin-top': -(st / 0) + "px",
		                'opacity': 0.8 - st / 1600
		            });
		        });
		    });

		    jQuery(function ($) {
		        // Hero & page-header fade-in effect
		        var divs = $('.headerfade');
		        $(window).on('scroll', function () {
		            var st = $(this).scrollTop();
		            divs.css({
		                'margin-top': -(st / 0) + "px",
		                'opacity': 0.9 - st / 300
		            });
		        });
		    });
		}

		// autohide navbar on scroll
		$("div.navbar-fixed-top").autoHidingNavbar({
			animationDuration: 400,
			hideOffset: 0,
		});

		// faq's floating sidebar (left)
	    $('#sidebar').affix({
	    	offset: {
	    		top: 500
	    	}
		});
		
	    // Scrollspy for scrollto links in floating faq sidebar
		var $body   = $(document.body);
		var navHeight = $('.navbar').outerHeight(true) + 80;

		$body.scrollspy({
			target: '#leftcol',
			offset: navHeight
		});

		// fade out map cover (contact.html)
	    $(".map-cover").click(function () {
	        $(".map-cover").fadeOut("slow");
	    });

		// Collapsible panels for faq's and careers
	    $('.collapse').on('show.bs.collapse', function() {
	        var id = $(this).attr('id');
	        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-panel');
	        $('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-chevron-up"></i>');
	    });
	    $('.collapse').on('hide.bs.collapse', function() {
	        var id = $(this).attr('id');
	        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-panel');
	        $('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-chevron-down"></i>');
	    });

	    /*!
	     * IE10 viewport hack for Surface/desktop Windows 8 bug
	     * Copyright 2014 Twitter, Inc.
	     * Licensed under the Creative Commons Attribution 3.0 Unported License. For
	     * details, see http://creativecommons.org/licenses/by/3.0/.
	     */
	    // See the Getting Started docs for more information:
	    // http://getbootstrap.com/getting-started/#support-ie10-width
	    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	        var msViewportStyle = document.createElement('style');
	        msViewportStyle.appendChild(
	            document.createTextNode(
	                '@-ms-viewport{width:auto!important}'
	            )
	        );
	        document.querySelector('head').appendChild(msViewportStyle);
	    }

	}); // Document Ready

}(jQuery)); // End "use strict"

// Enable dropdown sub-menus in off-canvas navigation
$(document).ready(function($) {
	$('.sb-toggle-submenu').off('click') // Stop submenu toggle from closing Slidebars.
		.on('click', function() {
			$submenu = $(this).parent().children('.sb-submenu');
			$(this).add($submenu).toggleClass('sb-submenu-active'); // Toggle active class.

			if ($submenu.hasClass('sb-submenu-active')) {
			$submenu.slideDown(200);
			} else {
			$submenu.slideUp(200);
		}
	});
});


/* jSticky Plugin
 * =============
 * Author: Andrew Henderson (@AndrewHenderson)
 * Date: 9/7/2012
 * Update: 02/14/2013
 * Website: http://github.com/andrewhenderson/jsticky/
 * Description: A jQuery plugin that keeps select DOM
 * element(s) in view while scrolling the page.
 */
/*
;(function($) {

  $.fn.sticky = function(options) {

    var defaults = {
        topSpacing: 0, // No spacing by default
        zIndex: '', // No default z-index
        stopper: '.sticky-stopper' // Default stopper class, also accepts number value
      },
      settings = $.extend({}, defaults, options); // Accepts custom stopper id or class

    // Checks if custom z-index was defined
    function checkIndex() {

      if (typeof settings.zIndex == 'number') {
        return true;
      } else {
        return false;
      }
    }
    var hasIndex = checkIndex(); // True or false

    // Checks if a stopper exists in the DOM or number defined
    function checkStopper() {

      if ( 0 < $(settings.stopper).length || typeof settings.stopper === 'number' ) {
        return true;
      } else {
        return false;
      }
    }
    var hasStopper = checkStopper(); // True or false

    return this.each(function() {

      var $this          = $(this),
          thisHeight     = $this.outerHeight(),
          thisWidth      = $this.outerWidth(),
          topSpacing     = settings.topSpacing,
          zIndex         = settings.zIndex,
          pushPoint      = $this.offset().top - topSpacing, // Point at which the sticky element starts pushing
          placeholder    = $('<div></div>').width(thisWidth).height(thisHeight).addClass('sticky-placeholder'), // Cache a clone sticky element
          stopper        = settings.stopper,
          $window        = $(window);

      function stickyScroll() {

        var windowTop  = $window.scrollTop(); // Check window's scroll position
        
        if ( hasStopper && typeof stopper === 'string' ) {
          var stopperTop = $(stopper).offset().top,
              stopPoint  = (stopperTop - thisHeight) - topSpacing;
        } else if (hasStopper && typeof stopper === 'number') {
          var stopPoint = stopper;
        }

        if (pushPoint < windowTop) {
          // Create a placeholder for sticky element to occupy vertical real estate
          $this.after(placeholder).css({
            position: 'fixed',
            top: topSpacing
          });
          
          if (hasIndex) {
            $this.css({ zIndex: zIndex });
          }

          if (hasStopper) {
            if (stopPoint < windowTop) {
              var diff = (stopPoint - windowTop) + topSpacing;
              $this.css({ top: diff });
            }
          }
        } else {
          $this.css({
            position: 'static',
            top: null,
            left: null
          });

          placeholder.remove();
        }
      };

      $window.bind("scroll", stickyScroll);
    });
  };
})(jQuery);
*/
/*!
 * Stickyfill -- `position: sticky` polyfill
 * v. 1.1.2 | https://github.com/wilddeer/stickyfill
 * Copyright Oleg Korsunsky | http://wd.dizaina.net/
 *
 * MIT License
 */
!function(a,b){function c(){y=D=z=A=B=C=K}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function e(a){return parseFloat(a)||0}function f(){F={top:b.pageYOffset,left:b.pageXOffset}}function g(){return b.pageXOffset!=F.left?(f(),void z()):void(b.pageYOffset!=F.top&&(f(),i()))}function h(){setTimeout(function(){b.pageYOffset!=F.top&&(F.top=b.pageYOffset,i())},0)}function i(){for(var a=H.length-1;a>=0;a--)j(H[a])}function j(a){if(a.inited){var b=F.top<=a.limit.start?0:F.top>=a.limit.end?2:1;a.mode!=b&&p(a,b)}}function k(){for(var a=H.length-1;a>=0;a--)if(H[a].inited){var b=Math.abs(t(H[a].clone)-H[a].docOffsetTop),c=Math.abs(H[a].parent.node.offsetHeight-H[a].parent.height);if(b>=2||c>=2)return!1}return!0}function l(a){isNaN(parseFloat(a.computed.top))||a.isCell||(a.inited=!0,a.clone||q(a),"absolute"!=a.parent.computed.position&&"relative"!=a.parent.computed.position&&(a.parent.node.style.position="relative"),j(a),a.parent.height=a.parent.node.offsetHeight,a.docOffsetTop=t(a.clone))}function m(a){var b=!0;a.clone&&r(a),d(a.node.style,a.css);for(var c=H.length-1;c>=0;c--)if(H[c].node!==a.node&&H[c].parent.node===a.parent.node){b=!1;break}b&&(a.parent.node.style.position=a.parent.css.position),a.mode=-1}function n(){for(var a=H.length-1;a>=0;a--)l(H[a])}function o(){for(var a=H.length-1;a>=0;a--)m(H[a])}function p(a,b){var c=a.node.style;switch(b){case 0:c.position="absolute",c.left=a.offset.left+"px",c.right=a.offset.right+"px",c.top=a.offset.top+"px",c.bottom="auto",c.width="auto",c.marginLeft=0,c.marginRight=0,c.marginTop=0;break;case 1:c.position="fixed",c.left=a.box.left+"px",c.right=a.box.right+"px",c.top=a.css.top,c.bottom="auto",c.width="auto",c.marginLeft=0,c.marginRight=0,c.marginTop=0;break;case 2:c.position="absolute",c.left=a.offset.left+"px",c.right=a.offset.right+"px",c.top="auto",c.bottom=0,c.width="auto",c.marginLeft=0,c.marginRight=0}a.mode=b}function q(a){a.clone=document.createElement("div");var b=a.node.nextSibling||a.node,c=a.clone.style;c.height=a.height+"px",c.width=a.width+"px",c.marginTop=a.computed.marginTop,c.marginBottom=a.computed.marginBottom,c.marginLeft=a.computed.marginLeft,c.marginRight=a.computed.marginRight,c.padding=c.border=c.borderSpacing=0,c.fontSize="1em",c.position="static",c.cssFloat=a.computed.cssFloat,a.node.parentNode.insertBefore(a.clone,b)}function r(a){a.clone.parentNode.removeChild(a.clone),a.clone=void 0}function s(a){var b=getComputedStyle(a),c=a.parentNode,d=getComputedStyle(c),f=a.style.position;a.style.position="relative";var g={top:b.top,marginTop:b.marginTop,marginBottom:b.marginBottom,marginLeft:b.marginLeft,marginRight:b.marginRight,cssFloat:b.cssFloat},h={top:e(b.top),marginBottom:e(b.marginBottom),paddingLeft:e(b.paddingLeft),paddingRight:e(b.paddingRight),borderLeftWidth:e(b.borderLeftWidth),borderRightWidth:e(b.borderRightWidth)};a.style.position=f;var i={position:a.style.position,top:a.style.top,bottom:a.style.bottom,left:a.style.left,right:a.style.right,width:a.style.width,marginTop:a.style.marginTop,marginLeft:a.style.marginLeft,marginRight:a.style.marginRight},j=u(a),k=u(c),l={node:c,css:{position:c.style.position},computed:{position:d.position},numeric:{borderLeftWidth:e(d.borderLeftWidth),borderRightWidth:e(d.borderRightWidth),borderTopWidth:e(d.borderTopWidth),borderBottomWidth:e(d.borderBottomWidth)}},m={node:a,box:{left:j.win.left,right:J.clientWidth-j.win.right},offset:{top:j.win.top-k.win.top-l.numeric.borderTopWidth,left:j.win.left-k.win.left-l.numeric.borderLeftWidth,right:-j.win.right+k.win.right-l.numeric.borderRightWidth},css:i,isCell:"table-cell"==b.display,computed:g,numeric:h,width:j.win.right-j.win.left,height:j.win.bottom-j.win.top,mode:-1,inited:!1,parent:l,limit:{start:j.doc.top-h.top,end:k.doc.top+c.offsetHeight-l.numeric.borderBottomWidth-a.offsetHeight-h.top-h.marginBottom}};return m}function t(a){for(var b=0;a;)b+=a.offsetTop,a=a.offsetParent;return b}function u(a){var c=a.getBoundingClientRect();return{doc:{top:c.top+b.pageYOffset,left:c.left+b.pageXOffset},win:c}}function v(){G=setInterval(function(){!k()&&z()},500)}function w(){clearInterval(G)}function x(){I&&(document[L]?w():v())}function y(){I||(f(),n(),b.addEventListener("scroll",g),b.addEventListener("wheel",h),b.addEventListener("resize",z),b.addEventListener("orientationchange",z),a.addEventListener(M,x),v(),I=!0)}function z(){if(I){o();for(var a=H.length-1;a>=0;a--)H[a]=s(H[a].node);n()}}function A(){b.removeEventListener("scroll",g),b.removeEventListener("wheel",h),b.removeEventListener("resize",z),b.removeEventListener("orientationchange",z),a.removeEventListener(M,x),w(),I=!1}function B(){A(),o()}function C(){for(B();H.length;)H.pop()}function D(a){for(var b=H.length-1;b>=0;b--)if(H[b].node===a)return;var c=s(a);H.push(c),I?l(c):y()}function E(a){for(var b=H.length-1;b>=0;b--)H[b].node===a&&(m(H[b]),H.splice(b,1))}var F,G,H=[],I=!1,J=a.documentElement,K=function(){},L="hidden",M="visibilitychange";void 0!==a.webkitHidden&&(L="webkitHidden",M="webkitvisibilitychange"),b.getComputedStyle||c();for(var N=["","-webkit-","-moz-","-ms-"],O=document.createElement("div"),P=N.length-1;P>=0;P--){try{O.style.position=N[P]+"sticky"}catch(Q){}""!=O.style.position&&c()}f(),b.Stickyfill={stickies:H,add:D,remove:E,init:y,rebuild:z,pause:A,stop:B,kill:C}}(document,window),window.jQuery&&!function($){$.fn.Stickyfill=function(){return this.each(function(){Stickyfill.add(this)}),this}}(window.jQuery);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     $(".modal-transparent").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
  }, 0);
});
$(".modal-transparent").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-transparent");
});

$(".modal-fullscreen").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
});
$(".modal-fullscreen").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
});