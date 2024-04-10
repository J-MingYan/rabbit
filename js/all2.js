// 取得小球的 DOM 元素
const Madoka = document.querySelectorAll('.Madoka');
// 取得少女後面圖檔的 DOM 元素
const helfCircle = document.querySelector('.helfCircle');

// 滑動效果
window.addEventListener('scroll', function(){
  let value = window.scrollY;
  const windowHeight = window.innerHeight;
  // console.log(value);
  // console.log(windowHeight);

  Madoka.forEach(function(itme,index){
    if(itme.classList.contains('Madoka1')){
    itme.style.transform = 'translateY( ' + (value / 6) + 'px )'; 
    }else if(itme.classList.contains('Madoka2')){
    itme.style.transform = 'translateY( ' + (value / 3.8) + 'px )';
    }else if(itme.classList.contains('Madoka3')){
    itme.style.transform = 'translateY( ' + (value / 4.8) + 'px )';
    }else if(itme.classList.contains('Madoka4')){
    itme.style.transform = 'translateY( ' + (value / 4) + 'px )';
    }else if(itme.classList.contains('Madoka5')){
    itme.style.transform = 'translateY( ' + (value / 5) + 'px )';
    }else if(itme.classList.contains('Madoka6')){
    itme.style.transform = 'translateY( ' + (value / 4) + 'px )';
    }else if(itme.classList.contains('Madoka7')){
    itme.style.transform = 'translateY( ' + (value / 6) + 'px )';
    }
  });

  helfCircle.style.transform = 'translateY( ' + (value / 5) + 'px )';

});


//64805
//https://www.922.org.tw/




// 取得影像輪播的 DOM 元素
const wrapper = document.querySelector(".wrapper2"),
      carousel = document.querySelector(".carousel"),
      images = document.querySelectorAll(".imaGes");

let imageIndex = 1, intervalId;

// 定義啟動自動影像滑桿的函數
const autoSlide = () => {
  // 每 3 秒調用一次 SlideImage() 來開始幻燈片放映
  intervalId = setInterval(() => slideImage(++imageIndex), 3000);
};
// 頁面載入時呼叫 autoSlide 函數
autoSlide();

// 更新輪播顯示以顯示指定影像的函數
const slideImage = () => {
  // 計算更新後的圖片索引
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
  //更新輪播顯示以顯示指定的影像
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// 為包裝元素新增 mouseover 事件監聽器以停止自動滑動
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// 為包裝元素添加 mouseleave 事件監聽器以再次開始自動滑動
wrapper.addEventListener("mouseleave", autoSlide);






// 聯盟品牌 輪播
let swiPer = new Swiper('.brandSwiper', {
  slidesPerView: 3,
  spaceBetween: 25,
  slidesPerGroup: 3,
  grid: {
    rows: 2,
  },
  speed:1000,
  loop: false,
  // loopFillGroupWithBlank: true,
  // centerSlid: 'true',
  // fade:'true',
  // grabCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  },
});
// 聯盟品牌 輪播， 滑入停止
let swiperContainer = document.querySelector('.brandSwiper');
swiperContainer.addEventListener('mouseenter', function () {
  swiPer.autoplay.stop();
});
swiperContainer.addEventListener('mouseleave', function () {
  swiPer.autoplay.start();
});




// 取得影像輪播的 DOM 元素
const wrapper4 = document.querySelector(".wrapper4"),
      carousel4 = document.querySelector(".carousel4"),
      images4 = document.querySelectorAll(".imaGes4");

let imageIndex4 = 1, intervalId4;

// 定義啟動自動影像滑桿的函數
const autoSlide4 = () => {
  // 每 3 秒調用一次 SlideImage() 來開始幻燈片放映
  intervalId4 = setInterval(() => slideImage4(++imageIndex4), 3000);
};
// 頁面載入時呼叫 autoSlide 函數
autoSlide4();

// 更新輪播顯示以顯示指定影像的函數
const slideImage4 = () => {
  // 計算更新後的圖片索引
  imageIndex4 = imageIndex4 === images4.length ? 0 : imageIndex4 < 0 ? images4.length - 1 : imageIndex4;
  //更新輪播顯示以顯示指定的影像
  carousel4.style.transform = `translate(-${imageIndex4 * 100}%)`;
};

// 為包裝元素新增 mouseover 事件監聽器以停止自動滑動
wrapper4.addEventListener("mouseover", () => clearInterval(intervalId4));
// 為包裝元素添加 mouseleave 事件監聽器以再次開始自動滑動
wrapper4.addEventListener("mouseleave", autoSlide4);





// 品牌、合作、種類 的 數字效果
$(document).ready(function(){
  $('.counter').counterUp({
    delay: 12,
    // time: 1200,
  });
});




// 回到頂部
const btnTop = document.querySelector('.goTop');
btnTop.addEventListener('click', function(e){
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});




// 手機裡下拉選單
const btnSubmenuPhone = document.getElementById('btnSubmenuPhone');
const submenuPhone = document.querySelector('.submenuPhone');
btnSubmenuPhone.addEventListener('click', function(e){
  e.preventDefault();
  submenuPhone.classList.toggle('submenuShow');
});