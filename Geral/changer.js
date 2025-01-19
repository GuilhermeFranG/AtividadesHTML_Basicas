// Obter o elemento select
const pageSelector = document.getElementById("pageSelector");


// Adicionar um evento de mudança
pageSelector.addEventListener("change", function () {
    const selectedValue = pageSelector.value;

    if (selectedValue) {
        // Redirecionar para a URL
        window.open(selectedValue, "_blank");
    }
});