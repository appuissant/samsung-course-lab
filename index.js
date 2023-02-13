var nameValid, emailValid, passwdValid, checkPasswdValid;

function enviar() {
    if (nameValid && emailValid && passwdValid && checkPasswdValid)
        alert("Te has registrado correctamente.");
    else
    {
        validateField(document.getElementById("name"));
        validateField(document.getElementById("email"));
        validateField(document.getElementById("passwd"));
        validateField(document.getElementById("checkedPasswd"));
    }
}

function validateField(field) {
    let img = field.nextElementSibling;
    let msg = field.parentElement.nextElementSibling;

    if (!field.value)
        error(img, msg, "Rellena este campo", field, '');

    else {
        switch (field.id) {
            case "name":
                if (/^[a-zA-Z]*$/.test(field.value)) {
                    success(img, msg, field);
                    nameValid = true;
                }
                else
                {
                    error(img, msg, "Nombre inválido", field, "El nombre no puede contener ningún carácter numérico");
                    nameValid = false;
                }
                break;
            case "email":
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field.value)) {
                    success(img, msg, field);
                    emailValid = true;
                }
                else
                {
                    error(img, msg, "Email inválido", field, "El email debe tener la siguiente estructura: correo@dominio.com");
                    emailValid = false;
                }
                break;
            case "passwd":
                if (field.value.length <= 8)
                {
                    success(img, msg, field);
                    passwdValid = true;
                }
                else
                {
                    error(img, msg, "No debe tener más de 8 carácteres", field, "La contraseña no puede contener más de 8 carácteres alfanuméricos");
                    passwdValid = false;
                }

                validateField(document.getElementById("checkedPasswd"));

                break;
            default:
                if (field.value === document.getElementById("passwd").value) 
                {
                    success(img, msg, field);
                    checkPasswdValid = true;
                }
                else
                {
                    error(img, msg, "Las contraseñas no coinciden", field, "Las dos contraseñas deben coincidir");
                    checkPasswdValid = false;
                }
                break;
        }
    }
}

function error(img, msg, txt, field, title) {
    img.src = "images/error-icon.svg";
    img.style.visibility = "visible";
    img.title = title;
    img.alt = "error";

    msg.innerHTML = txt;
    msg.style.visibility = "visible";

    field.style.border = "3px solid #e6575a";
}

function success(img, msg, field) {
    img.src = "images/success-icon.svg";
    img.style.visibility = "visible";
    img.alt = "success";

    msg.innerHTML = '';
    msg.style.visibility = "hidden";

    field.style.border = "3px solid #26ca6b";
}

