// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

// Sorting the list

$(document).ready(function(){
$('#announcements').sortable({
axis: 'y',
dropOnEmpty: false,
handle: '.handle',
cursor: 'crosshair',
items: 'li',
opacity: 0.4,
scroll: true,
update: function(){
$.ajax({
type: 'post',
data: $('#announcements').sortable('serialize'),
dataType: 'script',
complete: function(request){
$('#announcements').effect('highlight');
},
url: '/announcements/sort'})
}
});
});