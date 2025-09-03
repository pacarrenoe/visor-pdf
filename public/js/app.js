let ultimoPdf = null;
let actualPdf = null;

const visor = document.getElementById("visor");
const visorAnterior = document.getElementById("visorAnterior");
const visorActual = document.getElementById("visorActual");
const sectionComparacion = document.getElementById("comparison");

document.getElementById("btnVisualizar").addEventListener("click", () => {
    const base64 = document.getElementById("b64input").value.trim();
    if (!base64) {
        alert("Por favor, ingresa un base64 válido.");
        return;
    }

    if (actualPdf) ultimoPdf = actualPdf;
    actualPdf = "data:application/pdf;base64," + base64;

    visor.src = actualPdf;

    document.getElementById("btnDescargar").disabled = false;
    document.getElementById("btnComparar").disabled = !ultimoPdf;
});

document.getElementById("btnDescargar").addEventListener("click", () => {
    if (!actualPdf) return;

    let nombre = prompt("Ingresa el nombre para guardar el PDF:", "documento.pdf");
    if (!nombre) return; // Si cancela, no descarga

    if (!nombre.toLowerCase().endsWith(".pdf")) {
        nombre += ".pdf";
    }

    const a = document.createElement("a");
    a.href = actualPdf;
    a.download = nombre;
    a.click();
});

document.getElementById("btnComparar").addEventListener("click", () => {
    if (!ultimoPdf || !actualPdf) return;
    sectionComparacion.classList.remove("hidden");
    visorAnterior.src = ultimoPdf;
    visorActual.src = actualPdf;
});

document.getElementById("btnCerrarComparacion").addEventListener("click", () => {
    sectionComparacion.classList.add("hidden");
    visorAnterior.src = "";
    visorActual.src = "";
});

