const form = document.getElementById("form");
const popup = document.querySelector(".popup");

window.onload = () => {
    form.addEventListener('submit',  (e) => {
        e.preventDefault();
        const email = document.getElementById('email');
        const emailAlert = document.querySelector('.email-alert');
        emailAlert.textContent = "";
        if(email.value == ""){
            emailAlert.textContent = "ce champ ne peut pas etre vide";
        }
        else{
            popup.style.display = "block";
        }
    })
}