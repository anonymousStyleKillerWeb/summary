$(function(){

 // Fixed header

 // Создаём переменную для хедера
 let header = $("#header");
  // Создаём переменную для интро
 let intro = $("#intro");
 // Берём высоту блока интро
 let introH = intro.height();//650px
  // Создаём переменную для полной высты(с padding)
    // Помещаем в  переменную полную выоту блока inner
 let introInnerH  =intro.innerHeight();;//750px
//  Узнаём текущуюю скрол позицию
 let scrollPos = $(window).scrollTop();

 // Вызываем функцию скрола станицы
 // передаем параметры 
 Scroll(scrollPos, introInnerH);


 // На window создаём собитие на скрол, загрузку окна, и изм. ширины
 $(window).on("scroll  resize", function () {
  // Помещаем в  переменную позицию скрола (от верха) текущего окна
  scrollPos = $(this).scrollTop();
  // Сравниваем текущую позицию и высоту innerа
  Scroll(scrollPos, introInnerH);
 });

// Создаем функцию Скрола
 function Scroll(scrollPos, introInnerH){
  if(scrollPos > introInnerH){
   // Добавляем headr class fixed
   header.addClass("fixed");
  }
  else
  {
   // Удаляем у headr class fixed
   header.removeClass("fixed");
  }
 }

 let nav = $("#nav");
 let navToogle = $("#navToogle");

 // Fixed scroll
 $("[data-scroll]").on("click", function (event) {
   event.preventDefault();

   let elementId = $(this).data("scroll");
   let elementOffSet = $(elementId).offset().top;
   nav.removeClass("show");
   $("html, body").animate({
    scrollTop: elementOffSet - 100
   }, 700)
 })

  // Nav Toogle
  $(navToogle).on("click", function name(params) {
   params.preventDefault();
   nav.toggleClass("show");
  })

  // Reviews: https://kenwheeler.github.io/slick/
  let slider = $("#reviewsSlider");

  slider.slick({
   // Безконечный показ слайдов
   infinite: true,
   // Количество слайдов
   slidesToShow: 1,
   // Количество скролов
   slidesToScroll: 1,
   // Для того что б один пропадал, а другой появлялся на его месте
   fade:true,
   arrows: false,
   dots: true

 });
});