// Lista de páginas disponíveis
const paginas = [
  'calabouco',
  'janine',
  'barracao',
  'eu',
  'like',
  'brasilidade',
  'redencao',
  'inexoravel',
  'momentos',
  'enlace',
  'baila',
  'liberdade',
  'rodizio'
  // Adicione mais páginas conforme necessário
]; 

var enderecoAtual = window.location.href;

// Função para redirecionar para uma página aleatória
function abrirPaginaAleatoria() {
  const paginaAleatoria = paginas[Math.floor(Math.random() * paginas.length)];
  if (enderecoAtual === "https://poetabento.com.br/") {
    window.location.href = `poesia/${paginaAleatoria}`;
  } else if (enderecoAtual === "https://poetabento.com.br/index.html") {
    window.location.href = `poesia/${paginaAleatoria}`
  } else if (enderecoAtual === "https://poetabento.com.br/#") {
    window.location.href = `poesia/${paginaAleatoria}`
  } else if (enderecoAtual === "https://poetabento.com.br") {
    window.location.href = `poesia/${paginaAleatoria}`
  } else {
    window.location.href = `${paginaAleatoria}`;
  }
}

// Event listener para o botão
document.getElementById('btnPaginaAleatoria').addEventListener('click', abrirPaginaAleatoria);
