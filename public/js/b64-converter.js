document.addEventListener("DOMContentLoaded", () => {
    const imageInput = document.getElementById("imageInput");
    const output = document.getElementById("b64Output");

    if (!imageInput) return;

    imageInput.addEventListener("change", () => {
        const file = imageInput.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            output.value = reader.result; // El string base64
        };
        reader.readAsDataURL(file);
    });
});
