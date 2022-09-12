$(document).ready(function(){
    $('[class="married"]').click(function(){
        $('[class="show"]').show();
    });
    $('[class="single"]').click(function(){
        $('[class="show"]').hide();
    });
});