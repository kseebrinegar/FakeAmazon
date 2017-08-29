$(document).ready(function() {
	var sideBarListItems = $('#side-bar-nav ul li');
	var dropDownArrow = $('#arrow-click');
	var userDropDown = $('#user-dropdown');
	var hamburgerIcon = $('.hamburger-icon');
	var sideBarNav = $('#side-bar-nav');
	var productImages = $('figcaption');
	var hotDeals = $('#hotdeals');
	var hotDealsfirstDropDown = $('#amazing-hot-deals-dropdown');
	var sliderCircle = $('#slider-circle-selector');
	var cancelHotDeals  = $('#cancel-amazing-hot-deals');
	var savePreferences = $('#save-preferences-button');
	var slider = $('#slider');
	var showMeItems = $('.show-me');
	var sliderOptions = $('.slider-options');
	var letUserKnowPre = $('#let-user-know-prefrences');
	var recentlyViewedButtons = $('#recently-viewed-buttons p');
	var mainSection = $('.main-content');
	var delay_time = 0;
	var opacity = .1;
	var positionOfClick;
	var sliderCircleCurrentPosition;
	var clickedElementSlider;

	productImages.each(function() {
    $(this).delay(delay_time).animate(
    	{
    		marginTop: "0px",
    		opacity: '+=' + 1
    	}, 1000,
    		function() {
    			productImages.fadeIn(1000);
    		}
    	);
    	delay_time += 100;
	});


	sideBarListItems.hover(function() {
		$(this).css({'background': 'rgb(26, 30, 34)'});
	}, function() {
		$(this).css({'background': 'none'});
	});


	dropDownArrow.on('click', function() {
		userDropDown.toggleClass('hide');
	});


	hamburgerIcon.on('click', function(){
		if (sideBarNav.css('display') === 'none') {
			sideBarNav.css({'display': 'block'});
			mainSection.css({'display': 'none'});
		} else {
			sideBarNav.css({'display': 'none'});
			mainSection.css({'display': 'block'});
		}
	});

	
	$(window).on('resize', function() {
		var width = $(window).innerWidth();

		if (clickedElementSlider != undefined) {
			positionOfClick = clickedElementSlider.css('left');
		}
		
		if (width >= 796) {
			sideBarNav.css({'display': 'block'});
		} else {
			sideBarNav.css({'display': 'none'});
		}
		
		sliderCircle.css({'left': positionOfClick});
	});

	
	var fontsize = function () {
    	var fontSize = $(".caption-para").width() * 0.08;
		
		if (fontSize < '13') {
    		var fontSize = $('.caption-para').width() * 0.075;
    	} 

    	$('.caption-para').css('font-size', fontSize);
	};

	$(window).resize(fontsize);
	$(document).ready(fontsize);


	hotDeals.on('click', function() {
		hotDealsfirstDropDown.slideDown(500);
		hotDealsfirstDropDown.removeClass('hide');
	});


	showMeItems.on('click', function() {

		if (!$(this).hasClass('active-show-me')) {

			showMeItems.each(function() {
				if ($(this).hasClass('active-show-me')) {
					$(this).removeClass('active-show-me');
				}
			});

			$(this).addClass('active-show-me');
			slider.slideDown(500);
			slider.removeClass('hide');
		}
	});


	sliderOptions.on('click', function() {
		clickedElementSlider = $(this);
		positionOfClick = clickedElementSlider.css('left');
		sliderCircle.css({'left': positionOfClick});
		
	});


	cancelHotDeals.on('click', function() {
		closeSlider();

	});


	savePreferences.on('click', function() {
		closeSlider();
	});


	recentlyViewedButtons.on('click', function() {
		
		recentlyViewedButtons.each(function() {
			$(this).removeClass('recently-viewed-active');
		});

		$(this).addClass('recently-viewed-active');
		
	});



	function closeSlider() {
		slider.slideUp(500);
		hotDealsfirstDropDown.slideUp(500);

		letUserKnowPre.delay(500).slideDown(500);
		letUserKnowPre.delay(500).slideUp(500);
		

	};


});

