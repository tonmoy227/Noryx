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


	$('.marquee-right2').marquee({
		gap: 0,
		speed: 40,
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
					opacity: .5,
					color: "#000000",
					y: "-3",
				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 92%",
					end: "top 60%",
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


	const items = document.querySelectorAll(".nx-ab1-count-item");

	items.forEach(item => {
		const heading = item.querySelector(".item-bottom h3");
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



	if (window.matchMedia("(min-width: 1600px)").matches) {
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
		.from( ".nx-pro2-item:nth-child(1)" , {x: 0,y: -800,rotate: -8, scale: 0.65, duration: 3, ease: "power1.out" })
		.from( ".nx-pro2-item:nth-child(2)" , {x: -692,y: -790,rotate: 8, scale: 0.65, duration: 3, ease: "power1.out" },"<=")
		.from( ".nx-pro2-item:nth-child(3)" , {x: 0,y: -1318,rotate: -4, scale: 0.65, duration: 3, ease: "power1.out" },"<=")
		.from( ".nx-pro2-item:nth-child(4)" , {x: -692,y: -1318,rotate: 4, scale: 0.65, duration: 3, ease: "power1.out" },"<=")
		.from( ".nx-pro2-item:nth-child(1) .item-text" , {opacity: 0, ease: "power1.out" })
		.from( ".nx-pro2-item:nth-child(2) .item-text" , {opacity: 0, ease: "power1.out" })
		.from( ".nx-pro2-item:nth-child(3) .item-text" , {opacity: 0, ease: "power1.out" })
		.from( ".nx-pro2-item:nth-child(4) .item-text" , {opacity: 0, ease: "power1.out" })

	}


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



})(jQuery);