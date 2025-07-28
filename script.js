function gerarSite() {
  const nome = document.getElementById("nomeLoja").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const produtosTexto = document.getElementById("produtos").value;
  const produtos = produtosTexto.split('\n').map(item => `<li>${item}</li>`).join('');
  const linkWhats = `https://wa.me/55${whatsapp}?text=Olá,+quero+saber+mais+sobre+seus+produtos`;

  const html = `
    <h2>${nome}</h2>
    <p><strong>WhatsApp:</strong> <a href="${linkWhats}" target="_blank">${linkWhats}</a></p>
    <h3>Produtos disponíveis:</h3>
    <ul>${produtos}</ul>
    <a href="${linkWhats}" target="_blank">
      <button>Falar no WhatsApp</button>
    </a>
  `;

  document.getElementById("resultado").innerHTML = html;
}
