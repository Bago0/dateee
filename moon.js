function openModal() {
    setTimeout(function () {
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
    }, 500);
}

// function moveButton() {
//     var button = document.getElementById('movingButton');
//     button.style.right = '-50px'; // Reset position

//     setTimeout(function () {
//         button.style.rigth = '-100%'; // Move the button to the left
//     }, 100);
// }