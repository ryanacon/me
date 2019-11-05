// $(document).ready(() => {


//     $(window).scroll(() => {
//         fixedNav()
//         hideDivs()
//         scrollFunction()


//     })

//     fixedNav = () => {

//         let y = window.scrollY;

//         if (y > 0) {
//             $('#navbar').addClass("sticky");
//             $('#navbar').animate({

//             }, 1000);
//         }
//         else {
//             $('#navbar').removeClass("sticky");
//             $('#navbar').removeClass("nav-color");
//         }
//     }

//     hideDivs = () => {
//         $('.hide').each(function (i) {
//             let bottom_of_object = $(this).offset().top + $(this).outerHeight();
//             let bottom_of_window = $(window).scrollTop() + $(window).height();
//             if (bottom_of_window > bottom_of_object-300) {
//                 $(this).animate({ 'opacity': '1' }, 500);

//             }
//         })
//     }

//     $('#myBtn').click(() => {
//         $('html,body').animate({
//             scrollTop: $("#aboutme").offset().top
//         }, 'slow');
//     });


// })

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

//         $('#myBtn').css({
//             opacity: '1',
//             WebkitTransition: 'opacity 500ms ease-in-out',
//             MozTransition: 'opacity 500ms ease-in-out',
//             MsTransition: 'opacity 500ms ease-in-out',
//             OTransition: 'opacity 500ms ease-in-out',
//             transition: 'opacity 500ms ease-in-out'
//         })
//     } else {
//         $('#myBtn').css({
//             opacity: '0',
//             WebkitTransition: 'opacity 500ms ease-in-out',
//             MozTransition: 'opacity 500ms ease-in-out',
//             MsTransition: 'opacity 500ms ease-in-out',
//             OTransition: 'opacity 500ms ease-in-out',
//             transition: 'opacity 500ms ease-in-out'
//         })
//     }
// }

// // When the user clicks on the button, scroll to the top of the document

// // For Chrome, Firefox, IE and Opera


