$(document).ready(function() {

$('.readmore').on('click', function(event){
	event.preventDefault();
	$('#show-this-on-click').slideDown();
	$('.readmore').hide();
	$('.readless').show();

});
$('.readless').on('click',function(event){
	event.preventDefault();
	$('#show-this-on-click').slideUp();
	$('.readmore').show();
	$('.readless').hide();
});
$('.learnmore').on('click', function(event){
	event.preventDefault();
	$('#learnmoretext').slideDown();
	$('.learnmore').hide();
	$('.learnless').show();
});
$('.learnless').on('click',function(event){
	event.preventDefault();
	$('#learnmoretext').slideUp();
	$('.learnless').hide();
	$('.learnmore').show();

});

});