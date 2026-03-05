/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: .8, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);


	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	TXTheaderSticky();
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 250) {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').addClass('sticky-on')
		} else {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').removeClass('sticky-on')
		}
	});
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});
	gsap.registerPlugin(ScrollTrigger);
	
	// Animation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){


			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {
				
			}, 700);
		})		
	});
	
	if ($('.nx-hr1-cl-slide').length > 0 ) {
		var slider = new Swiper('.nx-hr1-cl-slide', {
			spaceBetween: 0,
			slidesPerView: 3,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 1000
			},
			speed: 1000,
		});
	};

	if ($(".nx_marquee_top").length) {
		document
		.querySelectorAll(".nx_marquee_top")
		.forEach((nxMarque) => {
			const nxMar = nxMarque.cloneNode(true);
			nxMarque.parentNode.appendChild(nxMar);

			const nxMarH = nxMarque.offsetHeight;
			gsap.set([nxMarque, nxMar], {
				y: -nxMarH
			});

			gsap.to([nxMarque, nxMar], {
				y: 0,
				ease: "none",
				duration: 25,
				repeat: -1,
				modifiers: {
					y: gsap.utils.unitize(
						(y) => parseFloat(y) % nxMarH
						),
				},
			});
		});
	}

	if (window.matchMedia("(min-width: 1200px)").matches) { 
		let abtab1 = gsap.timeline({
			scrollTrigger: {
				trigger: ".nx-ab1-vh",
				start: "top top", 
				end: "bottom bottom",
				toggleActions: "play none none reverse",
				scrub: .5,
				markers: false,
			},
		});
		abtab1.from(".nx-ab1-mission-item:nth-of-type(1)  .item-text-wrap", {height: "301px"});
		abtab1.to(".nx-ab1-mission-item:nth-of-type(2)  .item-text-wrap", {height: "301px"},"<");
		abtab1.fromTo(".nx-ab1-mission-item:nth-of-type(1) .item-text-wrap svg path", {fill: "#FD3F00"},{fill: "#000000"},"<");
		abtab1.fromTo(".nx-ab1-mission-item:nth-of-type(2) .item-text-wrap svg path", {fill: "#000000"},{fill: "#FD3F00"},"<");


		let abtab2 = gsap.timeline({
			scrollTrigger: {
				trigger: ".nx-ab1-vh",
				start: "top top", 
				end: "bottom bottom",
				toggleActions: "play none none reverse",
				scrub: true,
				markers: false,
			},
		});

		abtab2.to(".ax-ab1-mis:last-child", { yPercent: 105});
	}


	if ($(".nx-ser1-item-wrap").length) {

		document.querySelectorAll(".nx-ser1-item-wrap").forEach((itemWrap) => {

			const innerArea = itemWrap.querySelector(".inner-item-wrap");
			const image = itemWrap.querySelector(".item-img");

			gsap.set(image, {
				xPercent: -50,
				yPercent: -50,
				position: "absolute",
				top: 0,
				left: 0,
				pointerEvents: "none"
			});

			innerArea.addEventListener("mousemove", (e) => {
				const rect = innerArea.getBoundingClientRect();

				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;

				gsap.to(image, {
					x: x,
					y: y,
					duration: 0.4,
					ease: "power3.out"
				});
			});

			innerArea.addEventListener("mouseenter", () => {
				gsap.to(image, { opacity: 1, scale: 1, duration: 0.3 });
			});

			innerArea.addEventListener("mouseleave", () => {
				gsap.to(image, { opacity: 0, scale: 0.8, duration: 0.3 });
			});

		});

	}
	
	document.querySelectorAll(".nx-spon1-item").forEach((item) => {

		function randomAnimation() {
			const delay = Math.random() * 10000 + 3000;
			setTimeout(() => {
				item.classList.add("active");
				setTimeout(() => {
					item.classList.remove("active");
					randomAnimation();
				}, 1000);

			}, delay);
		}

		randomAnimation();

	});


	if (window.matchMedia("(min-width: 1200px)").matches) {
		const cards = gsap.utils.toArray(".nx_sticky_item");
		cards.forEach((card, index) => {
			let scaleValue = 0.8 + (index * 0.1); 
			gsap.to(card, {
				scale: scaleValue,
				transformOrigin: "top center",
				ease: "none",
				scrollTrigger: {
					trigger: card,
					start: `top ${170 + 40 * index}`,
					end: "bottom 77%",
					endTrigger: ".nx-pro1-item-wrapper",
					pin: true,
					pinSpacing: false,
					scrub: true,
					markers: false,
				}
			});

		});
	}


	if (window.matchMedia("(min-width: 1200px)").matches) {
		gsap.to(".bk-faci2-title", {
			scrollTrigger: {
				trigger: ".nx-pro1-sec",
				start: "top 30%", 
				end: "bottom bottom", 
				pin: ".nx-pro1-action-title", 
				pinSpacing: false,
				markers: false
			}
		});

		let proTitle = gsap.timeline({
			scrollTrigger: {
				trigger: ".nx-pro1-sec",
				start: "top 65%", 
				end: "top -30%",
				toggleActions: "play none none reverse",
				scrub: true,
				markers: false,
			},
		});

		proTitle.to(".nx-pro1-action-title h3:nth-child(1)", { xPercent: -180});
		proTitle.to(".nx-pro1-action-title h3:nth-child(2)", { xPercent: 180},"<");
	}


})(jQuery);