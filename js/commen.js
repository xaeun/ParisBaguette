// commen.js


// 헤더 고정
$(window).scroll(function(){
    if ($(window).scrollTop() > 750){
        $('#head').slideUp();
        $('#asidemenu .active').show();
    } else{
        $('#head').slideDown();
        $('#asidemenu .active').hide();
    }
})

// 
$('#asidemenu .active').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop : 0
    })
})

// * 상품안내
$('.item_list').mouseover(
    function(){
        $('.h_item_list').stop().slideDown();
    }
).mouseout(
    function(){
        $('.h_item_list').stop().slideUp();
    }
) 

//  * 검색영역
$('.search').click(function(e){
    e.preventDefault();
    $('.h_search').show();
})
$('.h_search button').click(function(){
    $('.h_search').hide();
})


//  * 푸터 - 인스타
$('.f_img').slick({
    slidesToShow : 6,
    sildesToScroll : 6,
    centerPadding: 0
});