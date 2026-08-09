function fetchRandomDogImage() {

    // Get the Selected Breed
    var selectedValue = $('#breed_selected').val();
    
    // Initialize the HTTP Request
    var xhrRequest = new XMLHttpRequest();

    // Open the Connection with Server
    xhrRequest.open('GET', `https://dog.ceo/api/breed/${selectedValue}/images/random`, true);

    // Makes the Request to the Server
    xhrRequest.send();

    // Handle the Response from the Server
    xhrRequest.onload = function() {
        var responseJSON = JSON.parse(xhrRequest.response);
        var imageUrl = responseJSON.message;
        $('#dog-image').attr('src', imageUrl);
    };

    // Hanlde the Error
    xhrRequest.onerror = function() {
        console.log("Request Failed");
    };
};

$('#get-dog-image-button').click(fetchRandomDogImage);

$('#next-image-button').click(function() {

    var selectedValue = $('#breed_selected').val();

    $.get(`https://dog.ceo/api/breed/${selectedValue}/images/random`, function(data) {
        var imageUrl = data.message;
        $('#dog-image').attr('src', imageUrl);
    });
});
