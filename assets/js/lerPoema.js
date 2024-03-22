// Lista de páginas disponíveis
const paginas = [
  'arrependimento.html',
  'bunker.html',
  'calabouco.html',
  'janine.html',
  'muaythai.html'
  // Adicione mais páginas conforme necessário
];

var enderecoAtual = window.location.href;

// Função para redirecionar para uma página aleatória
function abrirPaginaAleatoria() {
  const paginaAleatoria = paginas[Math.floor(Math.random() * paginas.length)];
  if(enderecoAtual === "https://igjunio.github.io/poetaBento/"){
    window.location.href = `poesia/${paginaAleatoria}`;
  }else if (enderecoAtual === "https://igjunio.github.io/poetaBento/index.html"){
    window.location.href = `poesia/${paginaAleatoria}`;
  }else if (enderecoAtual === "https://igjunio.github.io/poetaBento/#"){
    window.location.href = `poesia/${paginaAleatoria}`;
  }else if (enderecoAtual === "https://igjunio.github.io/poetaBento"){
    window.location.href = `poesia/${paginaAleatoria}`;
  }else{
    window.location.href = `${paginaAleatoria}`;
  }
}

// Event listener para o botão
document.getElementById('btnPaginaAleatoria').addEventListener('click', abrirPaginaAleatoria);
