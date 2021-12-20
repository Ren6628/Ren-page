$(function () {
    $('.burger-btn').on('click', function () {
    $('.burger-btn').toggleClass('close');
    $('.header-right').toggleClass('slide-in');
    $('.welcome').toggleClass('slide-in');
    });
    $('body').toggleClass('noscroll');
});
