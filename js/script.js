function enviarOrcamento() {
  const numero = '5599999999999'; 
  const mensagem = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
  const url = `https://wa.me/${numero}?text=${mensagem}`;
  window.open(url, '_blank');
}

const indices = {
  fundacao: 0,
  construcao: 0,
  acabamento: 0
};

/* Galeria - Carrossel*/
function moverCarrossel(departamento, direcao) {
  const carrossel = document.getElementById(`carrossel-${departamento}`);
  const total = carrossel.children.length;
  indices[departamento] = (indices[departamento] + direcao + total) % total;
  const offset = indices[departamento] * carrossel.children[0].offsetWidth;
  carrossel.scrollTo({ left: offset, behavior: 'smooth' });
}
