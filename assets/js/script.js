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
		duration: 1.3, 
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

	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.nx-scrollup').fadeIn();
		} else {
			$('.nx-scrollup').fadeOut();
		}
	});
	$('.nx-scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
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

	$('.marquee-right').marquee({
		gap: 28,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});


	$('.marquee-left').marquee({
		gap: 0,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});



	$('.marquee-left2').marquee({
		gap: 25,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});


	$('.marquee-right2').marquee({
		gap: 0,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});

	$('.marquee-right3').marquee({
		gap: 0,
		speed: 20,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
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

				const NXhero1 = gsap.timeline();
				NXhero1
				.from(".nx-hero1-img", { xPercent: 30, duration: 1.5, transformOrigin: "bottom",  ease: "power1.out" })
				.from(".nx-hero1-sec .nx-hr-social", { xPercent: -50, duration: 1, rotate: 180, transformOrigin: "center",  ease: "power1.out" },"< = .3")
				.from(".nx-hr1-bottom .bottom-video", {scale: .5, duration: .5, opacity: 0, transformOrigin: "center",  ease: "power1.out" },"< = .3")
				.from(".nx-hr1-desc-text .nx-btn1", { yPercent: -50, opacity: 0, duration: 1,  transformOrigin: "center",  ease: "power1.out" },"< = .3")
				.from(".nx-hero1-text .hr1-slug", { xPercent: -30, duration: 2, opacity: 0, transformOrigin: "center",  ease: "power1.out" },"< = .3")
				.from(".nx-hr1-brand", { yPercent: 30, duration: 1, opacity: 0, transformOrigin: "center",  ease: "power1.out" },"< = .3")
				.from(".nx-hr1-bottom .nx-hr1-client", { yPercent: 30, duration: .5, opacity: 0, transformOrigin: "center",  ease: "power1.out" },"< = .3")
				


				if($(".nx_hero_title").length) {
					var NXSECTITLE = $(".nx_hero_title");
					if(NXSECTITLE.length == 0) return; gsap.registerPlugin(SplitText); NXSECTITLE.each(function(index, el) {

						el.split = new SplitText(el, { 
							type: "lines,words,chars",
							linesClass: "split-line"
						});

						gsap.set(el, { perspective: 400 });

						if( $(el).hasClass('hero_title_1') ){
							gsap.set(el.split.chars, {
								x: 100,
								scaleX: 0,
								opacity: 0,
							});
						}
						el.anim = gsap.to(el.split.chars, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
								toggleActions: "play reverse play reverse",
								markers: false,
							},
							x: 0,
							y: 0,
							scaleX: 1,
							scaleY: 1,
							opacity: 1,
							duration: 1,
							stagger: .05,
							rotationX: 15,
							delay: .1,
							ease: "power3.inOut",
						});
					});
				}

				const NXhero2 = gsap.timeline();
				NXhero2
				.from(".nx-hero2-img-grp .item-img", { xPercent: -50,  duration: 3.5, transformOrigin: "center",  ease: "elastic.out(1,0.7)" })
				.from(".nx-hero2-img-grp .item-img2", { xPercent: 50,  duration: 3.5, transformOrigin: "center",  ease: "elastic.out(1,0.7)" },"<")
				.from(".nx-hero2-video", { scale: 0.5, opacity: 0, duration: 1, transformOrigin: "center",  ease: "power1.out" },"< = .3")
				.from(".nx-start-project .nx-start-up", { x: 50, opacity: 0, duration: 3.5, transformOrigin: "center",  ease: "elastic.out(1,0.7)" },"< = .3")
				.from(".nx-start-project .nx-start-down", { x: -50, opacity: 0, duration: 3.5, transformOrigin: "center",  ease: "elastic.out(1,0.7)" },"< =")
				
				const NXhero3 = gsap.timeline();
				NXhero3
				.from(".nx-hero3-img", { yPercent: 100,  duration: 1, transformOrigin: "center",  ease: "power1.out" })
				.from(".nx-hr3-marquee-text", { yPercent: 100,  duration: 1, transformOrigin: "center",  ease: "power1.out" },"< = .2")
				.from(".nx-hr3-circle", { scale: 0,  duration: 1.5, transformOrigin: "center",  ease: "power1.out" },"< = .2")
				.from(".nx-hr3-circle-social .nx-hr3-circle2", {  scale: 1.2, opacity: 0,  duration: 1.5, transformOrigin: "center",  ease: "power1.out" },"< = .3")
				.from(".nx-hr3-circle-social .nx-hr3-social", {  scale: 1.1, opacity: 0,  duration: 1.5, transformOrigin: "center",  ease: "power1.out" },"< = .3")
				.from(".nx-hr3-shape1", {  scale: 0, opacity: 0,  duration: 1, transformOrigin: "center",  ease: "power1.out" },"< = .3")
				




				afterPageLoad();
			}, 700);
		})		
	});


	function afterPageLoad() {


		if (window.matchMedia("(min-width: 1200px)").matches) { 


			if ($("#nx_hero_anim").length) {

				const nxWrap = document.getElementById("nx_hero_anim");
				const nXimg = nxWrap.querySelector("img");
				const waImageURL = nXimg.getAttribute("src");
				nXimg.remove();

				const { width: nxWidth, height: nxHeight } = nxWrap.getBoundingClientRect();

				const nxUP = new PIXI.Application({
					width: nxWidth,
					height: nxHeight,
					transparent: true,
					autoDensity: true,
					resolution: window.devicePixelRatio,
				});
				nxUP.view.style.pointerEvents = "none";

				nxWrap.appendChild(nxUP.view);

				const nxDispl = "assets/img/hero/h1-bg-noise-1.gif";

				nxUP.loader
				.add("nxHero", waImageURL)
				.add("nxDIP", nxDispl)
				.load((waLoader, nxResourse) => {
					const nxCountain = new PIXI.Container();
					nxUP.stage.addChild(nxCountain);

					const nxHero = new PIXI.Sprite(nxResourse.nxHero.texture);
					nxCountain.addChild(nxHero);

					const nxTexture = nxHero.texture.width / nxHero.texture.height;
					const nxCountainRatio = nxWidth / nxHeight;

					if (nxCountainRatio > nxTexture) {
						nxHero.width = nxWidth;
						nxHero.height = nxWidth / nxTexture;
					} else {
						nxHero.height = nxHeight;
						nxHero.width = nxHeight * nxTexture;
					}

					nxHero.x = (nxWidth - nxHero.width) / 2;
					nxHero.y = (nxHeight - nxHero.height) / 2;

					const nxDispri = new PIXI.Sprite(nxResourse.nxDIP.texture);
					nxDispri.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
					const nxDfilter = new PIXI.filters.DisplacementFilter(nxDispri);
					nxDispri.scale.set(2);
					nxUP.stage.addChild(nxDispri);
					nxCountain.filters = [nxDfilter];

					function waPlayDistortionIn() {
						gsap.fromTo(nxDfilter.scale,
							{ x: -220, y: -220 },
							{ x: 0, y: 0, duration: 2,  ease: "ease1", }
							);
					}
					waPlayDistortionIn();

					nxUP.ticker.add(() => {
						nxDispri.x += 1;
						nxDispri.y += 1;
					});
				});
			}
		}

		gsap.utils.toArray(".nx-text p").forEach(paragraph => {
			let timeline = gsap.timeline({
				scrollTrigger: {
					trigger: paragraph,
					start: "top 90%",
					end: "bottom 60%",
					toggleActions: "play none none none"
				}
			});
			let splitText = new SplitText(paragraph, { type: "lines" });
			gsap.set(paragraph, { perspective: 400 });
			timeline.from(splitText.lines, {
				opacity: 0,
				y: 20,
				transformOrigin: "top center -50",
				force3D: true,
				duration: 1,
				delay: 0.5,
				stagger: 0.1
			});
		});

	}

	if($('.nx-itm-title').length) {
		var txtheading = $(".nx-itm-title");
		if(txtheading.length == 0) return; gsap.registerPlugin(SplitText); txtheading.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});
			if( $(el).hasClass('nx-itm-anim') ){
				gsap.set(el.split.chars, {
					opacity: .2,
					color: "#000000",
					y: "-3",
				});
			}
			if( $(el).hasClass('nx-itm-anim2') ){
				gsap.set(el.split.chars, {
					opacity: .2,
					color: "#fff",
					y: "-3",
				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 80%",
					end: "top 40%",
					markers: false,
					scrub: 1,
				},

				x: "0",
				y: "0",
				color: "inherit",
				opacity: 1,
				duration: .7,
				stagger: 0.2,
			});

		});
	}


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


	if (window.matchMedia("(min-width: 1400px)").matches) {

		gsap.to(".nx-team1-content", {
			scrollTrigger: {
				trigger: ".nx-team1-sec",
				start: "top -2%", 
				end: "top -35%", 
				pin: ".nx-team1-content", 
				pinSpacing: false,
				markers: false
			}
		});

		let tmItem = gsap.timeline({
			scrollTrigger: {
				trigger: ".nx-team1-wrap",
				start: "top 6%", 
				end: "top -14%",
				toggleActions: "play none none reverse",
				scrub: 2,
				markers: false,
			},
		});

		tmItem.from(".nx-team1-item:is(._3) .item-inner", {height: 423, width: 320, y: -320 });
		tmItem.from(".nx-team1-item:is(._2) .item-inner", { x: 350, rotate: 0, opacity: 0 });
		tmItem.from(".nx-team1-item:is(._4) .item-inner", { x: -350, rotate: 0, opacity: 0 },"< =");
		tmItem.from(".nx-team1-item:is(._1) .item-inner", { x: 350, y: -20, rotate: 0, opacity: 0 });
		tmItem.from(".nx-tm1-bottom", { opacity: 0, y: 100 },"< =");
		tmItem.from(".nx-team1-item:is(._5) .item-inner", { x: -350,  y: -20, rotate: 0, opacity: 0 },"< =");
		tmItem.to(".nx-team1-item:is(._3) .item-inner", { y: -80 });
		tmItem.to(".nx-tm1-bottom", {  y: -70 },"< =");
	}



	if (window.matchMedia("(min-width: 1200px)").matches) {
		gsap.to(".nx-step1-sec", {
			scrollTrigger: {
				trigger: ".nx-step1-area",
				start: "top 10%",
				end: "420px",
				pin: ".nx-step1-sec",
				pinSpacing: false,
				markers: false,
			},
		});

		var p1ani = gsap.timeline({
			scrollTrigger: {
				trigger: ".nx-step1-area",
				start: "top 0%",
				end: "420px",
				toggleActions: "play none none reverse",
				scrub: true,
				markers: false,
			},
		});

		p1ani.to(".nx-step1-item:nth-of-type(2)", {
			x: -380,
		});

		p1ani.to(
			".nx-step1-item:nth-of-type(3)",
			{
				x: -380,
			},
			"<"
			);

		p1ani.to(".nx-step1-item:nth-of-type(3)", {
			x: -760,
		});
		p1ani.from(".nx-step1-bottom", {
			y: 500,
		},"<");
	}


	if (window.matchMedia("(min-width: 1200px)").matches) {
		gsap.to(".nx-testi1-marquee", {
			scrollTrigger: {
				trigger: ".nx-testi1-wrapper",
				start: "top 0%", 
				end: "bottom bottom", 
				pin: ".nx-testi1-marquee", 
				pinSpacing: false,
				markers: false
			}
		});
		gsap.to(".nx-testi1-bg", {
			scrollTrigger: {
				trigger: ".nx-testi1-wrapper",
				start: "top -25%", 
				end: "bottom bottom", 
				pin: ".nx-testi1-bg", 
				pinSpacing: false,
				markers: false
			}
		});
		const items = gsap.utils.toArray('.bk-faci2-item .inner-item');
		items.forEach(animateItem);
		function animateItem(el) {
			gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 1,
					start: "top 90%",
					end: "bottom 50%",
					toggleActions: "play none none reverse",
					markers: false
				}
			})
			.set(el, {
				perspective: 1000,
				rotatey: "-90deg",
				transformStyle: "preserve-3d",
				transformOrigin: "50% 100%"
			})
			.from(el, {
				scaleY: 0,
				opacity: 0
			});
		}
	}


	if (window.matchMedia("(min-width: 1600px)").matches) {


		var nxGTImg = gsap.timeline({
			scrollTrigger: {
				trigger: ".nx-gt-content",
				start: "top 30%",
				end: "+=700",
				toggleActions: "play none none reverse",
				scrub: true,
				markers: false,
			},
		});

		nxGTImg.to(".nx-gt-img:is(.nx-gt-img1)", {
			y: -150,
			x:  -450,
		});
		nxGTImg.from(".nx-gt-text", {
			scale: .5,
			opacity: 0,
		},"<");
		nxGTImg.from(".nx-gt-img:is(.nx-gt-img2)", {
			yPercent: 40,
			xPercent: -120,
		},"<");
		nxGTImg.from(".nx-gt-img:is(.nx-gt-img3)", {
			yPercent: 40,
			xPercent: -325,
		},"<");
		nxGTImg.from(".nx-gt-img:is(.nx-gt-img4)", {
			yPercent: -150,
			xPercent: 225,
		},"<");
		nxGTImg.from(".nx-gt-img:is(.nx-gt-img5)", {
			xPercent: 90,
			yPercent: -175,
		},"<");
		nxGTImg.from(".nx-gt-img:is(.nx-gt-img6)", {
			xPercent: -45,
			yPercent: -125,
		},"<");
		nxGTImg.from(".nx-gt-img:is(.nx-gt-img7)", {
			xPercent: -160,
			yPercent: -125,
		},"<");

		nxGTImg.to(".nx-gt-img:is(.nx-gt-img1)", {
			y: -150,
			x: -450,
		});

		nxGTImg.to(".nx-gt-img:is(.nx-gt-img1)", {
			y: "+=860",  
			x: "-=68",
			width: 668,
			height: 780,

		});
	}


	if ($('.nx-blog-slider').length > 0 ) {
		var slider = new Swiper('.nx-blog-slider', {
			spaceBetween: 24,
			slidesPerView: 3,
			loop: true,
			speed: 1000,
			pagination: {
				el: ".nx-blg-pagi",
				clickable: true,
			},
			navigation: {
				nextEl: ".nx-blg-right",
				prevEl: ".nx-blg-left",
			},
			breakpoints: {
				'1400': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'576': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'480': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'0': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
			},
		});
	};


	const buttons = document.querySelectorAll(".nx-btn1");
	buttons.forEach(btn => {
		const split = new SplitText(btn, { type: "chars" });
		gsap.set(split.chars, { y: 0, opacity: 1 });
		btn.addEventListener("mouseenter", () => {
			gsap.fromTo(
				split.chars,
				{ y: 20, rotate: 180, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.4,
					rotate: 0,
					stagger: 0.1,
					ease: "power3.out"
				}
				);
		});
	});


	const items = document.querySelectorAll(".nx-ab1-count-item, .nx-who-w-count-item, .nx-ab3-count-card");

	items.forEach(item => {
		const heading = item.querySelector(".item-bottom h3,  .item-text h3, .item-top h3");
		if (!heading) return;

		const split = new SplitText(heading, { type: "chars" });

		gsap.set(split.chars, { y: 0, opacity: 1 });

		item.addEventListener("mouseenter", () => {
			gsap.fromTo(
				split.chars,
				{ y: 20, rotateX: 5, opacity: 0 },
				{
					y: 0,
					rotateX: 0,
					opacity: 1,
					duration: 2,
					stagger: .2,
					ease: "elastic.out(1,0.7)"
				}
				);
		});
	});





	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var nxWC1 = gsap.timeline({
			scrollTrigger: {
				trigger: '.nx-why-c-content',
				start: "top 50%",
				toggleActions: 'play none none reverse',
				markers: false,
			}

		});
		nxWC1
		.from(".nx-why-c1-card2 .nx-wc-hand2", { opacity: 0,  xPercent: 50, duration: 1.5,   ease: "power1.out" })
		.from(".nx-why-c1-card2 .nx-wc-hand1", { opacity: 0,  xPercent: -50, duration: 1.5,   ease: "power1.out" },"<")
		.from(".nx-why-c1-card1 .item-img", { opacity: 0,  yPercent: 50, duration: 1.5,   ease: "power1.out" },"<")
		.from(".nx-why-c1-card6 .item-wc-logo", { opacity: 0,  scale: .5, duration: 1,   ease: "power1.out" },"<")
		.from(".nx-why-c1-card6 .nx-wc-avater", { opacity: 0,  y: 150, duration: 2,   ease: "elastic.out(1,0.7)" },"<")
		.from(".nx-why-c1-card6 .item-brand", { opacity: 0,  y: 150, duration: 2,   ease: "elastic.out(1,0.7)" },"<")
		.from(".nx-why-c1-card4 .top-logos ul li:nth-child(1)", { opacity: 0,  scale: 0, duration: 1,   ease: "power1.out" },"<")
		.from(".nx-why-c1-card4 .top-logos ul li:nth-child(2)", { opacity: 0,  scale: 0, duration: 1,   ease: "power1.out" },"<")
		.from(".nx-why-c1-card4 .top-logos ul li:nth-child(3)", { opacity: 0,  scale: 0, duration: 1,   ease: "power1.out" },"<")
		.from(".nx-why-c1-card4 .top-logos ul li:nth-child(4)", { opacity: 0,  scale: 0, duration: 1,   ease: "power1.out" },"<")
		.from(".nx-why-c1-card4 .top-logos ul li:nth-child(5)", { opacity: 0,  scale: 0, duration: 1,   ease: "power1.out" },"<")
		.from(".nx-why-c1-card3 .wc-img1", { opacity: 0,  x: 120, duration: 1,   ease: "power1.out" },"<")
		
	};


	if($(".ftr_bottom-text").length) {
		var aniTitle1 = $(".ftr_bottom-text");
		if(aniTitle1.length == 0) return; gsap.registerPlugin(SplitText); aniTitle1.each(function(index, el) {

			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});

			gsap.set(el, { perspective: 400 });

			if( $(el).hasClass('ftr_bottom-text') ){
				gsap.set(el.split.chars, {
					yPercent: 100,
					opacity: 0,

				});
			}
			if( $(el).hasClass('ftr_bottom-text_2') ){
				gsap.set(el.split.chars, {
					yPercent: 100,
					opacity: 0,

				});
			}
			if( $(el).hasClass('ftr_bottom-text_3') ){
				gsap.set(el.split.chars, {
					yPercent: -100,
					opacity: 0,

				});
			}
			if( $(el).hasClass('ftr_bottom-text_4') ){
				gsap.set(el.split.chars, {
					x: -100,
					opacity: 0,

				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					toggleActions: "play reverse play reverse",
					markers: false,

				},

				yPercent: 0,
				xPercent: 0,
				opacity: 1,
				duration: 2,
				stagger: .1,
				ease: "bounce.out",
			});

		});
	}


	$('.nx_item_active').on('mouseover', function () {
		var $group = $(this).closest('[data-nx-group]');
		$group.find('.nx_item_active').removeClass('active');
		$(this).addClass('active');
	}); 

	$('.nx_item_active2').on('click', function (e) {
		e.preventDefault();

		var $group = $(this).closest('[data-nx-group]');
		$group.find('.nx_item_active2').removeClass('active');
		$(this).addClass('active');
	});

	if (window.matchMedia("(min-width: 1200px)").matches) {
		var nxPro = gsap.timeline({
			scrollTrigger: {
				trigger: ".nx-pro2-content",
				start: "top 100%",
				end: "top 10%",
				toggleActions: "play none none reverse",
				scrub: true,
				markers: false,
			}

		});

		nxPro
		.from( ".nx-pro2-item:nth-child(1)" , {x: -90,y: -800,rotate: -8, scale: 0.65, duration: 3, ease: "power1.out" })
		.from( ".nx-pro2-item:nth-child(2)" , {x: -762,y: -790,rotate: 8, scale: 0.65, duration: 3, ease: "power1.out" },"<=")
		.from( ".nx-pro2-item:nth-child(3)" , {x: -90,y: -1318,rotate: -4, scale: 0.65, duration: 3, ease: "power1.out" },"<=")
		.from( ".nx-pro2-item:nth-child(4)" , {x: -762,y: -1318,rotate: 4, scale: 0.65, duration: 3, ease: "power1.out" },"<=")
		.from( ".nx-pro2-item:nth-child(1) .item-text" , {opacity: 0, ease: "power1.out" })
		.from( ".nx-pro2-item:nth-child(2) .item-text" , {opacity: 0, ease: "power1.out" })
		.from( ".nx-pro2-item:nth-child(3) .item-text" , {opacity: 0, ease: "power1.out" })
		.from( ".nx-pro2-item:nth-child(4) .item-text" , {opacity: 0, ease: "power1.out" })

	}


	if (window.matchMedia("(min-width: 1200px)").matches) {
		var nxPro = gsap.timeline({
			scrollTrigger: {
				trigger: ".nx-ab3-content",
				start: "top 100%",
				end: "top 10%",
				toggleActions: "play none none reverse",
				scrub: true,
				markers: false,
			}

		});

		nxPro
		.from( ".nx-ab3-count-card:nth-child(2)" , {yPercent: -100,  duration: 1, ease: "power1.out" })
		.from( ".nx-ab3-count-card:nth-child(3)" , {yPercent: -205,  duration: 1, ease: "power1.out" },"<=")
	}


	if (window.matchMedia("(min-width: 1200px)").matches) {
		gsap.utils.toArray('.nx-work-p2-item').forEach((item) => {
			gsap.from(item, {
				opacity: 0,
				y: 50,
				scale: .9,
				duration: 0.8,
				filter: "blur(10px)",
				scrollTrigger: {
					trigger: item,
					start: "top 80%",
					toggleClass: { targets: item, className: "in-view" },
					toggleActions: "play none none reset" 
				}
			});
		});

	}



	if (window.matchMedia("(min-width: 1200px)").matches) {
		const cards = Array.from(document.querySelectorAll('.nx-insight-img-wrap'));
		const container = document.querySelector('.nx-insight-right');
		gsap.set(container, {
			perspective: 1200
		});
		cards.forEach((card, i) => {
			card.style.position = 'sticky';
			card.style.top = `${50 + (i * 35)}px`;
			card.style.marginBottom = '20px';
			card.style.zIndex = cards.length + i;

			const img = card.querySelector('.nx-insight-img');

			ScrollTrigger.create({
				trigger: card,
				start: `top ${90 + (i * 35)}px`,
				end: "bottom 40%",
				scrub: 1,
				markers: false,
				onUpdate: (self) => {
					const progress = Math.min(1, self.progress * 1.5);
					gsap.to(img, {
						rotationX: -35 * progress,
						scale: 1 - (0.05 * progress),
						y: 10 * progress,
						transformPerspective: 1200,
						transformOrigin: "top center",
						duration: 0.1,
						ease: "none",
						overwrite: true
					});
				}
			});
		});
		gsap.set(container, {
			minHeight: `${window.innerHeight + (cards.length * 200)}px`
		});
	}

	gsap.utils.toArray(' .glow_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				start: "top 110%",
				end: "top 95%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: 1, y: "200"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
	});


	gsap.utils.toArray(' .scale_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				start: "top 90%",
				end: "top 80%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: .5})
	});



	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var nxWC2 = gsap.timeline({
			scrollTrigger: {
				trigger: '.nx-why-c2-content',
				start: "top 50%",
				toggleActions: 'play none none reverse',
				markers: false,
			}

		});
		nxWC2
		.from(".nx-why-c2-item1 .nx-wc2-shape1", { opacity: 0, yPercent: 50, xPercent: 50, duration: 1.5,   ease: "power1.out" })
		.from(".nx-why-c2-item2 .nx-wc2-icon", { opacity: 0, yPercent: 50,  duration: 3,   ease: "elastic.out(1,0.7)" },"<")
		.from(".nx-why-c2-item4 .item-img", { opacity: 0, xPercent: 50,  duration: 1,   ease: "power1.out" },"< = .3")
		.from(".nx-why-c2-item3 .nx-wc2-img", { opacity: 0, yPercent: 50,  duration: .5,   ease: "power1.out" },"< = .3")
		.from(".nx-why-c2-item5 .item-client li", { opacity: 0, scale: 0,  duration: 1, rotate: 350,   ease: "power1.out" },"< = .3")

		
	};


	if (window.matchMedia("(min-width: 1200px)").matches) { 
		document.querySelectorAll('.nx-tst-team-sec').forEach((section) => {
			let SecTitle = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: "top -5%",
					end: "top -100%",
					scrub: 1,
					pin: false,
					pinSpacing: false,
					markers: false,
				}
			});

			SecTitle.from(section.querySelector('.nx-tm2-item._1'), { y: -1220, x: -50,  scale: .3, duration: 1, ease: "power2.out"});
			SecTitle.from(section.querySelector('.nx-tm2-item._4'), { y: -1220, x: 50,  scale: .3, duration: 1, ease: "power2.out"},"< = ");
			SecTitle.from(section.querySelector('.nx-tm2-item._2'), { y: -720, x: -400,  scale: .3, duration: 1, ease: "power2.out"},"< = ");
			SecTitle.from(section.querySelector('.nx-tm2-item._3'), { y: -720, x: 400,  scale: .3, duration: 1, ease: "power2.out"},"< = ");

		});
	}

	document.querySelectorAll(".nx-tm2-content").forEach((item) => {
		ScrollTrigger.create({
			trigger: item,
			start: "top 45%",  
			toggleClass: { targets: item, className: "active" },
			once: false,
			markers: false,
		});
	});



	if($(".nx-testi3-slider-wrap").length) {
		var swiper3 = new Swiper(".nx-tst-thumb-slider", {
			speed: 500,
			loop: true,
			slideToClickedSlide: false,
			centeredSlides: true,
			allowTouchMove: false,
			navigation: {
				nextEl: ".nx-tst3-next",
				prevEl: ".nx-tst3-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 5,
				},
				576: {
					slidesPerView: 5,
				},
				767: {
					slidesPerView: 5,
				},
				768: {
					slidesPerView: 5,
				},
				992: {
					slidesPerView: 5,
				},
			},

		});
		var swiper2 = new Swiper(".nx-testi3-slider", {
			speed: 500,
			loop: true,
			effect: "fade",
			navigation: {
				nextEl: ".nx-tst3-next",
				prevEl: ".nx-tst3-prev",
			},
			fadeEffect: {
				crossFade: true
			},
			thumbs: {
				swiper: swiper3,
			},

		});
	}



	if (window.matchMedia("(min-width: 1200px)").matches) {
		const ServiceCardItem2 = gsap.utils.toArray(".nx-ser3-img");
		const animateCard2 = (card, wrapper, index) => {
			gsap.to(card, {
				transformOrigin: "top center",
				duration: 2,
				scrub: 1.5,
				ease: "power1.out",
				scrollTrigger: {
					trigger: wrapper,
					start: `top ${100 + 0 * index}`, 
					end: "bottom 55%",
					endTrigger: ".nx-ser3-content",
					pin: wrapper,
					pinSpacing: false,
					markers: false,
				},
			});
		};
		ServiceCardItem2.forEach((wrapper, index) => animateCard2([index], wrapper, index));
	} 

	if (window.matchMedia("(min-width: 1200px)").matches) {
		let texts = gsap.utils.toArray(".nx-ser3-text");
		let total = texts.length;
		texts.forEach((el, i) => {
			el.style.display = i === 0 ? "block" : "none";
		});
		ScrollTrigger.create({
			trigger: ".nx-ser3-text-part",
			start: "top 10%",
			end: "top -90%",
			scrub: true,
			pin: true,
			onUpdate: (self) => {
				let progress = self.progress; 
				let index = Math.floor(progress * total);

				if (index >= total) index = total - 1;

				switchTo(index);
			}
		});
		function switchTo(index) {
			texts.forEach((el, i) => {
				el.style.display = (i === index) ? "block" : "none";
			});
		}
	}

	function updateVisibility() {
		const elements = $('.nx-pro3-item');
		const viewportBottom = $(window).scrollTop() + $(window).height();
		const viewportTop = $(window).scrollTop();

		elements.each(function() {
			const element = $(this);
			const elementTop = element.offset().top;
			const elementBottom = elementTop + element.outerHeight();

			if (elementTop < viewportBottom && elementBottom > viewportTop) {
				element.addClass('visible');
			} else {
				element.removeClass('visible');
			}
		});
	}
	$(window).on('scroll resize', updateVisibility);
	updateVisibility();


	if (window.matchMedia("(min-width: 991px)").matches) { 
		gsap.utils.toArray(' .slide_view_1').forEach((el, index) => { 
			let tlcta = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 1.5,
					end: "top 20%",
					start: "top 70%",
					toggleActions: "play none none reverse",
					markers: false
				}
			})

			tlcta
			.set(el, {transformOrigin: 'top'})
			.from(el, { opacity: 1, scale: 1,  y: "+=50"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
		});
	};

	if (window.matchMedia("(min-width: 991px)").matches) { 
		gsap.utils.toArray(' .slide_view_2').forEach((el, index) => { 
			let tlcta = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 1.5,
					end: "top 20%",
					start: "top 70%",
					toggleActions: "play none none reverse",
					markers: false
				}
			})

			tlcta
			.set(el, {transformOrigin: 'bottom bottom'})
			.from(el, { opacity: 1, scale: 1, y: "-=50"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
		});
	};


	if($('.nx-split-2').length) {
		var txtSplit = $('.nx-split-2');
		if(txtSplit.length == 0) return; gsap.registerPlugin(SplitText); txtSplit.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines",
				wordsClass: "split-line"
			});
		});
	}


	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var nxWC2 = gsap.timeline({
			scrollTrigger: {
				trigger: '.nx-team3-sec',
				start: "top 0%",
				end: "bottom -=200",
				markers: false,
				scrub: 2,
				pin: true,
				pinSpacing: true,
			}

		});
		nxWC2
		.from(".nx-team3-title .nx-tm3-subtitle", { y: 85, duration: .5,   ease: "power1.out" })
		.from(".nx-team3-title h2 span:nth-child(1)", { y: 85, duration: .5,   ease: "power1.out" },"<")
		.from(".nx-team3-title h2 span:nth-child(2)", {   x: -85, duration: .5,   ease: "power1.out" },"<")
		.from(".nx-team3-title h2 span:nth-child(3)", {   y: -85, duration: .5,   ease: "power1.out" },"<")
		.from(".nx-team3-item-feed", { height: 0, duration: 1,   ease: "power1.out" },"< = .1")
		.from(".nx-team3-item._3", { scale: 1.4,   ease: "power1.out" })
		.from(".nx-team3-item._2", { xPercent: 100,   ease: "power1.out" },"< = .1")
		.from(".nx-team3-item._4", { xPercent: -100,   ease: "power1.out" },"< =")
		.from(".nx-team3-item._1", { xPercent: 210,   ease: "power1.out" },"< = .1")
		.from(".nx-team3-item._5", { xPercent: -210,   ease: "power1.out" },"< = ")
		.from(".nx-team3-video", { scale: 0, transformOrigin: "center center", duration: 1.5,   ease: "power1.out" },"< = 1.5")
	};

	const $section = $(".header-x-hero");
	const $target = $(".tilt_scale");

	$section.on("mousemove", function (e) {
		const offset = $section.offset();
		const width = $section.outerWidth();
		const height = $section.outerHeight();

		const x = e.pageX - offset.left;
		const y = e.pageY - offset.top;

		const rotateY = (x / width - 0.5) * 20;
		const rotateX = (y / height - 0.5) * -20;

		$target.css({
			transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) `,
		});
	});

	$section.on("mouseleave", function () {
		$target.css({
			transform:
			"perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
		});
	});


	if (window.matchMedia("(min-width: 1400px)").matches) { 
		var WHYchoose = gsap.timeline({
			scrollTrigger: {
				trigger: '.nx-hw-work3-sec',
				start: "top 0%",
				end: "top -100%",
				scrub: 3,
				markers: false,
			}

		});
		WHYchoose
		.from( ".nx-hw-work3-item._1" , {   yPercent: 100,   duration: 2, ease: "power2.out"})
		.from( ".nx-hw-work3-item._2" , {   yPercent: 200,   duration: 2, ease: "power2.out"})
		.from( ".nx-hw-work3-item._3" , {   yPercent: 300,   duration: 2, ease: "power2.out"})
		.to( ".nx-hw-work3-item._1" , {   xPercent: -105,   duration: 2, ease: "power2.out"})
		.to( ".nx-hw-work3-item._3" , {   xPercent: 105,  y: -30, duration: 2, ease: "power2.out"},"< = ")
		.to( ".nx-hw-work3-item._2" , {     y: -15, duration: 2, ease: "power2.out"},"< = ")
		.from( ".nx-hw-work3-btm" , {  opacity: 0,   y: 15, duration: 2, ease: "power2.out"},"< = ")

	};



})(jQuery);