$(document).ready(function () {



function checkHeader(){
    let userScroll = $(window).scrollTop();
    if(userScroll > 100){
        $('header').addClass('active');
    }else{
        $('header').removeClass('active');
    }
}

    checkHeader();
    $(window).scroll(function(){
        checkHeader();
        
        
    });



if($('.team-slider').length > 0){
    $('.team-slider').owlCarousel({
        margin: 10,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                margin:0
            },
             500:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });
}


if($('.portfolio-slider').length > 0){
    $('.portfolio-slider').owlCarousel({
        margin: 24,
        responsive:{
            0:{
                items:1,
                margin:0
            },
             500:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });
}


if($('.testimonials-slider').length > 0){
    $('.testimonials-slider').owlCarousel({
        margin: 0,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
        items:1
    });
}


if($('.counter').length > 0){
    $('.counter').counterUp({
    time: 1000
});
}


// animation start
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 50) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });
    }



    animation();
    $(window).scroll(function () {
        animation();
    });
// animation end







// validacija forme

    if ($('.subscribe-form').length > 0) {
        $(function () {
            $(".subscribe-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                    $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                    $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
                },
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    name: {
                        required: 'Name* is required field!!!'
                    },
                    email: {
                        required: 'Email* is required field!!!',
                        email: 'Please insert valid Email address!!!'
                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });
    }//Form Validation





});
