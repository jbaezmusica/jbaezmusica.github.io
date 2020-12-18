function exitOverview() {
    document.getElementById("overview").hidden = true;
    $("#overview").html("");
}

function submit() {
    sessionStorage.title = $("#title_text").val();
    if (!sessionStorage.title) {
        $("#title_msg").html('<b style="color:red; background-color: rgb(0,0,0,.6);">INSERT A TITLE!</b>');
        return;
    }
    console.log("TITLE", sessionStorage.title);

    if (!sessionStorage.thumbnails) {
        $("#file_msg").html('<b style="color:red; background-color: rgb(0,0,0,.6);">UPLOAD PICS!</b>');
        return;
    }
    sessionStorage.thumbnails = $("#thumbnails_container").html();
    //console.log("THUMBNAILS", sessionStorage.thumbnails);
    if (!sessionStorage.bgroundimg) {
        $("#file_bground_msg").html('<b style="color:red; background-color: rgb(0,0,0,.6);">UPLOAD PIC!</b>');
        return;
    }
    console.log("BACKGROUND IMG", sessionStorage.bgroundimg);
    console.log("FONT", sessionStorage.font);
    window.open("portfolio.html");
}