$('document').ready(function(){
    $('section img').hover(function(){
    var src = $(this).attr('src');
    var altSrc = $(this).attr('data-alt-src');
    
    $(this).attr('src', altSrc);
    $(this).attr('data-alt-src', src);
 });
});





