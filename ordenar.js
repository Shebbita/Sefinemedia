document.addEventListener("DOMContentLoaded", function () {
  const lista = document.querySelector(".video-list");

  if (!lista) return; // Si no existe, no hace nada

  const items = Array.from(lista.querySelectorAll("li"));

  items.sort((a, b) =>
    a.textContent.trim().localeCompare(b.textContent.trim(), "es", { sensitivity: "base" })
  );

  lista.innerHTML = "";
  items.forEach(item => lista.appendChild(item));
});
