function exitOverview() {
    document.getElementById("overview").hidden = true;
    $("#overview").html("");
}

function submit() {
    sessionStorage.title = $("#title_text").val();
    if (sessionStorage.title.length == 0) {
        $("#title_msg").html('<b style="color:red; background-color: rgb(0,0,0,.6);">INSERT A TITLE!</b>');
        return;
    }
    console.log("TITLE", sessionStorage.title);

    sessionStorage.thumbnails = $("#thumbnails_container").html();
    if (!sessionStorage.thumbnails.length == 0) {
        $("#file_msg").html('<b style="color:red; background-color: rgb(0,0,0,.6);">UPLOAD PICS!</b>');
        return;
    }
    //console.log("THUMBNAILS", sessionStorage.thumbnails);
    if (!sessionStorage.bgroundimg) {
        $("#file_bground_msg").html('<b style="color:red; background-color: rgb(0,0,0,.6);">UPLOAD PIC!</b>');
        return;
    }
    console.log("BACKGROUND IMG", sessionStorage.bgroundimg);
    console.log("FONT", sessionStorage.font);
    window.open("portfolio.html");
}