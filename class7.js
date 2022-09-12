$(document).ready(function(){
    // $('button').on('click',function(){
    //     alert('hi saiful islam');
    // });
    // $('button').on({
    //     click : function(){
    //         console.log('welcome babu');
    //     },
    //     mouseenter : function(){
    //         console.log('mouse enter');
    //     }
    // });
    // $('.one button').click(function(){
    //     $('.one > h2').hide();
    // });
    // $('.two  button').click(function(){
    //     $('.two > h2').hide();
    // });
    //  $('  button').click(function(){
    //     $('.one > h2').hide();
    // });
    // $('.two button').on('click',function(){
    //     $('.two > h2').hide();
    // });(nicher jei function golo kora hoyeche click event ar jonno ogolote button a tader class div select kore dite hobe ta na hole oporer button sothik kaj korbe kintu nicher button a click dile dile doi div ar element hide hoye jabe)
    $('input').focus(function(){
        $(this).val('focused');
    });
    
    $('input').blur(function(){
        $(this).val('blur');
    });
    

});