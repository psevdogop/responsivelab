
function cameraON(link) {
    //$('.' + class_slide).css('background-image', 'url(' + link + ')');
    $('.camera-eye').css('background-image', 'url(' + link + ')');
    $('.camera-eye').css('background-color', '#ccc');
    $('.camera-eye').fadeIn(1000);
}

function cameraOFF() {
    $('.camera-eye').fadeOut(1000, function() {
        $('.camera-eye').css('background-image', 'none');
    });

}

function redirectPage(linkLocation) {
    window.location = linkLocation;
}
$(document).ready(function() {

    new WOW().init();


    /* Кнопка левого меню */
    menuLeft = document.getElementById('cbp-spmenu-s1');
    filter_menu = document.getElementById('mobile-filter');

    $('.filter-menu').click(function(){
        classie.toggle(this, 'active');

        classie.toggle(filter_menu, 'open');
        $('section, #logo').toggleClass('blur');
        $('body').toggleClass('overflow');
    });

    $('.btn-menu').click(function() {
        $('body').toggleClass('overflow');
        if ($(window).scrollTop() < 90) {
            $('.bmenu').toggleClass('hidden');
        }
        classie.toggle(this, 'active');
        $('.bmenu').toggleClass('zindex');
        $('.filter-menu').toggleClass('zindex2');
        classie.toggle(menuLeft, 'cbp-spmenu-open');
        $('section, #logo').toggleClass('blur');

    });

    $(window).scroll(function() {

        if ($(window).scrollTop() > 90) {
            $('.bmenu').removeClass('hidden');
        } else {
            if (!$('.btn-menu').hasClass('active')) {
                $('.bmenu').addClass('hidden');
            }
        }
    })

    /* Анимация цифр на стр 01 */
    $($('#about .counter')[0]).animate({
        num: 2.1 - 0.3 /* - начало */
    }, {
        duration: 5000,
        step: function(num) {
            this.innerHTML = (num + 0.3).toFixed(1)
        }
    });
    $($('#about .counter')[1]).animate({
        num: 39 - 3 /* - начало */
    }, {
        duration: 5000,
        step: function(num) {
            this.innerHTML = (num + 3).toFixed(0)
        }
    });
    $($('#about .counter')[2]).animate({
        num: 126 - 3 /* - начало */
    }, {
        duration: 5000,
        step: function(num) {
            this.innerHTML = (num + 3).toFixed(0)
        }
    });
    $($('#about .counter')[3]).animate({
        num: 213.1 - 3 /* - начало */
    }, {
        duration: 5000,
        step: function(num) {
            this.innerHTML = (num + 3).toFixed(1)
        }
    });
    /* Анимация цифр на стр 02 */
    $($('.feature .counter')[0]).animate({
        num: 500 - 3 /* - начало */
    }, {
        duration: 5000,
        step: function(num) {
            this.innerHTML = (num + 0.3).toFixed(1)
        }
    });
    $($('.feature .counter')[1]).animate({
        num: 195000 - 3 /* - начало */
    }, {
        duration: 5000,
        step: function(num) {
            this.innerHTML = (num + 3).toFixed(0)
        }
    });
    $($('.feature .counter')[2]).animate({
        num: 180 - 3 /* - начало */
    }, {
        duration: 5000,
        step: function(num) {
            this.innerHTML = (num + 3).toFixed(0)
        }
    });
    $($('.feature .counter')[3]).animate({
        num: 213.3 - 3 /* - начало */
    }, {
        duration: 5000,
        step: function(num) {
            this.innerHTML = (num + 3).toFixed(1)
        }
    });
    /* Анимация цифр на стр 08 */
    $($('#about-page .counter')[0]).animate({
        num: 2.1 - 0.3 /* - начало */
    }, {
        duration: 5000,
        step: function(num) {
            this.innerHTML = (num + 0.3).toFixed(1)
        }
    });
    $($('#about-page .counter')[1]).animate({
        num: 39 - 3 /* - начало */
    }, {
        duration: 5000,
        step: function(num) {
            this.innerHTML = (num + 3).toFixed(0)
        }
    });
    $($('#about-page .counter')[2]).animate({
        num: 126 - 3 /* - начало */
    }, {
        duration: 5000,
        step: function(num) {
            this.innerHTML = (num + 3).toFixed(0)
        }
    });
    $($('#about-page .counter')[3]).animate({
        num: 213.1 - 3 /* - начало */
    }, {
        duration: 5000,
        step: function(num) {
            this.innerHTML = (num + 3).toFixed(1)
        }
    });
    /* Управление каруселью 
    $('a.left.carousel-control, a.right.carousel-control').click(function(){
        console.log($($('.carousel-inner .item')[0]).hasClass('active'));
        if ($($('.carousel-inner .item')[0]).hasClass('active')!==true) {
            $('.carousel-caption').css('display','none');
            $('.carousel-caption2').css('display','block');
        } else {
            $('.carousel-caption').css('display','block');
            $('.carousel-caption2').css('display','none');
        }
    })*/



    $("body").fadeIn(2000,function(){$('.carousel').carousel();});

// pure JS
var elem = document.getElementById('mySwipe');
window.mySwipe = Swipe(elem, {
  // startSlide: 4,
  // auto: 3000,
  // continuous: true,
  // disableScroll: true,
  // stopPropagation: true,
  // callback: function(index, element) {},
  // transitionEnd: function(index, element) {}
});
$('.swipe').Swipe().data('Swipe');
// with jQuery
// window.mySwipe = $('#mySwipe').Swipe().data('Swipe');

    $("#menu-top a, .tags a, #cbp-spmenu-s1 a, #event-menu a, footer a, #project-linked a").click(function(event) {
        event.preventDefault();
        var linkLocation = this.href;
        console.log(event.type)
            //$("body").fadeOut(3000);
        $("body").fadeOut(2000, function() {
            redirectPage(linkLocation)
        });
        return false;
    });



    $('.cross .btn-close').click(function() {
        redirectPage(document.referrer);
    })

    var total_obj = 0;
    var total_obj_0 = 0;
    var origin_href = $('.obj_href').attr('href');
    var href_obj = '';
    /*$('.object').each(function(){
        total_obj_0+=parseInt($(this).attr('count'));
    })
    $('.objects-circle .count').html(total_obj_0);
    */
    $('.object').click(function() {
        $(this).toggleClass('check');

        var count_object = parseInt($(this).attr('count'));

        if ($(this).hasClass('check')) {
            total_obj += parseInt(count_object);
            // $('.objects-circle').addClass('animation');

        } else {
            total_obj -= parseInt(count_object);

            // $('.objects-circle').addClass('animation-left');
        }
        $('.objects-circle .count,#mobile-filter .count').animate({
            num: total_obj - 3 /* - начало */
        }, {
            duration: 1000,
            step: function(num) {
                this.innerHTML = (num + 3).toFixed(0)
            }
        });


        /* setTimeout(function() {
             $('.objects-circle').removeClass('animation');
             $('.objects-circle').removeClass('animation-left')
         }, 1000);*/


        // $('.objects-circle .count').html(parseInt(total_obj));
        $('.big').html(parseInt(total_obj));
        var type = 'type=0';
        var status = '&status=0';
        var place = '&place=0';
        var year = '&year=0'
        $('.check[filter-name="type"]').each(function() {
            type += ',' + $(this).attr('data-id')
        });
        $('.check[filter-name="status"]').each(function() {
            status += ',' + $(this).attr('data-id')
        });
        $('.check[filter-name="place"]').each(function() {
            place += ',' + $(this).attr('data-id')
        });
        $('.check[filter-name="year"]').each(function() {
            year += ',' + $(this).attr('data-id')
        });
        href_obj = origin_href + '?' + type + status + place + year;
        $('.obj_href').attr('href', href_obj);
        $('#view-obj').attr('href', href_obj);
        // console.log(href_obj);
    });
    $('.objects-circle').click(function() {
            window.location.href = href_obj;
        });

        /*
         Вариант с кнопками стрелок
         $(".g").jPages({
             containerID: "projects",
             perPage: 8,
             keyBrowse: true,
             first: false,
             previous: '#previous-listing',
             next: '#next-listing',
             last: false,
             links: "blank",
             scrollBrowse: false,
             animation: "fadeInRightBig"
         });*/
    wow2 = new WOW(
                      {
                      boxClass:     'wow2',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow2.init();
    var start_page = 1;
    var max_page = Math.ceil($('#projects > .tile').length / 8,1);
  
    $('.ctrl').click(function() {
        var r = $(this).attr('ribbon');
        var c = $(this).attr('collapse');

        if ($('#' + c).css('display') === 'none') {
            $('#' + c).css('display', 'block');
        } else {
            $('#' + c).css('display', 'none');
        }
      
        $('#' + c).find('.collapse').css('display', 'block');
        $(this).toggleClass('pup');
        $('#' + r).toggleClass('opened');
    });

   

    $('#production-capacity-tab li').click(function() {
        var tab_id = $(this).attr('tab-id');

        complete = function() {
            $('#' + tab_id).fadeIn('slow');
        }

        $('#production-capacity-tab li').removeClass('active');
        $(this).addClass('active');

        //$(".tab").fadeOut('fast', complete);
        $(".tab").css('display', 'none');
        $('#' + tab_id).fadeIn('slow').addClass('active');
        console.log($(this).attr('tab-id'));
        return false;
    });
 
    $('#projects').mixItUp({
        load: {
            sort: 'data-my-order:asc'
        },
        animation: {
            duration: 400,
            effects: 'fade translateZ(200px) stagger(90ms)',
            easing: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
            reverseOut: true
        },

        selectors: {
            target: '.mix'
        }
    });
});
/* Фильтр */
$('.show-filter').click(function() {
    //$('body').append('<div class="blur"></div>');

    $('section').each(function() {
        if ($(this).attr('id') !== 'filter') {
            $(this).addClass('blur');
        }
    });
    $('header').addClass('blur');
    $('.obj-totals').css('display', 'none');
    $('.hide-filter').css('display', 'block');
    $('.container.menu').css('padding-top', '80px');
    $('.container.menu').css('padding-bottom', '110px');
    $('.show-filter img').fadeOut();
    var filter_height = $('.filter-opened > .container').height() + 89 + 190;
    var screen_height = $(window).height();
    if (filter_height > screen_height) {
        filter_height = screen_height
    }
    TweenLite.to($('.filter-opened'), 0.5, {
        height: filter_height + "px",
        ease: Power1.easeOut,
        y: 0
    });
    return false;
})
$('#hide-filter').click(function() {
        $('section').removeClass('blur');
        $('header').removeClass('blur');
        $('.hide-filter').css('display', 'none');
        $('.obj-totals').css('display', 'block');
        $('.container.menu').css('padding-top', '0px');
        $('.show-filter img').fadeIn();
        $('.container.menu').css('padding-bottom', '0px');
        TweenLite.to($('.filter-opened'), 0.5, {
            height: "89px",
            ease: Power1.easeOut,
            y: 0
        });
    })
  