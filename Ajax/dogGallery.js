// Get all the Breed Options in the Dropdown List
$.get('https://dog.ceo/api/breeds/list/all', function(data) {
    for (let breed in data.message) {
    var newOption = $('<option>');
    newOption.text(breed);
    newOption.val(breed);
    $('#breed_selected').append(newOption);
    }
});

function fetchDogImage() {

    // Clear the Image Container
    $('#image-container').empty();

    // Get the Selected Breed value
    var breedValue = $('#breed_selected').val();

    // Call the API to get the Image
    $.get(`https://dog.ceo/api/breed/${breedValue}/images`, function(data) {
        var imagesUrl = data.message;
        for (let i in imagesUrl) {
            $(document.createElement('img')).attr('src', imagesUrl[i]).appendTo('#image-container');
        }
    });
}

$('#get-image-button').click(fetchDogImage);