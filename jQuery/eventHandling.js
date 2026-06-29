$('#para1').css('color', 'red');
$('#para2').css('color', 'green');

$('p').css('fontSize', '30px');

$('p').css({
    fontSize: "30px",
    color: "grey"
});

$('div').css({
    height: "100px",
    width: "100px",
    backgroundColor: "cyan"
});

$('div').click(function(){
    window.alert("Div Clicked");
});

$('div').on('click', function() {
    window.alert('Div Clicked');
});

$('a').on('click', function(e) {
    e.preventDefault();
    window.alert('Anchor Tag Clicked');
});

$('div').on('click', function() {
    var element = $(this);
    element.width(element.width() + 10 + "px");
});