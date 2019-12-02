$('.open-image').on('click', function(){
    $(this).toggleClass('open-image-active');
})

$('.menu-button').on('click', function(){
    $('.main').toggleClass('main--nav-active');
})

$('.nav a, .main--nav-active').on('click', function(){
    $('.main').removeClass('main--nav-active');
})