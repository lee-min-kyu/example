

(function($) {
	"use strict";
	
	// Var
	var body = $('body');
	var btHomeLayer = $('.home-layer');
	var btLayer = $('.bt-layer');
	var navToggle = $('.nav-toggle');
	var overlayNav = $('.overlay-nav');
	var pageOverlay = $('.page-overlay .page-o');
	var navOverlay = $('.nav-overlay .nav-o');	

	var navLayer_timeout;
	var navLayer_timeout_2;
	var openHome_timeout;

	// BOOTSTRAP FIX FOR WINPHONE 8 AND IE10
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement('style');
		msViewportStyle.appendChild(
			document.createTextNode(
				'@-ms-viewport{width:auto!important}'
			)
		);
		document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
	}

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('body').addClass('mobile');
	}

	function detectIE() {
		if (navigator.userAgent.indexOf('MSIE') != -1)
			var detectIEregexp = /MSIE (\d+\.\d+);/ // test for MSIE x.x
		else // if no "MSIE" string in userAgent
			var detectIEregexp = /Trident.*rv[ :]*(\d+\.\d+)/ // test for rv:x.x or rv x.x where Trident string exists

		if (detectIEregexp.test(navigator.userAgent)){ // if some form of IE
			var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
			if (ieversion >= 9) {
				return true;
			}
		}
		return false;
	}

	function getWindowWidth() {
		return Math.max( $(window).width(), window.innerWidth);
	}

	function getWindowHeight() {
		return Math.max( $(window).height(), window.innerHeight);
	}
	
	function isTouchSupported() {
		var msTouchEnabled = window.navigator.msMaxTouchPoints;
		var generalTouchEnabled = "ontouchstart" in document;
		if (msTouchEnabled || generalTouchEnabled) {
			return true;
		}
		return false;
	}
	
	jQuery.fn.setAllToMaxHeight = function(){
		return this.css({ 'height' : '' }).height( Math.max.apply(this, jQuery.map( this , function(e){ return jQuery(e).height() }) ) );
	};
	

	// Preloader
	function initPreloader() {
		var preloaderDelay = 350;
		var	preloaderFadeOutTime = 800;

		function hidePreloader() {
			var preloader = $('#preloader');
			
			preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
		}

		hidePreloader();
	}


	// Refresh Waypoints
	var refreshWaypoints_timeout;
	function refreshWaypoints() {
		clearTimeout(refreshWaypoints_timeout);
		refreshWaypoints_timeout = setTimeout(function() {
			Waypoint.refreshAll();
		}, 1000);
	}


	// Animations
	function initAnimations() {
		var windowWidth = getWindowWidth();
			
		if(windowWidth <=991 || $('body').hasClass('mobile')) {
			$('.animated').css({
				'display':'block',
				'visibility':'visible'
			});
		} else {
			if( detectIE() ) {
				$('.animated').css({
					'display':'block',
					'visibility':'visible'
				});
			} else {
				$('.animated').on('appear', function() {
					var elem = $(this);
					var animation = elem.data('animation');
					if ( !elem.hasClass('visible') ) {
						var animationDelay = elem.data('animation-delay');
						if ( animationDelay ) {
							setTimeout(function(){
								elem.addClass( animation + ' visible' );
							}, animationDelay);
						} else {
							elem.addClass( animation + ' visible' );
						}
					}
				});
				
				/* Starting Animation on Load */
				$(window).load(function() {
					$('.onstart').each( function() {
						var elem = $(this);
						if ( !elem.hasClass('visible') ) {
							var animationDelay = elem.data('animation-delay');
							var animation = elem.data('animation');
							if ( animationDelay ) {
								setTimeout(function(){
									elem.addClass( animation + " visible" );
								}, animationDelay);
							} else {
								elem.addClass( animation + " visible" );
							}
						}
					});
				});
			}		
		}
	}


	// Fullscreen Elements
	function initFullscreenElements() {
		$('.fullscreen-element').each(function(){
			$(this).css('min-height', getWindowHeight());
		});
		$('.equal-section').each(function(){
			$(this).find('.equal-col').setAllToMaxHeight();
		});
	}
	

	// Plugin for load and animate elements
	$.fn.elementAnimatedIn = function() {
		this.each(function() {
			var elem = $(this);
			var animationInDelay = elem.data('layer-animation-delay');
			if ( animationInDelay ) {
				setTimeout(function(){
					elem.addClass('open');
				}, animationInDelay);
			} else {
				elem.addClass('open');
			}
		});
	};
	
	$.fn.elementAnimatedOut = function() {
		this.each(function() {
			var elem = $(this);
			if ( elem.hasClass('open') ) {
				var animationOutDelay = elem.data('layer-animation-out-delay');
				if ( animationOutDelay ) {
					setTimeout(function(){
						elem.removeClass('open');
					}, animationOutDelay);
				} else {
					elem.removeClass('open');
				}
			}
		});
	};
	
	$.fn.elementFadeIn = function() {
		this.each(function() {
			var elem = $(this);
			var animationDelay = elem.data('fade-in-delay');
			if ( animationDelay ) {
				setTimeout(function(){
					elem.addClass('fade-in');
				}, animationDelay);
			} else {
				elem.addClass('fade-in');
			}
		});
	};
	
	$.fn.elementFadeOut = function() {
		this.each(function() {
			var elem = $(this);
			if ( elem.hasClass('open') ) {
				var animationDelayOut = elem.data('fade-out-delay');
				if ( animationDelayOut ) {
					setTimeout(function(){
						elem.removeClass('fade-in');
					}, animationDelayOut);
				} else {
					elem.removeClass('fade-in');
				}
			}
		});
	};
	
	$.fn.BTLayer_LoadIn = function() {
		var layerLoadDelay = 900,
            layerLoadFadeDelay = 1400;		
		if ($('.page-o').hasClass('open')){
			var layerLoadDelay = 0,
				layerLoadFadeDelay = 100;
		}
		
		this.each(function() {
			var elem = $(this);
			setTimeout(function(){
				elem.addClass('open');
			}, layerLoadDelay);
			setTimeout(function(){
				elem.addClass('fade-in');
			}, layerLoadFadeDelay);	
		});
		
	};
	
	$.fn.BTLayer_LoadOut = function() {
		this.each(function() {
			var elem = $(this);
			if ( elem.hasClass('open') ) {				
				elem.removeClass('fade-in');				
				setTimeout(function(){
					elem.removeClass('open');
					if(elem.find('.animated')){
						elem.find('.animated').each( function() {
							var elem = $(this);
							if ( elem.hasClass('visible') ) {
								var animation = elem.data('animation');
								elem.removeClass( animation + " visible" );
							}
						});
					}
				}, 500);
			}
		});	
	};

	
	// Navigation
	function initNavigation() {
		
		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
		
		function initScrollbar() {
			var windowWidth = getWindowWidth();
			
			if(windowWidth <=991 || $('body').hasClass('mobile')) {
				btLayer.mCustomScrollbar('destroy');
			} else {
				btLayer.mCustomScrollbar({
					theme: 'bt-dark'
				});
			}
		}
		initScrollbar();
	
		function initOverlayNavigation() {
			navToggle.off('click');
			
			navToggle.on('click', function(event) {	
				event.preventDefault();

				if($(this).hasClass('is-active')){
					$(this).removeClass('is-active');
					overlayNav.elementFadeOut();
					overlayNav.elementAnimatedOut();
					navOverlay.elementAnimatedOut();
				} else {
					$(this).addClass('is-active');
					navOverlay.elementAnimatedIn();
					overlayNav.elementAnimatedIn();
					overlayNav.elementFadeIn();
				}
				
				if(body.hasClass('layer-active')){
					body.addClass('layer-active-ovn');
					body.removeClass('layer-active');
				} else if(body.hasClass('layer-active-ovn')){
					clearTimeout(navLayer_timeout_2);
					navLayer_timeout_2 = setTimeout(function(){
						body.addClass('layer-active');
						body.removeClass('layer-active-ovn');
					}, 1700);
				}
				
			});
		}
		
		function initLoadLayer(target) {
			var initLoadLayer_delay = 1400;
			if(!btHomeLayer.hasClass('open')){
				btHomeLayer.elementAnimatedIn();
			}
			if(!pageOverlay.hasClass('open')){
				pageOverlay.elementAnimatedIn();
			}
			if(!$(target).hasClass('open')){
				btLayer.BTLayer_LoadOut();
			}
			$(target).BTLayer_LoadIn();
			if(pageOverlay.hasClass('open')){
				var initLoadLayer_delay = 600;
			}
			setTimeout(function(){
				if($(target).hasClass('open')){
					$('.bt-layer.open .animated').each( function() {
						var elem = $(this);
						if ( !elem.hasClass('visible') ) {
							var animationDelay = elem.data('animation-delay');
							var animation = elem.data('animation');
							if ( animationDelay ) {
								setTimeout(function(){
									elem.addClass( animation + " visible" );
								}, animationDelay);
							} else {
								elem.addClass( animation + " visible" );
							}
						}
					});
				}
			}, initLoadLayer_delay);			
		}
		
		function initNavigationLinks() {
			var windowWidth = getWindowWidth();
			
			if(windowWidth <=991 || $('body').hasClass('mobile')) {
				$('.load-layer-btn').off('click');
				$('.open-home-btn').off('click');
				
				$('.load-layer-btn').on('click', function(event) {
					event.preventDefault();
					
					var target = $(this).data('target');

					$.scrollTo(target, 800, {
						offset: {top:-70}
					});
					
				});
				
				$('.open-home-btn').on('click', function(event) {
					event.preventDefault();
					
					var target = $(this).data('target');
					
					$.scrollTo(target, 800, {
						offset: {top:-70}
					});
					
				});
				
				$('.navbar a').on('click', function(event) {
					if(!$('.navbar-toggle').hasClass('collapsed')){
						$('.navbar-toggle').trigger('click');
					}
				});
			} else {
				
				$('.load-layer-btn').off('click');
				$('.open-home-btn').off('click');
				
				if($('.navbar-brand').length){
					var navbarBrandWidth = $('.navbar-brand').outerWidth() + 21;
					$('.navbar-overlay').css('left', navbarBrandWidth);
				}
				
				if(overlayNav.length){
					initOverlayNavigation();
				}
			
				$('.load-layer-btn').on('click', function(event) {
					event.preventDefault();
					
					var elem = $(this);
					var target = $(this).data('target');
					
					if(elem.parents('.overlay-nav').length){
						if(navToggle.hasClass('is-active')){
							navToggle.trigger('click');
						}
						if(!$(target).hasClass('open')){
							clearTimeout(navLayer_timeout);
							navLayer_timeout = setTimeout(function(){
								initLoadLayer(target);
								$('.overlay-nav a').removeClass('active');
								$('.overlay-nav a[data-target="'+ target +'"]').addClass('active');
							}, 1900);
							if(!body.hasClass('layer-active')){
								setTimeout(function(){
									body.addClass('layer-active');
									body.removeClass('layer-active-ovn');
								}, 3100);
							}
						}
					} else {
						if(!$(target).hasClass('open')){
							initLoadLayer(target);									
							if ($('.overlay-nav').length){
								$('.overlay-nav a').removeClass('active');
								$('.overlay-nav a[data-target="'+ target +'"]').addClass('active');
							} else if($('.navbar').length){
								$('.navbar a').removeClass('active');
								$('.navbar a[data-target="'+ target +'"]').addClass('active');
							}						
							if(!body.hasClass('layer-active')){
								setTimeout(function(){
									body.addClass('layer-active');
								}, 1400);
							}
						}
					}
				});
						
				$('.open-home-btn').on('click', function(event) {
					event.preventDefault();
					
					var elem = $(this);
					var target = $(this).data('target');
					
					if ($('.overlay-nav').length){
						$('.overlay-nav a').removeClass('active');
						$('.overlay-nav a[data-target="'+ target +'"]').addClass('active');
					} else if($('.navbar').length){
						$('.navbar a').removeClass('active');
						$('.navbar a[data-target="'+ target +'"]').addClass('active');
					}
				
					var openhomebtn_timeout = 500;
					if(navToggle.hasClass('is-active')){
						navToggle.trigger('click');
						var openhomebtn_timeout = 1900;
					}
					clearTimeout(openHome_timeout);
					openHome_timeout = setTimeout(function(){
						body.removeClass('layer-active');
						btLayer.BTLayer_LoadOut();
						if(pageOverlay.hasClass('open')){
							pageOverlay.elementAnimatedOut();
						}
						if(btHomeLayer.hasClass('open')){
							btHomeLayer.elementAnimatedOut();
						}
					}, openhomebtn_timeout);
				});
		
			}
		}
		
		
		initNavigationLinks();
		
		$(window).on('resize', function () {
			initScrollbar();
			initNavigationLinks();
		});
	
	}
	
	
	// Portfolio
	function initPortfolio() {
		if ($('.isotope-container').length) {
			var $isotopeContainer = $('.isotope-container');
			var $columnWidth = $isotopeContainer.data('column-width');
			
			if($columnWidth == null){
				var $columnWidth = '.isotope-item';
			}
			
			$isotopeContainer.isotope({
				filter: '*',
				animationEngine: 'best-available',
				resizable: false,
				itemSelector : '.isotope-item',
				masonry: {
					columnWidth: $columnWidth
				},
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			}, refreshWaypoints());
		}

		$('nav.portfolio-filter ul a').on('click', function() {
			var selector = $(this).attr('data-filter');
			$isotopeContainer.isotope({ filter: selector }, refreshWaypoints());
			$('nav.portfolio-filter ul a').removeClass('active');
			$(this).addClass('active');
			return false;
		});

	}
	
	
	
	

	// Plugins
	function initPlugins() {
		
		$('#gmap1').gMap({
			scrollwheel: true,
			address: "San Francisco, USA",
			zoom: 5,
			markers:[
				{
					latitude: 100.752797,
					longitude: -200.409132,
					html: "San Francisco, USA",
					popup: true
				}
			]
		});
		
		$('#gmap2').gMap({
			address: "San Francisco, USA",
			zoom: 3,
			markers:[
				{
					address: "San Francisco, USA",
					html: "San Francisco, USA"
				},
				{
					address: "New York, USA",
					html: "New York, USA"
				},
				{
					address: "Miami, USA",
					html: "Miami, USA"
				}
			]
		});
		
		// Responsive Video - FitVids
		$('.video-container').fitVids();
		
		// Sliders
		$('.text-slider').flexslider({
			animation: 'fade',
			animationLoop: true,
			slideshowSpeed: 7000,
			animationSpeed: 700,
			controlNav: true,
			directionNav: false,
			keyboard: false,
			smoothHeight: false
		});
	
		// Countdown
		if ($('.countdown[data-countdown]').length) {			
			$('.countdown[data-countdown]').each(function() {
				var $this = $(this),
					finalDate = $(this).data('countdown');
				$this.countdown(finalDate, function(event) {
					$this.html(event.strftime(
						'<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div><div class="counter-box"><div class="number">%H</div><span>Hours</span></div><div class="counter-box"><div class="number">%M</div><span>Minutes</span></div><div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'
					));
				});
			});
		}

		// Placeholder
		$('input, textarea').placeholder();
		
		// Tooltip
		$('[data-toggle="tooltip"]').tooltip();
		
		// Popover
		$('[data-toggle="popover"]').popover();
	
	}
	
	
	// magnificPopup
	function initMagnificPopup() {
		$('.mfp-image').magnificPopup({
			type:'image',
			closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
		$('.mfp-gallery').each(function() {
			$(this).magnificPopup({
				delegate: 'a',
				type: 'image',
				gallery: {
					enabled: true
				},
				closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});
		});
		
		$('.mfp-iframe').magnificPopup({
			type: 'iframe',
			iframe: {
				patterns: {
					youtube: {
						index: 'youtube.com/',
						id: 'v=',
						src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
					},
					vimeo: {
						index: 'vimeo.com/',
						id: '/',
						src: '//player.vimeo.com/video/%id%?autoplay=1'
					},
					gmaps: {
						index: '//maps.google.',
						src: '%id%&output=embed'
					}
				},
				srcAction: 'iframe_src'
			},
			closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
		$('.mfp-ajax').magnificPopup({
			type: 'ajax',
			ajax: {
				settings: null,
				cursor: 'mfp-ajax-cur',
				tError: '<a href="%url%">The content</a> could not be loaded.'
			},
			midClick: true,
			closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
			removalDelay: 300,
			mainClass: 'mfp-fade',
			callbacks: {
				ajaxContentAdded: function(mfpResponse) {
					initFlexslider();
				}
			}
		});
		
		$('.open-popup-link').magnificPopup({
			type: 'inline',
			midClick: true,
			closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
	}
	

	
	

	// Contact Form
	function initContactForm() {

		var scrollElement = $('html,body');
		var	contactForm = $('.contactform');
		var	form_msg_timeout;

		contactForm.on( 'submit', function() {

			var requiredFields = $(this).find('.required');
			var	formFields = $(this).find('input, textarea');
			var	formData = contactForm.serialize();
			var	formAction = $(this).attr('action');
			var	formSubmitMessage = $('.response-message');

			requiredFields.each(function() {

				if( $(this).val() === '' ) {
					$(this).addClass('input-error');
				} else {
					$(this).removeClass('input-error');
				}

			});

			function validateEmail(email) { 
				var exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return exp.test(email);
			}

			var emailField = $('.contactform :input[type="email"]');

			if( !validateEmail(emailField.val()) ) {
				emailField.addClass('input-error');
			}

			if ($('.contactform :input').hasClass('input-error')) {
				return false;
			} else {
			
				clearTimeout(form_msg_timeout);
				
				$.post(formAction, formData, function(data) {
					var formSubmitMessageData = data;
					formSubmitMessage.html(formSubmitMessageData);

					formFields.val('');

					form_msg_timeout = setTimeout(function() {
						formSubmitMessage.slideUp();
					}, 5000);
				});

			}

			return false;

		});

	}
	
	// WINDOW.LOAD FUNCTION
	$(window).load(function() {		
		initPreloader();
		initPortfolio();
	});
	
	// DOCUMENT.READY FUNCTION
	jQuery(document).ready(function($) {
		initFullscreenElements();
		initAnimations();	
		initPageBackground();
		initNavigation();
		initPlugins();
		initMagnificPopup();
		initMailchimp();
		initContactForm();
	});
	
	// WINDOW.RESIZE FUNCTION
	$(window).on('resize', function () {
		initAnimations();
		initFullscreenElements();
		initPortfolio();
		gmapBackground();
	});

})(jQuery);