$(document).ready(function(){
    $('button').click(function(){
        $('p[class!="one"]').remove();
        $('h1[class!="hello"]').remove();
    });
   
});