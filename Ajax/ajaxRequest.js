function fetchRandomDogImage() {

    // Initialize the Request
    var xhrRequest = new XMLHttpRequest();

    // Handle the Response
    xhrRequest.onload = function() {
        console.log(xhrRequest.response);
        var responseJSON = JSON.parse(xhrRequest.response);
        var imageUrl = responseJSON.message;
        $('#dog-image').attr('src', imageUrl);
    };
    
    // Open the Request
    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true); // true = Asynchronous Request and false = Synchronous Request

    // Make Request to the Server
    xhrRequest.send();
}

$('#fetch-dog-image-button').click(fetchRandomDogImage);