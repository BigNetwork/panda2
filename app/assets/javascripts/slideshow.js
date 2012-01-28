/*
# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

#$ ->
#	setTimeout ( -> $.getJSON '/slideshow/next.json?id=1'
#		success: (data) ->
#			$('.announcement').text data.name ), 3000

*/

$(function(){
	setInterval(function(){
		previous_id = $('.announcement')[0].id;

		$.getJSON('/slideshow/next.json?id=' + previous_id, {

		}, function (data) {
			$('.announcement').text(data.name);
			$('.announcement')[0].id = data.id;
		});
	}, 3000);
});