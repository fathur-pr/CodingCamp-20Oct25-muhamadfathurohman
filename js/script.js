console.log("Hello, World!");

//welcomeSpeech();


function welcomeSpeech() {
    ///prompt user for name
    let name = prompt   ("Enter your name:");

    //greet the user with their name
    document.getElementById('greet-name').innerHTML = `Oyy ${name}`;
    }

    function validateForm() {
        //get form values
        const name = document.getElementById('name-input').value;
        const email = document.getElementById('email-input').value;
        const message = document.getElementById('message-input').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields before submitting the form.');
        } else {
            alert(`Makasih ${name}, pesan kamu telah sampai!`);
        }
    }