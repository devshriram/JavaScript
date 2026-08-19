// Fetch all the Breed 
$.get('https://dog.ceo/api/breeds/list/all', function(data){
    for (let i in data.message) {
     var newOption = $('<option>');
     newOption.text(i);
     newOption.val(i);
     $('#breed_selected').append(newOption);
    }

    // Handle the Change in the Dropdown List
    $('#breed_selected').change(function() {
        // Get the Selected Value
        let selectedBreed = $('#breed_selected').val();
        // Get sub-breed array
        let breedArray = data.message[selectedBreed];
        // Remove the existing sub-breed
        $('#dynamicForm').remove();
        // Check if the sub-breed is present or not
        if(breedArray.length==0) {
            return;
        }
        // Make Dropdown List for sub-breed
        let form = $(document.createElement('form')).attr('id', 'dynamicForm');
        let select = $(document.createElement('select')).attr('id', 'dynamicOption').css({
            display: 'inline-block',
            position: 'fixed',
            top: '10vh',
            left: '50vw',
            fontSize: '18px',
            padding: '2px',
            paddingRight: '10px',
        });
        for (let j in breedArray) {
            var latestOption = $('<option>');
            latestOption.text(breedArray[j]);
            latestOption.val(breedArray[j]);
            $(select).append(latestOption);
        };
        form.append(select);
        $('#header').append(form);
    });
}); 
   
   function fetchDogImage() {

    // Get the Selected Breed Value
   var selectedDogBreed = $('#breed_selected').val();

    // Call the API to get selected Breed
    $.get(`https://dog.ceo/api/breed/${selectedDogBreed}/images`, function(data) {
           var imageUrlArray = data.message;
           for (let k in imageUrlArray) {
           var image =  $(document.createElement('img')).attr('src', imageUrlArray[k]);
           $('#image-container').append(image);
           }
    });
   }
   
$('#get-image-button').click(fetchDogImage);
