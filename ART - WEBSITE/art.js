function exitOverview() {
    document.getElementById("overview").hidden = true;
    $("#overview").html("");
}

function submit() {
    $("#title_msg").html('');
    $("#file_msg").html('');
    if ($("#file_bground_msg").html().includes("UPLOAD PIC!"))
        $("#file_bground_msg").html('');

    var failed = false;

    sessionStorage.title = $("#title_text").val();
    console.log("TITLE", sessionStorage.title);
    if (sessionStorage.title.length == 0) {
        $("#title_msg").html('<b style="color:red; background-color: rgb(0,0,0,.6);">INSERT A TITLE!</b>');
        failed = true;
    }

     console.log("BACKGROUND IMG", sessionStorage.bgroundimg);
    if (!sessionStorage.bgroundimg.includes("image")) {
        $("#file_bground_msg").html('<b style="color:red; background-color: rgb(0,0,0,.6);">UPLOAD PIC!</b>');
        failed = true;
    }

    sessionStorage.thumbnails = $("#thumbnails_container").html();
    console.log("sessionStorage.thumbnails ", sessionStorage.thumbnails );
    if (!sessionStorage.thumbnails.includes("image")) {
        $("#file_msg").html('<b style="color:red; background-color: rgb(0,0,0,.6);">UPLOAD PICS!</b>');
        failed = true;
    }
    //console.log("THUMBNAILS", sessionStorage.thumbnails);

    console.log("FONT", sessionStorage.font);

    if (failed == true)
        return;
    else
        window.open("portfolio.html");
}