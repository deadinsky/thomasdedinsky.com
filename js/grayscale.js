var pages = {"home": "a", "work": "b", "projects": "c", "volunteer": "d", "articles": "e", "awards": "f"};
var links = {"github": "https://github.com/deadinsky", "linkedin": "https://www.linkedin.com/in/dedinsky", "resume": "http://thomasdedinsky.com/docs/Resume.pdf"}

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    window.scrollTo(0, 0);
    //var ismobile = / mobile/i.test(navigator.userAgent);
    var halves = location.href.split('#');
    var url = halves[0];
    var hash = halves[1];
    if (hash in links) {
      window.location.replace(links[hash]);
    }
    else if (hash in pages) {
      $("#" + pages[hash]).show();
    }
    else {
      $("#a").show();
    }
});

$("#s-a").click(function(){
  $(".dynamic-content").hide();
  window.scrollTo(0, 0);
  $("#a").show();
});

$("#s-b").click(function(){
  $(".dynamic-content").hide();
  window.scrollTo(0, 0);
  $("#b").show();
});

$("#s-c").click(function(){
  $(".dynamic-content").hide();
  window.scrollTo(0, 0);
  $("#c").show();
});

$("#s-d").click(function(){
  $(".dynamic-content").hide();
  window.scrollTo(0, 0);
  $("#d").show();
});

$("#s-e").click(function(){
  $(".dynamic-content").hide();
  window.scrollTo(0, 0);
  $("#e").show();
});

$("#s-f").click(function(){
  $(".dynamic-content").hide();
  window.scrollTo(0, 0);
  $("#f").show();
});

$("#s-g").click(function(){
  $(".dynamic-content").hide();
  window.scrollTo(0, 0);
  $("#g").show();
});

$("#l-a").click(function(){
  $(".dynamic-content").hide();
  window.scrollTo(0, 0);
  $("#a").show();
  document.getElementsByClassName('navbar-toggle')[0].click();
});

$("#l-b").click(function(){
  $(".dynamic-content").hide();
  window.scrollTo(0, 0);
  $("#b").show();
  document.getElementsByClassName('navbar-toggle')[0].click();
});

$("#l-c").click(function(){
  $(".dynamic-content").hide();
  window.scrollTo(0, 0);
  $("#c").show();
  document.getElementsByClassName('navbar-toggle')[0].click();
});

$("#l-d").click(function(){
  $(".dynamic-content").hide();
  window.scrollTo(0, 0);
  $("#d").show();
  document.getElementsByClassName('navbar-toggle')[0].click();
});

$("#l-e").click(function(){
  $(".dynamic-content").hide();
  window.scrollTo(0, 0);
  $("#e").show();
  document.getElementsByClassName('navbar-toggle')[0].click();
});

$("#l-f").click(function(){
  $(".dynamic-content").hide();
  window.scrollTo(0, 0);
  $("#f").show();
  document.getElementsByClassName('navbar-toggle')[0].click();
});

$("#l-g").click(function(){
  $(".dynamic-content").hide();
  window.scrollTo(0, 0);
  $("#g").show();
  document.getElementsByClassName('navbar-toggle')[0].click();
});