var cnt = 0;

$('#outer').css({
    height: "15px",
    width: "100px",
    border: "1px solid black",
    borderRadius: "8px",
    margin: "auto",
    marginTop: "100px",
    backgroundColor: "white"
});

$('#inner').css({
    height: "85%",
    width: "13%",
    border: "1px solid black",
    borderRadius: "8px",
    backgroundColor: "black",
    margin: "0.6px",
});

$('#text').css({
    textAlign: "center",
    fontSize: "42px",
    marginTop: "50px",
    fontWeight: "1000",
});

$('#inner').on('click', function() {
    var ele = $(this);
    if(cnt%2==0) {
    ele.css({
        marginLeft: "85%"
    });
    cnt++;
    $('body').css({
        backgroundColor: "black",
    });
    $('#text').css({
        color: "white"
    });
} else {
    ele.css({
        marginLeft: "0.6px"
    });
    cnt++;
    $('body').css({
        backgroundColor: "white",
    });
    $('#text').css({
        color: "black"
    });
}
});