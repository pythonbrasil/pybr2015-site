$(function(){
  activePage();

  function activePage(){
    dataPage = $(".menu .item");

    $.each(dataPage, function(index, value){
      if($(this).attr("href") === window.location.pathname) {
        $(".menu .item").removeClass("active");
        $(this).addClass("active");

        $(this).on("click", function(e){
          e.preventDefault();
        });
      }
    });
  }
})
