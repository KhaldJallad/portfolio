$(document).ready(function(){
AOS.init();
$(".navItem").on('click', function(){
let navItem = $(this).attr('id');
$(".navItem").attr('class', "navItem nav-link text-light");
$("#"+navItem).attr('class', 'active navItem nav-link text-light');
});

var sectionIds = $('a.nav-link');
$(document).scroll(function(){
sectionIds.each(function(){

var container = $(this).attr('href');

if(scrollPosition < containerBottom - 20 && scrollPosition>= containerOffset - 20){
    $(this).addClass('active');
    } else{
    $(this).removeClass('active');
    }


    });
    });




    })
