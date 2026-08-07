function fetchRandomDogImage() {

    // Initialize the HTTP Request
    var xhrRequest = new XMLHttpRequest();

    // Open the connection with Server
    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);

    // Send the Request to the Server
    xhrRequest.send();

    // Handle the Request from the Server
    xhrRequest.onload = function() {
        var responseJSON = JSON.parse(xhrRequest.response);
        var imageUrl = responseJSON.message;
        $('#dog-image').attr('src', imageUrl);

        // Handle the Error
        xhrRequest.onerror = function() {
            console.log('Request Failed');
        };
    }

    // Method - 1
    $.ajax({
        url: 'https://dog.ceo/api/breeds/image/random',
        method: 'GET',
        success: function(data) {
            var imageUrl = data.message;
            $('#dog-image').attr('src', imageUrl);
        },
    }).fail(function() {
        console.log('error');
    });

    // Method - 2
    $.get('https://dog.ceo/api/breeds/image/random', function(data) {
        var imageUrl = data.message;
        $('#dog-image').attr('src', imageUrl);
    }).fail(function(xhr, textStatus, errorThrown) {
        console.log("Request Failed");
    });
};

$('#fetch-dog-image-button').click(fetchRandomDogImage);
