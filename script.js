// $(document).ready(() => {
//     $('#aboutme')
//     $('#intro').css({opacity: 0})
//     $('#technology').css({opacity: 0})

//     $(window).scroll(() => {
//         hideAndShowElements()
//         fixedNav()
//     })

//     fixedNav = () =>{
//         let y = window.scrollY;
//         if(y>0){
//             $('#navbar').addClass("sticky");
//             $('#navbar').animate({
                
//             },1000);
//         }
//         else {
//             $('#navbar').removeClass("sticky");
//             $('#navbar').removeClass("nav-color");
//         }
//     }

//     hideAndShowElements = () => {

//         let scrolledwin = window.scrollY;
//         let introsection = $('#intro').position().top;
//         let technosection = $('#technology').position().top;
        
       
//        console.log(technosection)
//         // console.log(scrolledwin + technosection)
//         // console.log(introsection)
//         // console.log(scrolledwin)
//         console.log(scrolledwin)

//         if (scrolledwin + introsection > introsection) {
//         $('#intro').css({opacity: 1})
//         } 
//         if(scrolledwin + technosection > technosection){
//             $('#technology').css({opacity: 1})
//         }
       
       
        

//     }

// })