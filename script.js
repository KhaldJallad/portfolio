$(document).ready(function(){
    $(".navItem").on('click', function(){
        let navItem = $(this).attr('id');
        $(".navItem").attr('class', "navItem nav-link text-light");
        $("#"+navItem).attr('class', 'active navItem nav-link text-light');
    });

})
