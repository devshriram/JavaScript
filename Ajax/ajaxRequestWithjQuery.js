function fetchRandomDogImage() {

    // Method - 1
    $.ajax({
        url: 'https://dog.ceo/api/breeds/image/random',
        method: 'GET',
        success: function(data) {
            var imageUrl = data.message;
            $('#dog-image').attr('src', imageUrl);
        }
    });

    // Method - 2
    $.get('https://dog.ceo/api/breeds/image/random', function(data){
        var imageUrl = data.message;
        $('#dog-image').attr('src', imageUrl);
    });
}

$('#fetch-dog-image-button').click(fetchRandomDogImage);