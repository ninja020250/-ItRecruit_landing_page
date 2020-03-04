window.onload = function(){
    var $root = $('html, body');

    $('a[href^="#"]').on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
       var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 76
        }, 800, function () {
           
        });
      } 
    });
}