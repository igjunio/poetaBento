// Lista de páginas disponíveis
const paginas = [
  'arrependimento',
  'bunker',
  'calabouco',
  'janine',
  'muaythai',
  'barracao',
  'reforma',
  'musica'
  // Adicione mais páginas conforme necessário
]; 

// Função para redirecionar para uma página aleatória
function abrirPaginaAleatoria() {
  const paginaAleatoria = paginas[Math.floor(Math.random() * paginas.length)];
  if ((enderecoAtual === "https://igjunio.github.io/poetaBento/") || (enderecoAtual === "https://igjunio.github.io/poetaBento/index.html") || (enderecoAtual === "https://igjunio.github.io/poetaBento/#") || (enderecoAtual === "https://igjunio.github.io/poetaBento")) {
    window.location.href = `poesia/${paginaAleatoria}`;
  } else {
    window.location.href = `${paginaAleatoria}`;
  }
}

// Event listener para o botão
document.getElementById('btnPaginaAleatoria').addEventListener('click', abrirPaginaAleatoria);
