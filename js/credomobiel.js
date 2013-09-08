$(document).on( 'pageinit',function(event){
    $("input[type='radio']").on( "change", function(event, ui) {
      $('.' + $(this).attr('name')).hide();
      $('.' + $(this).attr('name') + '.' + $(this).attr('id')).show();
    });
});
/*
 following section (at least the part in the 'if') fixes flickering of page transitions on Android
 and must be imported between jQuery and jQuery Mobile
 */
$(document).bind("mobileinit", function()
{
  $.mobile.page.prototype.options.addBackBtn = true;
  $.mobile.page.prototype.options.backBtnText = "terug";
  if (navigator.userAgent.indexOf("Android") != -1)
  {
    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';
  }
});
