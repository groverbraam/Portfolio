// console.log("corgi carousel connected to app.js!");
// $(() => {
// });
$( "#dayNight-outline" ).on("click", function() {
            if( $("body").hasClass("dark-mode")) {
                $("body").removeClass("dark-mode");
                $("#dayNight-outline").removeAttr("name");
                $("#dayNight-outline").attr("name", "moon-outline");
            } else {
                $("body").addClass("dark-mode");
                $("#dayNight-outline").removeAttr("name");
                $("#dayNight-outline").attr("name", "sunny-outline");
            }
});
