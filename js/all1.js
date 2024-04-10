// 漢堡 & 手機選單
const allClos = document.querySelector('.all-clos');
const hideBox = document.querySelector('.hideBox');
allClos.addEventListener('click',function(e){
  this.classList.toggle('act');
  hideBox.classList.toggle('show');
});

//向下滾動 Ｘ Ｙ 軸會有進入進出效果
$(document).ready(function(){    

  $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    // const scrollPos = window.scrollY;
    // const windowHeight = window.innerHeight;

    // console.log(scrollPos);
    // console.log(windowHeight);

    // animated－左邊進
    $('.all-animated-s').each(function(){
      var thisPos = $(this).offset().top;
      // let thisPos = this.offsetTop;

      if((windowHeight + scrollPos) >= thisPos) {
        $(this).addClass('fadeln-s');
      }
     else if((windowHeight - scrollPos / 2) <= thisPos) {
        $(this).removeClass('fadeln-s');
      }
    });
    // animated－右邊進
    $('.all-animated-e').each(function(){
      var thisPos = $(this).offset().top;
  
      if((windowHeight + scrollPos) >= thisPos) {
        $(this).addClass('fadeln-e');
      }
      else if((windowHeight - scrollPos / 2) <= thisPos) {
        $(this).removeClass('fadeln-e');
      }
    });
    // animated－圖片反轉效果
    $('.all-animated-x').each(function(){
      var thisPos = $(this).offset().top;
  
      if((windowHeight - scrollPos / 2) <= thisPos) {
        $(this).removeClass('fadeln-x');
      }
      if((windowHeight + scrollPos) >= thisPos) {
        $(this).addClass('fadeln-x');
      }
    });
    // 導覽列效果
    $('.navbar').each(function(){
      var thisPos = $(this).offset().top;

      if((scrollPos * 2) <= thisPos) {
        $(this).removeClass('bg-white');
        $(this).removeClass('p-lg-2');
        $(this).addClass('p-lg-4');
        $(this).removeClass('shadow');
      }
      else if((windowHeight + scrollPos / 2) >= thisPos) {
        $(this).addClass('bg-white');
        $(this).removeClass('p-lg-4');
        $(this).addClass('p-lg-2');
        $(this).addClass('shadow');
      }
    });
    // 平板～手機 固定連結
    $('.flexDiv').each(function(){
      var thisPos = $(this).offset().top;

      if((windowHeight + scrollPos * 1.8) >= thisPos * 1.2){
        this.style.bottom = '0px';
      }else if((windowHeight + scrollPos * 1.8) <= thisPos * 1.2) {
        this.style.bottom = '-40px';
      }
    });
  });

});



// 錨點
$(document).ready(function ()
{
  $('.nav-link').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    var targetPos = $(target).offset().top - 100;
    $('html, body').animate({scrollTop: targetPos}, 500);
  });

  $('.back-to-top').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({scrollTop: 0} , 500);
  });
});


//核取方塊和選項按鈕 (Checks and radios) 切換 陰影 效果
$(document).ready(function ()
{
  $('.btn-test-outline-info').click(function (e) { 
    // e.preventDefault();
    $(this).toggleClass('active').parent().siblings().find('.btn-test-outline-info').removeClass('active');
  });
});
