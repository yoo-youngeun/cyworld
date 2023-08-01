$(function() {
    $("#menu_home").addClass("active");

    $(".menu").on("click", function(){
        $(".menu").removeClass("active");
        let id=$(this).attr("id");
        
        $("#" + id + "").addClass("active");
        let url = "./" + $(this).attr("id").substr(5) + ".html";
        $("#contentWrap iframe").attr("src", url);
    })
})