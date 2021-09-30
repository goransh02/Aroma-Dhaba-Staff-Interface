"http://192.168.0.108/get_items"
function remove(el) {
      var element = el;
      element.remove();
    }
    $('.close-div').click(function(){
      $(this).parent().parent().remove();
   });