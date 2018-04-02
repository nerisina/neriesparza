// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-58722976-1', 'auto');
ga('send', 'pageview');

// Go to work
$( ".ne-go-to-work a" ).click(function() {
  $('html, body').animate({
    scrollTop: $(".ne-work").offset().top
  }, 1000);
});

//Go to Skills
$( ".ne-go-to-skills a" ).click(function() {
  $('html, body').animate({
    scrollTop: $(".ne-skills").offset().top
  }, 1000);
});

// Tabs Work
$(function() {
  $( "#ne-vs-container" ).tabs();
});

// Accordion for mobile
$(function() {
  $( ".accordion" ).accordion();
});
// Go to top
// browser window scroll (in pixels) after which the "back to top" link is shown
var offset = 800,
  //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offset_opacity = 15000,
  //duration of the top scrolling animation (in ms)
  scroll_top_duration = 700,
  //grab the "back to top" link
  $back_to_top = $('.ne-top');

//hide or show the "back to top" link
$(window).scroll(function(){
  ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('ne-is-visible') : $back_to_top.removeClass('ne-is-visible ne-fade-out');
  if( $(this).scrollTop() > offset_opacity ) {
    $back_to_top.addClass('ne-fade-out');
  }
});

//smooth scroll to top
$back_to_top.on('click', function(event){
  event.preventDefault();
  $('body,html').animate({
    scrollTop: $(".site-wrapper").offset().top
    }, scroll_top_duration
  );
});
