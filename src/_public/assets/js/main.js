$(document).ready(function () {
    AOS.init();

    $(".c-mainvisual__slider").slick({
        speed: 1100,
        infinite: true,
        autoplay: true,
        cssEase: "eas-in-out",
        arrows: false,
        fade: true,
    });

    $(window)
    .scroll(function () {
      var scrollDistance = $(window).scrollTop();
      $('.is-scrollsection').each(function (i) {
        if ($(this).position().top <= scrollDistance + 250) {
          $(".c-nav__item.is-active").removeClass("is-active");
          $(".c-nav__item").eq(i).addClass("is-active");
        }
      });
    })
    .scroll();

    function closeModal(e) {
        if ($(e.target).is(".c-imgmodal") || $(e.target).is(".c-messagemodal")) {
            $(this).removeClass("is-show");
            $("body").removeClass("u-modal__unscroll");
            $(".c-messagemodal__group").removeClass("is-show");
        }
    }

    $(".c-modal").click(closeModal);

    $(".c-work02__itemimage").click(function () {
        var imageUrl = $(this).attr("data-img-url");
        $(".c-imgmodal .c-imgmodal__imgblock img").attr("src", imageUrl);
        $("body").addClass("u-modal__unscroll");
        $(".c-imgmodal").addClass("is-show");

    });
    $(".c-interview__item").click(function () {
        var modalId = $(this).attr("data-modal-id");
        console.log(modalId);
        $(`#${modalId}`).addClass("is-show");
        $("body").addClass("u-modal__unscroll");
        $(".c-messagemodal").addClass("is-show");

    });
    $(".c-modal .c-btn__modal ").click(function () {
        $("body").removeClass("u-modal__unscroll");
        $(".c-modal").removeClass("is-show");
        $(".c-messagemodal__group").removeClass("is-show");
    });

    $(".c-recruit__headertitle").click(function () {
        $(".c-recruit__headertitle").each(function () {
            $(this).removeClass("is-active");
        });
        $(this).addClass("is-active");

        if ($(this).hasClass("c-bg__blue") === true) {
            $(".is-bg__gray").removeClass("is-show");
            $(".is-bg__bule").addClass("is-show");
            $("body").removeClass("is-show__bggray");
        } else {
            $(".is-bg__bule").removeClass("is-show");
            $(".is-bg__gray").addClass("is-show");
            $("body").addClass("is-show__bggray");
        }
    });
    $(".c-header__menuicon").click(function () {
        if ( $("body").hasClass("is-shownavmb")){
            $("body").removeClass("is-shownavmb");
        }else{
            $("body").addClass("is-shownavmb");
        } 
    });
    $(".c-navmb .c-navmb__item").click(function () {
        $('body').removeClass('is-shownavmb')
    });
    $(".c-navmb .c-header__btnmb").click(function () {
        $('body').removeClass('is-shownavmb')
    });

    // $(window)
    // .scroll(function () {
    //   var scrollDistance = $(window).scrollTop();
    //   $('.is-scrollsection').each(function (i) {
    //     if ($(this).position().top <= scrollDistance + 250) {
    //       $(".c-navmb .c-navmb__item.is-active").removeClass("is-active");
    //       $(".c-navmb .c-navmb__item").eq(i).addClass("is-active");
    //     }
    //   });
    // })
    // .scroll();
});