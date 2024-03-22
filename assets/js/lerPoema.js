// Lista de páginas disponíveis
const paginas = [
  'arrependimento.html',
  'bunker.html',
  'calabouco.html',
  'janine.html',
  'muaythai.html'
  // Adicione mais páginas conforme necessário
];

// Função para redirecionar para uma página aleatória
function abrirPaginaAleatoria() {
  const paginaAleatoria = paginas[Math.floor(Math.random() * paginas.length)];
  window.location.href = `igjunio.github.io/poetaBento/poesia/${paginaAleatoria}`;
}

// Event listener para o botão
document.getElementById('btnPaginaAleatoria').addEventListener('click', abrirPaginaAleatoria);
