
$(function () {


           // Сортировка по категориям
          // Filter

  // В  переменную передаём массив("[]");
  let filter = $("[data-filter]");
  // Вызываем функцию Клик

  filter.on("click", function (params) {
   // Убирает стандартную работу ссылки ;
   params.preventDefault();

   // Переменная для вывода текущей категории.
    let cat = $(this).data('filter');

   // Сравниваем текущую со знащение all, если совпадает удаляем класс remove
   if( cat == "all"){
    $("[data-cat]").removeClass("hide");
   }
   else{
    // Выбираем все элементы с атрибутом  data-cat, с помощью метода each()
    $("[data-cat]").each(function () {

     // Сохраняем значение текущего элемента
     let workCat = $(this).data("cat");

     if(workCat!=cat){
      //Добавляем всем не текущем элементам класс hide
      $(this).addClass("hide");
     }
     else{
      $(this).removeClass("hide");
     }

    })
   }
  });

            // Вызов модальных окон

           // Modal

        // Сохраняем в переменной данные об кнопках

        //Открыть модальное окно
        const modalCall = $("[data-modal]");

        //Закрыть модальное окно
        const modalClose = $("[data-close]");

        const modalCloseAll = $('.modal');

        //  Функция открытия при нажатии по кнопке
        modalCall.on("click", function (params) {

                // Убирает стандартную работу ссылки ;
                params.preventDefault();

                // Сохраняем саму кнопку по которой кликнули
                let $this = $(this);

                //  Сохраняем в переменной id модального окна
                let modalId = $this.data("modal");

                // Показываем данное модальное окно
                $(modalId).addClass("show");

                //  Убирает стандартный скрол body
                $("body").addClass("no-scroll");

                // При клике по кнопке ищем модальный диалог и добавляем   ему трансформацию
                setTimeout(function () {
                        $(modalId).find(".modal__dialog").css({transform: "scale(1)"});
                }, 200);
        });


        //  Функция закрытия при нажатии по кнопке
        modalClose.on("click", function (params) {

                // Убирает стандартную работу ссылки ;
                params.preventDefault();

                // Cохраняем саму кнопку по которой кликнули
                let $this = $(this);

                //  Присваеваем переменной  свойства родителя
                let modalParent = $this.parents(".modal");


                        // При клике по кнопке ищем модальный диалог и удаляем у  него трансформацию
                modalParent.find(".modal__dialog").css({transform: "scale(0)"});


                setTimeout(function () {
                        // Удаляем класс
                        modalParent.removeClass("show");

                        //  Убирает стандартный скрол body
                        $("body").removeClass("no-scroll");
                }, 200);
        });

        // Мобильная навигация
        // Mobile nav

        const navToggle = $("#navToggle");
        const nav = $("#nav");
        navToggle.on("click", function (params) {
                params.preventDefault();
                nav.toggleClass("show");
        });

});