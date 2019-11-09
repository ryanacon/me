$(document).ready(() => {


    $(window).scroll(() => {
        fixedNav()
        hideDivs()
        scrollFunction()


    })

    fixedNav = () => {

        let y = window.scrollY;

        if (y > 100) {
            $('#navbar').addClass("sticky");
        }
        else {
            $('#navbar').removeClass("sticky");
        }
    }

    hideDivs = () => {
        $('.hide').each(function (i) {
            let bottom_of_object = $(this).offset().top + $(this).outerHeight();
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object - 300) {
                $(this).animate({ 'opacity': '1' }, 500);

            }
        })
    }

    $('#btnGoTo').click(() => {
        $('html,body').animate({
            scrollTop: $("#aboutme").offset().top
        }, 'slow');
    });


})

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        $('#btnGoTo').css({
            opacity: '1',
            WebkitTransition: 'opacity 500ms ease-in-out',
            MozTransition: 'opacity 500ms ease-in-out',
            MsTransition: 'opacity 500ms ease-in-out',
            OTransition: 'opacity 500ms ease-in-out',
            transition: 'opacity 500ms ease-in-out'
        })
    } else {
        $('#btnGoTo').css({
            opacity: '0',
            WebkitTransition: 'opacity 500ms ease-in-out',
            MozTransition: 'opacity 500ms ease-in-out',
            MsTransition: 'opacity 500ms ease-in-out',
            OTransition: 'opacity 500ms ease-in-out',
            transition: 'opacity 500ms ease-in-out'
        })
    }
}


