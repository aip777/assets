$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

function mySearchFunction() {
    var x = document.getElementById("searchDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

$(document).ready(function(){
    $('#nav-icon0,#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
    });
});