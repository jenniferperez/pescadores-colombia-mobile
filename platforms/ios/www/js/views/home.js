/*
---------------------------------------------------------------------------------------------------
									JAVASCRIPT DOCUMENTATION
---------------------------------------------------------------------------------------------------
Description:
This file contains the functions for the initial page. It's created for contain all private functions of the initial view.

Author:
Spinner Lab's Development Team.

*/

// Local Variables
var BannerResources = "http://pescadores-colombia-api.spinnerlabs.co/image";

// Functions
// This function is called when de page is loading. It's in charge of initializing the setting of the ajax called, the slider and the main properties of the page.
function initView(){
	$( document ).ajaxStart(function() {
		//Function in general_utilities.js
		buildLoaderIndicator();
	});

	$( document ).ajaxStop(function() {
		$('#loadingIndicator').remove();
	});

	$(document).ready(function(){
		loadSlider();
	});

	return false;
}

// This function do the Ajax call to the server of PescadoresColombia for obtain the images that will be load in the slider.
function loadSlider(){
    $.ajax({
		url:		BannerResources,
		type:		"GET",
        dataType:	"JSON",
		cache:		false,
		timeout:	10000,

        success: function (data, status) {
			for(var image in data){
				$('#bxslider').append("<li><img src=\"" + data[image].uri + "\" /></li>");
			}

			initializeSliderProperties();
		},

		error: function (status) {
			$('#bxslider').append("<li><img src=\"../img/logos/error_logo_1.png\" /></li>");
			$('#bxslider').append("<li><img src= \"../img/logos/principal_logo_1.png\" /></li>");

			initializeSliderProperties();
        }
	});

	return false;
}

// This function contain the slider's properties initialization. This configuration can be consulted in http://bxslider.com/
function initializeSliderProperties(){
	$(document).ready(function(){
		$('.bxslider').bxSlider({
			// General Properties
			video:					false,
			preloadImages:			'all',
			touchEnabled:			true,
			oneToOneTouch:			false,
			preventDefaultSwipeX:	false,
			preventDefaultSwipeY:	false,

			// Visual Properties
			slideMargin:			0,
			startSlide:				0,
			randomStart:			0,
			slideSelector:			'',
			captions:				false,
			adaptiveHeight:			true,
			adaptiveHeightSpeed:	500,
			responsive:				true,
			useCSS:					true,

			// Controls
			controls:				false,
			autoControls:			false,
			autoControlsCombine:	false,
			auto:					true,
			pause:					5000,
			autoStart:				true,
			autoHover:				false,
			autoDelay:				0,
			easing:					null,

			// Slider's Transitions
			infiniteLoop:			true,
			mode:					'horizontal',
			speed:					1500,
			ticker:					false,
			tickerHover:			false
		});
	});
	return false;
}
