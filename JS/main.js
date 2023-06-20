let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var address = document.forms["myForm"]["address"].value;

    if (name == "" || email == "" || password == "" || address == ""){
        alert("!! Empty fields found. Please fill all fields !!");
    }
    else {
        alert("!! Thank you for submiting your form !!");
    }
}