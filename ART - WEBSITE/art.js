function exitOverview() {
    document.getElementById("overview").hidden = true;
    $("#overview").html("");
}

function submit() {
    if (!sessionStorage.title) {
        $("#title_msg").html('<b style="color:red; background-color: rgb(0,0,0,.6);">INSERT A TITLE!</b>');
        return;
    }
    sessionStorage.title = $("#title_text").val();
    console.log("TITLE", sessionStorage.title);

    if (!sessionStorage.thumbnails) {
        $("#file_msg").html('<b style="color:red; background-color: rgb(0,0,0,.6);">UPLOAD PICS!</b>');
        return;
    }
    sessionStorage.thumbnails = $("#thumbnails_container").html();
    //console.log("THUMBNAILS", sessionStorage.thumbnails);
    console.log("BACKGROUND IMG", sessionStorage.bgroundimg);
    console.log("FONT", sessionStorage.font);
    window.open("portfolio.html");
}