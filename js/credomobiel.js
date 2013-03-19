$(document).bind("mobileinit", function() {
    $.mobile.page.prototype.options.addBackBtn = true;
    $.mobile.page.prototype.options.backBtnText = "terug";
});    

$(document).on( 'pageinit',function(event){
    $("input[type='radio']").on( "change", function(event, ui) {
      $('.' + $(this).attr('name')).hide();
      $('.' + $(this).attr('name') + '.' + $(this).attr('id')).show();
    });
});