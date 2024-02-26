//style.js

// * 탑배너 
$('#topBn').slick({
    slidesToShow : 3,
    sildesToScroll : 1,
    centerMode : true,
    centerPadding: 0,
    dots : true
});

// * 팝업
$(window).scroll(function(){
    if ($(window).scrollTop() > 750){
        $('.pp_photo , .pp_close button').css({
            marginTop : '-110px',
            transition : '0.5s'
        });
    } else{
        $('.pp_photo , .pp_close button').css({
            marginTop : '0',
            transition : '0.5s'
        });
    }
})

$('.pp_close button').click(function(){
    $(this).parents('.popup').hide();
})


// * 제품 탭
$('.list p').click(function(e){
    e.preventDefault
    let idx = $(this).index();
    $('.list p').removeClass('active');
    $('.m1_list .m1').removeClass('view');
    $(this).addClass('active');
    $('.m1_list .m1').eq(idx).addClass('view');
})


