/* global $, window*/ // solve >>  ERROR: 'document' is not defined. [no-undef]	

var $;


$(window).on("load", function () {
	'use strict';
	$(".spinner").fadeOut(1000, function () {
		$(".overlay-screen").fadeOut(500, function () {
			$("body").css("overflow", "auto");
		});
	});
	
});