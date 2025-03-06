document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("life-form");
    const resultDiv = document.getElementById("result");
    const resultText = document.getElementById("result-text");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que la página se recargue

        // Capturamos las respuestas del usuario
        const epoca = document.getElementById("epoca").value;
        const habilidad = document.getElementById("habilidad").value;
        const trabajo = document.getElementById("trabajo").value;
        const lugar = document.getElementById("lugar").value;

        // Generamos la historia personalizada
        let historia = `En otra vida, naciste en ${epoca}. Desde joven, desarrollaste una gran habilidad en ${habilidad}, 
        lo que te llevó a convertirte en ${trabajo}. Tu vida transcurre en ${lugar}, donde vives experiencias únicas y apasionantes.`;

        // Mostramos el resultado con animación
        resultText.textContent = historia;
        resultDiv.classList.add("show");
    });
});
