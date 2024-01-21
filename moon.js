

function moveButton() {
    var button = document.createElement('button');
    button.className = 'moving-button btn btn-primary ';
    button.innerHTML = 'არააა თქო!!!!';
    document.body.appendChild(button);

    var x = Math.random() * (window.innerWidth - button.offsetWidth);
    var y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.right = x + 'px';
    button.style.top = y + 'px';

    setTimeout(function () {
        button.style.opacity = '0'; // Hide the button
    }, 200); // Change the time as needed

    setTimeout(function () {
        button.remove(); // Remove the button from the DOM
    }, 200); // Change the time as needed

    setTimeout(function () {
        var secondModal = new bootstrap.Modal(document.getElementById('secondModal'));
        secondModal.show();
    }, 5000);   
    
    setInterval(moveButton, 1500);
    
}

function refreshButton(){
    window.location.reload();
}

function openModal() {
    setTimeout(function () {
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
    }, 500);
}


$('.kvirisdge').on('click', function (event) {
    event.preventDefault();

    const $myData = $(this).attr("date");

    // Save data to Supabase
    saveToSupabase($myData);

    // Apply glow and grow effect
    const moonImage = $('#moon' + $myData);
    moonImage.addClass('glow');
    setTimeout(() => {
        moonImage.css('transform', 'scale(5.5)'); // Adjust the scale factor as needed
        setTimeout(() => {
            $('#page-overlay').fadeIn(500);
        }, 500);
    }, 500);

    // Simulate waiting for a message
    setTimeout(() => {
        $('#page-overlay').fadeOut(500);
        // Reset the moon image styles
        moonImage.removeClass('glow').css('transform', 'scale(1)');
    }, 5000); // Adjust the delay as needed
});

function saveToSupabase(date) {
   

    supabase
        .from('datefor')
        .upsert([
            {
                date:date, // Convert the date to JavaScript Date object
                // Add other relevant data here
            },
        ])
        .then(response => {
            console.log('Data saved to Supabase:', response);
        })
        .catch(error => {
            console.error('Error saving data to Supabase:', error);
        });
}
// function moveButton() {
//     var button = document.getElementById('movingButton');
//     button.style.right = '-50px'; // Reset position

//     setTimeout(function () {
//         button.style.rigth = '-100%'; // Move the button to the left
//     }, 100);
// }