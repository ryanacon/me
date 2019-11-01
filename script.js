$(document).ready(()=>{
    $('#aboutme')
    $('#technology').hide()

    $(window).scroll(()=>{
        let y = window.scrollY;
        let e = $('#technology').position().top
        if(y+e > e){
            $('#technology').fadeIn('slow')
        }
        else {
            $('#technology').fadeOut('slow')
        }
    })
})