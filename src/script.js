function generar() {
  const base = document.getElementById("base").value || "user";
  const numero = Math.floor(Math.random() * 1000);
  const username = `${base}_${numero}`;
  document.getElementById("resultado").textContent = username;
}
