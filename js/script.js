function handleGetFormData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;

    return { name, email, city, zipCode, status };
}

function isNumber(input) {
    return !isNaN(input);
}

function checkboxIsChecked() {
    return document.getElementById("status").checked;
}

function validateFormData(formData) {
    if (
        formData &&
        isNumber(formData.zipCode) &&
        checkboxIsChecked()
    ) {
        return true;
    }
    return false;
}

function submit() {
    const formData = handleGetFormData();
    console.log(formData);
    if (!validateFormData(formData)) {
        document.getElementById("warning").innerText =
            "Periksa form anda sekali lagi";
    } else {
        document.getElementById("warning").innerText = "";
    }
}
document.getElementById("submit-form").addEventListener("click", function(e) {
    e.preventDefault();
    submit();
});